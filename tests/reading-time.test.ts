import assert from "node:assert/strict";
import test from "node:test";
import { readingTimeMinutes } from "@/lib/utils";

test("reading time counts words for Latin scripts and is at least one minute", () => {
  assert.equal(readingTimeMinutes("hello world", "en"), 1);

  const fourHundredWords = Array.from({ length: 400 }, () => "word").join(" ");
  assert.equal(readingTimeMinutes(fourHundredWords, "en"), 2);
});

test("reading time counts characters for CJK scripts", () => {
  const chinese = "研".repeat(720); // ~2 minutes at 360 chars/min
  assert.equal(readingTimeMinutes(chinese, "zh-hant"), 2);
});
