import assert from "node:assert/strict";
import test from "node:test";
import { buildUnsubscribeUrl } from "@/lib/newsletter";
import { createNewsletterHttpHandlers, type NewsletterHttpService } from "@/lib/newsletter/http";
import { getNewsletterCopy } from "@/lib/newsletter/messages";
import { locales } from "@/lib/i18n";

function service(overrides: Partial<NewsletterHttpService> = {}): NewsletterHttpService {
  const unexpected = async (): Promise<never> => { throw new Error("Unexpected service call"); };
  return { subscribeNewsletter: unexpected, inspectNewsletterConfirmation: unexpected, confirmNewsletter: unexpected, inspectNewsletterUnsubscribe: unexpected, unsubscribeNewsletter: unexpected, ...overrides };
}

function oneClick(token: string) {
  return new Request(`https://www.aied.hk/api/newsletter/unsubscribe?token=${token}`, { method: "POST", body: new URLSearchParams({ "List-Unsubscribe": "One-Click" }) });
}

test("buildUnsubscribeUrl produces a token-bearing absolute URL", () => {
  assert.equal(buildUnsubscribeUrl("https://www.aied.hk", "abc123"), "https://www.aied.hk/api/newsletter/unsubscribe?token=abc123");
  assert.equal(buildUnsubscribeUrl("https://www.aied.hk/", "a b"), "https://www.aied.hk/api/newsletter/unsubscribe?token=a%20b");
});

test("unsubscribe GET is read-only and presents the matching channel in every locale", async () => {
  const mutations: string[] = [];
  for (const locale of locales) {
    const handlers = createNewsletterHttpHandlers(service({
      inspectNewsletterUnsubscribe: async () => ({ status: "found", locale, channels: ["academy"] }),
      unsubscribeNewsletter: async (token) => { mutations.push(token); return { status: "unsubscribed" }; },
    }));
    const response = await handlers.unsubscribeGet(new Request("https://www.aied.hk/api/newsletter/unsubscribe?token=academy"));
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.ok(html.includes(getNewsletterCopy(locale, "academy").unsubscribeMessage));
    assert.match(html, /<form method="post" action="\/api\/newsletter\/unsubscribe\?token=academy">/);
    assert.match(html, /name="intent" value="unsubscribe"/);
    assert.doesNotMatch(html, /type="checkbox"|name="channels"/);
    assert.equal(response.headers.get("cache-control"), "no-store");
    assert.equal(response.headers.get("referrer-policy"), "no-referrer");
    assert.equal(response.headers.get("x-robots-tag"), "noindex, nofollow");
  }
  assert.deepEqual(mutations, []);
});

test("browser unsubscribe POST cancels only the token's subscription and renders localized success", async () => {
  const calls: string[] = [];
  const handlers = createNewsletterHttpHandlers(service({ unsubscribeNewsletter: async (token) => {
    calls.push(token);
    return { status: "unsubscribed", locale: "de", channels: ["academy"] };
  } }));
  const response = await handlers.unsubscribePost(new Request("https://www.aied.hk/api/newsletter/unsubscribe?token=academy", { method: "POST", body: new URLSearchParams({ intent: "unsubscribe", channels: "news" }) }));
  assert.deepEqual(calls, ["academy"]);
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.ok(html.includes(getNewsletterCopy("de", "academy").unsubscribeSuccess));
  assert.doesNotMatch(html, /<form\b/);
});

test("legacy unsubscribe lists all targets with neutral wording in every locale", async () => {
  for (const locale of locales) {
    const handlers = createNewsletterHttpHandlers(service({ inspectNewsletterUnsubscribe: async () => ({ status: "found", locale, channels: ["news", "academy"] }) }));
    const response = await handlers.unsubscribeGet(new Request("https://www.aied.hk/api/newsletter/unsubscribe?token=legacy"));
    const html = await response.text();
    const copy = getNewsletterCopy(locale, "news");
    assert.equal(response.status, 200);
    assert.ok(html.includes(copy.unsubscribeMultipleMessage));
    assert.ok(html.includes(`<li>${copy.newsLabel}</li>`));
    assert.ok(html.includes(`<li>${copy.academyLabel}</li>`));
    assert.ok(!html.includes(copy.unsubscribeMessage));
    assert.ok(!html.includes(getNewsletterCopy(locale, "academy").unsubscribeMessage));
  }
});

