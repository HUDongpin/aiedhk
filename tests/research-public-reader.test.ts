import assert from "node:assert/strict";
import test from "node:test";
import * as research from "@/lib/research-data";
import type { ResearchPaper } from "@/lib/types";

test("public list, detail and related reads use the same localized published snapshot", async () => {
  assert.equal(typeof research.createPublicResearchReader, "function");
  const reviewed = research.getResearchPapers("en");
  const databasePaper: ResearchPaper = { ...reviewed[0], id: "database-article", title: "Database editorial update" };
  const relatedPaper: ResearchPaper = { ...reviewed[1], id: "database-related", tags: databasePaper.tags };
  const requestedLocales: string[] = [];
  const reader = research.createPublicResearchReader(async (locale) => {
    requestedLocales.push(locale);
    return [databasePaper, relatedPaper];
  });
  const list = await reader.list("zh-hant");
  const detail = await reader.bySlug(databasePaper.slug, "zh-hant");
  assert.deepEqual(detail, list.find((paper) => paper.slug === databasePaper.slug));
  assert.equal(detail?.title, "Database editorial update");
  assert.equal(detail?.contentId, reviewed[0].id, "preserve reviewed media identity for UUID database rows");
  const related = await reader.related(detail!, "zh-hant");
  assert.ok(related.every((paper) => paper.id !== databasePaper.id));
  assert.equal(new Set(related.map((paper) => paper.slug)).size, related.length);
  assert.ok(related.some((paper) => paper.id === relatedPaper.id));
  assert.deepEqual(requestedLocales, ["zh-hant", "zh-hant", "zh-hant"]);
});

test("unknown article URLs and year filters do not need per-article database lookups", async () => {
  assert.equal(typeof research.createPublicResearchReader, "function");
  const requestedLocales: string[] = [];
  const published: ResearchPaper = { ...research.getResearchPapers("en")[0], id: "database-only", slug: "database-only", year: 2027 };
  const reader = research.createPublicResearchReader(async (locale) => {
    requestedLocales.push(locale);
    return [published];
  });
  assert.equal(await reader.bySlug("unknown-news-path", "unsupported-locale"), undefined);
  assert.equal((await reader.bySlug("database-only", "en"))?.id, published.id);
  assert.ok((await reader.years()).includes(2027));
  assert.deepEqual(requestedLocales, ["en", "en", "en"], "normalize before the shared cache key is evaluated");
});

test("unavailable or empty database snapshots preserve the existing reviewed-content fallback", async () => {
  assert.equal(typeof research.createPublicResearchReader, "function");
  for (const snapshot of [null, []]) {
    const reader = research.createPublicResearchReader(async () => snapshot);
    const paper = research.getResearchPapers("zh-hant")[0];
    assert.deepEqual(await reader.bySlug(paper.slug, "zh-hant"), paper);
    assert.equal(await reader.bySlug("unknown-news-path", "zh-hant"), undefined);
    assert.equal((await reader.list("zh-hant")).length, research.getResearchPapers("zh-hant").length);
    assert.deepEqual(await reader.years(), research.YEARS);
  }
  const unavailable = research.createPublicResearchReader(async () => null);
  const paper = research.getResearchPapers("en")[0];
  assert.deepEqual(await unavailable.related(paper), research.getRelatedPapers(paper));
});
