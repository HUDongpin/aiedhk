import assert from "node:assert/strict";
import test from "node:test";
import { locales } from "@/lib/i18n";

async function messages() {
  try {
    return await import("@/lib/newsletter/messages");
  } catch (error) {
    assert.fail(`Newsletter copy is not implemented: ${String(error)}`);
  }
}

const requiredKeys = [
  "eyebrow", "title", "description", "emailLabel", "emailPlaceholder", "submit", "submitting",
  "success", "alreadySubscribed", "invalidEmail", "notConfigured", "error", "privacyNote",
  "pendingConfirmation", "rateLimited", "confirmationFailed", "confirmTitle", "confirmMessage", "confirmAction",
  "confirmSuccess", "confirmUsed", "confirmSuccessUnknown", "confirmExpired", "confirmInvalid", "unsubscribeTitle", "unsubscribeMessage", "unsubscribeMultipleMessage", "unsubscribeUnknownMessage", "unsubscribeAction",
  "unsubscribeSuccess", "unsubscribeSuccessUnknown", "newsLabel", "academyLabel", "chooseChannels", "reviewLabel", "fallbackLabel", "readMore",
  "emptySelection", "backHome",
] as const;

test("every newsletter state has explicit localized copy for both channels in every supported language", async () => {
  const { getNewsletterCopy } = await messages();
  for (const channel of ["news", "academy"] as const) {
    const english = getNewsletterCopy("en", channel);
    for (const locale of locales) {
      const copy = getNewsletterCopy(locale, channel);
      for (const key of requiredKeys) {
        assert.equal(typeof copy[key], "string", `${locale}/${channel}/${key}`);
        assert.ok(copy[key].trim(), `${locale}/${channel}/${key} is empty`);
        if (locale !== "en" && key !== "emailPlaceholder") {
          assert.notEqual(copy[key], english[key], `${locale}/${channel}/${key} silently uses English`);
        }
      }
      assert.equal(copy.success, copy.pendingConfirmation);
      assert.notEqual(copy.success, copy.confirmSuccess);
    }
  }
});

test("landing descriptions distinguish conditional news delivery from the daily Academy pair", async () => {
  const { getNewsletterCopy } = await messages();
  const news = getNewsletterCopy("en", "news");
  const academy = getNewsletterCopy("en", "academy");
  assert.match(news.description, /check daily/i);
  assert.match(news.description, /only when.*new/i);
  assert.match(news.description, /up to five/i);
  assert.match(academy.description, /two.*lessons.*daily/i);
  assert.match(academy.description, /AI knowledge/i);
  assert.match(academy.description, /educational theory/i);
  assert.match(academy.description, /new and existing/i);
  assert.match(news.success, /confirm/i);
  assert.doesNotMatch(news.success, /you are subscribed|subscription is active/i);
});

test("channel confirmation and unsubscribe messages identify only their own newsletter", async () => {
  const { getNewsletterCopy } = await messages();
  for (const locale of locales) {
    const news = getNewsletterCopy(locale, "news");
    const academy = getNewsletterCopy(locale, "academy");
    assert.notEqual(news.confirmMessage, academy.confirmMessage);
    assert.notEqual(news.unsubscribeMessage, academy.unsubscribeMessage);
    assert.ok(news.confirmMessage.includes(news.newsLabel));
    assert.ok(academy.confirmMessage.includes(academy.academyLabel));
    assert.ok(news.unsubscribeMessage.includes(news.newsLabel));
    assert.ok(academy.unsubscribeMessage.includes(academy.academyLabel));
    assert.ok(news.confirmMessage.includes("48"));
    assert.ok(academy.confirmMessage.includes("48"));
  }
});