test("unknown unsubscribe targets and successful cancellation do not invent a News subscription", async () => {
  for (const locale of locales) {
    const handlers = createNewsletterHttpHandlers(service({
      inspectNewsletterUnsubscribe: async () => ({ status: "found", locale, channels: [] }),
      unsubscribeNewsletter: async () => ({ status: "unsubscribed", locale, channels: [] }),
    }));
    const copy = getNewsletterCopy(locale, "news");
    const page = await (await handlers.unsubscribeGet(new Request("https://www.aied.hk/api/newsletter/unsubscribe?token=unknown-target"))).text();
    assert.ok(page.includes(copy.unsubscribeUnknownMessage));
    assert.ok(!page.includes(copy.newsLabel));
    assert.ok(!page.includes(copy.academyLabel));
    assert.ok(!page.includes(copy.unsubscribeMessage));
    const result = await handlers.unsubscribePost(new Request("https://www.aied.hk/api/newsletter/unsubscribe?token=unknown-target", { method: "POST", body: new URLSearchParams({ intent: "unsubscribe" }) }));
    assert.equal(result.status, 200);
    const html = await result.text();
    assert.ok(html.includes(copy.unsubscribeSuccessUnknown));
    assert.ok(!html.includes(copy.unsubscribeSuccess));
  }
});

test("legacy unsubscribe success names every cancelled newsletter", async () => {
  const handlers = createNewsletterHttpHandlers(service({ unsubscribeNewsletter: async () => ({ status: "unsubscribed", locale: "en", channels: ["news", "academy"] }) }));
  const result = await handlers.unsubscribePost(new Request("https://www.aied.hk/api/newsletter/unsubscribe?token=legacy", { method: "POST", body: new URLSearchParams({ intent: "unsubscribe" }) }));
  const html = await result.text();
  assert.equal(result.status, 200);
  for (const channel of ["news", "academy"] as const) assert.ok(html.includes(getNewsletterCopy("en", channel).unsubscribeSuccess));
  assert.doesNotMatch(html, /other newsletter subscriptions will remain active|<form\b/);
});

test("RFC8058 one-click unsubscribe POST returns identical generic success for valid and unknown tokens", async () => {
  const calls: string[] = [];
  const handlers = createNewsletterHttpHandlers(service({ unsubscribeNewsletter: async (token) => {
    calls.push(token);
    return { status: token === "known" ? "unsubscribed" : "not_found", locale: "en", channels: ["news"] };
  } }));
  for (const token of ["known", "unknown"]) {
    const response = await handlers.unsubscribePost(oneClick(token));
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { status: "ok" });
  }
  assert.deepEqual(calls, ["known", "unknown"]);
});

test("RFC8058 multipart one-click POST accepts FormData and returns generic success without token disclosure", async () => {
  const calls: string[] = [];
  const handlers = createNewsletterHttpHandlers(service({ unsubscribeNewsletter: async (token) => {
    calls.push(token);
    return { status: token === "private-known-token" ? "unsubscribed" : "not_found", locale: "en", channels: ["news"] };
  } }));
  for (const token of ["private-known-token", "private-unknown-token"]) {
    const form = new FormData();
    form.set("List-Unsubscribe", "One-Click");
    const response = await handlers.unsubscribePost(new Request(`https://www.aied.hk/api/newsletter/unsubscribe?token=${token}`, { method: "POST", body: form }));
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { status: "ok" });
  }
  assert.deepEqual(calls, ["private-known-token", "private-unknown-token"]);
});

