import assert from "node:assert/strict";
import test from "node:test";
import { getDictionary } from "@/lib/i18n";
import { PAPER_TYPES } from "@/lib/types";

test("English research news labels policy-ethics as Industry", () => {
  assert.equal(getDictionary("en").paperTypes["policy-ethics"], "Industry");
});

test("paper type fallback labels policy-ethics as Industry", () => {
  assert.equal(
    PAPER_TYPES.find((type) => type.value === "policy-ethics")?.defaultLabel,
    "Industry"
  );
});

test("English news hero describes academic papers and audio summaries", () => {
  const researchCopy = getDictionary("en").research;

  assert.equal(researchCopy.eyebrow, "News");
  assert.equal(
    researchCopy.intro,
    "A curated feed of AIED academic papers and news. Each card offers a concise overview, while each detail page includes a 500-word written summary, an audio summary, and practical takeaways."
  );
});
