import type { Locale } from "@/lib/i18n";
import { loadNewsletterFeed } from "./content";
import { hongKongDate, type NewsletterFeedEntry } from "./policy";
import type { createNewsletterRuntime } from "./service";
import { renderNewsletterDigest } from "./templates";
import type { NewsletterChannel } from "./types";

type Runtime = ReturnType<typeof createNewsletterRuntime>;
interface Recipient {
  id: string; subscriber_id: string; channel: NewsletterChannel; locale: Locale; unsubscribe_token: string;
}
interface AcceptanceOptions {
  now?: Date;
  dryRun?: boolean;
  loadFeed?: (channel: NewsletterChannel) => Promise<NewsletterFeedEntry[]>;
}

/** Explicit Preview evidence using existing reviewed content; this never creates a scheduled run. */
export async function queueAcceptanceDigests(runtime: Runtime, options: AcceptanceOptions = {}) {
  if (runtime.config.mode !== "test") throw new Error("newsletter_acceptance_test_mode_required");
  if (process.env.VERCEL_ENV === "production" || ["aied.hk", "www.aied.hk"].includes(new URL(runtime.config.origin).hostname)) {
    throw new Error("newsletter_acceptance_preview_required");
  }
  if (!await runtime.planner.isInitialized()) throw new Error("newsletter_baseline_required");
  const now = options.now ?? new Date();
  const dryRun = options.dryRun ?? false;
  const loadFeed = options.loadFeed ?? loadNewsletterFeed;
  const channels = {
    news: { confirmed: 0, held: 0, alreadyQueued: 0, queued: 0, existingStatuses: {} as Record<string, number> },
    academy: { confirmed: 0, held: 0, alreadyQueued: 0, queued: 0, existingStatuses: {} as Record<string, number> },
  };
  // Finish both source reads before any catalog write. Source failure must not turn into a partial sample.
  const feeds = { news: await loadFeed("news"), academy: await loadFeed("academy") };
  for (const channel of ["news", "academy"] as const) {
    if (feeds[channel].some((entry) => entry.channel !== channel) || new Set(feeds[channel].map((entry) => entry.key)).size !== feeds[channel].length) {
      throw new Error("invalid_newsletter_catalog");
    }
  }
  const byOrder = (a: NewsletterFeedEntry, b: NewsletterFeedEntry) => a.order - b.order || a.key.localeCompare(b.key);
  const complete = (entry: NewsletterFeedEntry, count: number) => entry.items.en?.length === count
    && Object.values(entry.items).every((items) => items?.length === count);
  const selected = {
    news: feeds.news.filter((entry) => complete(entry, 1)).sort(byOrder).slice(0, 5),
    academy: feeds.academy.filter((entry) => complete(entry, 2)).sort(byOrder).slice(0, 1),
  };
  if (selected.news.length !== 5 || selected.academy.length !== 1) throw new Error("newsletter_acceptance_content_incomplete");
  const recipients = await runtime.sql<Recipient[]>`select n.id,n.subscriber_id,n.channel,n.locale,n.unsubscribe_token
    from newsletter_subscriptions n join newsletter_subscribers s on s.id=n.subscriber_id
    where n.status='active' and n.consent_source='confirmed' and n.confirmed_at<=${now} and n.activated_at<=${now}
      and s.suppressed_at is null and s.status<>'bounced' and s.email=any(${runtime.config.testRecipients}::text[])
    order by n.subscriber_id,n.id`;
  for (const recipient of recipients) channels[recipient.channel].confirmed++;
  if (!dryRun && recipients.length) {
    // Operators bind this runtime to the verified isolated Preview DB; the guards above also reject production origins/mode.
    for (const channel of ["news", "academy"] as const) await runtime.planner.refreshCatalog(channel, feeds[channel], now);
  }
  let eligible = 0;
  const deliveryIds: string[] = [];
  await runtime.sql.begin(async (tx) => {
    for (const recipient of recipients) {
      if (!dryRun) {
        // Match the consent/worker lock order and recheck enrollment after taking the contact lock.
        const [current] = await tx`select s.id from newsletter_subscribers s
          join newsletter_subscriptions n on n.subscriber_id=s.id
          where n.id=${recipient.id} and n.status='active' and n.locale=${recipient.locale}
            and n.consent_source='confirmed' and n.confirmed_at<=${now} and n.activated_at<=${now}
            and s.suppressed_at is null and s.status<>'bounced' and s.email=any(${runtime.config.testRecipients}::text[])
          for update of s`;
        if (!current) continue;
      }
      const logicalKey = `acceptance:${hongKongDate(now)}:${recipient.channel}:${recipient.id}`;
      const [existing] = await tx<{ status: string }[]>`select status from newsletter_deliveries where logical_key=${logicalKey}`;
      if (existing) {
        const channel = channels[recipient.channel];
        channel.alreadyQueued++;
        channel.existingStatuses[existing.status] = (channel.existingStatuses[existing.status] ?? 0) + 1;
      }
      const [hold] = await tx`select id from newsletter_deliveries where subscription_id=${recipient.id} and kind='digest'
        and (status in ('queued','sending','unknown') or (status='cancelled' and had_ambiguous_attempt)) limit 1`;
      if (hold) { channels[recipient.channel].held++; continue; }
      if (existing) continue;
      eligible++;
      if (dryRun) continue;
      const entries = selected[recipient.channel];
      const payload = renderNewsletterDigest({ channel: recipient.channel, locale: recipient.locale,
        items: entries.flatMap((entry) => entry.items[recipient.locale] ?? entry.items.en ?? []),
        siteUrl: runtime.config.origin,
        unsubscribeUrl: `${runtime.config.origin}/api/newsletter/unsubscribe?token=${encodeURIComponent(recipient.unsubscribe_token)}` });
      payload.subject = `[AIEDHK Preview] ${payload.subject}`;
      const inserted = await tx<{ id: string }[]>`insert into newsletter_deliveries
        (subscriber_id,subscription_id,channel,locale,kind,logical_key,payload,content_keys,academy_cycle,next_attempt_at,created_at)
        values(${recipient.subscriber_id},${recipient.id},${recipient.channel},${recipient.locale},'digest',${logicalKey},
          ${tx.json({ ...payload })},${entries.map((entry) => entry.key)}::text[],${recipient.channel === "academy" ? 1 : null},${now},${now})
        on conflict(logical_key) do nothing returning id`;
      channels[recipient.channel].queued += inserted.length;
      deliveryIds.push(...inserted.map((row) => row.id));
    }
  });
  const incompleteExisting = Object.values(channels).reduce((sum, channel) => sum + Object.entries(channel.existingStatuses)
    .reduce((count, [status, total]) => count + (["accepted", "delivered"].includes(status) ? 0 : total), 0), 0);
  return { status: dryRun ? "dry_run" : "queued", queued: deliveryIds.length, eligible, channels, deliveryIds, incompleteExisting,
    missingConfirmedChannels: (["news", "academy"] as const).filter((channel) => channels[channel].confirmed === 0) };
}
