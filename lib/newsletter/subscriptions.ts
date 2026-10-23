import { randomBytes } from "node:crypto";
import { normalizeLocale, type Locale } from "@/lib/i18n";
import { classifyLegacySource } from "./policy";
import type { NewsletterSql, NewsletterTransaction } from "./database";
import type { NewsletterChannel, RenderedNewsletterEmail } from "./types";

export const NEWSLETTER_CONSENT_VERSION_V2 = "newsletter-channels-confirmed-v2";
const token = () => randomBytes(32).toString("hex");
const confirmationDuration = 48 * 60 * 60_000;
type Scope = NewsletterChannel | "choose";
interface Contact { id: string; email: string; status: string; locale: string; source_path: string | null; suppressed_at: Date | null; created_at: Date }
interface Confirmation { id: string; subscriber_id: string; scope: Scope; locale: Locale; token: string; origin: "signup" | "migration"; expires_at: Date; used_at: Date | null; invalidated_at: Date | null; created_at: Date }
interface Subscription { id: string; subscriber_id: string; channel: NewsletterChannel; locale: Locale; status: string; unsubscribe_token: string }
interface SubscriptionOptions {
  origin: string;
  renderConfirmation: (input: { channel: Scope; locale: Locale; confirmUrl: string }) => RenderedNewsletterEmail;
}
export type SubscribeOutcome = { status: "pending_confirmation" | "already_subscribed" | "rate_limited" | "suppressed"; deliveryId?: string };

export class NewsletterSubscriptions {
  constructor(private readonly sql: NewsletterSql, private readonly options: SubscriptionOptions) {}

  private async enqueueConfirmation(tx: NewsletterTransaction, contact: Contact, scope: Scope, locale: Locale, now: Date, origin: "signup" | "migration") {
    const confirmationToken = token();
    const [confirmation] = await tx<Confirmation[]>`
      insert into newsletter_confirmations (subscriber_id,scope,locale,token,origin,expires_at,created_at)
      values (${contact.id},${scope},${locale},${confirmationToken},${origin},${new Date(now.getTime() + confirmationDuration)},${now}) returning *`;
    const confirmUrl = `${this.options.origin}/api/newsletter/confirm?token=${encodeURIComponent(confirmationToken)}`;
    const payload = this.options.renderConfirmation({ channel: scope, locale, confirmUrl });
    const [delivery] = await tx<{ id: string }[]>`
      insert into newsletter_deliveries (subscriber_id,confirmation_id,channel,locale,kind,logical_key,payload,next_attempt_at,created_at)
      values (${contact.id},${confirmation.id},${scope === "choose" ? null : scope},${locale},${origin === "migration" ? "migration" : "confirmation"},
        ${origin === "migration" ? `migration:${contact.id}` : `confirmation:${confirmation.id}`},${tx.json({ ...payload })},${now},${now}) returning id`;
    return delivery.id;
  }

  async subscribe(input: { email: string; channel: NewsletterChannel; locale: Locale; sourcePath?: string; now?: Date }): Promise<SubscribeOutcome> {
    const now = input.now ?? new Date();
    const email = input.email.trim().toLowerCase();
    return this.sql.begin(async (tx) => {
      await tx`insert into newsletter_subscribers (email,locale,status,source_path,consent_version,unsubscribe_token,newsletter_migrated_at)
        values (${email},${input.locale},'active',${input.sourcePath?.slice(0, 300) ?? null},${NEWSLETTER_CONSENT_VERSION_V2},${token()},${now})
        on conflict (email) do nothing`;
      const [contact] = await tx<Contact[]>`select * from newsletter_subscribers where email=${email} for update`;
      if (contact.suppressed_at || contact.status === "bounced") return { status: "suppressed" as const };
      const [existing] = await tx<Subscription[]>`select * from newsletter_subscriptions where subscriber_id=${contact.id} and channel=${input.channel}`;
      if (existing?.status === "active" && existing.locale === input.locale) return { status: "already_subscribed" as const };
      const [pending] = await tx<(Confirmation & { delivery_id: string; delivery_status: string })[]>`
        select c.*,d.id as delivery_id,d.status as delivery_status from newsletter_confirmations c
        join newsletter_deliveries d on d.confirmation_id=c.id
        where c.subscriber_id=${contact.id} and c.scope=${input.channel} and c.locale=${input.locale}
          and c.used_at is null and c.invalidated_at is null and c.expires_at>${now}
          and d.status not in ('failed','cancelled','bounced','complained','suppressed')
        order by c.created_at desc limit 1`;
      if (pending) return { status: "pending_confirmation" as const, deliveryId: pending.delivery_id };
      const [rate] = await tx<{ count: number; recent: boolean }[]>`
        select count(*)::int as count, coalesce(bool_or(scope=${input.channel} and created_at>${new Date(now.getTime() - 60_000)}),false) as recent
        from newsletter_confirmations where subscriber_id=${contact.id} and created_at>${new Date(now.getTime() - 3600_000)}`;
      if (rate.count >= 5 || rate.recent) return { status: "rate_limited" as const };
      await tx`update newsletter_confirmations set invalidated_at=${now} where subscriber_id=${contact.id} and scope=${input.channel} and used_at is null and invalidated_at is null`;
      await tx`update newsletter_deliveries set status=case when had_ambiguous_attempt then 'unknown' else 'cancelled' end,updated_at=${now} where subscriber_id=${contact.id} and channel=${input.channel}
        and kind in ('confirmation','migration') and status='queued'`;
      await tx`insert into newsletter_subscriptions (subscriber_id,channel,locale,status,consent_version,consent_source,unsubscribe_token,created_at,updated_at)
        values (${contact.id},${input.channel},${input.locale},'pending',${NEWSLETTER_CONSENT_VERSION_V2},'pending',${token()},${now},${now})
        on conflict (subscriber_id,channel) do nothing`;
      return { status: "pending_confirmation" as const, deliveryId: await this.enqueueConfirmation(tx, contact, input.channel, input.locale, now, "signup") };
    });
  }

