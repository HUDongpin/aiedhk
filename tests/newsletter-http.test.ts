import assert from "node:assert/strict";
import test from "node:test";
import { createNewsletterHttpHandlers, type NewsletterHttpService } from "@/lib/newsletter/http";
import { getNewsletterCopy } from "@/lib/newsletter/messages";
import { locales } from "@/lib/i18n";

function service(overrides: Partial<NewsletterHttpService> = {}): NewsletterHttpService {
  const unexpected = async (): Promise<never> => { throw new Error("Unexpected service call"); };
  return {
    subscribeNewsletter: unexpected,
    inspectNewsletterConfirmation: unexpected,
    confirmNewsletter: unexpected,
    inspectNewsletterUnsubscribe: unexpected,
    unsubscribeNewsletter: unexpected,
    ...overrides,
  };
}

function jsonRequest(path: string, body: unknown) {
  return new Request(`https://www.aied.hk${path}`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
}

test("subscribe parses an explicit channel and returns only the public result", async () => {
  let input: unknown;
  const handlers = createNewsletterHttpHandlers(service({ subscribeNewsletter: async (value) => {
    input = value;
    return { status: "pending_confirmation", httpStatus: 202 };
  } }));
  const body = { email: "reader@example.test", channel: "academy", locale: "ar", sourcePath: "/ar/academy", honeypot: "" };
  const response = await handlers.subscribePost(jsonRequest("/api/newsletter/subscribe", body));
  assert.deepEqual(input, body);
  assert.equal(response.status, 202);
  assert.deepEqual(await response.json(), { status: "pending_confirmation" });
  assert.equal(response.headers.get("cache-control"), "no-store");
});

test("native signup POST accepts bounded form fields and renders a localized pending page without exposing the address", async () => {
  let input: unknown;
  const handlers = createNewsletterHttpHandlers(service({ subscribeNewsletter: async (value) => {
    input = value;
    return { status: "pending_confirmation", httpStatus: 202 };
  } }));
  const request = new Request("https://www.aied.hk/api/newsletter/subscribe", { method: "POST", body: new URLSearchParams({ email: "private-reader@example.test", channel: "academy", locale: "ar", sourcePath: "/ar/academy", company: "" }) });
  const response = await handlers.subscribePost(request);
  assert.deepEqual(input, { email: "private-reader@example.test", channel: "academy", locale: "ar", sourcePath: "/ar/academy", honeypot: "" });
  assert.equal(response.status, 202);
  assert.equal(response.headers.get("content-type"), "text/html; charset=utf-8");
  assert.equal(response.headers.get("location"), null);
  const html = await response.text();
  assert.match(html, /<html lang="ar" dir="rtl">/);
  assert.ok(html.includes(getNewsletterCopy("ar", "academy").pendingConfirmation));
  assert.doesNotMatch(html, /private-reader|example\.test/);
  assert.equal(response.headers.get("cache-control"), "no-store");
});

test("native signup preserves honeypot suppression and body limits", async () => {
  let calls = 0;
  const handlers = createNewsletterHttpHandlers(service({ subscribeNewsletter: async () => { calls++; return { status: "pending_confirmation", httpStatus: 202 }; } }));
  const suppressed = await handlers.subscribePost(new Request("https://www.aied.hk/api/newsletter/subscribe", { method: "POST", body: new URLSearchParams({ email: "bot@example.test", channel: "academy", locale: "en", company: "bot" }) }));
  assert.equal(suppressed.status, 202);
  assert.ok((await suppressed.text()).includes(getNewsletterCopy("en", "academy").pendingConfirmation));
  const oversized = await handlers.subscribePost(new Request("https://www.aied.hk/api/newsletter/subscribe", { method: "POST", body: new URLSearchParams({ email: "reader@example.test", channel: "news", padding: "x".repeat(9000) }) }));
  assert.equal(oversized.status, 413);
  assert.equal(calls, 0);
});

test("native signup errors remain localized failures rather than a confirmation claim", async () => {
  for (const [status, code, key] of [["invalid_email", 400, "invalidEmail"], ["rate_limited", 429, "rateLimited"], ["confirmation_failed", 503, "confirmationFailed"]] as const) {
    const handlers = createNewsletterHttpHandlers(service({ subscribeNewsletter: async () => ({ status, httpStatus: code, retryAfterSeconds: status === "rate_limited" ? 60 : undefined }) }));
    const response = await handlers.subscribePost(new Request("https://www.aied.hk/api/newsletter/subscribe", { method: "POST", body: new URLSearchParams({ email: "private-reader@example.test", channel: "news", locale: "ja" }) }));
    assert.equal(response.status, code);
    const html = await response.text();
    assert.ok(html.includes(getNewsletterCopy("ja", "news")[key]));
    assert.ok(!html.includes(getNewsletterCopy("ja", "news").pendingConfirmation));
    assert.doesNotMatch(html, /private-reader|example\.test/);
    if (status === "rate_limited") assert.equal(response.headers.get("retry-after"), "60");
  }
});

test("subscribe rejects missing or invalid modern channels before calling the service", async () => {
  let calls = 0;
  const handlers = createNewsletterHttpHandlers(service({ subscribeNewsletter: async () => { calls++; return { status: "pending_confirmation", httpStatus: 202 }; } }));
  for (const channel of [undefined, null, "", "all", ["news"]]) {
    const response = await handlers.subscribePost(jsonRequest("/api/newsletter/subscribe", { email: "reader@example.test", channel }));
    assert.equal(response.status, 400);
    assert.deepEqual(await response.json(), { status: "invalid_channel" });
  }
  assert.equal(calls, 0);
});

test("legacy subscribe infers Academy only for recognized Academy listing paths and preserves explicit channels", async () => {
  const channels: string[] = [];
  const handlers = createNewsletterHttpHandlers(service({ subscribeNewsletter: async (input) => {
    channels.push(input.channel);
    return { status: "pending_confirmation", httpStatus: 202 };
  } }));
  for (const sourcePath of ["/academy", "/en/academy?page=2", "/ar/academy/", "/en/academy/lesson", "https://evil.example/academy", "//evil.example/academy", "/academy-ish", undefined]) {
    await handlers.legacySubscribePost(jsonRequest("/api/research-news/subscribe", { email: "reader@example.test", sourcePath }));
  }
  await handlers.legacySubscribePost(jsonRequest("/api/research-news/subscribe", { email: "reader@example.test", sourcePath: "/en/academy", channel: "news" }));
  assert.deepEqual(channels, ["academy", "academy", "academy", "news", "news", "news", "news", "news", "news"]);
  const invalid = await handlers.legacySubscribePost(jsonRequest("/api/research-news/subscribe", { email: "reader@example.test", sourcePath: "/academy", channel: "other" }));
  assert.equal(invalid.status, 400);
  assert.deepEqual(await invalid.json(), { status: "invalid_channel" });
});

test("honeypot submissions are acknowledged without a service call or a suppression disclosure", async () => {
  let calls = 0;
  const handlers = createNewsletterHttpHandlers(service({ subscribeNewsletter: async () => { calls++; return { status: "suppressed", httpStatus: 202 }; } }));
  for (const submit of [handlers.subscribePost, handlers.legacySubscribePost]) {
    const response = await submit(jsonRequest("/api/newsletter/subscribe", { email: "bad", channel: "wrong", honeypot: " bot " }));
    assert.equal(response.status, 202);
    assert.deepEqual(await response.json(), { status: "pending_confirmation" });
  }
  assert.equal(calls, 0);
  const response = await handlers.subscribePost(jsonRequest("/api/newsletter/subscribe", { email: "reader@example.test", channel: "news" }));
  assert.deepEqual(await response.json(), { status: "pending_confirmation" });
});

test("subscribe preserves failures and Retry-After without exposing private exception details", async () => {
  for (const [status, httpStatus] of [["invalid_email", 400], ["already_subscribed", 200], ["rate_limited", 429], ["confirmation_failed", 503], ["database_not_configured", 503], ["service_unavailable", 503]] as const) {
    const handlers = createNewsletterHttpHandlers(service({ subscribeNewsletter: async () => ({ status, httpStatus, retryAfterSeconds: status === "rate_limited" ? 90 : undefined }) }));
    const response = await handlers.subscribePost(jsonRequest("/api/newsletter/subscribe", { email: "reader@example.test", channel: "news" }));
    assert.equal(response.status, httpStatus);
    assert.deepEqual(await response.json(), { status });
    assert.equal(response.headers.get("retry-after"), status === "rate_limited" ? "90" : null);
  }
  const handlers = createNewsletterHttpHandlers(service({ subscribeNewsletter: async () => { throw new Error("secret: reader@example.test token=private"); } }));
  const response = await handlers.subscribePost(jsonRequest("/api/newsletter/subscribe", { email: "reader@example.test", channel: "news" }));
  assert.equal(response.status, 503);
  assert.deepEqual(await response.json(), { status: "service_unavailable" });
});

test("malformed, non-object, unsupported and oversized subscription bodies never reach the service", async () => {
  let calls = 0;
  const handlers = createNewsletterHttpHandlers(service({ subscribeNewsletter: async () => { calls++; return { status: "pending_confirmation", httpStatus: 202 }; } }));
  for (const body of ["{", "null", "[]", '"text"']) {
    const response = await handlers.subscribePost(new Request("https://www.aied.hk/api/newsletter/subscribe", { method: "POST", headers: { "content-type": "application/json" }, body }));
    assert.equal(response.status, 400);
  }
  const unsupported = await handlers.subscribePost(new Request("https://www.aied.hk/api/newsletter/subscribe", { method: "POST", body: "email=reader@example.test" }));
  assert.equal(unsupported.status, 415);
  for (const headers of [new Headers({ "content-type": "application/json" }), new Headers({ "content-type": "application/json", "content-length": "10000" })]) {
    const oversized = await handlers.subscribePost(new Request("https://www.aied.hk/api/newsletter/subscribe", { method: "POST", headers, body: JSON.stringify({ email: "reader@example.test", channel: "news", sourcePath: "界".repeat(3000) }) }));
    assert.equal(oversized.status, 413);
  }
  assert.equal(calls, 0);
});

test("confirmation GET only inspects the token and presents an explicit scoped POST form", async () => {
  const calls: string[] = [];
  const handlers = createNewsletterHttpHandlers(service({
    inspectNewsletterConfirmation: async (token) => { calls.push(`inspect:${token}`); return { status: "pending", locale: "ar", scope: "academy" }; },
    confirmNewsletter: async () => { calls.push("confirm"); return { status: "confirmed" }; },
  }));
  const response = await handlers.confirmGet(new Request("https://www.aied.hk/api/newsletter/confirm?token=sample&language=en"));
  const html = await response.text();
  assert.deepEqual(calls, ["inspect:sample"]);
  assert.equal(response.status, 200);
  assert.match(html, /<html lang="ar" dir="rtl">/);
  assert.match(html, /<form method="post" action="\/api\/newsletter\/confirm\?token=sample">/);
  assert.match(html, /type="hidden" name="channels" value="academy"/);
  assert.ok(html.includes(getNewsletterCopy("ar", "academy").confirmMessage));
  assert.doesNotMatch(html, /type="checkbox"/);
  for (const [header, value] of [["cache-control", "no-store"], ["referrer-policy", "no-referrer"], ["x-robots-tag", "noindex, nofollow"]]) assert.equal(response.headers.get(header), value);
  assert.match(response.headers.get("content-security-policy") ?? "", /form-action 'self'/);
  assert.doesNotMatch(html, /<(?:script|img|iframe)\b|https?:\/\//);
});

test("legacy confirmation channel choice starts with neither newsletter checked", async () => {
  const handlers = createNewsletterHttpHandlers(service({ inspectNewsletterConfirmation: async () => ({ status: "pending", locale: "en", scope: "choose" }) }));
  const html = await (await handlers.confirmGet(new Request("https://www.aied.hk/api/newsletter/confirm?token=choice"))).text();
  assert.equal((html.match(/type="checkbox"/g) ?? []).length, 2);
  assert.match(html, /name="channels" value="news"/);
  assert.match(html, /name="channels" value="academy"/);
  assert.doesNotMatch(html, /\bchecked(?:=|\s|>)/);
  assert.ok(html.includes(getNewsletterCopy("en", "news").chooseChannels));
});

test("confirmation POST activates only the submitted channels and returns browser or JSON results", async () => {
  const calls: unknown[] = [];
  const handlers = createNewsletterHttpHandlers(service({ confirmNewsletter: async (token, channels) => {
    calls.push({ token, channels });
    return { status: "confirmed", locale: "fr", scope: "choose", channels };
  } }));
  const response = await handlers.confirmPost(new Request("https://www.aied.hk/api/newsletter/confirm?token=choice", { method: "POST", body: new URLSearchParams({ channels: "academy" }) }));
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.ok(html.includes(getNewsletterCopy("fr", "academy").confirmSuccess));
  assert.doesNotMatch(html, /<form\b/);
  const api = await handlers.confirmPost(jsonRequest("/api/newsletter/confirm?token=choice", { channels: ["news", "academy", "news"] }));
  assert.deepEqual(await api.json(), { status: "confirmed" });
  assert.deepEqual(calls, [{ token: "choice", channels: ["academy"] }, { token: "choice", channels: ["news", "academy"] }]);
});

test("empty channel selection asks for a choice while malformed selections never mutate", async () => {
  let calls = 0;
  const handlers = createNewsletterHttpHandlers(service({ confirmNewsletter: async () => { calls++; return { status: "choose_required", locale: "en", scope: "choose" }; } }));
  const empty = await handlers.confirmPost(new Request("https://www.aied.hk/api/newsletter/confirm?token=choice", { method: "POST", body: new URLSearchParams() }));
  assert.equal(empty.status, 400);
  const html = await empty.text();
  assert.ok(html.includes(getNewsletterCopy("en", "news").emptySelection));
  assert.equal((html.match(/type="checkbox"/g) ?? []).length, 2);
  for (const channels of ["news", ["news", "other"], null, {}]) {
    const response = await handlers.confirmPost(jsonRequest("/api/newsletter/confirm?token=choice", { channels }));
    assert.equal(response.status, 400);
  }
  assert.equal(calls, 1);
});

test("confirmation expired, invalid, and already-confirmed pages never show an activation form", async () => {
  for (const [status, code, messageKey] of [["expired", 410, "confirmExpired"], ["invalid", 400, "confirmInvalid"], ["already_confirmed", 200, "confirmUsed"]] as const) {
    const handlers = createNewsletterHttpHandlers(service({ inspectNewsletterConfirmation: async () => ({ status, locale: "ja", scope: "news", channels: ["news"] }) }));
    const response = await handlers.confirmGet(new Request("https://www.aied.hk/api/newsletter/confirm?token=state"));
    assert.equal(response.status, code);
    const html = await response.text();
    assert.ok(html.includes(getNewsletterCopy("ja", "news")[messageKey]));
    assert.doesNotMatch(html, /<form\b/);
  }
});

test("already-used confirmation links never claim current enrollment, including after unsubscribe and unknown legacy choices", async () => {
  for (const locale of locales) {
    for (const channels of [undefined, ["news" as const], ["news" as const, "academy" as const]]) {
      const handlers = createNewsletterHttpHandlers(service({
        inspectNewsletterConfirmation: async () => ({ status: "already_confirmed", locale, scope: "choose", channels }),
        confirmNewsletter: async () => ({ status: "already_confirmed", locale, scope: "choose", channels }),
      }));
      for (const response of [
        await handlers.confirmGet(new Request("https://www.aied.hk/api/newsletter/confirm?token=used")),
        await handlers.confirmPost(new Request("https://www.aied.hk/api/newsletter/confirm?token=used", { method: "POST", body: new URLSearchParams({ channels: "news" }) })),
      ]) {
        const html = await response.text();
        assert.equal(response.status, 200);
        assert.ok(html.includes(getNewsletterCopy(locale, "news").confirmUsed));
        for (const channel of ["news", "academy"] as const) assert.ok(!html.includes(getNewsletterCopy(locale, channel).confirmSuccess));
        assert.doesNotMatch(html, /<form\b/);
      }
    }
  }
});

test("confirmation success with an unknown choice does not invent a newsletter target", async () => {
  const handlers = createNewsletterHttpHandlers(service({ confirmNewsletter: async () => ({ status: "confirmed", locale: "en", scope: "choose" }) }));
  const response = await handlers.confirmPost(new Request("https://www.aied.hk/api/newsletter/confirm?token=choice", { method: "POST", body: new URLSearchParams({ channels: "academy" }) }));
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.ok(html.includes(getNewsletterCopy("en", "news").confirmSuccessUnknown));
  assert.doesNotMatch(html, /Research News|Academy lessons|<form\b/);
});

test("missing and duplicate tokens are rejected before any confirmation service call", async () => {
  let calls = 0;
  const handlers = createNewsletterHttpHandlers(service({
    inspectNewsletterConfirmation: async () => { calls++; return { status: "pending" }; },
    confirmNewsletter: async () => { calls++; return { status: "confirmed" }; },
  }));
  for (const path of ["/api/newsletter/confirm", "/api/newsletter/confirm?token=", "/api/newsletter/confirm?token=a&token=b"]) {
    assert.equal((await handlers.confirmGet(new Request(`https://www.aied.hk${path}`))).status, 400);
    assert.equal((await handlers.confirmPost(jsonRequest(path, {}))).status, 400);
  }
  assert.equal(calls, 0);
});

test("action page token encoding cannot inject markup or an external form destination", async () => {
  const token = '\"><img src=x onerror="alert(1)">&x=y';
  const handlers = createNewsletterHttpHandlers(service({ inspectNewsletterConfirmation: async () => ({ status: "pending", locale: "en", scope: "news" }) }));
  const response = await handlers.confirmGet(new Request(`https://evil.example/api/newsletter/confirm?token=${encodeURIComponent(token)}&redirect=https://evil.example`));
  const html = await response.text();
  assert.doesNotMatch(html, /<img|onerror="|evil\.example/);
  assert.match(html, /action="\/api\/newsletter\/confirm\?token=/);
  assert.ok(html.includes(encodeURIComponent(token).replace(/&/g, "&amp;").replace(/'/g, "&#39;")));
});
