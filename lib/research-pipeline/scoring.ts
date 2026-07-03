import { PAPER_TYPES, type PaperType, type ResearchCandidate } from "@/lib/types";
import { slugify } from "@/lib/utils";

const AIED_TERMS = [
  "artificial intelligence in education",
  "ai in education",
  "aied",
  "intelligent tutoring",
  "ai tutor",
  "learning analytics",
  "educational data mining",
  "adaptive learning",
  "personalized learning",
  "automated feedback",
  "generative ai",
  "large language model",
  "teacher",
  "student",
  "classroom",
  "assessment",
  "curriculum",
];

const RESPONSIBLE_AI_TERMS = [
  "responsible ai",
  "fairness",
  "privacy",
  "transparency",
  "safety",
  "ethics",
  "bias",
  "governance",
  "explainability",
];

const LOCAL_RELEVANCE_TERMS = [
  "hong kong",
  "asia",
  "asian",
  "china",
  "chinese",
  "cantonese",
  "multilingual",
  "bilingual",
  "translation",
];

const TOPIC_TAGS = [
  { tag: "AI tutor", terms: ["tutor", "intelligent tutoring", "socratic"] },
  { tag: "personalized learning", terms: ["personalized", "adaptive learning", "adaptivity"] },
  { tag: "teacher tools", terms: ["teacher", "teacher-facing", "teaching assistant", "lesson planning"] },
  { tag: "learning analytics", terms: ["learning analytics", "educational data mining", "analytics"] },
  { tag: "generative AI", terms: ["generative ai", "large language model", "llm", "chatgpt"] },
  { tag: "feedback", terms: ["feedback", "hint", "formative"] },
  { tag: "assessment", terms: ["assessment", "scoring", "evaluation", "rubric"] },
  { tag: "responsible AI", terms: RESPONSIBLE_AI_TERMS },
  { tag: "multilingual learning", terms: ["multilingual", "bilingual", "translation", "language learning"] },
  { tag: "datasets", terms: ["dataset", "benchmark", "corpus"] },
  { tag: "policy", terms: ["policy", "governance", "guideline", "framework"] },
  { tag: "Hong Kong", terms: ["hong kong", "cantonese"] },
];

const IMAGE_BY_TAG: Record<string, string> = {
  "AI tutor": "/images/research/ai-tutor.svg",
  "personalized learning": "/images/research/personalized-learning.svg",
  "teacher tools": "/images/research/teacher-copilot.svg",
  "learning analytics": "/images/research/multimodal-learning.svg",
  "generative AI": "/images/research/assessment.svg",
  feedback: "/images/research/assessment.svg",
  assessment: "/images/research/assessment.svg",
  "responsible AI": "/images/research/responsible-ai.svg",
  "multilingual learning": "/images/research/hong-kong-aied.svg",
  datasets: "/images/research/dataset.svg",
  policy: "/images/research/responsible-ai.svg",
  "Hong Kong": "/images/research/hong-kong-aied.svg",
};

export function normalizeTitle(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function normalizeDoi(doi?: string | null) {
  return doi?.replace(/^https?:\/\/(dx\.)?doi\.org\//i, "").trim().toLowerCase() || undefined;
}

function textFor(candidate: Pick<ResearchCandidate, "title" | "abstract" | "venue">) {
  return [candidate.title, candidate.abstract, candidate.venue].filter(Boolean).join(" ").toLowerCase();
}

function countMatches(text: string, terms: string[]) {
  return terms.reduce((total, term) => total + (text.includes(term) ? 1 : 0), 0);
}

export function inferPaperType(candidate: Pick<ResearchCandidate, "title" | "abstract" | "venue" | "sourceKey">): PaperType {
  const text = textFor(candidate);
  const venue = candidate.venue?.toLowerCase() ?? "";

  if (text.includes("policy") || text.includes("guideline") || text.includes("governance")) return "policy-ethics";
  if (text.includes("review") || text.includes("survey") || text.includes("systematic mapping")) return "review";
  if (text.includes("dataset") || text.includes("benchmark") || text.includes("corpus")) return "tool-dataset";
  if (venue.includes("conference") || venue.includes("aied") || venue.includes("lak") || venue.includes("edm") || candidate.sourceKey === "arxiv") {
    return "conference";
  }
  return "journal";
}

export function suggestTags(candidate: Pick<ResearchCandidate, "title" | "abstract" | "venue">) {
  const text = textFor(candidate);
  const tags = TOPIC_TAGS.filter((topic) => topic.terms.some((term) => text.includes(term))).map((topic) => topic.tag);
  const uniqueTags = Array.from(new Set(tags));
  return (uniqueTags.length > 0 ? uniqueTags : ["AI in education", "research translation", "evaluation"]).slice(0, 5);
}

export function selectResearchImage(tags: string[]) {
  const tag = tags.find((value) => IMAGE_BY_TAG[value]);
  return tag ? IMAGE_BY_TAG[tag] : "/images/research/ai-tutor.svg";
}

export function scoreResearchCandidate(candidate: ResearchCandidate) {
  const text = textFor(candidate);
  const reasons: string[] = [];
  let score = 0;

  const aiedMatches = countMatches(text, AIED_TERMS);
  score += Math.min(aiedMatches * 10, 45);
  if (aiedMatches > 0) reasons.push(`AIED relevance: ${aiedMatches} matched terms`);

  if (candidate.abstract && candidate.abstract.length >= 350) {
    score += 12;
    reasons.push("substantive abstract available");
  }

  if (candidate.isOpenAccess || candidate.openAccessUrl) {
    score += 10;
    reasons.push("open-access signal available");
  }

  const responsibleMatches = countMatches(text, RESPONSIBLE_AI_TERMS);
  if (responsibleMatches > 0) {
    score += Math.min(responsibleMatches * 4, 12);
    reasons.push("responsible-AI relevance");
  }

  const localMatches = countMatches(text, LOCAL_RELEVANCE_TERMS);
  if (localMatches > 0) {
    score += Math.min(localMatches * 5, 15);
    reasons.push("Hong Kong, Asia, or multilingual relevance");
  }

  if (candidate.publicationYear) {
    const age = new Date().getFullYear() - candidate.publicationYear;
    if (age <= 1) {
      score += 15;
      reasons.push("very recent");
    } else if (age <= 3) {
      score += 8;
      reasons.push("recent");
    }
  }

  if (["aied", "ijaied", "lak", "edm", "learning-at-scale"].includes(candidate.sourceKey)) {
    score += 15;
    reasons.push("core AIED venue/source");
  }

  return {
    relevanceScore: Math.round(score),
    scoreReasons: reasons.length > 0 ? reasons : ["low but potentially relevant AI+education match"],
  };
}

export function dedupeResearchCandidates(candidates: ResearchCandidate[]) {
  const seen = new Set<string>();
  const deduped: ResearchCandidate[] = [];

  for (const candidate of candidates) {
    const doiKey = normalizeDoi(candidate.doi);
    const identity = doiKey ? `doi:${doiKey}` : `title:${candidate.normalizedTitle}`;
    if (seen.has(identity)) continue;
    seen.add(identity);
    deduped.push({ ...candidate, doi: doiKey });
  }

  return deduped;
}

export function createUniqueSlug(title: string, suffix?: string | number) {
  const base = slugify(title).slice(0, 90).replace(/-+$/g, "") || "research-paper";
  return suffix ? `${base}-${suffix}` : base;
}

export function isValidPaperType(value: string): value is PaperType {
  return PAPER_TYPES.some((type) => type.value === value);
}
