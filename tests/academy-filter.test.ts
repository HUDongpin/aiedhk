import assert from "node:assert/strict";
import test from "node:test";
import { filterAcademyLessonList } from "@/lib/academy-filter";
import { getAcademyLessons } from "@/lib/academy-data";

test("Academy search spans only title, tags, short summary, core ideas, and education connection", () => {
  const lessons = getAcademyLessons("en");

  assert.deepEqual(filterAcademyLessonList(lessons, { q: "transformer" }).items.map((item) => item.id), ["academy-003"]);
  assert.deepEqual(filterAcademyLessonList(lessons, { q: "reinforcement increases behavior" }).items.map((item) => item.id), ["academy-004"]);
  assert.deepEqual(filterAcademyLessonList(lessons, { q: "elicit prior ideas" }).items.map((item) => item.id), ["academy-006"]);
  assert.deepEqual(
    filterAcademyLessonList(lessons, { q: "successive approximations" }).items,
    [],
    "text found only in fullSummary must not be searchable"
  );
});

test("Academy track and level filters combine and pagination clamps to the available page", () => {
  const result = filterAcademyLessonList(getAcademyLessons("en"), {
    track: "ai-knowledge",
    level: "basics",
    page: 99,
    pageSize: 1,
  });

  assert.equal(result.total, 6);
  assert.equal(result.totalPages, 6);
  assert.equal(result.page, 6);
  assert.deepEqual(result.items.map((item) => item.id), ["academy-001"]);
});
