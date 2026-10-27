import assert from "node:assert/strict";
import test from "node:test";
import { localeMeta, locales } from "@/lib/i18n";
import type { NewsletterEmailItem } from "@/lib/newsletter/types";

async function templates() {
  try {
    return await import("@/lib/newsletter/templates");
  } catch (error) {
    assert.fail(`Newsletter rendering is not implemented: ${String(error)}`);
  }
}

async function messages() {
  try {
    return await import("@/lib/newsletter/messages");
  } catch (error) {
    assert.fail(`Newsletter copy is not implemented: ${String(error)}`);
  }
}

const item = {
  id: "lesson-1",
  slug: "learning-foundations",
  title: "Learning foundations",
  summary: "A reviewed summary of this lesson.",
  contentLocale: "en" as const,
  coreIdeas: ["A supplied core idea.", "Another supplied core idea."],
};

const illustratedItem = {
  ...item,
  image: {
    path: "/images/newsletter/news-lesson-1-0123456789abcdef.jpg",
    alt: 'A teacher & learners discuss "AI" <together>',
    width: 720,
    height: 450,
  },
};

test("illustrated digests use one linked static JPEG per item with safe alt text and proportional dimensions", async () => {
  const { renderNewsletterDigest } = await templates();
  for (const channel of ["news", "academy"] as const) {
    const email = renderNewsletterDigest({ channel, locale: "en", items: [illustratedItem],
      siteUrl: "https://preview.example.test", unsubscribeUrl: "https://preview.example.test/unsubscribe" });
    assert.equal((email.html.match(/<img\b/g) ?? []).length, 1);
    assert.ok(email.html.includes('src="https://preview.example.test/images/newsletter/news-lesson-1-0123456789abcdef.jpg"'));
    assert.ok(email.html.includes('alt="A teacher &amp; learners discuss &quot;AI&quot; &lt;together&gt;"'));
    assert.match(email.html, /width="624" height="390"/);
    assert.match(email.html, /height:auto/);
    assert.match(email.html, new RegExp(`<a[^>]*href="https://preview.example.test/en/${channel}/learning-foundations"[^>]*>\\s*<img`));
    assert.ok(email.html.includes(item.title) && email.html.includes(item.summary));
    assert.ok(email.text.includes(item.title) && email.text.includes(item.summary));
    assert.doesNotMatch(email.text, /<img|newsletter\/.*\.jpg/);
    assert.doesNotMatch(email.html, /data:image|cid:|\/_next\/image/);
  }
});

test("digest subjects and headings have one channel emoji and a localized issue count", async () => {
  const { renderNewsletterDigest } = await templates();
  for (const locale of locales) for (const channel of ["news", "academy"] as const) {
    const emoji = channel === "news" ? "📰" : "🎓";
    const email = renderNewsletterDigest({ channel, locale, items: [illustratedItem, illustratedItem], review: true,
      siteUrl: "https://example.test", unsubscribeUrl: "https://example.test/unsubscribe" });
    assert.equal(email.subject.split(emoji).length - 1, 1);
    assert.match(email.html, new RegExp(`<h1[^>]*>[\\s\\S]*?${emoji}[\\s\\S]*?</h1>`));
    assert.match(email.html, /data-newsletter-count="2"/);
    assert.ok(email.text.includes("2"));
    assert.doesNotMatch(email.html, /undefined|\[object Object\]/);
  }
});

test("unsafe or malformed image data degrades to the complete text card", async () => {
  const { renderNewsletterDigest } = await templates();
  const invalidImages = [
    { ...illustratedItem.image, path: "https://evil.example/image.jpg" },
    { ...illustratedItem.image, path: "//evil.example/image.jpg" },
    { ...illustratedItem.image, path: "javascript:alert(1)" },
    { ...illustratedItem.image, path: "/images/newsletter/../private.jpg" },
    { ...illustratedItem.image, path: "/images/newsletter/a.jpg?token=secret" },
    { ...illustratedItem.image, path: '/images/newsletter/a.jpg" onerror="alert(1)' },
    { ...illustratedItem.image, width: 0 },
    { ...illustratedItem.image, height: Infinity },
    { ...illustratedItem.image, width: 721 },
    { ...illustratedItem.image, alt: null },
  ];
  for (const image of invalidImages) {
    const email = renderNewsletterDigest({ channel: "news", locale: "en",
      items: [{ ...item, image } as NewsletterEmailItem], siteUrl: "https://example.test",
      unsubscribeUrl: "https://example.test/unsubscribe" });
    assert.doesNotMatch(email.html, /<img\b|evil\.example|onerror=/);
    assert.ok(email.html.includes(item.title) && email.html.includes(item.summary));
    assert.ok(email.html.includes("https://example.test/en/news/learning-foundations"));
  }
});

