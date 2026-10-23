import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import test, { before, after, beforeEach } from "node:test";
import { NewsletterDeliveryQueue } from "@/lib/newsletter/delivery";
import { NewsletterPlanner } from "@/lib/newsletter/planner";
import { NewsletterSubscriptions } from "@/lib/newsletter/subscriptions";
import { renderNewsletterConfirmation } from "@/lib/newsletter/templates";
import { ResendNewsletterProvider, type NewsletterProvider, type ProviderSendInput } from "@/lib/newsletter/provider";
import { isolatedNewsletterDatabase } from "./helpers/newsletter-db";

const url = process.env.NEWSLETTER_TEST_DATABASE_URL;
const integration = url ? test : test.skip;
let db: Awaited<ReturnType<typeof isolatedNewsletterDatabase>>;
let queue: NewsletterDeliveryQueue;
const now = new Date("2026-10-23T01:30:00Z");
const policy = { mode: "test" as const, testRecipients: ["owner@example.com"] };
before(async () => { if (url) { db = await isolatedNewsletterDatabase(url); queue = new NewsletterDeliveryQueue(db.sql, "https://www.aied.hk"); } });
beforeEach(async () => { if (db) await db.sql`truncate newsletter_subscribers,newsletter_content,newsletter_state,newsletter_runs,newsletter_webhook_events,newsletter_worker_lease cascade`; });
after(async () => { if (db) await db.close(); });

async function fixture(channel = "news", email = "owner@example.com") {
  const [contact] = await db.sql<{ id: string }[]>`insert into newsletter_subscribers(email,status,locale,consent_version,unsubscribe_token,newsletter_migrated_at)
    values (${email},'active','en','test',${randomUUID()},${now}) returning id`;
  const [subscription] = await db.sql<{ id: string }[]>`insert into newsletter_subscriptions(subscriber_id,channel,locale,status,activated_at,consent_version,consent_source,unsubscribe_token)
    values (${contact.id},${channel},'en','active',${now},'test','confirmed',${randomUUID()}) returning id`;
  const key = randomUUID();
  await db.sql`insert into newsletter_content(channel,content_key,first_seen_at,baseline,sort_order,items)
    values(${channel},${key},${now},false,1,${db.sql.json({ en: [{ id: key, slug: key, title: "News", summary: "Reviewed news", contentLocale: "en" }] })})`;
  const [delivery] = await db.sql<{ id: string }[]>`insert into newsletter_deliveries(subscriber_id,subscription_id,channel,locale,kind,logical_key,payload,content_keys,next_attempt_at)
    values (${contact.id},${subscription.id},${channel},'en','digest',${randomUUID()},${db.sql.json({ subject: "Digest", html: "<p>body</p>", text: "body" })},${[key]}::text[],${now}) returning id`;
  return { contactId: contact.id, subscriptionId: subscription.id, deliveryId: delivery.id, contentKey: key };
}
function successfulProvider(sent: ProviderSendInput[]): NewsletterProvider {
  return { async send(input) { sent.push(input); return { ok: true, id: "provider-" + input.id }; } };
}

integration("competing workers send once and preserve one stable idempotency key", async () => {
  const fixtureData = await fixture();
  const sent: ProviderSendInput[] = [];
  const provider = successfulProvider(sent);
  await Promise.all([queue.sendNext({ policy, provider, now }), queue.sendNext({ policy, provider, now })]);
  assert.equal(sent.length, 1);
  assert.equal(sent[0].idempotencyKey, `aiedhk-newsletter/${fixtureData.deliveryId}`);
  assert.match(sent[0].unsubscribeUrl!, /^https:\/\/www\.aied\.hk\/api\/newsletter\/unsubscribe\?token=/);
  assert.equal((await db.sql`select status from newsletter_deliveries`)[0].status, "accepted");
});

