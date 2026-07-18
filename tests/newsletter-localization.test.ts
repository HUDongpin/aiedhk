import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

function source(path: string) {
  return readFileSync(join(process.cwd(), path), "utf8");
}

test("the weekly newsletter localizes subject, body, and CTA per subscriber locale", () => {
  const cronSource = source("app/api/cron/research-newsletter/route.ts");

  assert.match(cronSource, /const emailCopy: Partial<Record<Locale, EmailCopy>>/);
  assert.match(cronSource, /"zh-hant":/);
  assert.match(cronSource, /"zh-hans":/);
  // subject/heading come from the locale copy, not a hardcoded English string
  assert.match(cronSource, /subject: copy\.subject/);
  assert.match(cronSource, /copyFor\(input\.subscriber\.locale\)/);
});

test("newsletter delivery isolates per-recipient failures", () => {
  const cronSource = source("app/api/cron/research-newsletter/route.ts");

  assert.match(cronSource, /Promise\.allSettled/);
  assert.doesNotMatch(cronSource, /await Promise\.all\(/);
});

test("vercel schedules localized newsletter crons for zh-hant and zh-hans", () => {
  const config = JSON.parse(source("vercel.json")) as { crons: Array<{ path: string; schedule: string }> };
  const paths = config.crons.map((cron) => cron.path);

  assert.ok(paths.includes("/api/cron/research-newsletter?language=en"));
  assert.ok(paths.includes("/api/cron/research-newsletter?language=zh-hant"));
  assert.ok(paths.includes("/api/cron/research-newsletter?language=zh-hans"));
});
