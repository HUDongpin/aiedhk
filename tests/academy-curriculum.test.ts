import assert from "node:assert/strict";
import test from "node:test";
import { academyCurriculumV1, getNextUnpublishedAcademyPair } from "@/lib/academy-curriculum";
import { getAcademyLessons } from "@/lib/academy-data";

test("versioned Academy curriculum supplies at least thirty ordered cross-track pairs", () => {
  assert.equal(academyCurriculumV1.version, 1);
  assert.ok(academyCurriculumV1.pairs.length >= 30);
  assert.deepEqual(academyCurriculumV1.pairs.map((pair) => pair.order), academyCurriculumV1.pairs.map((_, index) => index + 1));

  for (const pair of academyCurriculumV1.pairs) {
    assert.equal(pair.topics.length, 2);
    assert.deepEqual(new Set(pair.topics.map((topic) => topic.track)), new Set(["ai-knowledge", "educational-theory"]));
    assert.ok(pair.topics.every((topic) => topic.level === "basics" || topic.level === "core"));
    assert.ok(pair.topics.every((topic) => Array.isArray(topic.prerequisiteSlugs)));
  }
});

test("curriculum helper returns the first unpublished pair and stops at queue exhaustion", () => {
  const launchSlugs = getAcademyLessons("en").map((lesson) => lesson.slug);
  assert.equal(getNextUnpublishedAcademyPair(launchSlugs)?.order, 24);

  const allSlugs = academyCurriculumV1.pairs.flatMap((pair) => pair.topics.map((topic) => topic.slug));
  assert.equal(getNextUnpublishedAcademyPair(allSlugs), undefined);
});

test("curriculum helper stops when the next pair is only partially published", () => {
  const publishedThroughPairSeven = academyCurriculumV1.pairs
    .slice(0, 7)
    .flatMap((pair) => pair.topics.map((topic) => topic.slug));
  const firstSlugFromPairEight = academyCurriculumV1.pairs[7].topics[0].slug;

  assert.throws(
    () => getNextUnpublishedAcademyPair([...publishedThroughPairSeven, firstSlugFromPairEight]),
    /pair 8 is partially published/
  );
});

test("every published Academy lesson exactly matches its curriculum title, track, and level", () => {
  const curriculumBySlug = new Map(
    academyCurriculumV1.pairs.flatMap((pair) => pair.topics).map((topic) => [topic.slug, topic])
  );

  for (const lesson of getAcademyLessons("en")) {
    const topic = curriculumBySlug.get(lesson.slug);
    assert.ok(topic, `${lesson.slug} should exist in the curriculum`);
    assert.equal(topic.title, lesson.title, `${lesson.slug} title should match`);
    assert.equal(topic.track, lesson.track, `${lesson.slug} track should match`);
    assert.equal(topic.level, lesson.level, `${lesson.slug} level should match`);
  }
});
