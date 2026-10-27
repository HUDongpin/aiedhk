import assert from "node:assert/strict";
import test from "node:test";
import { buildAcademyCatalog, loadNewsletterFeed } from "@/lib/newsletter/content";
import { academyCurriculumV1 } from "@/lib/academy-curriculum";
import { getAcademyLessons } from "@/lib/academy-data";
import { locales } from "@/lib/i18n";
import { reviewedResearchPapers } from "@/lib/research-reviewed-data";

test("Academy catalog contains only complete published curriculum pairs with stable keys", () => {
  const all = getAcademyLessons("en");
  const first = academyCurriculumV1.pairs[0];
  const ai = all.find((lesson) => lesson.slug === first.topics[0].slug)!;
  const theory = all.find((lesson) => lesson.slug === first.topics[1].slug)!;
  const full = buildAcademyCatalog(all);
  assert.equal(full.length, academyCurriculumV1.pairs.filter((pair) => pair.topics.every((topic) => all.some((lesson) => lesson.slug === topic.slug))).length);
  assert.equal(full[0].key, `${ai.id}:${theory.id}`);
  assert.equal(full[0].items.en?.length, 2);
  const partial = buildAcademyCatalog(all.filter((lesson) => lesson.id !== theory.id));
  assert.equal(partial.some((entry) => entry.key === full[0].key), false);
  for (const entry of full) for (const locale of locales) assert.equal(entry.items[locale]?.length, 2);
});

test("news catalogs preserve actual content languages and every locale without duplicate slugs", async () => {
  const feed = await loadNewsletterFeed("news", { databasePapers: async () => [] });
  assert.ok(feed.length > 0);
  assert.equal(new Set(feed.map((entry) => entry.key)).size, feed.length);
  for (const entry of feed) {
    assert.equal(entry.channel, "news");
    for (const locale of locales) {
      assert.equal(entry.items[locale]?.length, 1);
      assert.ok([locale, "en"].includes(entry.items[locale]![0].contentLocale));
    }
  }
});

test("a database source failure fails the news run instead of silently declaring an empty digest", async () => {
  await assert.rejects(loadNewsletterFeed("news", { databasePapers: async () => { throw new Error("source_unavailable"); } }), /source_unavailable/);
  const academy = await loadNewsletterFeed("academy", { databasePapers: async () => { throw new Error("must_not_call"); } });
  assert.ok(academy.length > 0, "Academy does not depend on the News database source");
});


test("every static newsletter item keeps its content image across locale variants", async () => {
  const news = await loadNewsletterFeed("news", { databasePapers: async () => [] });
  const academy = buildAcademyCatalog();
  for (const entry of [...news, ...academy]) {
    const canonical = entry.items.en!;
    for (const locale of locales) for (const [index, item] of entry.items[locale]!.entries()) {
      assert.ok(item.image, `missing image for ${entry.channel}:${item.id}`);
      assert.match(item.image.path, /^\/images\/newsletter\/[a-z0-9_-]+-[a-f0-9]{64}\.jpg$/);
      assert.equal(item.image.path, canonical[index].image!.path);
      assert.ok(item.image.alt.length > 0);
    }
  }
});

test("a database article with the same slug but a changed image never borrows the static image", async (context) => {
  const warnings = context.mock.method(console, "warn", () => {});
  const paper = { ...reviewedResearchPapers[0], image: "/images/research/covers/new-unprepared-image.jpg" };
  const feed = await loadNewsletterFeed("news", { databasePapers: async () => [{ paper, contentLocale: "en" }] });
  const item = feed.find((entry) => entry.key === paper.slug)!.items.en![0];
  assert.equal(item.title, paper.title);
  assert.equal(item.image, undefined);
  assert.equal(warnings.mock.callCount(), 1);
  assert.deepEqual(warnings.mock.calls[0].arguments, ["newsletter_images_omitted", { channel: "news", missing: 0, sourceMismatch: locales.length, invalid: 0 }]);
  assert.equal(JSON.stringify(warnings.mock.calls[0].arguments).includes(paper.image), false);
});

test("a database UUID uses its matching reviewed image without replacing database content", async (context) => {
  const warnings = context.mock.method(console, "warn", () => {});
  const original = reviewedResearchPapers[0];
  const staticFeed = await loadNewsletterFeed("news", { databasePapers: async () => [] });
  const expectedImage = staticFeed.find((entry) => entry.key === original.slug)!.items.en![0].image;
  const paper = { ...original, id: "4c1d8455-d19c-4bf0-9b0f-562a1668f47a", contentId: undefined,
    title: "Reviewed database title", shortSummary: "Reviewed database summary", imageAlt: "Database cover description" };
  const feed = await loadNewsletterFeed("news", { databasePapers: async () => [{ paper, contentLocale: "fr" }] });
  for (const locale of locales) {
    const item = feed.find((entry) => entry.key === paper.slug)!.items[locale]![0];
    assert.deepEqual(item.image, { ...expectedImage, alt: paper.imageAlt });
    assert.equal(item.id, paper.id);
    assert.equal(item.title, paper.title);
    assert.equal(item.summary, paper.shortSummary);
    assert.equal(item.contentLocale, "fr");
  }
  assert.equal(warnings.mock.callCount(), 0);
});

test("a database UUID cannot borrow a reviewed image with a different slug or source", async (context) => {
  context.mock.method(console, "warn", () => {});
  const original = reviewedResearchPapers[0];
  const paper = { ...original, id: "4c1d8455-d19c-4bf0-9b0f-562a1668f47a", contentId: undefined };
  for (const changed of [{ ...paper, slug: "different-database-article" },
    { ...paper, image: "/images/research/covers/new-unprepared-image.jpg" }]) {
    const feed = await loadNewsletterFeed("news", { databasePapers: async () => [{ paper: changed, contentLocale: "en" }] });
    assert.equal(feed.find((entry) => entry.key === changed.slug)!.items.en![0].image, undefined);
  }
});

test("a database article's explicit contentId remains authoritative", async (context) => {
  context.mock.method(console, "warn", () => {});
  const original = reviewedResearchPapers[0];
  const paper = { ...original, id: "database-row-uuid", contentId: original.id };
  const feed = await loadNewsletterFeed("news", { databasePapers: async () => [{ paper, contentLocale: "en" }] });
  assert.ok(feed.find((entry) => entry.key === paper.slug)!.items.en![0].image);
  const changedIdentity = { ...original, id: "different-database-row", contentId: "different-content-id" };
  const changed = await loadNewsletterFeed("news", { databasePapers: async () => [{ paper: changedIdentity, contentLocale: "en" }] });
  assert.equal(changed.find((entry) => entry.key === paper.slug)!.items.en![0].image, undefined);
});