integration("a transient failure retries the same immutable payload and never marks it delivered", async () => {
  await fixture();
  const sent: ProviderSendInput[] = [];
  const provider: NewsletterProvider = { async send(input) {
    sent.push(input);
    return sent.length === 1 ? { ok: false, code: "rate_limit_exceeded", retryable: true, ambiguous: false, retryAfterSeconds: 120 } : { ok: true, id: "provider-retry" };
  } };
  await queue.sendNext({ policy, provider, now });
  let [row] = await db.sql`select * from newsletter_deliveries`;
  assert.equal(row.status, "queued");
  assert.equal(new Date(row.next_attempt_at).toISOString(), "2026-10-23T01:32:00.000Z");
  await queue.sendNext({ policy, provider, now: new Date(now.getTime() + 130_000) });
  [row] = await db.sql`select * from newsletter_deliveries`;
  assert.equal(row.status, "accepted");
  assert.equal(sent.length, 2);
  assert.deepEqual(sent[1], sent[0]);
});

integration("unsubscribe, suppression, unpublished content and allowlist are rechecked before sends", async () => {
  const data = await fixture();
  const sent: ProviderSendInput[] = [];
  await db.sql`update newsletter_subscriptions set status='unsubscribed' where id=${data.subscriptionId}`;
  await queue.sendNext({ policy, provider: successfulProvider(sent), now });
  assert.equal(sent.length, 0);
  assert.equal((await db.sql`select status from newsletter_deliveries`)[0].status, "cancelled");
  await fixture("academy", "not-allowed@example.com");
  await queue.sendNext({ policy, provider: successfulProvider(sent), now });
  assert.equal(sent.length, 0);
  const removed = await fixture("news", "another@example.com");
  await db.sql`update newsletter_content set available=false where content_key=${removed.contentKey}`;
  await queue.sendNext({ policy: { mode: "live", testRecipients: [] }, provider: successfulProvider(sent), now, id: removed.deliveryId });
  assert.equal(sent.length, 0);
});

integration("expired sending leases retry within 24 hours and become unknown beyond it", async () => {
  const recent = await fixture();
  await db.sql`update newsletter_deliveries set status='sending',attempt_count=1,first_attempt_at=${new Date(now.getTime()-120_000)},lease_expires_at=${new Date(now.getTime()-1)} where id=${recent.deliveryId}`;
  const sent: ProviderSendInput[] = [];
  await queue.sendNext({ policy, provider: successfulProvider(sent), now });
  assert.equal(sent.length, 1);
  const old = await fixture("academy", "owner-two@example.com");
  await db.sql`update newsletter_deliveries set status='sending',attempt_count=1,first_attempt_at=${new Date(now.getTime()-25*3600_000)},lease_expires_at=${new Date(now.getTime()-1)} where id=${old.deliveryId}`;
  await queue.sendNext({ policy: { mode: "live", testRecipients: [] }, provider: successfulProvider(sent), now });
  assert.equal(sent.length, 1);
  assert.equal((await db.sql`select status from newsletter_deliveries where id=${old.deliveryId}`)[0].status, "unknown");
});

integration("webhook events are replay safe, never downgrade delivery, and suppress both channels on complaint", async () => {
  const data = await fixture();
  await db.sql`insert into newsletter_subscriptions(subscriber_id,channel,locale,status,activated_at,consent_version,consent_source,unsubscribe_token)
    values (${data.contactId},'academy','en','active',${now},'test','confirmed',${randomUUID()})`;
  const sent: ProviderSendInput[] = [];
  await queue.sendNext({ policy, provider: successfulProvider(sent), now });
  const event = { id: "event-delivered", type: "email.delivered", emailId: "provider-" + data.deliveryId, occurredAt: now };
  await queue.recordEvent(event);
  await queue.recordEvent(event);
  await queue.recordEvent({ ...event, id: "old-delayed", type: "email.delivery_delayed", occurredAt: new Date(now.getTime()-1000) });
  assert.equal((await db.sql`select status from newsletter_deliveries`)[0].status, "delivered");
  assert.equal((await db.sql`select count(*)::int as count from newsletter_webhook_events`)[0].count, 2);
  await queue.recordEvent({ ...event, id: "complaint", type: "email.complained" });
  assert.equal((await db.sql`select suppression_reason from newsletter_subscribers`)[0].suppression_reason, "complaint");
  assert.equal((await db.sql`select status from newsletter_deliveries`)[0].status, "complained");
});

