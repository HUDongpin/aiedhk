import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

function source(path: string) {
  return readFileSync(join(process.cwd(), path), "utf8");
}

test("the daily newsletter localizes subject, body, and CTA per subscriber locale", () => {
  const cronSource = source("app/api/cron/research-newsletter/route.ts");

  assert.match(cronSource, /const emailCopy: Partial<Record<Locale, EmailCopy>>/);
  assert.match(cronSource, /"zh-hant":/);
  assert.match(cronSource, /"zh-hans":/);
  // subject/heading come from the locale copy, not a hardcoded English string
  assert.match(cronSource, /subject: copy\.subject/);
  assert.match(cronSource, /copyFor\(input\.subscriber\.locale\)/);
  assert.match(cronSource, /Daily Research News/);
  assert.doesNotMatch(cronSource, /Weekly Research News/);
});

test("newsletter delivery isolates per-recipient failures", () => {
  const cronSource = source("app/api/cron/research-newsletter/route.ts");

  assert.match(cronSource, /Promise\.allSettled/);
  assert.doesNotMatch(cronSource, /await Promise\.all\(/);
});

test("vercel schedules localized newsletters daily while ingestion remains weekly", () => {
  const config = JSON.parse(source("vercel.json")) as { crons: Array<{ path: string; schedule: string }> };
  const scheduleFor = (path: string) => config.crons.find((cron) => cron.path === path)?.schedule;

  assert.equal(scheduleFor("/api/cron/research-newsletter?language=en"), "20 1 * * *");
  assert.equal(scheduleFor("/api/cron/research-newsletter?language=zh-hant"), "21 1 * * *");
  assert.equal(scheduleFor("/api/cron/research-newsletter?language=zh-hans"), "22 1 * * *");
  assert.equal(scheduleFor("/api/cron/research-ingest"), "0 1 * * 1");
});

test("daily newsletter delivery skips an empty digest before loading subscribers", () => {
  const cronSource = source("app/api/cron/research-newsletter/route.ts");
  const emptyDigestGuard = cronSource.indexOf('if (digest.items.length === 0)');
  const subscriberQuery = cronSource.indexOf("getActiveResearchNewsletterSubscribers()");

  assert.ok(emptyDigestGuard >= 0);
  assert.ok(subscriberQuery > emptyDigestGuard);
  assert.match(cronSource, /status: "skipped_empty_digest"/);
});
