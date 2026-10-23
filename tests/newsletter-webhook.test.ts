import assert from "node:assert/strict";
import { createHmac, randomBytes } from "node:crypto";
import test from "node:test";
import { createNewsletterWebhookHandler } from "@/lib/newsletter/webhook";

const bytes = randomBytes(32);
const secret = `whsec_${bytes.toString("base64")}`;
function signed(body: string, id = "event-test", time = Math.floor(Date.now()/1000)) {
  const signature = createHmac("sha256", bytes).update(`${id}.${time}.${body}`).digest("base64");
  return new Request("https://www.aied.hk/api/newsletter/webhook", { method: "POST", headers: { "svix-id": id, "svix-timestamp": String(time), "svix-signature": `v1,${signature}`, "content-type": "application/json" }, body });
}
test("webhook authentication verifies the untouched body and passes only normalized delivery metadata", async () => {
  const events: unknown[] = [];
  const handler = createNewsletterWebhookHandler({ secret, record: async (event) => { events.push(event); } });
  const body = JSON.stringify({ type: "email.delivered", created_at: new Date().toISOString(), data: { email_id: "provider-id", to: ["private@example.com"], tags: { aiedhk_delivery: "4a972cbb-b25f-4381-9ec2-0627dd246442" } } });
  const response = await handler(signed(body));
  assert.equal(response.status, 200);
  assert.equal(events.length, 1);
  assert.doesNotMatch(JSON.stringify(events), /private@example.com/);
  assert.match(JSON.stringify(events), /provider-id/);
});
test("tampered, stale, oversized and unconfigured webhook requests cannot mutate delivery records", async () => {
  let count = 0;
  const handler = createNewsletterWebhookHandler({ secret, record: async () => { count++; } });
  const body = JSON.stringify({ type: "email.delivered", created_at: new Date().toISOString(), data: { email_id: "provider-id" } });
  const original = signed(body);
  const tampered = new Request(original.url, { method: "POST", headers: original.headers, body: body + " " });
  assert.equal((await handler(tampered)).status, 400);
  assert.equal((await handler(signed(body, "stale", Math.floor(Date.now()/1000)-600))).status, 400);
  assert.equal((await handler(signed("x".repeat(70_000)))).status, 413);
  assert.equal((await createNewsletterWebhookHandler({ secret: "", record: async () => { count++; } })(signed(body))).status, 503);
  assert.equal(count, 0);
});

test("verified bounce classification is retained without recipient data", async () => {
  const events: unknown[] = [];
  const handler = createNewsletterWebhookHandler({ secret, record: async (event) => { events.push(event); } });
  const body = JSON.stringify({ type: "email.bounced", created_at: new Date().toISOString(), data: { email_id: "provider-id", bounce: { type: "Transient", subType: "MailboxFull", message: "private response" } } });
  assert.equal((await handler(signed(body))).status, 200);
  assert.equal((events[0] as { bounceType?: string }).bounceType, "Transient");
  assert.doesNotMatch(JSON.stringify(events), /private response/);
});