test("five illustrated long-title articles stay below the HTML budget and confirmation mail remains image-free", async () => {
  const { renderNewsletterDigest, renderNewsletterConfirmation } = await templates();
  const email = renderNewsletterDigest({ channel: "news", locale: "zh-hans",
    items: Array.from({ length: 5 }, (_, index) => ({ ...illustratedItem, id: `item-${index}`,
      title: "让教师和学生理解人工智能的能力与边界：".repeat(8) })),
    siteUrl: "https://example.test", unsubscribeUrl: "https://example.test/unsubscribe" });
  assert.equal((email.html.match(/<img\b/g) ?? []).length, 5);
  assert.ok(Buffer.byteLength(email.html, "utf8") < 80_000);
  const confirmation = renderNewsletterConfirmation({ channel: "news", locale: "en", confirmUrl: "https://example.test/confirm" });
  assert.doesNotMatch(confirmation.html + confirmation.subject, /<img\b|📰|🎓|data-newsletter-count/);
});

test("digest links use the supplied site, selected locale, channel, and item slug", async () => {
  const { renderNewsletterDigest } = await templates();
  for (const channel of ["news", "academy"] as const) {
    const email = renderNewsletterDigest({
      channel, locale: "fr", items: [item], siteUrl: "https://preview.example.test/",
      unsubscribeUrl: `https://preview.example.test/fr/newsletter/unsubscribe?channel=${channel}&token=abc`,
    });
    const link = `https://preview.example.test/fr/${channel}/learning-foundations`;
    assert.ok(email.html.includes(`href="${link}"`));
    assert.ok(email.text.includes(link));
    assert.ok(email.html.includes(`channel=${channel}&amp;token=abc`));
    assert.ok(email.text.includes(`channel=${channel}&token=abc`));
    assert.doesNotMatch(email.html, /<img\b|tracking|aied\.hk/i);
    assert.ok(email.html.includes("max-width:680px"));
  }
});

test("digest renders supplied summaries and core ideas as safe HTML and readable plain text", async () => {
  const { renderNewsletterDigest } = await templates();
  const email = renderNewsletterDigest({
    channel: "academy", locale: "en", siteUrl: "https://example.test",
    unsubscribeUrl: "https://example.test/unsubscribe?token=a&channel=academy",
    items: [{ ...item, title: '<script>alert("x")</script>', summary: "Teachers & learners <together>", coreIdeas: ['A "quoted" idea & <tag>'] }],
  });
  assert.doesNotMatch(email.html, /<script>|<together>|<tag>/);
  assert.ok(email.html.includes("&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt;"));
  assert.ok(email.html.includes("Teachers &amp; learners &lt;together&gt;"));
  assert.ok(email.html.includes("A &quot;quoted&quot; idea &amp; &lt;tag&gt;"));
  assert.ok(email.text.includes('<script>alert("x")</script>'));
  assert.ok(email.text.includes('A "quoted" idea & <tag>'));
  assert.doesNotMatch(email.text, /&lt;|&amp;|&quot;/);
});

test("Arabic email chrome stays RTL while English fallback content is explicitly labeled and LTR", async () => {
  const { renderNewsletterDigest } = await templates();
  const { getNewsletterCopy } = await messages();
  const email = renderNewsletterDigest({
    channel: "academy", locale: "ar", items: [item], siteUrl: "https://example.test",
    unsubscribeUrl: "https://example.test/unsubscribe",
  });
  assert.match(email.html, /<html lang="ar" dir="rtl"/);
  assert.match(email.html, /lang="en-HK" dir="ltr"/);
  assert.ok(email.html.includes(getNewsletterCopy("ar", "academy").fallbackLabel));
  assert.ok(email.text.includes(getNewsletterCopy("ar", "academy").fallbackLabel));
});

test("reviewed translated content has its own language and no fallback label", async () => {
  const { renderNewsletterDigest } = await templates();
  const { getNewsletterCopy } = await messages();
  const email = renderNewsletterDigest({
    channel: "news", locale: "ar", items: [{ ...item, contentLocale: "ar", title: "عنوان", summary: "ملخص", coreIdeas: [] }],
    siteUrl: "https://example.test", unsubscribeUrl: "https://example.test/unsubscribe",
  });
  assert.doesNotMatch(email.html, /lang="en-HK"/);
  assert.ok(!email.html.includes(getNewsletterCopy("ar", "news").fallbackLabel));
  assert.ok(!email.text.includes(getNewsletterCopy("ar", "news").fallbackLabel));
});

test("Academy review editions visibly identify repeats in subject and both bodies", async () => {
  const { renderNewsletterDigest } = await templates();
  const { getNewsletterCopy } = await messages();
  const email = renderNewsletterDigest({
    channel: "academy", locale: "ja", items: [item], review: true,
    siteUrl: "https://example.test", unsubscribeUrl: "https://example.test/unsubscribe",
  });
  const label = getNewsletterCopy("ja", "academy").reviewLabel;
  for (const value of [email.subject, email.html, email.text]) assert.ok(value.includes(label));
});

