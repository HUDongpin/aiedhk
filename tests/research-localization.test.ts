import assert from "node:assert/strict";
import test from "node:test";
import { getResearchPaperBySlug, getResearchPapers } from "@/lib/research-data";
import {
  getReviewedLocalization,
  localizedLocalesForPaper,
  reviewedResearchPaperLocalizations,
} from "@/lib/research-reviewed-localizations";
import { reviewedResearchPapers } from "@/lib/research-reviewed-data";
import { generateResearchLocalization } from "@/lib/research-pipeline/generation";

test("every reviewed localization key maps to a real article id", () => {
  const ids = new Set(reviewedResearchPapers.map((paper) => paper.id));
  for (const id of Object.keys(reviewedResearchPaperLocalizations)) {
    assert.ok(ids.has(id), `localization refers to unknown article id: ${id}`);
  }
});

test("reviewed translations fully replace the reader-facing fields, not just the title", () => {
  const enBySlug = new Map(getResearchPapers("en").map((paper) => [paper.slug, paper]));

  for (const [id, byLocale] of Object.entries(reviewedResearchPaperLocalizations)) {
    const source = reviewedResearchPapers.find((paper) => paper.id === id);
    assert.ok(source, `article ${id} should exist`);

    for (const locale of localizedLocalesForPaper(id)) {
      const localized = getResearchPaperBySlug(source.slug, locale);
      const english = enBySlug.get(source.slug);
      assert.ok(localized && english);

      // Localized content must actually differ from the English source.
      assert.notEqual(localized.title, english.title, `${id} ${locale} title should be translated`);
      assert.notEqual(localized.shortSummary, english.shortSummary, `${id} ${locale} shortSummary should be translated`);
      assert.notEqual(localized.fullSummary, english.fullSummary, `${id} ${locale} fullSummary should be translated`);
      assert.notEqual(localized.whyItMatters, english.whyItMatters, `${id} ${locale} whyItMatters should be translated`);

      // Structure must be preserved.
      assert.equal(localized.keyTakeaways.length, english.keyTakeaways.length, `${id} ${locale} takeaway count preserved`);
      assert.equal(localized.slug, english.slug, "slug stays stable across locales");
      assert.equal(localized.year, english.year, "year stays stable across locales");
      // English-only static audio must not leak into a non-English article.
      assert.equal(localized.summaryAudio, getReviewedLocalization(id, locale)?.summaryAudio);
    }
  }
});

test("the flagship article aied-025 is fully localized into both Chinese scripts", () => {
  for (const locale of ["zh-hant", "zh-hans"] as const) {
    const localization = getReviewedLocalization("aied-025", locale);
    assert.ok(localization, `aied-025 should have a ${locale} translation`);
    assert.ok(localization.fullSummary.split(/\n\n/).length >= 5, "paragraph structure should be preserved");
    assert.equal(localization.keyTakeaways.length, 3);
    assert.equal(localization.tags.length, 3);
  }
});

test("new Research News articles use the explicit English fallback until a reviewed localization exists", () => {
  const backlogIds = Array.from({ length: 14 }, (_, index) => `aied-${String(index + 38).padStart(3, "0")}`);
  const englishById = new Map(getResearchPapers("en").map((paper) => [paper.id, paper]));

  for (const locale of ["zh-hant", "zh-hans"] as const) {
    const localizedById = new Map(getResearchPapers(locale).map((paper) => [paper.id, paper]));

    for (const id of backlogIds) {
      assert.equal(getReviewedLocalization(id, locale), undefined, `${id} should not claim an unreviewed ${locale} translation`);
      assert.equal(localizedById.get(id)?.title, englishById.get(id)?.title);
      assert.equal(localizedById.get(id)?.fullSummary, englishById.get(id)?.fullSummary);
      assert.equal(localizedById.get(id)?.whyItMatters, englishById.get(id)?.whyItMatters);
    }
  }
});

test("generateResearchLocalization returns a flagged English fallback without AI credentials", async () => {
  const prevKey = process.env.AI_API_KEY;
  const prevUrl = process.env.AI_BASE_URL;
  delete process.env.AI_API_KEY;
  delete process.env.AI_BASE_URL;

  try {
    const source = {
      title: "Example",
      tags: ["a", "b"],
      shortSummary: "Short.",
      fullSummary: "Long.",
      keyTakeaways: ["one", "two"],
      whyItMatters: "Because.",
    };
    const result = await generateResearchLocalization(source, "zh-hant");

    assert.equal(result.usedModel, false);
    assert.equal(result.model, "english-fallback-awaiting-localization");
    assert.equal(result.localization.title, "Example", "fallback keeps English so reviewers can see it is untranslated");
    assert.deepEqual(result.localization.keyTakeaways, ["one", "two"]);
  } finally {
    if (prevKey !== undefined) process.env.AI_API_KEY = prevKey;
    if (prevUrl !== undefined) process.env.AI_BASE_URL = prevUrl;
  }
});
