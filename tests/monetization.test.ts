import assert from "node:assert/strict";
import test from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import Footer from "@/components/Footer";
import { getDictionary, locales } from "@/lib/i18n";
import { buildSitemapEntries } from "@/app/sitemap";
import { getMonetizationConfig } from "@/lib/monetization";

test("privacy and commercial disclosure are reachable in every locale without monetization accounts", () => {
  for (const locale of locales) {
    const html = renderToStaticMarkup(createElement(Footer, { locale, dictionary: getDictionary(locale), monetization: getMonetizationConfig({}) }));
    assert.ok(html.includes(`href="/${locale}/privacy"`));
    assert.ok(html.includes(`href="/${locale}/disclosure"`));
    assert.doesNotMatch(html, /buymeacoffee\.com|adsbygoogle|partnerstack/);
  }
});

test("policy URLs are discoverable through the sitemap", () => {
  const entries = buildSitemapEntries([]);
  for (const locale of locales) {
    assert.ok(entries.some(({ url }) => url.endsWith(`/${locale}/privacy`)));
    assert.ok(entries.some(({ url }) => url.endsWith(`/${locale}/disclosure`)));
  }
});

test("unconfigured accounts and incomplete ad approval cannot enable monetization", async () => {
  const { getMonetizationConfig } = await import("@/lib/monetization");
  const blank = getMonetizationConfig({});
  assert.equal(blank.support, null);
  assert.equal(blank.ads, null);
  assert.equal(blank.gamma, null);
  const incomplete = getMonetizationConfig({ SUPPORT_ENABLED: "true", ADSENSE_ENABLED: "true", GAMMA_AFFILIATE_ENABLED: "true" });
  assert.equal(incomplete.support, null);
  assert.equal(incomplete.ads, null);
  assert.equal(incomplete.gamma, null);
  assert.equal(getMonetizationConfig({
    ADSENSE_ENABLED: "true", ADSENSE_PUBLISHER_ID: "ca-pub-1234567890123456", ADSENSE_HOME_SLOT: "1234567890",
  }).ads, null);
});

test("support requires its own switch and a genuine HTTPS creator-page URL", async () => {
  const { getMonetizationConfig } = await import("@/lib/monetization");
  const url = "https://www.buymeacoffee.com/aiedhk-test";
  assert.equal(getMonetizationConfig({ BUY_ME_A_COFFEE_URL: url }).support, null);
  assert.equal(getMonetizationConfig({ SUPPORT_ENABLED: "true", BUY_ME_A_COFFEE_URL: url }).support?.url, url);
  for (const value of ["javascript:alert(1)", "https://buymeacoffee.com.evil.test/aiedhk", "https://buymeacoffee.com/", "https://user:pass@buymeacoffee.com/aiedhk", "http://buymeacoffee.com/aiedhk"]) {
    assert.equal(getMonetizationConfig({ SUPPORT_ENABLED: "true", BUY_ME_A_COFFEE_URL: value }).support, null);
  }
});

test("publisher verification is independent from ad serving and never invents an ads.txt seller", async () => {
  const { getMonetizationConfig, buildAdsTxt } = await import("@/lib/monetization");
  assert.equal(buildAdsTxt(getMonetizationConfig({})), null);
  assert.equal(buildAdsTxt(getMonetizationConfig({ ADSENSE_PUBLISHER_ID: "ca-pub-0000000000000000" })), null);
  const config = getMonetizationConfig({ ADSENSE_PUBLISHER_ID: "ca-pub-1234567890123456" });
  assert.equal(config.ads, null);
  assert.equal(buildAdsTxt(config), "google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0\n");
});

test("Gamma recommendations require explicit reviewed article paths, never keyword matching", async () => {
  const { getMonetizationConfig, gammaForArticle } = await import("@/lib/monetization");
  const input = { GAMMA_AFFILIATE_ENABLED: "true", GAMMA_AFFILIATE_URL: "https://try.gamma.app/test-referral" };
  assert.equal(getMonetizationConfig(input).gamma, null);
  const config = getMonetizationConfig({ ...input, GAMMA_REVIEWED_PATHS: "news/lesson-planning, academy/generative-ai" });
  assert.ok(gammaForArticle(config, "news", "lesson-planning"));
  assert.ok(gammaForArticle(config, "academy", "generative-ai"));
  assert.equal(gammaForArticle(config, "news", "unrelated-research"), null);
  assert.equal(gammaForArticle(config, "academy", "lesson-planning"), null);
  assert.equal(getMonetizationConfig({ ...input, GAMMA_REVIEWED_PATHS: "news/*" }).gamma, null);
});

test("all locales have translated support, ad and affiliate disclosures", async () => {
  const { monetizationCopy } = await import("@/lib/monetization-copy");
  for (const locale of locales) {
    const copy = monetizationCopy[locale];
    assert.ok(copy.supportLabel.trim());
    assert.ok(copy.supportBody.trim());
    assert.ok(copy.adLabel.trim());
    assert.ok(copy.affiliateDisclosure.trim());
    assert.ok(copy.privacyTitle.trim());
    if (locale !== "en") assert.notEqual(copy.supportBody, monetizationCopy.en.supportBody);
  }
});

test("article recommendations disclose commission and are absent on unrelated pages", async () => {
  const { default: ArticleMonetization } = await import("@/components/ArticleMonetization");
  const { getMonetizationConfig } = await import("@/lib/monetization");
  const config = getMonetizationConfig({
    SUPPORT_ENABLED: "true", BUY_ME_A_COFFEE_URL: "https://buymeacoffee.com/aiedhk-test",
    GAMMA_AFFILIATE_ENABLED: "true", GAMMA_AFFILIATE_URL: "https://try.gamma.app/test-referral", GAMMA_REVIEWED_PATHS: "news/presentation-drafting",
  });
  const render = (slug: string) => renderToStaticMarkup(createElement(ArticleMonetization, { locale: "en", section: "news", slug, config }));
  assert.match(render("presentation-drafting"), /We may earn a commission/);
  assert.match(render("presentation-drafting"), /rel="sponsored noopener noreferrer"/);
  assert.doesNotMatch(render("unrelated-research"), /try\.gamma\.app|Partner tool/);
  assert.match(render("unrelated-research"), /buymeacoffee/);
});

test("policy language fallback is disclosed and marked as English even in Arabic layout", async () => {
  const { default: PolicyDocument } = await import("@/components/PolicyDocument");
  const html = renderToStaticMarkup(createElement(PolicyDocument, { locale: "ar", kind: "privacy" }));
  assert.match(html, /lang="en-HK" dir="ltr"/);
  assert.match(html, /تتوفر هذه السياسة/);
  const { default: PrivacyPage } = await import("@/app/[locale]/privacy/page");
  await assert.rejects(() => PrivacyPage({ params: Promise.resolve({ locale: "invalid" }) }), /NEXT_HTTP_ERROR_FALLBACK;404/);
});
