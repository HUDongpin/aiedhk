import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import test, { after, before, beforeEach } from "node:test";
import { locales } from "@/lib/i18n";
import { readNewsletterConfig } from "@/lib/newsletter/config";
import { createNewsletterRuntime } from "@/lib/newsletter/service";
import type { NewsletterFeedEntry } from "@/lib/newsletter/policy";
import type { NewsletterProvider, ProviderSendInput } from "@/lib/newsletter/provider";
import type { NewsletterChannel } from "@/lib/newsletter/types";
import { isolatedNewsletterDatabase } from "./helpers/newsletter-db";

import { queueAcceptanceDigests } from "@/lib/newsletter/acceptance";
import { runAcceptanceCommand } from "../scripts/newsletter-admin";

const url = process.env.NEWSLETTER_TEST_DATABASE_URL;
const integration = url ? test : test.skip;
let db: Awaited<ReturnType<typeof isolatedNewsletterDatabase>>;
const now = new Date("2026-10-23T01:30:00Z");
const config = readNewsletterConfig({ NEWSLETTER_DELIVERY_MODE: "test", NEWSLETTER_TEST_RECIPIENTS: "owner@example.com",
  DATABASE_URL: "postgres://localhost/test", RESEND_API_KEY: "test-key", NEWSLETTER_FROM: "Test <test@example.com>",
  NEWSLETTER_PUBLIC_ORIGIN: "https://newsletter-preview.example.org" });
function feed(channel: NewsletterChannel): NewsletterFeedEntry[] {
  return Array.from({ length: channel === "news" ? 6 : 2 }, (_, order) => {
    const key = `${channel}-${order}`;
    return { key, channel, order, items: Object.fromEntries(locales.map((locale) => [locale,
      (channel === "news" ? [key] : [`${key}-ai`, `${key}-theory`]).map((id) => ({ id, slug: id,
        title: `Reviewed ${id}`, summary: `Summary ${id}`, contentLocale: "en", coreIdeas: channel === "academy" ? ["A reviewed idea"] : undefined }))])) };
  });
}
const loadFeed = async (channel: NewsletterChannel) => feed(channel);
function runtime(provider?: NewsletterProvider) { return createNewsletterRuntime({ sql: db.sql, config, provider, clock: () => now }); }
before(async () => { if (url) db = await isolatedNewsletterDatabase(url); });
beforeEach(async () => { if (db) await db.sql`truncate newsletter_subscribers,newsletter_state,newsletter_content,newsletter_runs cascade`; });
after(async () => { if (db) await db.close(); });
async function enrollment(channel: NewsletterChannel, options: { email?: string; status?: string; confirmed?: boolean; suppressed?: boolean } = {}) {
  const email = options.email ?? "owner@example.com";
  await db.sql`insert into newsletter_subscribers(email,locale,status,consent_version,unsubscribe_token,newsletter_migrated_at,suppressed_at)
    values(${email},'fr','active','test',${randomUUID()},${now},${options.suppressed ? now : null}) on conflict(email) do nothing`;
  const [contact] = await db.sql<{ id: string }[]>`select id from newsletter_subscribers where email=${email}`;
  const confirmed = options.confirmed !== false;
  const [subscription] = await db.sql<{ id: string; unsubscribe_token: string }[]>`insert into newsletter_subscriptions
    (subscriber_id,channel,locale,status,activated_at,confirmed_at,consent_version,consent_source,unsubscribe_token)
    values(${contact.id},${channel},'fr',${options.status ?? "active"},${now},${confirmed ? now : null},'test',${confirmed ? "confirmed" : "legacy"},${randomUUID()}) returning id,unsubscribe_token`;
  return { ...subscription, subscriberId: contact.id };
}
async function baseline() { await runtime().planner.initializeBaseline([...feed("news"), ...feed("academy")], new Date(now.getTime() - 86_400_000)); }

integration("acceptance refuses live mode and the production origin without changing data", async () => {
  await baseline();
  for (const changed of [{ ...config, mode: "live" as const }, { ...config, origin: "https://www.aied.hk" }]) {
    await assert.rejects(queueAcceptanceDigests(createNewsletterRuntime({ sql: db.sql, config: changed }), { now, loadFeed }), /newsletter_acceptance_/);
  }
  assert.equal((await db.sql`select count(*)::int as count from newsletter_deliveries`)[0].count, 0);
});

integration("acceptance requires a baseline and reports missing confirmed channels without creating subscriptions", async () => {
  await assert.rejects(queueAcceptanceDigests(runtime(), { now, loadFeed }), /newsletter_baseline_required/);
  await baseline();
  const result = await queueAcceptanceDigests(runtime(), { now, loadFeed });
  assert.deepEqual(result.missingConfirmedChannels, ["news", "academy"]);
  assert.equal(result.queued, 0);
  assert.equal((await db.sql`select count(*)::int as count from newsletter_subscriptions`)[0].count, 0);
});

