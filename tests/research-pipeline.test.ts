import assert from "node:assert/strict";
import test from "node:test";
import type { ResearchCandidate } from "@/lib/types";
import { generateResearchPaperDraft } from "@/lib/research-pipeline/generation";
import {
  dedupeResearchCandidates,
  inferPaperType,
  normalizeDoi,
  normalizeTitle,
  scoreResearchCandidate,
  selectResearchImage,
  suggestTags,
} from "@/lib/research-pipeline/scoring";

function candidate(overrides: Partial<ResearchCandidate> = {}): ResearchCandidate {
  const base: ResearchCandidate = {
    sourceKey: "openalex",
    title: "Generative AI Feedback for Multilingual Classroom Assessment",
    authors: ["Ada Lee", "Sam Wong"],
    abstract:
      "This study examines generative AI feedback, classroom assessment, teacher review, multilingual learning, privacy, fairness, and responsible AI in education.",
    venue: "International Journal of Artificial Intelligence in Education",
    publicationYear: new Date().getFullYear(),
    sourceUrl: "https://example.com/paper",
    doi: "https://doi.org/10.1234/example",
    isOpenAccess: true,
    normalizedTitle: "",
    relevanceScore: 0,
    scoreReasons: [],
  };
  const merged = { ...base, ...overrides };
  const scored = scoreResearchCandidate({ ...merged, normalizedTitle: normalizeTitle(merged.title) });
  return { ...merged, normalizedTitle: normalizeTitle(merged.title), ...scored };
}

test("normalizes DOI and title identities", () => {
  assert.equal(normalizeDoi("https://doi.org/10.1234/ABC"), "10.1234/abc");
  assert.equal(normalizeTitle("AI & Education:  AIED!"), "ai and education aied");
});

test("deduplicates candidates by DOI before title", () => {
  const first = candidate();
  const second = candidate({ title: "A differently worded duplicate", doi: "10.1234/EXAMPLE" });
  const third = candidate({ title: "New AI tutor paper", doi: "10.9999/new" });

  const deduped = dedupeResearchCandidates([first, second, third]);

  assert.equal(deduped.length, 2);
  assert.deepEqual(
    deduped.map((item) => item.doi),
    ["10.1234/example", "10.9999/new"]
  );
});

test("scores and tags AIED candidates transparently", () => {
  const item = candidate();

  assert.ok(item.relevanceScore >= 40);
  assert.ok(item.scoreReasons.some((reason) => reason.includes("AIED relevance")));
  assert.ok(suggestTags(item).includes("generative AI"));
  assert.ok(suggestTags(item).includes("responsible AI"));
});

test("infers paper type and image from candidate text", () => {
  const policy = candidate({ title: "Responsible AI policy and governance for schools" });

  assert.equal(inferPaperType(policy), "policy-ethics");
  assert.equal(selectResearchImage(["responsible AI"]), "/images/research/responsible-ai.svg");
});

test("generates deterministic review draft without model credentials", async () => {
  delete process.env.AI_API_KEY;
  delete process.env.AI_BASE_URL;
  const draft = await generateResearchPaperDraft(candidate());

  assert.equal(draft.generationPromptVersion, "aiedhk-weekly-research-v1");
  assert.equal(draft.generationModel, "deterministic-fallback");
  assert.ok(draft.shortSummary.length > 80);
  assert.ok(draft.fullSummary.includes("human reviewer"));
  assert.equal(draft.keyTakeaways.length, 3);
});
