import assert from "node:assert/strict";
import test, { before, after, beforeEach } from "node:test";
import { createNewsletterRuntime } from "@/lib/newsletter/service";
import { readNewsletterConfig } from "@/lib/newsletter/config";
import { executeNewsletterTick } from "@/lib/newsletter/scheduler";
import { isolatedNewsletterDatabase } from "./helpers/newsletter-db";
import { locales } from "@/lib/i18n";
import type { NewsletterFeedEntry } from "@/lib/newsletter/policy";

const url = process.env.NEWSLETTER_TEST_DATABASE_URL;
const integration = url ? test : test.skip;
let db: Awaited<ReturnType<typeof isolatedNewsletterDatabase>>;
const now = new Date("2026-10-23T01:30:00Z");
const earlier = new Date("2026-10-22T00:00:00Z");
const config = readNewsletterConfig({ NEWSLETTER_DELIVERY_MODE: "test", NEWSLETTER_TEST_RECIPIENTS: "owner@example.com", DATABASE_URL: "postgres://localhost/test", RESEND_API_KEY: "test-key", NEWSLETTER_FROM: "Test <test@example.com>" });
const feed = (channel: "news" | "academy"): NewsletterFeedEntry[] => [{ channel, key: channel, order: 1,
  items: Object.fromEntries(locales.map((locale) => [locale, (channel === "news" ? ["n"] : ["ai", "theory"]).map((id) => ({ id, slug: id, title: id, summary: "Reviewed summary", contentLocale: "en" }))])) }];
before(async () => { if (url) db = await isolatedNewsletterDatabase(url); });
beforeEach(async () => { if (db) await db.sql`truncate newsletter_subscribers,newsletter_content,newsletter_state,newsletter_runs,newsletter_worker_lease cascade`; });
after(async () => { if (db) await db.close(); });
async function enroll() {
  const [contact] = await db.sql<{ id: string }[]>`insert into newsletter_subscribers(email,locale,status,consent_version,unsubscribe_token,newsletter_migrated_at)
    values ('owner@example.com','en','active','test','legacy-token',${earlier}) returning id`;
  for (const channel of ["news", "academy"]) await db.sql`insert into newsletter_subscriptions(subscriber_id,channel,locale,status,activated_at,consent_version,consent_source,unsubscribe_token)
    values (${contact.id},${channel},'en','active',${earlier},'test','confirmed',${`token-${channel}`})`;
}

integration("one minute worker creates due channels once, handles all locales and deduplicates subsequent invocations", async () => {
  let sent = 0;
  const runtime = createNewsletterRuntime({ sql: db.sql, config, provider: { async send(input) { sent++; return { ok: true, id: `provider-${input.id}` }; } } });
  await runtime.planner.initializeBaseline([], earlier);
  await enroll();
  const options = { now, loadFeed: async (channel: "news" | "academy") => feed(channel), pause: async () => {}, budgetMs: 5000 };
  const first = await executeNewsletterTick(runtime, options);
  assert.equal(first.status, "completed");
  assert.equal(sent, 2);
  await executeNewsletterTick(runtime, options);
  assert.equal(sent, 2);
  assert.equal((await db.sql`select count(*)::int as count from newsletter_runs`)[0].count, 2);
});

integration("News source failures are explicit and do not block independent Academy delivery", async () => {
  let sent = 0;
  const runtime = createNewsletterRuntime({ sql: db.sql, config, provider: { async send(input) { sent++; return { ok: true, id: input.id }; } } });
  await runtime.planner.initializeBaseline([], earlier);
  await enroll();
  const result = await executeNewsletterTick(runtime, { now, budgetMs: 5000, pause: async () => {}, loadFeed: async (channel) => {
    if (channel === "news") throw new Error("sensitive-database-details-must-not-leak");
    return feed(channel);
  } });
  assert.equal(result.status, "completed_with_errors");
  assert.equal(sent, 1);
  assert.ok(result.errors?.some((item) => item.channel === "news"));
  assert.doesNotMatch(JSON.stringify(result), /sensitive-database-details/);
});

integration("dry-run leaves catalog, batch, lease and delivery tables untouched", async () => {
  let sent = 0;
  const runtime = createNewsletterRuntime({ sql: db.sql, config, provider: { async send(input) { sent++; return { ok: true, id: input.id }; } } });
  await runtime.planner.initializeBaseline(feed("academy"), earlier);
  await enroll();
  const beforeCounts = await db.sql`select (select count(*) from newsletter_runs)::int as runs,(select count(*) from newsletter_deliveries)::int as deliveries,(select count(*) from newsletter_worker_lease)::int as leases,(select count(*) from newsletter_content)::int as content`;
  const result = await executeNewsletterTick(runtime, { now, dryRun: true, loadFeed: async (channel) => feed(channel) });
  assert.equal(result.status, "dry_run");
  assert.equal(sent, 0);
  assert.deepEqual(await db.sql`select (select count(*) from newsletter_runs)::int as runs,(select count(*) from newsletter_deliveries)::int as deliveries,(select count(*) from newsletter_worker_lease)::int as leases,(select count(*) from newsletter_content)::int as content`, beforeCounts);
});

integration("later ticks refresh availability before retrying a frozen daily snapshot", async () => {
  let sent = 0;
  let withdrawn = false;
  const runtime = createNewsletterRuntime({ sql: db.sql, config, provider: { async send(input) {
    sent++;
    return sent === 1 ? { ok: false, code: "rate_limit_exceeded", retryable: true, ambiguous: false } : { ok: true, id: input.id };
  } } });
  await runtime.planner.initializeBaseline([], earlier);
  await enroll();
  const options = { now, onlyChannel: "news" as const, budgetMs: 5000, pause: async () => {}, loadFeed: async () => withdrawn ? [] : feed("news") };
  await executeNewsletterTick(runtime, options);
  assert.equal(sent, 1);
  withdrawn = true;
  await executeNewsletterTick(runtime, { ...options, now: new Date(now.getTime()+70_000) });
  assert.equal(sent, 1);
  assert.equal((await db.sql`select status from newsletter_deliveries where kind='digest'`)[0].status, "cancelled");
  assert.equal((await db.sql`select available from newsletter_content`)[0].available, false);
  assert.equal((await db.sql`select catalog from newsletter_runs`)[0].catalog.length, 1, "frozen batch content is not rewritten");
});

integration("availability source failures pause that channel's queued mail without advancing attempts", async () => {
  let sent = 0;
  let unavailable = false;
  const runtime = createNewsletterRuntime({ sql: db.sql, config, provider: { async send() { sent++; return { ok: false, code: "rate_limit_exceeded", retryable: true, ambiguous: false }; } } });
  await runtime.planner.initializeBaseline([], earlier);
  await enroll();
  const options = { now, onlyChannel: "news" as const, budgetMs: 5000, pause: async () => {}, loadFeed: async () => {
    if (unavailable) throw new Error("source unavailable");
    return feed("news");
  } };
  await executeNewsletterTick(runtime, options);
  unavailable = true;
  const result = await executeNewsletterTick(runtime, { ...options, now: new Date(now.getTime()+70_000) });
  assert.equal(result.status, "completed_with_errors");
  assert.equal(sent, 1);
  assert.equal((await db.sql`select attempt_count from newsletter_deliveries where kind='digest'`)[0].attempt_count, 1);
});