integration("acceptance only queues confirmed active allowlisted unsuppressed subscribers", async () => {
  await baseline();
  await enrollment("news");
  await enrollment("academy", { confirmed: false });
  await enrollment("news", { email: "outside@example.com" });
  await enrollment("academy", { email: "suppressed@example.com", suppressed: true });
  const configured = { ...config, testRecipients: [...config.testRecipients, "suppressed@example.com"] };
  const result = await queueAcceptanceDigests(createNewsletterRuntime({ sql: db.sql, config: configured }), { now, loadFeed });
  assert.equal(result.queued, 1);
  assert.equal(result.channels.news.confirmed, 1);
  assert.equal(result.channels.academy.confirmed, 0);
  assert.deepEqual(result.missingConfirmedChannels, ["academy"]);
  const rows = await db.sql`select d.channel,d.locale,s.email from newsletter_deliveries d join newsletter_subscribers s on s.id=d.subscriber_id`;
  assert.deepEqual(rows.map((row) => ({ ...row })), [{ channel: "news", locale: "fr", email: "owner@example.com" }]);
});

integration("acceptance dry-run is read only and feed failures cannot partially refresh the catalog", async () => {
  await baseline();
  await enrollment("news");
  await enrollment("academy");
  const beforeCatalog = await db.sql`select * from newsletter_content order by channel,content_key`;
  const preview = await queueAcceptanceDigests(runtime(), { now, loadFeed, dryRun: true });
  assert.equal(preview.eligible, 2);
  assert.equal(preview.queued, 0);
  assert.deepEqual(await db.sql`select * from newsletter_content order by channel,content_key`, beforeCatalog);
  await assert.rejects(queueAcceptanceDigests(runtime(), { now, loadFeed: async (channel) => {
    if (channel === "academy") throw new Error("fixture source unavailable");
    return feed(channel).slice(0, 5);
  } }));
  assert.deepEqual(await db.sql`select * from newsletter_content order by channel,content_key`, beforeCatalog);
  assert.equal((await db.sql`select count(*)::int as count from newsletter_deliveries`)[0].count, 0);
});

integration("acceptance honors pending and ambiguous digest holds", async () => {
  await baseline();
  const news = await enrollment("news");
  const academy = await enrollment("academy");
  for (const [subscription, channel, status] of [[news, "news", "queued"], [academy, "academy", "unknown"]] as const) {
    await db.sql`insert into newsletter_deliveries(subscriber_id,subscription_id,channel,locale,kind,logical_key,payload,status)
      values(${subscription.subscriberId},${subscription.id},${channel},'fr','digest',${randomUUID()},${db.sql.json({ subject: "Held", html: "held", text: "held" })},${status})`;
  }
  const result = await queueAcceptanceDigests(runtime(), { now, loadFeed });
  assert.equal(result.queued, 0);
  assert.equal(result.channels.news.held, 1);
  assert.equal(result.channels.academy.held, 1);
  assert.equal((await db.sql`select count(*)::int as count from newsletter_deliveries`)[0].count, 2);
});

