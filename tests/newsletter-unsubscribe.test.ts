import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
import { buildUnsubscribeUrl, NEWSLETTER_CONSENT_VERSION } from "@/lib/newsletter";

function source(path: string) {
  return readFileSync(join(process.cwd(), path), "utf8");
}

test("buildUnsubscribeUrl produces a token-bearing absolute URL", () => {
  assert.equal(
    buildUnsubscribeUrl("https://www.aied.hk", "abc123"),
    "https://www.aied.hk/api/newsletter/unsubscribe?token=abc123"
  );
  // trailing slashes on the origin should not double up
  assert.equal(
    buildUnsubscribeUrl("https://www.aied.hk/", "a b"),
    "https://www.aied.hk/api/newsletter/unsubscribe?token=a%20b"
  );
});

test("the public unsubscribe route exists with GET and one-click POST handlers", () => {
  const routePath = "app/api/newsletter/unsubscribe/route.ts";
  assert.ok(existsSync(join(process.cwd(), routePath)), "unsubscribe route should exist");

  const routeSource = source(routePath);
  assert.match(routeSource, /export async function GET/);
  assert.match(routeSource, /export async function POST/);
  assert.match(routeSource, /unsubscribeFromResearchNewsletter/);
});

test("the daily newsletter sends a compliant unsubscribe link and headers", () => {
  const cronSource = source("app/api/cron/research-newsletter/route.ts");

  assert.match(cronSource, /buildUnsubscribeUrl/);
  assert.match(cronSource, /"List-Unsubscribe":/);
  assert.match(cronSource, /"List-Unsubscribe-Post":\s*"List-Unsubscribe=One-Click"/);
  // both the HTML and plain-text bodies must carry the (localized) unsubscribe link
  assert.match(cronSource, /\$\{copy\.unsubscribe\}:\s*\$\{unsubscribeUrl\}/);
  assert.match(cronSource, /href="\$\{unsubscribeUrl\}"/);
});

test("newsletter consent and unsubscribe copy reflect daily delivery", () => {
  const unsubscribeSource = source("app/api/newsletter/unsubscribe/route.ts");

  assert.equal(NEWSLETTER_CONSENT_VERSION, "research-news-daily-v1");
  assert.match(unsubscribeSource, /daily research news/i);
  assert.doesNotMatch(unsubscribeSource, /weekly research news/i);
});