test("multipart unsubscribe enforces the byte limit before parsing even a malformed multipart body", async () => {
  let calls = 0;
  const handlers = createNewsletterHttpHandlers(service({ unsubscribeNewsletter: async () => { calls++; return { status: "unsubscribed" }; } }));
  const form = new FormData();
  form.set("List-Unsubscribe", "One-Click");
  form.set("padding", "界".repeat(3000));
  const generated = new Request("https://www.aied.hk/api/newsletter/unsubscribe?token=private-token", { method: "POST", body: form });
  // Model the server's received bytes. Cancelling Node 24's local FormData
  // producer itself triggers an unrelated undici stream-close rejection.
  const received = new Request(generated.url, { method: "POST", headers: generated.headers, body: await generated.arrayBuffer() });
  const requests = [
    received,
    new Request("https://www.aied.hk/api/newsletter/unsubscribe?token=private-token", { method: "POST", headers: { "content-type": "multipart/form-data; boundary=missing" }, body: "invalid multipart".repeat(600) }),
    new Request("https://www.aied.hk/api/newsletter/unsubscribe?token=private-token", { method: "POST", headers: { "content-type": "multipart/form-data; boundary=missing", "content-length": "9000" }, body: "invalid" }),
  ];
  for (const request of requests) {
    const response = await handlers.unsubscribePost(request);
    assert.equal(response.status, 413);
    assert.deepEqual(await response.json(), { status: "invalid" });
  }
  assert.equal(calls, 0);
});

test("malformed multipart unsubscribe and a file-valued one-click field do not mutate subscriptions", async () => {
  let calls = 0;
  const handlers = createNewsletterHttpHandlers(service({ unsubscribeNewsletter: async () => { calls++; return { status: "unsubscribed" }; } }));
  const form = new FormData();
  form.set("List-Unsubscribe", new Blob(["One-Click"]), "field.txt");
  for (const request of [
    new Request("https://www.aied.hk/api/newsletter/unsubscribe?token=private-token", { method: "POST", headers: { "content-type": "multipart/form-data; boundary=missing" }, body: "invalid" }),
    new Request("https://www.aied.hk/api/newsletter/unsubscribe?token=private-token", { method: "POST", body: form }),
  ]) {
    const response = await handlers.unsubscribePost(request);
    assert.equal(response.status, 400);
    assert.deepEqual(await response.json(), { status: "invalid" });
  }
  assert.equal(calls, 0);
});

test("unsubscribe rejects missing tokens and invalid POST bodies without mutation", async () => {
  let calls = 0;
  const handlers = createNewsletterHttpHandlers(service({
    inspectNewsletterUnsubscribe: async () => { calls++; return { status: "found" }; },
    unsubscribeNewsletter: async () => { calls++; return { status: "unsubscribed" }; },
  }));
  assert.equal((await handlers.unsubscribeGet(new Request("https://www.aied.hk/api/newsletter/unsubscribe"))).status, 400);
  assert.equal((await handlers.unsubscribePost(oneClick(""))).status, 400);
  for (const body of [new URLSearchParams(), new URLSearchParams({ "List-Unsubscribe": "anything" }), new URLSearchParams({ intent: "other" })]) {
    assert.equal((await handlers.unsubscribePost(new Request("https://www.aied.hk/api/newsletter/unsubscribe?token=known", { method: "POST", body }))).status, 400);
  }
  const oversized = new URLSearchParams({ "List-Unsubscribe": "One-Click", padding: "x".repeat(9000) });
  assert.equal((await handlers.unsubscribePost(new Request("https://www.aied.hk/api/newsletter/unsubscribe?token=known", { method: "POST", body: oversized }))).status, 413);
  assert.equal(calls, 0);
});

test("invalid unsubscribe GET does not offer a cancellation action", async () => {
  const handlers = createNewsletterHttpHandlers(service({ inspectNewsletterUnsubscribe: async () => ({ status: "not_found", locale: "en" }) }));
  const response = await handlers.unsubscribeGet(new Request("https://www.aied.hk/api/newsletter/unsubscribe?token=unknown"));
  assert.equal(response.status, 404);
  assert.doesNotMatch(await response.text(), /<form\b/);
});

test("unsubscribe infrastructure failures are retryable and keep private details out of responses", async () => {
  const fail = async (): Promise<never> => { throw new Error("private token and email reader@example.test"); };
  const handlers = createNewsletterHttpHandlers(service({ inspectNewsletterUnsubscribe: fail, unsubscribeNewsletter: fail }));
  const get = await handlers.unsubscribeGet(new Request("https://www.aied.hk/api/newsletter/unsubscribe?token=known&language=ar"));
  assert.equal(get.status, 503);
  const html = await get.text();
  assert.match(html, /dir="rtl"/);
  assert.doesNotMatch(html, /private token|reader@example\.test/);
  const post = await handlers.unsubscribePost(oneClick("known"));
  assert.equal(post.status, 503);
  assert.deepEqual(await post.json(), { status: "service_unavailable" });
});
