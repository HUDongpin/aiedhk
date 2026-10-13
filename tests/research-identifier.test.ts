import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import ResearchCard from "@/components/ResearchCard";
import { getDictionary, locales, type Locale } from "@/lib/i18n";
import { getResearchPaperBySlug, withReviewedStaticEnhancements } from "@/lib/research-data";
import { filterResearchPaperList } from "@/lib/research-filter";
import type { ResearchPaper } from "@/lib/types";

const databaseId = "4c358f35-5fba-4ba9-873f-0f9dc7c01a21";
const reviewedSlug = "systematic-review-ai-applications-higher-education-where-are-the-educators";

function databasePaper(overrides: Partial<ResearchPaper> = {}): ResearchPaper {
  const reviewed = getResearchPaperBySlug(reviewedSlug);
  assert.ok(reviewed);
  return {
    ...reviewed,
    id: databaseId,
    title: "Database-edited research title",
    shortSummary: "Database-edited short summary.",
    fullSummary: "Database-edited full summary.",
    createdAt: "2026-10-01",
    ...overrides,
  };
}

function assertRenderedIdentifier(paper: ResearchPaper, number: string, locale: Locale = "en") {
  const dictionary = getDictionary(locale);
  const expected = `${dictionary.paperTypes[paper.type]} ${number}`;
  const html = renderToStaticMarkup(React.createElement(ResearchCard, { paper, locale, dictionary }));
  const identifier = /aria-label="Article identifier ([^"]+)"[^>]*>([^<]+)<\/span>/.exec(html);
  assert.ok(identifier, `${locale}: rendered card must expose an identifier`);
  assert.deepEqual(identifier.slice(1), [expected, expected], `${locale}: accessible and visible identifiers`);
}

test("reviewed slug enhancement adds the canonical content ID while retaining the database identity and content", () => {
  const original = databasePaper();
  const snapshot = structuredClone(original);
  const enhanced = withReviewedStaticEnhancements(original);

  assert.equal(enhanced.contentId, "aied-001");
  for (const field of ["id", "slug", "title", "shortSummary", "fullSummary", "createdAt"] as const) {
    assert.equal(enhanced[field], original[field], `${field} must retain the database value`);
  }
  assert.deepEqual(original, snapshot, "enhancement must not mutate the input row");
});

test("a reviewed database row renders its canonical number in every supported locale", () => {
  const enhanced = withReviewedStaticEnhancements(databasePaper());
  for (const locale of locales) {
    assertRenderedIdentifier(enhanced, "01", locale);
  }
});

test("content IDs retain the full sequence as identifiers grow beyond two digits", () => {
  for (const [contentId, number] of [["aied-099", "99"], ["aied-100", "100"], ["aied-1000", "1000"]]) {
    const item = databasePaper({ contentId });
    for (const locale of locales) {
      assertRenderedIdentifier(item, number, locale);
    }
  }
});

test("canonical card numbers survive reordering, filtering and pagination", () => {
  const first = withReviewedStaticEnhancements(databasePaper({ title: "Needle review" }));
  const other = databasePaper({ id: "aied-107", slug: "other-paper", title: "Other paper" });
  const variants = [
    filterResearchPaperList([first, other], { page: 1, pageSize: 1 }),
    filterResearchPaperList([other, first], { page: 2, pageSize: 1 }),
    filterResearchPaperList([other, first], { q: "Needle" }),
  ];

  for (const result of variants) {
    assert.equal(result.items.length, 1);
    assert.equal(result.items[0].id, databaseId);
    assertRenderedIdentifier(result.items[0], "01");
  }
});

test("an unknown database row is not mapped by title and keeps its existing identifier fallback", () => {
  const reviewed = getResearchPaperBySlug(reviewedSlug);
  assert.ok(reviewed);
  const unknown = databasePaper({ slug: "unreviewed-database-paper", title: reviewed.title });
  const enhanced = withReviewedStaticEnhancements(unknown);

  assert.strictEqual(enhanced, unknown);
  assert.equal(enhanced.contentId, undefined);
  assertRenderedIdentifier(enhanced, databaseId);
});

test("static cards without a content ID continue to use their own stable numbered ID", () => {
  assertRenderedIdentifier(databasePaper({ id: "aied-007" }), "07");
  assertRenderedIdentifier(databasePaper({ id: "aied-1000" }), "1000");
});