test("all locales receive localized digest subjects, headings, and calls to action", async () => {
  const { renderNewsletterDigest } = await templates();
  const { getNewsletterCopy } = await messages();
  for (const channel of ["news", "academy"] as const) {
    const subjects = new Set<string>();
    for (const locale of locales) {
      const copy = getNewsletterCopy(locale, channel);
      const email = renderNewsletterDigest({
        channel, locale, items: [{ ...item, contentLocale: locale }], siteUrl: "https://example.test",
        unsubscribeUrl: `https://example.test/${locale}/unsubscribe?channel=${channel}`,
      });
      subjects.add(email.subject);
      assert.ok(email.html.includes(`lang="${localeMeta[locale].htmlLang}" dir="${localeMeta[locale].dir}"`));
      assert.ok(email.text.includes(channel === "news" ? copy.newsLabel : copy.academyLabel));
      assert.ok(email.text.includes(copy.readMore));
      assert.ok(email.text.includes(copy.unsubscribeAction));
    }
    assert.equal(subjects.size, locales.length);
  }
});

test("confirmation requests consent to only the selected channel and explains 48-hour expiry", async () => {
  const { renderNewsletterConfirmation } = await templates();
  const { getNewsletterCopy } = await messages();
  for (const locale of locales) {
    for (const channel of ["news", "academy"] as const) {
      const copy = getNewsletterCopy(locale, channel);
      const email = renderNewsletterConfirmation({ channel, locale, confirmUrl: "https://example.test/confirm?token=abc&locale=en" });
      assert.ok(email.subject.includes(copy.confirmTitle));
      assert.ok(email.text.includes(copy.confirmMessage));
      assert.ok(email.text.includes(copy.confirmAction));
      assert.ok(email.text.includes("48"));
      assert.ok(email.html.includes("https://example.test/confirm?token=abc&amp;locale=en"));
      assert.ok(email.text.includes("https://example.test/confirm?token=abc&locale=en"));
      assert.ok(!email.text.includes(copy.confirmSuccess));
    }
  }
});

test("unknown-source confirmation asks the recipient to choose channels without claiming enrollment", async () => {
  const { renderNewsletterConfirmation } = await templates();
  const { getNewsletterCopy } = await messages();
  for (const locale of locales) {
    const email = renderNewsletterConfirmation({ channel: "choose", locale, confirmUrl: "https://example.test/confirm" });
    const copy = getNewsletterCopy(locale, "news");
    assert.ok(email.subject.includes(copy.chooseChannels));
    assert.ok(email.text.includes(copy.chooseChannels));
    assert.ok(email.text.includes("48"));
    assert.ok(!email.text.includes(copy.confirmSuccess));
  }
  const email = renderNewsletterConfirmation({ channel: "choose", locale: "en", confirmUrl: "https://example.test/confirm" });
  assert.match(email.text, /No channels are selected or activated automatically/);
  assert.doesNotMatch(email.text, /you are subscribed|subscription is active/i);
});

test("email rendering rejects executable URL schemes and prevents slug path escape", async () => {
  const { renderNewsletterDigest, renderNewsletterConfirmation } = await templates();
  const base = { channel: "news" as const, locale: "en" as const, items: [item], siteUrl: "https://example.test", unsubscribeUrl: "https://example.test/unsubscribe" };
  assert.throws(() => renderNewsletterConfirmation({ channel: "news", locale: "en", confirmUrl: "javascript:alert(1)" }), /HTTP/);
  assert.throws(() => renderNewsletterDigest({ ...base, unsubscribeUrl: "data:text/html,hello" }), /HTTP/);
  assert.throws(() => renderNewsletterDigest({ ...base, siteUrl: "javascript:alert(1)" }), /HTTP/);
  assert.throws(() => renderNewsletterDigest({ ...base, siteUrl: "https://user:secret@example.test" }), /credentials/);
  const email = renderNewsletterDigest({ ...base, items: [{ ...item, slug: 'nested/lesson?x="bad"' }] });
  assert.ok(email.html.includes("https://example.test/en/news/nested%2Flesson%3Fx%3D%22bad%22"));
});

test("empty and dot-only slugs cannot resolve to a listing or parent page", async () => {
  const { renderNewsletterDigest } = await templates();
  for (const slug of ["", ".", "..", "   "]) {
    assert.throws(() => renderNewsletterDigest({
      channel: "news", locale: "en", items: [{ ...item, slug }], siteUrl: "https://example.test",
      unsubscribeUrl: "https://example.test/unsubscribe",
    }), /slug/);
  }
});
