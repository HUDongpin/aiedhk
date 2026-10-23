import assert from "node:assert/strict";
import test, { before, after, beforeEach } from "node:test";
import { createNewsletterRuntime } from "@/lib/newsletter/service";
import { readNewsletterConfig } from "@/lib/newsletter/config";
import { isolatedNewsletterDatabase } from "./helpers/newsletter-db";
import type { NewsletterProvider } from "@/lib/newsletter/provider";

const url = process.env.NEWSLETTER_TEST_DATABASE_URL;
const integration = url ? test : test.skip;
let db: Awaited<ReturnType<typeof isolatedNewsletterDatabase>>;
const now = new Date("2026-10-23T00:00:00Z");
const config = readNewsletterConfig({ NEWSLETTER_DELIVERY_MODE: "test", NEWSLETTER_TEST_RECIPIENTS: "owner@example.com", DATABASE_URL: "postgres://localhost/test", RESEND_API_KEY: "test-key", NEWSLETTER_FROM: "Test <test@example.com>" });
before(async () => { if (url) db = await isolatedNewsletterDatabase(url); });
beforeEach(async () => { if (db) await db.sql`truncate newsletter_subscribers cascade`; });
after(async () => { if (db) await db.close(); });

integration("the signup response only promises confirmation once the provider has accepted the message", async () => {
  let sends = 0;
  const provider: NewsletterProvider = { async send() { sends++; return { ok: false, code: "application_error", retryable: true, ambiguous: true }; } };
  const service = createNewsletterRuntime({ sql: db.sql, config, provider, clock: () => now });
  const result = await service.subscribe({ email: "owner@example.com", channel: "news", locale: "en" });
  assert.equal(result.status, "confirmation_failed");
  assert.equal(result.httpStatus, 503);
  assert.equal(sends, 1);
  assert.equal((await db.sql`select status from newsletter_subscriptions`)[0].status, "pending");
});
integration("provider acceptance creates a pending response, and email inspection alone never activates", async () => {
  const provider: NewsletterProvider = { async send(input) { return { ok: true, id: "provider-" + input.id }; } };
  const service = createNewsletterRuntime({ sql: db.sql, config, provider, clock: () => now });
  assert.deepEqual(await service.subscribe({ email: "owner@example.com", channel: "academy", locale: "fr" }), { status: "pending_confirmation", httpStatus: 202 });
  const [confirmation] = await db.sql<{ token: string }[]>`select token from newsletter_confirmations`;
  assert.equal((await service.subscriptions.inspectConfirmation(confirmation.token, now)).status, "pending");
  assert.equal((await db.sql`select status from newsletter_subscriptions`)[0].status, "pending");
});
integration("off mode, disallowed recipients, and honeypots cannot enqueue or send mail", async () => {
  let sends = 0;
  const provider: NewsletterProvider = { async send() { sends++; return { ok: true, id: "unexpected" }; } };
  const service = createNewsletterRuntime({ sql: db.sql, config, provider, clock: () => now });
  assert.equal((await service.subscribe({ email: "other@example.com", channel: "news" })).httpStatus, 503);
  assert.equal((await service.subscribe({ email: "owner@example.com", channel: "news", honeypot: "spam" })).httpStatus, 202);
  const disabled = createNewsletterRuntime({ sql: db.sql, config: { ...config, mode: "off", sendConfigured: false }, provider, clock: () => now });
  assert.equal((await disabled.subscribe({ email: "owner@example.com", channel: "news" })).httpStatus, 503);
  assert.equal(sends, 0);
  assert.equal((await db.sql`select count(*)::int as count from newsletter_subscribers`)[0].count, 0);
});
