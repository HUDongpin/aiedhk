import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { getAcademyLessons } from "@/lib/academy-data";

test("Academy publishes exactly twenty-four ordered reviewed English lessons", () => {
  const lessons = getAcademyLessons("en");

  assert.equal(lessons.length, 24);
  assert.deepEqual(
    lessons.map((lesson) => lesson.id),
    [
      "academy-015",
      "academy-016",
      "academy-023",
      "academy-024",
      "academy-021",
      "academy-022",
      "academy-013",
      "academy-014",
      "academy-011",
      "academy-012",
      "academy-009",
      "academy-010",
      "academy-007",
      "academy-008",
      "academy-019",
      "academy-020",
      "academy-017",
      "academy-018",
      "academy-006",
      "academy-005",
      "academy-004",
      "academy-003",
      "academy-002",
      "academy-001",
    ]
  );
  assert.deepEqual(
    new Set(lessons.map((lesson) => lesson.track)),
    new Set(["ai-knowledge", "educational-theory"])
  );
  assert.equal(lessons.filter((lesson) => lesson.track === "ai-knowledge").length, 12);
  assert.equal(lessons.filter((lesson) => lesson.track === "educational-theory").length, 12);
  assert.deepEqual(
    new Set(lessons.filter((lesson) => ["academy-009", "academy-010", "academy-011", "academy-012", "academy-013", "academy-014", "academy-015", "academy-016", "academy-017", "academy-018", "academy-019", "academy-020", "academy-021", "academy-022", "academy-023", "academy-024"].includes(lesson.id)).map((lesson) => lesson.track)),
    new Set(["ai-knowledge", "educational-theory"])
  );
  assert.ok(lessons.every((lesson) => lesson.level === "basics" || lesson.level === "core"));
});

test("Academy publishes the scheduled curriculum pair for every completed July release and catch-up date", () => {
  const lessons = getAcademyLessons("en");
  const catchUpDates = new Map([
    ["2026-07-24T08:00:00.000Z", ["academy-009", "academy-010"]],
    ["2026-07-25T08:00:00.000Z", ["academy-011", "academy-012"]],
    ["2026-07-26T08:00:00.000Z", ["academy-013", "academy-014"]],
    ["2026-07-21T08:00:00.000Z", ["academy-017", "academy-018"]],
    ["2026-07-22T08:00:00.000Z", ["academy-019", "academy-020"]],
    ["2026-07-27T08:00:00.000Z", ["academy-021", "academy-022"]],
    ["2026-07-28T08:00:00.000Z", ["academy-023", "academy-024"]],
    ["2026-07-29T08:00:00.000Z", ["academy-015", "academy-016"]],
  ]);

  for (const [createdAt, expectedIds] of catchUpDates) {
    assert.deepEqual(
      lessons.filter((lesson) => lesson.createdAt === createdAt).map((lesson) => lesson.id),
      expectedIds
    );
  }
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
    "Supervised, Unsupervised, and Reinforcement Learning",
    "Retrieval Practice",
    "Features, Labels, and Learned Representations",
    "Spacing and Interleaving",
    "What Neural Networks Learn",
    "Dual Coding and Multimedia Learning",
    "Prompts, Context, and Model Responses",
    "Scaffolding and the Zone of Proximal Development",
    "AI Errors, Uncertainty, and Hallucination",
    "Metacognition and Self-Regulated Learning",
    "Evaluating AI System Performance",
    "Motivation, Self-Determination, and Agency",
    "Embeddings and Semantic Similarity",
    "Schema Theory",
    "Transformers, Attention, and Context Windows",
    "Conceptual Change",
  ];

  assert.deepEqual(new Set(lessons.map((lesson) => lesson.title)), new Set(expectedTitles));
  assert.equal(new Set(lessons.map((lesson) => lesson.id)).size, 24);
  assert.equal(new Set(lessons.map((lesson) => lesson.listingIdentifier)).size, 24);
  assert.equal(new Set(lessons.map((lesson) => lesson.slug)).size, 24);
  assert.equal(new Set(lessons.map((lesson) => lesson.title)).size, 24);
  assert.equal(new Set(lessons.map((lesson) => lesson.image)).size, 24);
  assert.equal(new Set(lessons.map((lesson) => lesson.summaryAudio)).size, 24);

  for (const lesson of lessons) {
    const wordCount = lesson.fullSummary.trim().split(/\s+/).length;
    assert.ok(wordCount >= 450 && wordCount <= 550, `${lesson.id} has ${wordCount} summary words`);
    assert.equal(lesson.coreIdeas.length, 3);
    assert.equal(lesson.relatedConcepts.length, 3);
    assert.match(lesson.listingIdentifier, /^(AI Knowledge|Educational Theory) \d{2,}$/);
    assert.ok(lesson.sourceUrls.length >= 2 && lesson.sourceUrls.length <= 4);
    assert.ok(lesson.sourceUrls.every((source) => /^https:\/\//.test(source.url)));
    assert.ok(lesson.imageAlt.trim().length > 20, `${lesson.id} must include literal image alt text`);
    assert.match(lesson.image, new RegExp(`^/images/academy/covers/${lesson.id}-.+\\.png$`));
    assert.match(lesson.summaryAudio, new RegExp(`^/audio/academy/${lesson.id}-.+-summary\\.m4a$`));
  }
});

test("Academy alt text does not normalize banned particle-heavy or fake-person art direction", () => {
  const lessons = getAcademyLessons("en");
  const bannedVisualTerms =
    /\b(particles?|granules?|beads?|pebbles?|point clouds?|scatter fields?|confetti|glitter|stippling|swarms?|dotted meshes?|cut-paper|clay figures?|cartoons?|mannequins?|waxy people)\b/i;

  for (const lesson of lessons) {
    assert.doesNotMatch(lesson.imageAlt, bannedVisualTerms, `${lesson.id} cover alt text describes a banned visual style`);
  }
});

test("Academy art direction requires concept-rich technology photography instead of plain classroom staging", () => {
  const contract = readFileSync(path.join(process.cwd(), "docs/academy-art-direction.md"), "utf8");

  assert.match(contract, /concept-rich technology editorial photography/i);
  assert.match(contract, /Do not default to generic beige classrooms/i);
  assert.match(contract, /do not fall back to an abstract no-human composition/i);
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
