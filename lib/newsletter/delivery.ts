import { databaseJson, type NewsletterSql, type NewsletterTransaction } from "./database";
import type { DeliveryPolicy } from "./planner";
import { retryDecision } from "./policy";
import type { NewsletterProvider, ProviderSendInput } from "./provider";
import type { RenderedNewsletterEmail } from "./types";
import type { NewsletterChannel } from "./types";

interface Delivery {
  id: string; subscriber_id: string; subscription_id: string | null; confirmation_id: string | null;
  kind: string; channel: string | null; locale: string; payload: RenderedNewsletterEmail; status: string;
  content_keys: string[]; attempt_count: number; first_attempt_at: Date | null; had_ambiguous_attempt: boolean;
  provider_message_id: string | null;
  envelope: { email: string; from?: string; unsubscribeUrl?: string } | null;
}
interface Contact { id: string; email: string; status: string; suppressed_at: Date | null }
export interface NewsletterProviderEvent { id: string; type: string; emailId: string; deliveryId?: string; occurredAt: Date; bounceType?: "Permanent" | "Transient" | "Undetermined" }
const eventStatuses: Record<string, string> = {
  "email.sent": "accepted", "email.delivered": "delivered", "email.delivery_delayed": "delayed",
  "email.failed": "failed", "email.bounced": "bounced", "email.complained": "complained", "email.suppressed": "suppressed",
};
const rank: Record<string, number> = { accepted: 1, delayed: 2, failed: 3, delivered: 4, suppressed: 5, bounced: 5, complained: 6 };

export class NewsletterDeliveryQueue {
  constructor(private readonly sql: NewsletterSql, private readonly origin: string) {}

  async acquireWorker(owner: string, now = new Date()) {
    const rows = await this.sql`insert into newsletter_worker_lease(singleton,owner,expires_at) values (true,${owner},${new Date(now.getTime()+90_000)})
      on conflict(singleton) do update set owner=excluded.owner,expires_at=excluded.expires_at
      where newsletter_worker_lease.expires_at<=${now} returning owner`;
    return rows.length > 0;
  }

  async releaseWorker(owner: string) {
    await this.sql`delete from newsletter_worker_lease where owner=${owner}`;
  }

  async status(id: string) {
    const [row] = await this.sql<{ status: string }[]>`select status from newsletter_deliveries where id=${id}`;
    return row?.status;
  }

  async queuedChannels() {
    const rows = await this.sql<{ channel: NewsletterChannel }[]>`select distinct channel from newsletter_deliveries where kind='digest' and status in ('queued','sending')`;
    return rows.map((row) => row.channel);
  }

  private async recoverExpiredLeases(now: Date) {
    await this.sql`update newsletter_deliveries set
      status=case when first_attempt_at<=${new Date(now.getTime()-23*3600_000)} or first_attempt_at is null then 'unknown' else 'queued' end,
      had_ambiguous_attempt=true,next_attempt_at=${now},lease_expires_at=null,last_error_code='worker_interrupted',updated_at=${now}
      where status='sending' and lease_expires_at<=${now}`;
  }

  private async eligible(tx: NewsletterSql | NewsletterTransaction, delivery: Delivery, contact: Contact, now: Date) {
    if (contact.suppressed_at || contact.status === "bounced") return false;
    if (delivery.envelope && delivery.envelope.email !== contact.email) return false;
    if (delivery.kind === "digest") {
      const [subscription] = await tx<{ status: string; locale: string; unsubscribe_token: string }[]>`select status,locale,unsubscribe_token from newsletter_subscriptions where id=${delivery.subscription_id}`;
      if (!subscription || subscription.status !== "active" || subscription.locale !== delivery.locale) return false;
      const [content] = await tx<{ count: number }[]>`select count(*)::int as count from newsletter_content
        where channel=${delivery.channel} and content_key=any(${delivery.content_keys}::text[]) and available`;
      if (!delivery.content_keys.length || content.count !== delivery.content_keys.length) return false;
      return { unsubscribeUrl: `${this.origin}/api/newsletter/unsubscribe?token=${encodeURIComponent(subscription.unsubscribe_token)}` };
    }
    const [confirmation] = await tx`select id from newsletter_confirmations where id=${delivery.confirmation_id}
      and used_at is null and invalidated_at is null and expires_at>${now}`;
    return confirmation ? {} : false;
  }