integration("acceptance freezes labelled localized snapshots and dispatches once through the normal queue", async () => {
  await baseline();
  const news = await enrollment("news");
  await enrollment("academy");
  const sent: ProviderSendInput[] = [];
  const service = runtime({ async send(input) { sent.push(input); return { ok: true, id: `provider-${input.id}` }; } });
  const first = await queueAcceptanceDigests(service, { now, loadFeed });
  assert.equal(first.queued, 2);
  const rows = await db.sql`select * from newsletter_deliveries order by channel`;
  assert.deepEqual(rows.map((row) => row.content_keys.length), [1, 5]);
  assert.deepEqual(rows.map((row) => row.academy_cycle), [1, null]);
  assert.ok(rows.every((row) => row.payload.subject.startsWith("[AIEDHK Preview] ")));
  assert.ok(rows.every((row) => row.payload.html.includes('lang="en-HK"')));
  assert.match(rows[1].payload.text, /newsletter-preview\.example\.org\/fr\/news\//);
  assert.ok(rows[1].payload.text.includes(news.unsubscribe_token));
  assert.equal(rows[1].logical_key, `acceptance:2026-10-23:news:${news.id}`);
  assert.equal((await db.sql`select count(*)::int as count from newsletter_runs`)[0].count, 0);
  for (const id of first.deliveryIds) await service.queue.sendNext({ id, now, policy: { mode: "test", testRecipients: config.testRecipients }, provider: service.provider! });
  const again = await queueAcceptanceDigests(service, { now, loadFeed });
  assert.equal(again.queued, 0);
  assert.equal(again.channels.news.alreadyQueued, 1);
  assert.equal(again.channels.academy.alreadyQueued, 1);
  assert.deepEqual(again.channels.news.existingStatuses, { accepted: 1 });
  assert.equal(again.incompleteExisting, 0);
  assert.equal(sent.length, 2);
  assert.ok(sent.every((input) => input.unsubscribeUrl?.startsWith(config.origin)));
  const afterRows = await db.sql`select payload from newsletter_deliveries order by channel`;
  assert.deepEqual(afterRows.map((row) => row.payload), rows.map((row) => row.payload));
});

integration("acceptance reruns report definitive failures without creating another delivery key", async () => {
  await baseline();
  await enrollment("news");
  await enrollment("academy");
  let sends = 0;
  const service = runtime({ async send() {
    sends++;
    return { ok: false, code: "fixture_rejection", retryable: false, ambiguous: false };
  } });
  const first = await queueAcceptanceDigests(service, { now, loadFeed });
  for (const id of first.deliveryIds) await service.queue.sendNext({ id, now,
    policy: { mode: "test", testRecipients: config.testRecipients }, provider: service.provider! });
  const again = await queueAcceptanceDigests(service, { now, loadFeed });
  assert.equal(again.queued, 0);
  assert.deepEqual(again.deliveryIds, []);
  assert.deepEqual(again.channels.news.existingStatuses, { failed: 1 });
  assert.deepEqual(again.channels.academy.existingStatuses, { failed: 1 });
  assert.equal(again.incompleteExisting, 2);
  assert.equal(sends, 2);
  assert.equal((await db.sql`select count(*)::int as count from newsletter_deliveries`)[0].count, 2);
});

integration("acceptance reports existing incomplete and held states instead of treating their keys as success", async () => {
  await baseline();
  await enrollment("news");
  await enrollment("academy");
  await queueAcceptanceDigests(runtime(), { now, loadFeed });
  for (const status of ["queued", "sending", "unknown", "cancelled", "delayed", "bounced", "complained", "suppressed"]) {
    await db.sql`update newsletter_deliveries set status=${status}`;
    const result = await queueAcceptanceDigests(runtime(), { now, loadFeed, dryRun: true });
    assert.deepEqual(result.channels.news.existingStatuses, { [status]: 1 });
    assert.deepEqual(result.channels.academy.existingStatuses, { [status]: 1 });
    assert.equal(result.incompleteExisting, 2, status);
    assert.equal(result.queued, 0);
  }
  await db.sql`update newsletter_deliveries set status='delivered'`;
  const delivered = await queueAcceptanceDigests(runtime(), { now, loadFeed, dryRun: true });
  assert.deepEqual(delivered.channels.news.existingStatuses, { delivered: 1 });
  assert.equal(delivered.incompleteExisting, 0);
});

integration("acceptance command keeps failed reruns nonzero and never treats a stable key as delivery evidence", async () => {
  await baseline();
  await enrollment("news");
  await enrollment("academy");
  let sends = 0;
  const service = runtime({ async send() {
    sends++;
    return { ok: false, code: "fixture_rejection", retryable: false, ambiguous: false };
  } });
  const options = { now, loadFeed, pause: async () => {} };
  const first = await runAcceptanceCommand(service, true, options);
  assert.equal(first.exitCode, 1);
  for (const status of ["failed", "cancelled", "unknown", "delayed"]) {
    await db.sql`update newsletter_deliveries set status=${status}`;
    const again = await runAcceptanceCommand(service, true, options);
    assert.equal(again.exitCode, 1, status);
    assert.deepEqual(again.report.channels.news.existingStatuses, { [status]: 1 });
    assert.deepEqual(again.report.outcomes, {});
    assert.equal(again.report.inboxDeliveryValidated, false);
  }
  for (const status of ["accepted", "delivered"]) {
    await db.sql`update newsletter_deliveries set status=${status}`;
    const accepted = await runAcceptanceCommand(service, true, options);
    assert.equal(accepted.exitCode, 0, status);
    assert.equal(accepted.report.inboxDeliveryValidated, false);
    assert.equal(accepted.report.scheduledProductionPublicationValidated, false);
  }
  assert.equal(sends, 2);
  assert.equal((await db.sql`select count(*)::int as count from newsletter_deliveries`)[0].count, 2);
});

test("integration subprocesses inherit only runtime environment names and the isolated test URL", async () => {
  const runner = await import(pathToFileURL(resolve("scripts/test-newsletter-integration.mjs")).href);
  const safe = { PATH: "/synthetic/bin", HOME: "/synthetic/home", USER: "fixture", TMPDIR: "/tmp", LANG: "C" };
  const input = { ...safe, AI_API_KEY: "synthetic-ai-marker", OPENALEX_API_KEY: "synthetic-openalex-marker",
    SEMANTIC_SCHOLAR_API_KEY: "synthetic-scholar-marker", ADMIN_PASSWORD: "synthetic-admin-marker",
    RESEND_API_KEY: "synthetic-mail-marker", DATABASE_URL: "synthetic-database-marker",
    NEWSLETTER_TEST_DATABASE_URL: "synthetic-inherited-database-marker", NODE_OPTIONS: "synthetic-node-marker",
    ARBITRARY_SECRET: "synthetic-unrecognized-marker" };
  const isolated = "postgres://fixture@127.0.0.1:5432/test";
  assert.deepEqual(runner.createIntegrationEnvironment(input, isolated), { ...safe, NEWSLETTER_TEST_DATABASE_URL: isolated });
  assert.deepEqual(runner.createIntegrationEnvironment(input), safe);
});
