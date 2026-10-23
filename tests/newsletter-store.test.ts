import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import test, { before, after, beforeEach } from "node:test";
import postgres from "postgres";
import { NewsletterSubscriptions } from "@/lib/newsletter/subscriptions";
import { renderNewsletterConfirmation } from "@/lib/newsletter/templates";
import { isolatedNewsletterDatabase } from "./helpers/newsletter-db";

const url = process.env.NEWSLETTER_TEST_DATABASE_URL;
const integration = url ? test : test.skip;
let fixtureDatabase: Awaited<ReturnType<typeof isolatedNewsletterDatabase>>;
let sql: ReturnType<typeof postgres>;
let subscriptions: NewsletterSubscriptions;
const now = new Date("2026-10-23T00:00:00Z");
const options = { origin: "https://www.aied.hk", renderConfirmation: renderNewsletterConfirmation };

before(async () => {
  if (!url) return;
  fixtureDatabase = await isolatedNewsletterDatabase(url);
  sql = fixtureDatabase.sql;
  subscriptions = new NewsletterSubscriptions(sql, options);
});
beforeEach(async () => { if (sql) await sql`truncate newsletter_subscribers cascade`; });
after(async () => {
  if (fixtureDatabase) await fixtureDatabase.close();
});

async function latestConfirmation(email: string, scope = "news") {
  const [row] = await sql<{ token: string; id: string }[]>`
    select c.token, c.id from newsletter_confirmations c join newsletter_subscribers s on s.id = c.subscriber_id
    where s.email = ${email} and c.scope = ${scope} order by c.created_at desc limit 1`;
  assert.ok(row);
  return row;
}

integration("independent channels stay pending until explicit confirmation and do not overwrite locales", async () => {
  const news = await subscriptions.subscribe({ email: "Owner@Example.com", channel: "news", locale: "en", sourcePath: "/en/news", now });
  assert.equal(news.status, "pending_confirmation");
  const academy = await subscriptions.subscribe({ email: "owner@example.com", channel: "academy", locale: "zh-hans", sourcePath: "/zh-hans/academy", now });
  assert.equal(academy.status, "pending_confirmation");
  assert.equal((await sql`select * from newsletter_subscriptions where status = 'active'`).length, 0);
  const newsToken = await latestConfirmation("owner@example.com");
  const academyToken = await latestConfirmation("owner@example.com", "academy");
  assert.equal((await subscriptions.inspectConfirmation(newsToken.token, now)).status, "pending");
  assert.equal((await sql`select * from newsletter_subscriptions where status = 'active'`).length, 0, "GET inspection must not activate");
  assert.equal((await subscriptions.confirm(newsToken.token, undefined, now)).status, "confirmed");
  assert.equal((await subscriptions.confirm(academyToken.token, undefined, now)).status, "confirmed");
  const rows = await sql`select channel,locale,status from newsletter_subscriptions order by channel`;
  assert.deepEqual(Array.from(rows), [{ channel: "academy", locale: "zh-hans", status: "active" }, { channel: "news", locale: "en", status: "active" }]);
});

integration("locale changes require confirmation while preserving the active subscription", async () => {
  await subscriptions.subscribe({ email: "owner@example.com", channel: "news", locale: "en", now });
  await subscriptions.confirm((await latestConfirmation("owner@example.com")).token, undefined, now);
  const later = new Date(now.getTime() + 70_000);
  await subscriptions.subscribe({ email: "owner@example.com", channel: "news", locale: "fr", now: later });
  let [row] = await sql`select locale,status,activated_at from newsletter_subscriptions`;
  assert.equal(row.locale, "en");
  assert.equal(row.status, "active");
  await subscriptions.confirm((await latestConfirmation("owner@example.com")).token, undefined, later);
  [row] = await sql`select locale,activated_at from newsletter_subscriptions`;
  assert.equal(row.locale, "fr");
  assert.equal(new Date(row.activated_at).toISOString(), now.toISOString());
});

integration("repeat requests reuse a confirmation, and expired or replayed tokens cannot reactivate", async () => {
  const input = { email: "owner@example.com", channel: "news" as const, locale: "en" as const, now };
  const first = await subscriptions.subscribe(input);
  const second = await subscriptions.subscribe(input);
  assert.equal(first.deliveryId, second.deliveryId);
  assert.equal((await sql`select * from newsletter_deliveries`).length, 1);
  const confirmation = await latestConfirmation(input.email);
  assert.equal((await subscriptions.confirm(confirmation.token, undefined, new Date(now.getTime() + 48 * 3600_000))).status, "expired");
  await subscriptions.confirm(confirmation.token, undefined, now);
  const [row] = await sql<{ unsubscribe_token: string }[]>`select unsubscribe_token from newsletter_subscriptions`;
  await subscriptions.unsubscribe(row.unsubscribe_token, now);
  assert.equal((await subscriptions.confirm(confirmation.token, undefined, now)).status, "already_confirmed");
  assert.equal((await sql`select status from newsletter_subscriptions`)[0].status, "unsubscribed");
});