  private async claim(policy: DeliveryPolicy, now: Date, from?: string, id?: string, allowedDigestChannels: readonly NewsletterChannel[] = ["news", "academy"]) {
    await this.recoverExpiredLeases(now);
    return this.sql.begin(async (tx) => {
      const [candidate] = await tx<Delivery[]>`select d.* from newsletter_deliveries d join newsletter_subscribers s on s.id=d.subscriber_id
        where d.status='queued' and d.next_attempt_at<=${now} and (${id ?? null}::uuid is null or d.id=${id ?? null}::uuid)
          and (${policy.mode === "live"} or s.email=any(${[...policy.testRecipients]}::text[]))
          and (d.kind<>'digest' or d.channel=any(${[...allowedDigestChannels]}::text[]))
        order by (d.kind<>'digest') desc,d.next_attempt_at,d.id limit 1`;
      if (!candidate) return null;
      const [contact] = await tx<Contact[]>`select * from newsletter_subscribers where id=${candidate.subscriber_id} for update`;
      const [delivery] = await tx<Delivery[]>`select * from newsletter_deliveries where id=${candidate.id} and status='queued' and next_attempt_at<=${now} for update skip locked`;
      if (!delivery) return null;
      if (delivery.first_attempt_at && new Date(delivery.first_attempt_at).getTime() <= now.getTime()-23*3600_000) {
        await tx`update newsletter_deliveries set status=${delivery.had_ambiguous_attempt ? "unknown" : "failed"},last_error_code='retry_window_expired',updated_at=${now} where id=${delivery.id}`;
        return { blocked: true as const, id: delivery.id };
      }
      const eligibility = await this.eligible(tx, delivery, contact, now);
      if (!eligibility) {
        await tx`update newsletter_deliveries set status=case when had_ambiguous_attempt then 'unknown' else 'cancelled' end,last_error_code='no_longer_eligible',updated_at=${now} where id=${delivery.id}`;
        return { blocked: true as const, id: delivery.id };
      }
      const [claimed] = await tx<Delivery[]>`update newsletter_deliveries set status='sending',attempt_count=attempt_count+1,
        envelope=coalesce(envelope,${tx.json(databaseJson({ email: contact.email, ...(from ? { from } : {}), ...eligibility }))}),
        first_attempt_at=coalesce(first_attempt_at,${now}),last_attempt_at=${now},lease_expires_at=${new Date(now.getTime()+90_000)},updated_at=${now}
        where id=${delivery.id} returning *`;
      return { blocked: false as const, delivery: claimed, contact, ...eligibility };
    });
  }

  async sendNext({ policy, provider, now = new Date(), id, allowedDigestChannels }: { policy: DeliveryPolicy; provider: NewsletterProvider; now?: Date; id?: string; allowedDigestChannels?: readonly NewsletterChannel[] }) {
    const claimed = await this.claim(policy, now, provider.from, id, allowedDigestChannels);
    if (!claimed) return { status: "idle" };
    if (claimed.blocked) return { status: await this.status(claimed.id), id: claimed.id };
    const { delivery, contact } = claimed;
    // Recheck after releasing the short claim transaction, immediately before the external call.
    const [freshContact] = await this.sql<Contact[]>`select * from newsletter_subscribers where id=${contact.id}`;
    const eligibility = await this.eligible(this.sql, delivery, freshContact, now);
    if (!eligibility) {
      await this.sql`update newsletter_deliveries set status=case when had_ambiguous_attempt then 'unknown' else 'cancelled' end,lease_expires_at=null,last_error_code='no_longer_eligible',updated_at=${now} where id=${delivery.id} and status='sending'`;
      return { status: await this.status(delivery.id), id: delivery.id };
    }
    const input: ProviderSendInput = { id: delivery.id, payload: delivery.payload,
      idempotencyKey: `aiedhk-newsletter/${delivery.id}`, ...delivery.envelope! };
    let result;
    try { result = await provider.send(input); }
    catch { result = { ok: false as const, code: "network_error", retryable: true, ambiguous: true }; }
    if (result.ok) {
      await this.sql.begin(async (tx) => {
        await tx`select id from newsletter_subscribers where id=${contact.id} for update`;
        await tx`update newsletter_deliveries set provider_message_id=${result.id},
          status=case when status in ('delivered','delayed','bounced','complained','suppressed') then status else 'accepted' end,
          accepted_at=coalesce(accepted_at,${now}),lease_expires_at=null,last_error_code=null,updated_at=${now}
          where id=${delivery.id} and (provider_message_id is null or provider_message_id=${result.id})`;
        await this.applyEvents(tx, delivery.id, result.id);
      });
    } else {
      const ambiguous = delivery.had_ambiguous_attempt || result.ambiguous;
      const decision = retryDecision({ attempt: delivery.attempt_count, firstAttemptAt: new Date(delivery.first_attempt_at!), now,
        retryable: result.retryable, ambiguous, retryAfterSeconds: result.retryAfterSeconds });
      await this.sql`update newsletter_deliveries set status=${decision.status},had_ambiguous_attempt=${ambiguous},next_attempt_at=${decision.nextAttemptAt ?? now},
        lease_expires_at=null,last_error_code=${result.code},updated_at=${now} where id=${delivery.id} and status='sending'`;
    }
    return { status: await this.status(delivery.id), id: delivery.id };
  }

