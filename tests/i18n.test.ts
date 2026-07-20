import assert from "node:assert/strict";
import test from "node:test";
import { getDictionary, locales } from "@/lib/i18n";
import { PAPER_TYPES } from "@/lib/types";

test("English research news labels policy-ethics as Industry", () => {
  assert.equal(getDictionary("en").paperTypes["policy-ethics"], "Industry");
});

test("paper type fallback labels policy-ethics as Industry", () => {
  assert.equal(
    PAPER_TYPES.find((type) => type.value === "policy-ethics")?.defaultLabel,
    "Industry"
  );
});

test("English news hero describes academic papers and audio summaries", () => {
  const researchCopy = getDictionary("en").research;

  assert.equal(researchCopy.eyebrow, "News");
  assert.equal(
    researchCopy.intro,
    "A curated feed of AIED academic papers and news. Each card offers a concise overview, while each detail page includes a 500-word written summary, an audio summary, and practical takeaways."
  );
});

test("English News newsletter promises daily curated paper updates", () => {
  assert.equal(getDictionary("en").research.newsletter.description, "Daily curated paper updates.");
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
