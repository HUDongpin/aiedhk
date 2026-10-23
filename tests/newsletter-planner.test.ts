import assert from "node:assert/strict";
import test, { before, after, beforeEach } from "node:test";
import { NewsletterPlanner } from "@/lib/newsletter/planner";
import { isolatedNewsletterDatabase } from "./helpers/newsletter-db";
import { locales } from "@/lib/i18n";
import type { CatalogEntry } from "@/lib/newsletter/policy";

const url = process.env.NEWSLETTER_TEST_DATABASE_URL;
const integration = url ? test : test.skip;
let db: Awaited<ReturnType<typeof isolatedNewsletterDatabase>>;
let planner: NewsletterPlanner;
const start = new Date("2026-10-20T00:00:00Z");
const now = new Date("2026-10-23T01:30:00Z");
function entry(key: string, channel: "news" | "academy" = "news", order = 1): CatalogEntry {
  return { key, channel, order, firstSeenAt: start.toISOString(), baseline: false,
    items: Object.fromEntries(locales.map((locale) => [locale, (channel === "news" ? [key] : [key + "-ai", key + "-theory"]).map((id) => ({ id, slug: id, title: id, summary: `Summary ${id}`, contentLocale: "en" }))])) };
}
before(async () => { if (url) { db = await isolatedNewsletterDatabase(url); planner = new NewsletterPlanner(db.sql, "https://www.aied.hk"); } });
beforeEach(async () => { if (db) await db.sql`truncate newsletter_subscribers,newsletter_content,newsletter_state,newsletter_runs cascade`; });
after(async () => { if (db) await db.close(); });
async function subscriber(count = 1, channel = "news") {
  await db.sql`insert into newsletter_subscribers (email,locale,status,consent_version,unsubscribe_token,newsletter_migrated_at)
    select 'person-' || n || '@example.com','en','active','test','legacy-' || n,${start} from generate_series(1,${count}) n`;
  await db.sql`insert into newsletter_subscriptions (subscriber_id,channel,locale,status,activated_at,confirmed_at,consent_version,consent_source,unsubscribe_token)
    select id,${channel},'en','active',${start},${start},'test','confirmed','channel-' || id from newsletter_subscribers`;
}

integration("baseline initialization is idempotent and late backfill is registered as newly available", async () => {
  await planner.initializeBaseline([entry("historical")], start);
  await planner.initializeBaseline([entry("historical"), entry("must-not-be-baselined")], now);
  assert.equal((await db.sql`select * from newsletter_content`).length, 1);
  await planner.refreshCatalog("news", [entry("historical"), entry("backfilled")], now);
  const rows = await db.sql`select content_key,baseline,first_seen_at from newsletter_content order by content_key`;
  assert.equal(rows[0].content_key, "backfilled");
  assert.equal(rows[0].baseline, false);
  assert.equal(new Date(rows[0].first_seen_at).toISOString(), now.toISOString());
  assert.equal(rows[1].baseline, true);
});

integration("catalog initialization has bounded database roundtrips as the publication list grows", async () => {
  let roundtrips = 0;
  const measured = new Proxy(db.sql, {
    get(target, property, receiver) {
      if (property !== "begin") return Reflect.get(target, property, receiver);
      return (callback: (tx: unknown) => Promise<unknown>) => target.begin((tx) => callback(new Proxy(tx, {
        apply(query, context, args) { roundtrips++; return Reflect.apply(query, context, args); },
      })));
    },
  });
  const bulk = new NewsletterPlanner(measured, "https://www.aied.hk");
  await bulk.initializeBaseline(Array.from({ length: 1001 }, (_, index) => entry(`bulk-${index}`)), start);
  assert.equal((await db.sql`select count(*)::int as count from newsletter_content`)[0].count, 1001);
  assert.ok(roundtrips <= 8, `catalog size must not require one network roundtrip per item: ${roundtrips}`);
});

