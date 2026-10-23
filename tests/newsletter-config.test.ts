import assert from "node:assert/strict";
import test from "node:test";
import { readNewsletterConfig, recipientAllowed } from "@/lib/newsletter/config";

test("newsletter sending defaults off even when old provider credentials exist", () => {
  const config = readNewsletterConfig({ DATABASE_URL: "postgres://localhost/test", RESEND_API_KEY: "test-key", NEWSLETTER_FROM: "Test <test@example.com>" });
  assert.equal(config.mode, "off");
  assert.equal(config.sendConfigured, false);
  assert.equal(recipientAllowed(config, "person@example.com"), false);
});
test("test mode only permits the explicitly configured normalized mailbox list", () => {
  const config = readNewsletterConfig({ NEWSLETTER_DELIVERY_MODE: "test", NEWSLETTER_TEST_RECIPIENTS: "Owner@Example.com, second@example.com", DATABASE_URL: "postgres://localhost/test", RESEND_API_KEY: "test-key", NEWSLETTER_FROM: "Test <test@example.com>" });
  assert.equal(config.sendConfigured, true);
  assert.equal(recipientAllowed(config, "owner@example.com"), true);
  assert.equal(recipientAllowed(config, "unrelated@example.com"), false);
});
test("live sending requires event verification configuration and invalid settings fail closed", () => {
  const base = { NEWSLETTER_DELIVERY_MODE: "live", DATABASE_URL: "postgres://localhost/test", RESEND_API_KEY: "test-key", NEWSLETTER_FROM: "Test <test@example.com>" };
  assert.equal(readNewsletterConfig(base).sendConfigured, false);
  assert.equal(readNewsletterConfig({ ...base, RESEND_WEBHOOK_SECRET: "test-signing-secret" }).sendConfigured, true);
  assert.equal(readNewsletterConfig({ ...base, NEWSLETTER_DELIVERY_MODE: "true" }).mode, "off");
  assert.equal(readNewsletterConfig({ ...base, NEWSLETTER_PUBLIC_ORIGIN: "javascript:alert(1)" }).sendConfigured, false);
});
test("origins are server controlled and preview links use the platform deployment origin", () => {
  assert.equal(readNewsletterConfig({}).origin, "https://www.aied.hk");
  assert.equal(readNewsletterConfig({ VERCEL_ENV: "preview", VERCEL_URL: "preview.example.vercel.app" }).origin, "https://preview.example.vercel.app");
  assert.equal(readNewsletterConfig({ NEWSLETTER_PUBLIC_ORIGIN: "https://www.aied.hk/path?token=x" }).sendConfigured, false);
});
