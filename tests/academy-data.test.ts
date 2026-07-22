import assert from "node:assert/strict";
import test from "node:test";
import { getAcademyLessons } from "@/lib/academy-data";

test("Academy publishes exactly eight ordered reviewed English lessons", () => {
  const lessons = getAcademyLessons("en");

  assert.equal(lessons.length, 8);
  assert.deepEqual(
    lessons.map((lesson) => lesson.id),
    ["academy-007", "academy-008", "academy-006", "academy-005", "academy-004", "academy-003", "academy-002", "academy-001"]
  );
  assert.deepEqual(
    new Set(lessons.map((lesson) => lesson.track)),
    new Set(["ai-knowledge", "educational-theory"])
  );
  assert.equal(lessons.filter((lesson) => lesson.track === "ai-knowledge").length, 4);
  assert.equal(lessons.filter((lesson) => lesson.track === "educational-theory").length, 4);
  assert.deepEqual(
    new Set(lessons.filter((lesson) => ["academy-007", "academy-008"].includes(lesson.id)).map((lesson) => lesson.track)),
    new Set(["ai-knowledge", "educational-theory"])
  );
  assert.ok(lessons.every((lesson) => lesson.level === "basics" || lesson.level === "core"));
});

test("each launch lesson has complete reviewed copy and unique stable media references", () => {
  const lessons = getAcademyLessons("en");
  const expectedTitles = [
    "What Artificial Intelligence Is",
    "Machine Learning, Deep Learning, and Generative AI",
    "How Large Language Models Generate Text",
    "Behaviorism and Learning Through Consequences",
    "Cognitive Load Theory",
    "Constructivism and Active Knowledge Building",
    "Training, Validation, and Test Data",
    "Working Memory and Long-Term Memory",
  ];

  assert.deepEqual(new Set(lessons.map((lesson) => lesson.title)), new Set(expectedTitles));
  assert.equal(new Set(lessons.map((lesson) => lesson.id)).size, 8);
  assert.equal(new Set(lessons.map((lesson) => lesson.slug)).size, 8);
  assert.equal(new Set(lessons.map((lesson) => lesson.title)).size, 8);
  assert.equal(new Set(lessons.map((lesson) => lesson.image)).size, 8);
  assert.equal(new Set(lessons.map((lesson) => lesson.summaryImage)).size, 8);
  assert.equal(new Set(lessons.map((lesson) => lesson.summaryAudio)).size, 8);

  for (const lesson of lessons) {
    const wordCount = lesson.fullSummary.trim().split(/\s+/).length;
    assert.ok(wordCount >= 450 && wordCount <= 550, `${lesson.id} has ${wordCount} summary words`);
    assert.equal(lesson.coreIdeas.length, 3);
    assert.equal(lesson.relatedConcepts.length, 3);
    assert.ok(lesson.sourceUrls.length >= 2 && lesson.sourceUrls.length <= 4);
    assert.ok(lesson.sourceUrls.every((source) => /^https:\/\//.test(source.url)));
    assert.ok(lesson.imageAlt.trim().length > 20, `${lesson.id} must include literal cover alt text`);
    assert.ok(lesson.summaryImageAlt.trim().length > 20, `${lesson.id} must include literal summary alt text`);
    assert.match(lesson.image, new RegExp(`^/images/academy/covers/${lesson.id}-.+\\.png$`));
    assert.match(lesson.summaryImage, new RegExp(`^/images/academy/summary/${lesson.id}-.+\\.png$`));
    assert.match(lesson.summaryAudio, new RegExp(`^/audio/academy/${lesson.id}-.+-summary\\.m4a$`));
  }
});

test("unreviewed locales fall back to English lesson text without leaking English audio", () => {
  const english = getAcademyLessons("en")[0];
  const traditionalChinese = getAcademyLessons("zh-hant")[0];

  assert.equal(traditionalChinese.title, english.title);
  assert.equal(traditionalChinese.fullSummary, english.fullSummary);
  assert.ok(english.summaryAudio);
  assert.equal(traditionalChinese.summaryAudio, "");
  assert.equal(traditionalChinese.summaryAudioTitle, "");
});
