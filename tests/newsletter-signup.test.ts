import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import ResearchNewsletterSignup, { submitNewsletterSignup } from "@/components/ResearchNewsletterSignup";
import { locales } from "@/lib/i18n";
import { getNewsletterCopy } from "@/lib/newsletter/messages";

test("signup renders distinct labeled controls and accurate channel copy in every locale", () => {
  for (const locale of locales) {
    const html = renderToStaticMarkup(React.createElement(React.Fragment, null,
      React.createElement(ResearchNewsletterSignup, { locale, channel: "news", sourcePath: `/${locale}/news` }),
      React.createElement(ResearchNewsletterSignup, { locale, channel: "academy", sourcePath: `/${locale}/academy` }),
    ));
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
    assert.equal(new Set(ids).size, ids.length, `${locale} control IDs must be unique`);
    assert.ok(ids.some((id) => id.includes("newsletter-news-email")));
    assert.ok(ids.some((id) => id.includes("newsletter-academy-email")));
    assert.equal((html.match(/type="email"/g) ?? []).length, 2);
    assert.equal((html.match(/role="status"/g) ?? []).length, 2);
    assert.equal((html.match(/aria-live="polite"/g) ?? []).length, 2);
    for (const id of ids.filter((item) => item.includes("-email-"))) assert.ok(html.includes(`for="${id}"`));
    assert.ok(html.includes(getNewsletterCopy(locale, "news").title));
    assert.ok(html.includes(getNewsletterCopy(locale, "academy").title));
    assert.ok(html.includes(getNewsletterCopy(locale, "academy").privacyNote));
  }
});

test("signup submits an explicit channel to the new endpoint and remains pending", async () => {
  let received: { url: string; body: unknown } | undefined;
  const state = await submitNewsletterSignup({ email: "reader@example.test", locale: "en", channel: "academy", sourcePath: "/en/academy", honeypot: "" }, async (url, init) => {
    received = { url: String(url), body: JSON.parse(String(init?.body)) };
    return Response.json({ status: "pending_confirmation" }, { status: 202 });
  });
  assert.deepEqual(received, { url: "/api/newsletter/subscribe", body: { email: "reader@example.test", locale: "en", channel: "academy", sourcePath: "/en/academy", honeypot: "" } });
  assert.equal(state, "pending_confirmation");
});

test("unhydrated signup forms post private fields in the body to the explicit API action", () => {
  for (const channel of ["news", "academy"] as const) {
    const html = renderToStaticMarkup(React.createElement(ResearchNewsletterSignup, { locale: "ar", channel, sourcePath: `/ar/${channel}` }));
    const form = html.match(/<form\b[^>]*>/)?.[0];
    assert.ok(form);
    assert.match(form, /method="post"/);
    assert.match(form, /action="\/api\/newsletter\/subscribe"/);
    assert.match(form, /encType="application\/x-www-form-urlencoded"/);
    assert.match(html, /type="hidden" name="locale" value="ar"/);
    assert.ok(html.includes(`type="hidden" name="sourcePath" value="/ar/${channel}"`));
    assert.ok(html.includes(`type="hidden" name="channel" value="${channel}"`));
    assert.match(html, /<input\b(?=[^>]*name="email")(?=[^>]*type="email")[^>]*>/);
    assert.doesNotMatch(form, /action="[^\"]*\?/);
  }
});

test("signup preserves supported error states and never treats an unknown 2xx response as subscribed", async () => {
  const input = { email: "reader@example.test", locale: "en" as const, channel: "news" as const, sourcePath: "/en/news", honeypot: "" };
  for (const status of ["already_subscribed", "invalid_email", "invalid_channel", "rate_limited", "confirmation_failed", "database_not_configured", "service_unavailable"] as const) {
    assert.equal(await submitNewsletterSignup(input, async () => Response.json({ status })), status);
  }
  for (const body of [{}, { status: "subscribed" }, { status: "unknown" }, null]) {
    assert.equal(await submitNewsletterSignup(input, async () => Response.json(body)), "service_unavailable");
  }
  assert.equal(await submitNewsletterSignup(input, async () => new Response("not json")), "service_unavailable");
  assert.equal(await submitNewsletterSignup(input, async () => { throw new Error("offline"); }), "service_unavailable");
});