integration("news skips empty batches and overflow is available the next day without duplicates", async () => {
  await subscriber();
  await planner.initializeBaseline([entry("historical")], start);
  const empty = await planner.ensureRun("news", now, "live");
  await planner.planPage(empty.id, { mode: "live", testRecipients: [] });
  assert.equal((await db.sql`select * from newsletter_deliveries`).length, 0);
  const tomorrow = new Date(now.getTime() + 86400_000);
  const articles = Array.from({ length: 7 }, (_, index) => entry(`new-${index}`, "news", index));
  await planner.refreshCatalog("news", articles, tomorrow);
  const run = await planner.ensureRun("news", tomorrow, "live");
  await planner.planPage(run.id, { mode: "live", testRecipients: [] });
  await planner.planPage(run.id, { mode: "live", testRecipients: [] });
  let deliveries = await db.sql`select * from newsletter_deliveries`;
  assert.equal(deliveries.length, 1);
  assert.equal(deliveries[0].content_keys.length, 5);
  assert.match(deliveries[0].logical_key, /digest:news:2026-10-24:/);
  await db.sql`update newsletter_deliveries set status='accepted'`;
  const later = await planner.ensureRun("news", new Date(tomorrow.getTime() + 86400_000), "live");
  await planner.planPage(later.id, { mode: "live", testRecipients: [] });
  deliveries = await db.sql`select * from newsletter_deliveries order by created_at,id`;
  assert.equal(deliveries.length, 2);
  assert.equal(deliveries[1].content_keys.length, 2);
});

integration("paging reaches recipients beyond one thousand and competing planners stay idempotent", async () => {
  await subscriber(1005);
  await planner.initializeBaseline([], start);
  await planner.refreshCatalog("news", [entry("new")], now);
  const [a, b] = await Promise.all([planner.ensureRun("news", now, "live"), planner.ensureRun("news", now, "live")]);
  assert.equal(a.id, b.id);
  for (let page = 0; page < 11; page++) await Promise.all([planner.planPage(a.id, { mode: "live", testRecipients: [] }), planner.planPage(a.id, { mode: "live", testRecipients: [] })]);
  assert.equal((await db.sql`select count(*)::int as count from newsletter_deliveries`)[0].count, 1005);
  assert.equal((await db.sql`select status from newsletter_runs`)[0].status, "planned");
});

integration("Academy follows per-recipient pair cycles and labels repeat content", async () => {
  await subscriber(1, "academy");
  await planner.initializeBaseline([entry("pair-1", "academy", 1), entry("pair-2", "academy", 2)], start);
  for (let day = 0; day < 3; day++) {
    const run = await planner.ensureRun("academy", new Date(now.getTime() + day * 86400_000), "live");
    await planner.planPage(run.id, { mode: "live", testRecipients: [] });
    await db.sql`update newsletter_deliveries set status='accepted'`;
  }
  const rows = await db.sql`select content_keys,academy_cycle,payload from newsletter_deliveries order by created_at,id`;
  assert.deepEqual(rows.map((row) => row.content_keys), [["pair-1"], ["pair-2"], ["pair-1"]]);
  assert.deepEqual(rows.map((row) => row.academy_cycle), [1,1,2]);
  assert.match(rows[2].payload.subject, /Review/);
});

integration("test delivery is allowlisted and dry-run never creates records or advances progress", async () => {
  await subscriber(2, "academy");
  await planner.initializeBaseline([entry("pair", "academy")], start);
  const beforeCounts = await db.sql`select (select count(*) from newsletter_runs)::int as runs,(select count(*) from newsletter_deliveries)::int as deliveries`;
  const preview = await planner.preview("academy", now, { mode: "test", testRecipients: ["person-2@example.com"] });
  assert.equal(preview.eligibleCount, 1);
  assert.ok(preview.example?.html);
  assert.deepEqual(await db.sql`select (select count(*) from newsletter_runs)::int as runs,(select count(*) from newsletter_deliveries)::int as deliveries`, beforeCounts);
  const run = await planner.ensureRun("academy", now, "test");
  await planner.planPage(run.id, { mode: "test", testRecipients: ["person-2@example.com"] });
  assert.equal((await db.sql`select count(*)::int as count from newsletter_deliveries`)[0].count, 1);
});