integration("unsubscribing one channel cancels only its content and pending confirmation deliveries", async () => {
  for (const channel of ["news", "academy"] as const) {
    await subscriptions.subscribe({ email: "owner@example.com", channel, locale: "en", now });
    await subscriptions.confirm((await latestConfirmation("owner@example.com", channel)).token, undefined, now);
  }
  const rows = await sql<{ id: string; channel: string; subscriber_id: string; unsubscribe_token: string }[]>`select * from newsletter_subscriptions order by channel`;
  for (const row of rows) await sql`insert into newsletter_deliveries (subscriber_id,subscription_id,channel,locale,kind,logical_key,payload) values (${row.subscriber_id},${row.id},${row.channel},'en','digest',${`test:${row.id}`},${sql.json({ subject: "test", html: "test", text: "test" })})`;
  const news = rows.find((row) => row.channel === "news")!;
  await subscriptions.unsubscribe(news.unsubscribe_token, now);
  const states = await sql`select channel,status from newsletter_subscriptions order by channel`;
  assert.deepEqual(Array.from(states), [{ channel: "academy", status: "active" }, { channel: "news", status: "unsubscribed" }]);
  assert.equal((await sql`select status from newsletter_deliveries where logical_key = ${`test:${news.id}`}`)[0].status, "cancelled");
  assert.equal((await sql`select status from newsletter_deliveries where kind = 'digest' and channel = 'academy'`)[0].status, "queued");
});

integration("legacy migration is repeatable, preserves stops, and does not invent channel consent", async () => {
  const records = [
    ["news@example.com", "active", "/en/news"],
    ["academy@example.com", "active", "/zh-hans/academy"],
    ["unknown@example.com", "active", ""],
    ["stopped@example.com", "unsubscribed", "/en/news"],
    ["bounced@example.com", "bounced", "/en/academy"],
  ];
  for (const [email, status, source] of records) await sql`insert into newsletter_subscribers(email,status,source_path,consent_version,unsubscribe_token) values (${email},${status},${source},'research-news-daily-v1',${randomUUID()})`;
  const preview = await subscriptions.migrateLegacy({ dryRun: true, now });
  assert.equal(preview.count, 5);
  assert.equal((await sql`select * from newsletter_subscriptions`).length, 0);
  await subscriptions.migrateLegacy({ dryRun: false, now });
  await subscriptions.migrateLegacy({ dryRun: false, now });
  const active = await sql`select s.email,n.channel,n.confirmed_at from newsletter_subscriptions n join newsletter_subscribers s on s.id=n.subscriber_id where n.status='active'`;
  assert.equal(active.length, 1);
  assert.equal(active[0].email, "news@example.com");
  assert.equal(active[0].confirmed_at, null);
  assert.equal((await sql`select * from newsletter_deliveries where kind='migration'`).length, 2);
  const choose = await latestConfirmation("unknown@example.com", "choose");
  assert.equal((await subscriptions.confirm(choose.token, [], now)).status, "choose_required");
  assert.equal((await subscriptions.confirm(choose.token, ["academy"], now)).status, "confirmed");
  assert.equal((await sql`select count(*)::int as count from newsletter_subscriptions n join newsletter_subscribers s on s.id=n.subscriber_id where s.email='unknown@example.com' and n.status='active'`)[0].count, 1);
  const [legacy] = await sql<{ unsubscribe_token: string }[]>`select unsubscribe_token from newsletter_subscribers where email='news@example.com'`;
  assert.equal((await subscriptions.unsubscribe(legacy.unsubscribe_token, now)).status, "unsubscribed");
});

integration("suppression and mailbox rate limits cannot be bypassed by another channel", async () => {
  await subscriptions.subscribe({ email: "owner@example.com", channel: "news", locale: "en", now });
  await sql`update newsletter_subscribers set suppressed_at=${now},suppression_reason='complaint' where email='owner@example.com'`;
  assert.equal((await subscriptions.subscribe({ email: "owner@example.com", channel: "academy", locale: "en", now })).status, "suppressed");
  for (const [i, locale] of (["en", "fr", "de", "es", "pt"] as const).entries()) {
    await subscriptions.subscribe({ email: "limit@example.com", channel: "news", locale, now: new Date(now.getTime() + i * 70_000) });
  }
  assert.equal((await subscriptions.subscribe({ email: "limit@example.com", channel: "academy", locale: "en", now: new Date(now.getTime() + 6 * 70_000) })).status, "rate_limited");
});
