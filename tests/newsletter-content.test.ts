import assert from "node:assert/strict";
import test from "node:test";
import { buildAcademyCatalog, loadNewsletterFeed } from "@/lib/newsletter/content";
import { academyCurriculumV1 } from "@/lib/academy-curriculum";
import { getAcademyLessons } from "@/lib/academy-data";
import { locales } from "@/lib/i18n";

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
