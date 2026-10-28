import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { GET as worker } from "@/app/api/cron/newsletter/route";
import { GET as legacy } from "@/app/api/cron/research-newsletter/route";
import { dueNewsletterChannels } from "@/lib/newsletter/policy";

test("one multilingual newsletter worker retains channel times while ingestion is unchanged", () => {
  const config = JSON.parse(readFileSync("vercel.json", "utf8")) as { crons: Array<{ path: string; schedule: string }> };
  assert.ok(config.crons.some(({ path }) => path === "/api/cron/newsletter"));
  assert.deepEqual(config.crons.filter(({ path }) => path !== "/api/cron/newsletter"), [
    { path: "/api/cron/research-ingest", schedule: "0 1 * * 1" },
  ]);
  assert.deepEqual(dueNewsletterChannels(new Date("2026-10-23T01:19:00Z")), []);
  assert.deepEqual(dueNewsletterChannels(new Date("2026-10-23T01:20:00Z")), ["news"]);
  assert.deepEqual(dueNewsletterChannels(new Date("2026-10-23T01:30:00Z")), ["news", "academy"]);
});

test("new and compatibility cron routes require authentication and honor the off switch without database access", async () => {
  const previousSecret = process.env.CRON_SECRET;
  const previousMode = process.env.NEWSLETTER_DELIVERY_MODE;
  process.env.CRON_SECRET = "newsletter-test-only-secret";
  process.env.NEWSLETTER_DELIVERY_MODE = "off";
  try {
    for (const handler of [worker, legacy]) {
      const denied = await handler(new Request("https://www.aied.hk/api/cron/newsletter"));
      assert.equal(denied.status, 401);
      const disabled = await handler(new Request("https://www.aied.hk/api/cron/newsletter", { headers: { authorization: "Bearer newsletter-test-only-secret" } }));
      assert.deepEqual(await disabled.json(), { status: "disabled" });
    }
  } finally {
    if (previousSecret === undefined) delete process.env.CRON_SECRET; else process.env.CRON_SECRET = previousSecret;
    if (previousMode === undefined) delete process.env.NEWSLETTER_DELIVERY_MODE; else process.env.NEWSLETTER_DELIVERY_MODE = previousMode;
  }
});