  async inspectConfirmation(value: string, now = new Date()) {
    const [confirmation] = await this.sql<Confirmation[]>`select * from newsletter_confirmations where token=${value} limit 1`;
    if (!confirmation || confirmation.invalidated_at) return { status: "invalid" as const };
    const info = { locale: normalizeLocale(confirmation.locale), scope: confirmation.scope };
    if (confirmation.used_at) return { status: "already_confirmed" as const, ...info };
    if (new Date(confirmation.expires_at).getTime() <= now.getTime()) return { status: "expired" as const, ...info };
    return { status: "pending" as const, ...info };
  }

  async confirm(value: string, selection?: NewsletterChannel[], now = new Date()) {
    return this.sql.begin(async (tx) => {
      // Always lock contact before child rows, including confirm/unsubscribe/worker paths.
      const [lookup] = await tx<Confirmation[]>`select * from newsletter_confirmations where token=${value}`;
      if (!lookup) return { status: "invalid" as const };
      const [contact] = await tx<Contact[]>`select * from newsletter_subscribers where id=${lookup.subscriber_id} for update`;
      const [confirmation] = await tx<Confirmation[]>`select * from newsletter_confirmations where id=${lookup.id} for update`;
      const info = { locale: normalizeLocale(confirmation.locale), scope: confirmation.scope };
      if (confirmation.invalidated_at || contact.suppressed_at || contact.status === "bounced") return { status: "invalid" as const, ...info };
      if (confirmation.used_at) return { status: "already_confirmed" as const, ...info };
      if (new Date(confirmation.expires_at).getTime() <= now.getTime()) return { status: "expired" as const, ...info };
      const channels = confirmation.scope === "choose" ? [...new Set(selection ?? [])].filter((channel) => channel === "news" || channel === "academy") : [confirmation.scope];
      if (!channels.length) return { status: "choose_required" as const, ...info };
      for (const channel of channels) {
        await tx`insert into newsletter_subscriptions (subscriber_id,channel,locale,status,activated_at,confirmed_at,consent_version,consent_source,legacy_origin,unsubscribe_token,created_at,updated_at)
          values (${contact.id},${channel},${confirmation.locale},'active',${now},${now},${NEWSLETTER_CONSENT_VERSION_V2},'confirmed',${confirmation.origin === "migration"},${token()},${now},${now})
          on conflict (subscriber_id,channel) do update set locale=excluded.locale,status='active',confirmed_at=excluded.confirmed_at,
            activated_at=case when newsletter_subscriptions.status='active' then newsletter_subscriptions.activated_at else excluded.activated_at end,
            consent_source='confirmed',consent_version=excluded.consent_version,updated_at=excluded.updated_at`;
        // Pending digest snapshots carry the old language/consent and must not be sent after a change.
        await tx`update newsletter_deliveries set status=case when had_ambiguous_attempt then 'unknown' else 'cancelled' end,updated_at=${now} where subscriber_id=${contact.id} and channel=${channel} and kind='digest' and locale<>${confirmation.locale} and status='queued'`;
      }
      await tx`update newsletter_confirmations set used_at=${now} where id=${confirmation.id}`;
      await tx`update newsletter_deliveries set status=case when had_ambiguous_attempt then 'unknown' else 'cancelled' end,updated_at=${now} where confirmation_id=${confirmation.id} and status='queued'`;
      return { status: "confirmed" as const, ...info, channels };
    });
  }

