import type { Locale } from "@/lib/i18n";
import { databaseJson, type NewsletterSql, type NewsletterTransaction } from "./database";
import { hongKongDate, selectAcademyPair, selectNewsItems, type CatalogEntry, type NewsletterFeedEntry } from "./policy";
import { renderNewsletterDigest } from "./templates";
import type { NewsletterChannel, RenderedNewsletterEmail } from "./types";

export interface DeliveryPolicy { mode: "test" | "live"; testRecipients: readonly string[] }
interface CatalogRow { channel: NewsletterChannel; content_key: string; first_seen_at: Date; baseline: boolean; sort_order: number; items: CatalogEntry["items"] }
interface Run { id: string; channel: NewsletterChannel; catalog: CatalogEntry[]; cutoff_at: Date; delivery_date: Date; mode: "test" | "live"; status: string; subscriber_cursor: string | null }
interface Recipient { id: string; subscriber_id: string; locale: Locale; activated_at: Date; unsubscribe_token: string }
interface History { subscription_id: string; run_id: string | null; content_keys: string[]; academy_cycle: number | null; status: string; accepted_at: Date | null }

function choose(catalog: CatalogEntry[], recipient: Recipient, history: History[], channel: NewsletterChannel, cutoff: Date) {
  if (channel === "news") {
    const selected = selectNewsItems(catalog, new Date(recipient.activated_at), new Set(history.flatMap((sent) => sent.content_keys)), cutoff);
    return selected.length ? { entries: selected, cycle: null, review: false } : null;
  }
  const selected = selectAcademyPair(catalog, history.flatMap((sent) => sent.content_keys.map((key) => ({ key, cycle: sent.academy_cycle ?? 1 }))));
  return selected ? { entries: [selected.entry], cycle: selected.cycle, review: selected.review } : null;
}

export class NewsletterPlanner {
  constructor(private readonly sql: NewsletterSql, private readonly origin: string) {}

  private async writeCatalog(tx: NewsletterTransaction, channel: NewsletterChannel, entries: NewsletterFeedEntry[], now: Date, baseline: boolean) {
    if (entries.some((entry) => entry.channel !== channel) || new Set(entries.map((entry) => entry.key)).size !== entries.length) throw new Error("invalid_newsletter_catalog");
    await tx`update newsletter_content set available=false,updated_at=${now} where channel=${channel}`;
    if (!entries.length) return;
    const records = entries.map((entry) => ({ content_key: entry.key, sort_order: entry.order, items: entry.items }));
    await tx`insert into newsletter_content (channel,content_key,first_seen_at,baseline,sort_order,items,updated_at)
      select ${channel},r.content_key,${now},${baseline},r.sort_order,r.items,${now}
      from jsonb_to_recordset(${tx.json(databaseJson(records))}) as r(content_key text,sort_order integer,items jsonb)
      on conflict (channel,content_key) do update set sort_order=excluded.sort_order,items=excluded.items,available=true,updated_at=excluded.updated_at`;
  }

  async isInitialized() {
    const rows = await this.sql`select singleton from newsletter_state`;
    return rows.length > 0;
  }

  async initializeBaseline(entries: NewsletterFeedEntry[], now = new Date()) {
    return this.sql.begin(async (tx) => {
      const inserted = await tx`insert into newsletter_state (baseline_at) values (${now}) on conflict (singleton) do nothing returning singleton`;
      if (!inserted.length) return { initialized: false, alreadyInitialized: true };
      for (const channel of ["news", "academy"] as const) await this.writeCatalog(tx, channel, entries.filter((entry) => entry.channel === channel), now, true);
      return { initialized: true, alreadyInitialized: false };
    });
  }

  async refreshCatalog(channel: NewsletterChannel, entries: NewsletterFeedEntry[], now = new Date()) {
    return this.sql.begin(async (tx) => {
      const initialized = await tx`select singleton from newsletter_state for update`;
      if (!initialized.length) throw new Error("newsletter_baseline_required");
      await this.writeCatalog(tx, channel, entries, now, false);
    });
  }

  async readCatalog(channel: NewsletterChannel): Promise<CatalogEntry[]> {
    const rows = await this.sql<CatalogRow[]>`select * from newsletter_content where channel=${channel} and available order by sort_order,content_key`;
    return rows.map((row) => ({ key: row.content_key, channel: row.channel, firstSeenAt: new Date(row.first_seen_at).toISOString(), baseline: row.baseline, order: row.sort_order, items: row.items }));
  }

  async refreshAvailability(channel: NewsletterChannel, keys: string[], now = new Date()) {
    await this.sql`update newsletter_content set available=(content_key=any(${keys}::text[])),updated_at=${now}
      where channel=${channel} and available is distinct from (content_key=any(${keys}::text[]))`;
  }

  async ensureRun(channel: NewsletterChannel, now: Date, mode: DeliveryPolicy["mode"]): Promise<Run> {
    if (!await this.isInitialized()) throw new Error("newsletter_baseline_required");
    const catalog = await this.readCatalog(channel);
    const [run] = await this.sql<Run[]>`insert into newsletter_runs (channel,delivery_date,cutoff_at,catalog,mode,created_at)
      values (${channel},${hongKongDate(now)},${now},${this.sql.json(databaseJson(catalog))},${mode},${now})
      on conflict (channel,delivery_date,mode) do update set delivery_date=excluded.delivery_date returning *`;
    return run;
  }