integration("a signed provider event can reconcile an accepted request whose response was lost", async () => {
  const data = await fixture();
  const provider: NewsletterProvider = { async send() { return { ok: false, code: "network_error", retryable: true, ambiguous: true }; } };
  await queue.sendNext({ policy, provider, now });
  await queue.recordEvent({ id: "reconciled", type: "email.delivered", emailId: "provider-lost", deliveryId: data.deliveryId, occurredAt: now });
  const [row] = await db.sql`select status,provider_message_id from newsletter_deliveries`;
  assert.equal(row.status, "delivered");
  assert.equal(row.provider_message_id, "provider-lost");
});

integration("worker leases prevent overlap and can be reclaimed after expiry", async () => {
  const a = randomUUID(), b = randomUUID();
  assert.equal(await queue.acquireWorker(a, now), true);
  assert.equal(await queue.acquireWorker(b, now), false);
  assert.equal(await queue.acquireWorker(b, new Date(now.getTime()+100_000)), true);
  await queue.releaseWorker(a);
  assert.equal(await queue.acquireWorker(a, new Date(now.getTime()+100_001)), false);
  await queue.releaseWorker(b);
  assert.equal(await queue.acquireWorker(a, new Date(now.getTime()+100_002)), true);
});

integration("changing language or unsubscribing preserves ambiguity holds instead of issuing a new message key", async () => {
  await db.sql`insert into newsletter_state(baseline_at) values(${now})`;
  const data = await fixture();
  await queue.sendNext({ policy, now, provider: { async send() { return { ok: false, code: "network_error", retryable: true, ambiguous: true }; } } });
  const subscriptions = new NewsletterSubscriptions(db.sql, { origin: "https://www.aied.hk", renderConfirmation: renderNewsletterConfirmation });
  const later = new Date(now.getTime()+70_000);
  await subscriptions.subscribe({ email: "owner@example.com", channel: "news", locale: "fr", now: later });
  const [confirmation] = await db.sql<{ token: string }[]>`select token from newsletter_confirmations`;
  await subscriptions.confirm(confirmation.token, undefined, later);
  assert.equal((await db.sql`select status from newsletter_deliveries where id=${data.deliveryId}`)[0].status, "unknown");
  const planner = new NewsletterPlanner(db.sql, "https://www.aied.hk");
  const run = await planner.ensureRun("news", new Date(now.getTime()+86400_000), "test");
  await planner.planPage(run.id, policy);
  assert.equal((await db.sql`select count(*)::int as count from newsletter_deliveries where kind='digest'`)[0].count, 1);
  const [subscription] = await db.sql<{ unsubscribe_token: string }[]>`select unsubscribe_token from newsletter_subscriptions`;
  await subscriptions.unsubscribe(subscription.unsubscribe_token, later);
  assert.equal((await db.sql`select status from newsletter_deliveries where id=${data.deliveryId}`)[0].status, "unknown");
});

integration("only Permanent bounces suppress the mailbox; temporary and unknown bounces retain enrollment", async () => {
  const data = await fixture();
  await queue.sendNext({ policy, now, provider: successfulProvider([]) });
  await queue.recordEvent({ id: "soft", type: "email.bounced", emailId: "provider-"+data.deliveryId, bounceType: "Transient", occurredAt: now });
  assert.equal((await db.sql`select suppressed_at from newsletter_subscribers`)[0].suppressed_at, null);
  assert.equal((await db.sql`select status from newsletter_subscriptions`)[0].status, "active");
  await queue.recordEvent({ id: "unknown", type: "email.bounced", emailId: "provider-"+data.deliveryId, bounceType: "Undetermined", occurredAt: now });
  assert.equal((await db.sql`select suppressed_at from newsletter_subscribers`)[0].suppressed_at, null);
  await queue.recordEvent({ id: "hard", type: "email.bounced", emailId: "provider-"+data.deliveryId, bounceType: "Permanent", occurredAt: now });
  assert.equal((await db.sql`select suppression_reason from newsletter_subscribers`)[0].suppression_reason, "permanent_bounce");
});

