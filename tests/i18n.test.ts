import assert from "node:assert/strict";
import test from "node:test";
import { getDictionary, locales } from "@/lib/i18n";
import { PAPER_TYPES } from "@/lib/types";

const newsNavigationLabels = {
  en: "News",
  "zh-hant": "新聞",
  "zh-hans": "新闻",
  es: "Noticias",
  fr: "Actualités",
  pt: "Notícias",
  de: "Nachrichten",
  ar: "الأخبار",
  ko: "뉴스",
  ja: "ニュース",
  hi: "समाचार",
  ru: "Новости",
  id: "Berita",
  bn: "সংবাদ",
} as const;

test("English research news labels policy-ethics as Industry", () => {
  assert.equal(getDictionary("en").paperTypes["policy-ethics"], "Industry");
});

test("navigation translates News without adding a research qualifier", () => {
  for (const locale of locales) {
    assert.equal(getDictionary(locale).nav.researchNews, newsNavigationLabels[locale]);
  }
});

test("paper type fallback labels policy-ethics as Industry", () => {
  assert.equal(
    PAPER_TYPES.find((type) => type.value === "policy-ethics")?.defaultLabel,
    "Industry"
  );
});

test("English News hero uses the AIED summaries framing", () => {
  const researchCopy = getDictionary("en").research;

  assert.equal(researchCopy.eyebrow, "AIED News");
  assert.equal(researchCopy.title, "AIED summaries for research-to-product translation.");
  assert.equal(
    researchCopy.intro,
    "A curated feed of AIED academic papers and news. Each card offers a concise overview, while each detail page includes a 500-word written summary, an audio summary, and practical takeaways."
  );
});

test("English News newsletter promises daily curated news updates", () => {
  const newsletter = getDictionary("en").research.newsletter;

  assert.equal(newsletter.eyebrow, "Free daily summary");
  assert.equal(newsletter.title, "Get the latest AIED summaries in your inbox");
  assert.equal(newsletter.description, "Daily curated news updates.");
  assert.match(newsletter.success, /daily AIED news/i);
  assert.match(newsletter.alreadySubscribed, /daily AIED news/i);
});

test("English About company description uses the PedaNova Ed-Tech name", () => {
  assert.match(getDictionary("en").about.companyText, /^PedaNova Ed-Tech is an R&D company/);
});

test("English Academy hero identifies PedaNova Academy", () => {
  assert.equal(getDictionary("en").academy.eyebrow, "PedaNova Academy");
  assert.equal(getDictionary("en").nav.academy, "Academy");
});

test("all fourteen locale dictionaries provide typed Academy navigation and page labels", () => {
  assert.equal(getDictionary("en").nav.academy, "Academy");
  for (const locale of locales) {
    const dictionary = getDictionary(locale);
    assert.ok(dictionary.nav.academy.trim());
    assert.ok(dictionary.academy.title.trim());
    assert.ok(dictionary.academy.searchPlaceholder.trim());
    assert.ok(dictionary.academy.tracks["ai-knowledge"].trim());
    assert.ok(dictionary.academy.tracks["educational-theory"].trim());
    assert.ok(dictionary.academy.levels.basics.trim());
    assert.ok(dictionary.academy.levels.core.trim());
    assert.ok(dictionary.academy.readingTimeLabel.trim());
    assert.ok(dictionary.academy.minuteAbbreviation.trim());
    assert.ok(dictionary.academy.searchFieldLabel.trim());
    assert.ok(dictionary.academy.trackFieldLabel.trim());
    assert.ok(dictionary.academy.levelFieldLabel.trim());
  }

  assert.notEqual(getDictionary("zh-hant").academy.readingTimeLabel, getDictionary("en").academy.readingTimeLabel);
  assert.notEqual(getDictionary("zh-hant").academy.minuteAbbreviation, getDictionary("en").academy.minuteAbbreviation);
  assert.notEqual(getDictionary("ar").academy.searchFieldLabel, getDictionary("en").academy.searchFieldLabel);
});