  private async applyEvents(tx: NewsletterTransaction, deliveryId: string, emailId: string) {
    const [delivery] = await tx<Delivery[]>`select * from newsletter_deliveries where id=${deliveryId} for update`;
    const events = await tx<{ event_type: string; occurred_at: Date; bounce_type: string | null }[]>`select event_type,occurred_at,bounce_type from newsletter_webhook_events where provider_message_id=${emailId} order by occurred_at,event_id`;
    let status = delivery.status;
    for (const event of events) {
      const incoming = event.event_type === "email.bounced" && event.bounce_type !== "Permanent" ? "failed" : eventStatuses[event.event_type];
      if (!incoming) continue;
      if ((rank[incoming] ?? 0) >= (rank[status] ?? 0)) status = incoming;
      await tx`update newsletter_deliveries set status=${status},accepted_at=coalesce(accepted_at,${event.occurred_at}),lease_expires_at=null,
        last_event_at=greatest(coalesce(last_event_at,${event.occurred_at}),${event.occurred_at}),updated_at=now() where id=${delivery.id}`;
      if (["bounced", "complained", "suppressed"].includes(incoming)) {
        const reason = incoming === "complained" ? "complaint" : incoming === "bounced" ? "permanent_bounce" : "provider_suppression";
        await tx`update newsletter_subscribers set suppressed_at=coalesce(suppressed_at,${event.occurred_at}),
          suppression_reason=case when suppression_reason='complaint' then suppression_reason else ${reason} end where id=${delivery.subscriber_id}`;
        await tx`update newsletter_deliveries set status=case when had_ambiguous_attempt then 'unknown' else 'cancelled' end,last_error_code='address_suppressed',updated_at=now()
          where subscriber_id=${delivery.subscriber_id} and status='queued'`;
        await tx`update newsletter_confirmations set invalidated_at=coalesce(invalidated_at,${event.occurred_at}) where subscriber_id=${delivery.subscriber_id} and used_at is null`;
      }
    }
  }

  async recordEvent(event: NewsletterProviderEvent) {
    if (!eventStatuses[event.type]) return { status: "ignored" };
    const tag = event.deliveryId && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(event.deliveryId) ? event.deliveryId : null;
    return this.sql.begin(async (tx) => {
      const inserted = await tx`insert into newsletter_webhook_events(event_id,event_type,provider_message_id,delivery_id,occurred_at,bounce_type)
        values(${event.id},${event.type},${event.emailId},${tag},${event.occurredAt},${event.bounceType ?? null}) on conflict(event_id) do nothing returning event_id`;
      if (!inserted.length) return { status: "duplicate" };
      const [lookup] = await tx<Delivery[]>`select * from newsletter_deliveries where provider_message_id=${event.emailId}
        or (id=${tag}::uuid and provider_message_id is null and attempt_count>0) limit 1`;
      if (!lookup) return { status: "recorded" };
      await tx`select id from newsletter_subscribers where id=${lookup.subscriber_id} for update`;
      await tx`update newsletter_deliveries set provider_message_id=${event.emailId} where id=${lookup.id} and provider_message_id is null`;
      await this.applyEvents(tx, lookup.id, event.emailId);
      return { status: "recorded" };
    });
  }
}