integration("a definitive provider failure releases news for a later batch instead of losing it", async () => {
  await db.sql`insert into newsletter_state(baseline_at) values(${now})`;
  const data = await fixture();
  await queue.sendNext({ policy, now, provider: successfulProvider([]) });
  await queue.recordEvent({ id: "failed", type: "email.failed", emailId: "provider-"+data.deliveryId, occurredAt: now });
  const planner = new NewsletterPlanner(db.sql, "https://www.aied.hk");
  const run = await planner.ensureRun("news", new Date(now.getTime()+86400_000), "test");
  await planner.planPage(run.id, policy);
  const rows = await db.sql`select content_keys from newsletter_deliveries where kind='digest' and status='queued'`;
  assert.equal(rows.length, 1);
  assert.deepEqual(rows[0].content_keys, [data.contentKey]);
});

integration("retries freeze sender, recipient and unsubscribe headers across deployment origin changes", async (t) => {
  await fixture();
  const requests: Array<{ key: string | null; body: unknown }> = [];
  t.mock.method(console, "error", () => {});
  t.mock.method(globalThis, "fetch", async (_url: unknown, init: RequestInit) => {
    requests.push({ key: new Headers(init.headers).get("idempotency-key"), body: JSON.parse(String(init.body)) });
    if (requests.length === 1) return Response.json({ statusCode: 500, name: "application_error", message: "synthetic failure" }, { status: 500 });
    return Response.json({ id: "provider-frozen" });
  });
  const first = new NewsletterDeliveryQueue(db.sql, "https://old-preview.example.com");
  await first.sendNext({ policy, now, provider: new ResendNewsletterProvider("synthetic-key", "Old <old@example.com>") });
  const second = new NewsletterDeliveryQueue(db.sql, "https://new-preview.example.com");
  await second.sendNext({ policy, now: new Date(now.getTime()+70_000), provider: new ResendNewsletterProvider("synthetic-key", "New <new@example.com>") });
  assert.equal(requests.length, 2);
  assert.equal(requests[0].key, requests[1].key);
  assert.deepEqual(requests[1].body, requests[0].body);
});

integration("a competing claimant rechecks the new due time under the row lock", async () => {
  await fixture();
  const selected = Promise.withResolvers<void>();
  const resume = Promise.withResolvers<void>();
  let intercept = true;
  const delayedSql = new Proxy(db.sql, {
    get(target, property, receiver) {
      if (property !== "begin") return Reflect.get(target, property, receiver);
      return (callback: (tx: unknown) => Promise<unknown>) => target.begin((tx) => callback(new Proxy(tx, {
        apply(query, context, args) {
          const text = Array.isArray(args[0]) ? args[0].join("") : "";
          if (intercept && text.includes("select * from newsletter_subscribers where id=")) {
            intercept = false;
            selected.resolve();
            return resume.promise.then(() => Reflect.apply(query, context, args));
          }
          return Reflect.apply(query, context, args);
        },
      })));
    },
  });
  let calls = 0;
  const provider: NewsletterProvider = { async send() {
    calls++;
    return calls === 1 ? { ok: false, code: "rate_limit_exceeded", retryable: true, ambiguous: false, retryAfterSeconds: 1200 } : { ok: true, id: "too-early" };
  } };
  const competing = new NewsletterDeliveryQueue(delayedSql, "https://www.aied.hk").sendNext({ policy, now, provider });
  await selected.promise;
  await queue.sendNext({ policy, now, provider });
  resume.resolve();
  await competing;
  assert.equal(calls, 1);
  const [row] = await db.sql`select status,next_attempt_at from newsletter_deliveries`;
  assert.equal(row.status, "queued");
  assert.equal(new Date(row.next_attempt_at).toISOString(), "2026-10-23T01:50:00.000Z");
});
