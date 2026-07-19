import assert from "node:assert/strict";
import test from "node:test";
import { buildSitemapEntries } from "@/app/sitemap";
import { getAcademyLessons } from "@/lib/academy-data";
import { locales } from "@/lib/i18n";
import { academyLearningResourceJsonLd } from "@/lib/structured-data";
import { generateMetadata as generateAcademyIndexMetadata } from "@/app/[locale]/academy/page";
import { generateMetadata as generateAcademyDetailMetadata } from "@/app/[locale]/academy/[slug]/page";
import { getAcademyLessonPresentation } from "@/lib/academy-data";

test("sitemap includes daily Academy indexes and every localized lesson URL", () => {
  const lessons = getAcademyLessons("en");
  const entries = buildSitemapEntries([], [], new Date("2026-07-20T00:00:00.000Z"), lessons);

  for (const locale of locales) {
    const index = entries.find((entry) => entry.url.endsWith(`/${locale}/academy`));
    assert.equal(index?.changeFrequency, "daily");
    for (const lesson of lessons) {
      assert.ok(entries.some((entry) => entry.url.endsWith(`/${locale}/academy/${lesson.slug}`)));
    }
  }
});

test("Academy metadata exposes canonical, all-locale hreflang, Open Graph, and Twitter cards", async () => {
  const lesson = getAcademyLessons("en")[0];
  const index = await generateAcademyIndexMetadata({ params: Promise.resolve({ locale: "en" }) });
  const detail = await generateAcademyDetailMetadata({ params: Promise.resolve({ locale: "en", slug: lesson.slug }) });

  for (const metadata of [index, detail]) {
    assert.match(String(metadata.alternates?.canonical), /^https:\/\//);
    assert.equal(Object.keys(metadata.alternates?.languages ?? {}).length, locales.length);
    assert.ok(metadata.openGraph);
    assert.ok(metadata.twitter);
  }
});

test("Academy lessons emit LearningResource structured data", () => {
  const lesson = getAcademyLessons("en")[0];
  const data = academyLearningResourceJsonLd(getAcademyLessonPresentation(lesson, "zh-hant"), "zh-hant") as Record<string, unknown>;

  assert.equal(data["@type"], "LearningResource");
  assert.equal(data.name, lesson.title);
  assert.equal(data.inLanguage, "en-HK");
  assert.equal(data.learningResourceType, "Lesson");
  assert.ok(String(data.url).endsWith(`/zh-hant/academy/${lesson.slug}`));
});