  async inspectUnsubscribe(value: string) {
    const [subscription] = await this.sql<Subscription[]>`select * from newsletter_subscriptions where unsubscribe_token=${value}`;
    if (subscription) return { status: "found" as const, locale: normalizeLocale(subscription.locale), channels: [subscription.channel] };
    const [contact] = await this.sql<Contact[]>`select * from newsletter_subscribers where unsubscribe_token=${value} and newsletter_migrated_at is not null`;
    if (!contact) return { status: "not_found" as const };
    const rows = await this.sql<Subscription[]>`select * from newsletter_subscriptions where subscriber_id=${contact.id} and legacy_origin`;
    return { status: "found" as const, locale: normalizeLocale(contact.locale), channels: rows.map((row) => row.channel) };
  }

  async unsubscribe(value: string, now = new Date()) {
    return this.sql.begin(async (tx) => {
      const [subscription] = await tx<Subscription[]>`select * from newsletter_subscriptions where unsubscribe_token=${value}`;
      const [contact] = subscription
        ? await tx<Contact[]>`select * from newsletter_subscribers where id=${subscription.subscriber_id} for update`
        : await tx<Contact[]>`select * from newsletter_subscribers where unsubscribe_token=${value} and newsletter_migrated_at is not null for update`;
      if (!contact) return { status: "not_found" as const };
      const targets = subscription ? [subscription] : await tx<Subscription[]>`select * from newsletter_subscriptions where subscriber_id=${contact.id} and legacy_origin`;
      const channels = targets.map((target) => target.channel);
      for (const target of targets) {
        await tx`update newsletter_subscriptions set status='unsubscribed',updated_at=${now} where id=${target.id}`;
        await tx`update newsletter_confirmations set invalidated_at=${now} where subscriber_id=${contact.id} and scope=${target.channel} and used_at is null`;
        await tx`update newsletter_deliveries set status=case when had_ambiguous_attempt then 'unknown' else 'cancelled' end,updated_at=${now} where subscriber_id=${contact.id} and channel=${target.channel} and status='queued'`;
      }
      if (!subscription) {
        await tx`update newsletter_confirmations set invalidated_at=${now} where subscriber_id=${contact.id} and origin='migration' and used_at is null`;
        await tx`update newsletter_deliveries set status=case when had_ambiguous_attempt then 'unknown' else 'cancelled' end,updated_at=${now} where subscriber_id=${contact.id} and kind='migration' and status='queued'`;
      }
      return { status: "unsubscribed" as const, locale: normalizeLocale(subscription?.locale ?? contact.locale), channels };
    });
  }

  async migrateLegacy({ dryRun, now = new Date() }: { dryRun: boolean; now?: Date }) {
    const contacts = await this.sql<Contact[]>`select * from newsletter_subscribers where newsletter_migrated_at is null order by id`;
    const groups = { news: 0, academy: 0, unknown: 0, stopped: 0 };
    for (const contact of contacts) {
      const source = classifyLegacySource(contact.source_path);
      groups[contact.status === "active" ? source : "stopped"]++;
      if (dryRun) continue;
      await this.sql.begin(async (tx) => {
        const [locked] = await tx<(Contact & { newsletter_migrated_at: Date | null })[]>`select * from newsletter_subscribers where id=${contact.id} for update`;
        if (locked.newsletter_migrated_at) return;
        if (source !== "unknown") {
          const active = locked.status === "active" && source === "news" && !locked.suppressed_at;
          const status = active ? "active" : locked.status === "active" ? "pending" : "unsubscribed";
          await tx`insert into newsletter_subscriptions (subscriber_id,channel,locale,status,activated_at,consent_version,consent_source,legacy_origin,unsubscribe_token,created_at,updated_at)
            values (${locked.id},${source},${normalizeLocale(locked.locale)},${status},${active ? locked.created_at : null},'research-news-daily-v1',${active ? "legacy" : "pending"},true,${token()},${locked.created_at},${now})
            on conflict (subscriber_id,channel) do nothing`;
        }
        if (locked.status === "bounced") await tx`update newsletter_subscribers set suppressed_at=coalesce(suppressed_at,${now}),suppression_reason=coalesce(suppression_reason,'legacy_bounce') where id=${locked.id}`;
        if (locked.status === "active" && !locked.suppressed_at && source !== "news") {
          await this.enqueueConfirmation(tx, locked, source === "academy" ? "academy" : "choose", normalizeLocale(locked.locale), now, "migration");
        }
        await tx`update newsletter_subscribers set newsletter_migrated_at=${now} where id=${locked.id}`;
      });
    }
    return { count: contacts.length, groups, dryRun };
  }
}
