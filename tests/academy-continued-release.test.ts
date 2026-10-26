import assert from "node:assert/strict";
import test from "node:test";
import { getAcademyLessons } from "@/lib/academy-data";

const firstDate = Date.UTC(2026, 7, 22, 8);
const dayMs = 86_400_000;

function releaseLessons() {
  return getAcademyLessons("en")
    .filter((lesson) => /^academy-\d{3}$/.test(lesson.id))
    .filter((lesson) => Number(lesson.id.slice(8)) >= 71 && Number(lesson.id.slice(8)) <= 196)
    .sort((a, b) => a.createdAt.localeCompare(b.createdAt) || a.id.localeCompare(b.id));
}

test("Academy August–October releases preserve contiguous daily pairs and stable track identifiers", () => {
  const lessons = releaseLessons();
  assert.equal(lessons.length, 126, "all 63 daily pairs must be published");
  const all = getAcademyLessons("en");
  assert.equal(all.length, 202, "all prior lessons and the three October 24–26 pairs must remain available");
  for (const track of ["ai-knowledge", "educational-theory"]) {
    assert.equal(all.filter((lesson) => lesson.track === track).length, 101);
    assert.equal(lessons.filter((lesson) => lesson.track === track).length, 63);
  }
  assert.equal(lessons.length % 2, 0, "no day may publish only one track");
  for (let index = 0; index < lessons.length; index += 1) {
    const lesson = lessons[index];
    const day = Math.floor(index / 2);
    const ai = index % 2 === 0;
    assert.equal(lesson.id, `academy-${String(71 + index).padStart(3, "0")}`);
    assert.equal(lesson.createdAt, new Date(firstDate + day * dayMs).toISOString());
    assert.equal(lesson.track, ai ? "ai-knowledge" : "educational-theory");
    assert.equal(lesson.listingIdentifier, `${ai ? "AI Knowledge" : "Educational Theory"} ${36 + day}`);
  }
});

test("new Academy lessons expose ordinary course copy and unique identities without release explanations", () => {
  const all = getAcademyLessons("en");
  for (const lesson of releaseLessons()) {
    assert.equal(all.filter((item) => item.slug === lesson.slug).length, 1);
    assert.equal(all.filter((item) => item.title.toLowerCase() === lesson.title.toLowerCase()).length, 1);
    const publicCopy = [lesson.title, lesson.shortSummary, lesson.fullSummary, ...lesson.coreIdeas, lesson.educationConnection, ...lesson.relatedConcepts].join(" ");
    assert.doesNotMatch(publicCopy, /backfill|catch[- ]up|补齐|补发|补更/i, lesson.id);
  }
});

test("Academy October 24–26 releases continue both track sequences through three digits", () => {
  const latest = getAcademyLessons("en")
    .filter((lesson) => Number(lesson.id.slice(8)) >= 197)
    .sort((a, b) => a.id.localeCompare(b.id));
  assert.equal(latest.length, 6);

  for (let index = 0; index < latest.length; index += 1) {
    const lesson = latest[index];
    const day = Math.floor(index / 2);
    const ai = index % 2 === 0;
    assert.equal(lesson.id, `academy-${197 + index}`);
    assert.equal(lesson.createdAt, new Date(Date.UTC(2026, 9, 24 + day, 8)).toISOString());
    assert.equal(lesson.track, ai ? "ai-knowledge" : "educational-theory");
    assert.equal(lesson.listingIdentifier, `${ai ? "AI Knowledge" : "Educational Theory"} ${99 + day}`);
  }
});