  private async recipients(sql: NewsletterSql | NewsletterTransaction, channel: NewsletterChannel, cutoff: Date, cursor: string | null, policy: DeliveryPolicy, limit: number) {
    return sql<Recipient[]>`select n.id,n.subscriber_id,n.locale,n.activated_at,n.unsubscribe_token
      from newsletter_subscriptions n join newsletter_subscribers s on s.id=n.subscriber_id
      where n.channel=${channel} and n.status='active' and n.activated_at<=${cutoff}
        and s.suppressed_at is null and s.status<>'bounced'
        and (${cursor}::uuid is null or n.id>${cursor}::uuid)
        and (${policy.mode === "live"} or s.email=any(${[...policy.testRecipients]}::text[]))
      order by n.id limit ${limit}`;
  }

  private async history(sql: NewsletterSql | NewsletterTransaction, ids: string[]) {
    if (!ids.length) return [];
    return sql<History[]>`select subscription_id,run_id,content_keys,academy_cycle,
        case when status='cancelled' and had_ambiguous_attempt then 'unknown' else status end as status,accepted_at from newsletter_deliveries
      where subscription_id=any(${ids}::uuid[]) and kind='digest'
        and (status in ('queued','sending','unknown','accepted','delivered','delayed') or (status='cancelled' and had_ambiguous_attempt))`;
  }

  async planPage(runId: string, policy: DeliveryPolicy, limit = 100) {
    return this.sql.begin(async (tx) => {
      const [run] = await tx<Run[]>`select * from newsletter_runs where id=${runId} for update`;
      if (!run || run.mode !== policy.mode) throw new Error("newsletter_run_mode_mismatch");
      if (run.status === "planned") return { queued: 0, complete: true };
      const recipients = await this.recipients(tx, run.channel, new Date(run.cutoff_at), run.subscriber_cursor, policy, limit);
      const history = await this.history(tx, recipients.map((recipient) => recipient.id));
      let queued = 0;
      for (const recipient of recipients) {
        const sent = history.filter((item) => item.subscription_id === recipient.id);
        // An unresolved earlier digest holds this channel's progression until it is reconciled.
        if (sent.some((item) => item.run_id !== run.id && ["queued", "sending", "unknown"].includes(item.status))) continue;
        const selected = choose(run.catalog, recipient, sent, run.channel, new Date(run.cutoff_at));
        if (!selected) continue;
        const items = selected.entries.flatMap((entry) => entry.items[recipient.locale] ?? entry.items.en ?? []);
        if (!items.length || (run.channel === "academy" && items.length !== 2)) throw new Error("newsletter_content_incomplete");
        const payload = renderNewsletterDigest({ channel: run.channel, locale: recipient.locale, items, review: selected.review, siteUrl: this.origin,
          unsubscribeUrl: `${this.origin}/api/newsletter/unsubscribe?token=${encodeURIComponent(recipient.unsubscribe_token)}` });
        if (run.mode === "test") payload.subject = `[AIEDHK Preview] ${payload.subject}`;
        const date = new Date(run.delivery_date).toISOString().slice(0, 10);
        const inserted = await tx`insert into newsletter_deliveries
          (subscriber_id,subscription_id,run_id,channel,locale,kind,logical_key,payload,content_keys,academy_cycle,next_attempt_at,created_at)
          values (${recipient.subscriber_id},${recipient.id},${run.id},${run.channel},${recipient.locale},'digest',
            ${`digest:${run.channel}:${date}:${recipient.id}`},${tx.json({ ...payload })},${selected.entries.map((entry) => entry.key)}::text[],${selected.cycle},${run.cutoff_at},${run.cutoff_at})
          on conflict (logical_key) do nothing returning id`;
        queued += inserted.length;
      }
      const complete = recipients.length < limit;
      await tx`update newsletter_runs set subscriber_cursor=${recipients.at(-1)?.id ?? run.subscriber_cursor},status=${complete ? "planned" : "planning"} where id=${run.id}`;
      return { queued, complete };
    });
  }

  async pendingRuns(mode: DeliveryPolicy["mode"]) {
    return this.sql<Run[]>`select * from newsletter_runs where mode=${mode} and status='planning' order by cutoff_at,id`;
  }

  async runExists(channel: NewsletterChannel, now: Date, mode: DeliveryPolicy["mode"]) {
    const rows = await this.sql`select id from newsletter_runs where channel=${channel} and delivery_date=${hongKongDate(now)} and mode=${mode}`;
    return rows.length > 0;
  }

  async preview(channel: NewsletterChannel, now: Date, policy: DeliveryPolicy, catalogOverride?: CatalogEntry[]) {
    const catalog = catalogOverride ?? await this.readCatalog(channel);
    const [existing] = await this.sql`select id from newsletter_runs where channel=${channel} and delivery_date=${hongKongDate(now)} and mode=${policy.mode}`;
    let cursor: string | null = null;
    let eligibleCount = 0;
    let example: RenderedNewsletterEmail | undefined;
    while (true) {
      const recipients = await this.recipients(this.sql, channel, now, cursor, policy, 100);
      const history = await this.history(this.sql, recipients.map((recipient) => recipient.id));
      for (const recipient of recipients) {
        const sent = history.filter((item) => item.subscription_id === recipient.id);
        if (sent.some((item) => ["queued", "sending", "unknown"].includes(item.status))) continue;
        const selected = choose(catalog, recipient, sent, channel, now);
        if (!selected) continue;
        eligibleCount++;
        if (!example) {
          example = renderNewsletterDigest({ channel, locale: recipient.locale, items: selected.entries.flatMap((entry) => entry.items[recipient.locale] ?? entry.items.en ?? []), review: selected.review,
            siteUrl: this.origin, unsubscribeUrl: `${this.origin}/api/newsletter/unsubscribe?token=preview-not-a-real-token` });
          if (policy.mode === "test") example.subject = `[AIEDHK Preview] ${example.subject}`;
        }
      }
      if (recipients.length < 100) break;
      cursor = recipients.at(-1)!.id;
    }
    return { channel, eligibleCount, alreadyPlanned: Boolean(existing), example };
  }
}
