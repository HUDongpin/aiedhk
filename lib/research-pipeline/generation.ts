import { localeMeta, type Locale } from "@/lib/i18n";
import type { PaperType, ResearchCandidate, ResearchPaperDraft, ResearchPaperLocalization } from "@/lib/types";
import { createUniqueSlug, inferPaperType, selectResearchImage, suggestTags } from "./scoring";

export const RESEARCH_GENERATION_PROMPT_VERSION = "aiedhk-weekly-research-v1";
export const RESEARCH_LOCALIZATION_PROMPT_VERSION = "aiedhk-localization-v1";

interface GeneratedResearchSummary {
  type: PaperType;
  tags: string[];
  imageAlt: string;
  shortSummary: string;
  fullSummary: string;
  keyTakeaways: string[];
  whyItMatters: string;
  confidenceNotes: string;
}

export interface GeneratedLocalization {
  locale: Locale;
  title: string;
  tags: string[];
  imageAlt: string;
  shortSummary: string;
  fullSummary: string;
  keyTakeaways: string[];
  whyItMatters: string;
  generationModel: string;
}

function firstSentence(text?: string) {
  return text?.split(/(?<=[.!?])\s+/)[0]?.trim() || "";
}

function yearFromCandidate(candidate: ResearchCandidate) {
  return candidate.publicationYear ?? (candidate.publicationDate ? Number(candidate.publicationDate.slice(0, 4)) : new Date().getFullYear());
}

function venueFromCandidate(candidate: ResearchCandidate) {
  return candidate.venue?.trim() || "AI in Education research";
}

function createFallbackSummary(candidate: ResearchCandidate): GeneratedResearchSummary {
  const tags = suggestTags(candidate);
  const type = inferPaperType(candidate);
  const abstractLead = firstSentence(candidate.abstract);
  const sourceDescription = abstractLead || `${candidate.title} is a recent AI in Education research item from ${venueFromCandidate(candidate)}.`;
  const topicPhrase = tags.slice(0, 3).join(", ");

  return {
    type,
    tags,
    imageAlt: `Abstract illustration for ${candidate.title}`,
    shortSummary:
      `${sourceDescription} AIEDHK flags it for review because it connects ${topicPhrase} with practical questions about classroom use, evidence quality, and responsible deployment.`.slice(
        0,
        700
      ),
    fullSummary: [
      `${candidate.title} is a ${type} connected to ${topicPhrase}. The available metadata and abstract suggest that the work belongs in AIEDHK's weekly research intelligence workflow because it can help readers connect technical progress with educational practice.`,
      candidate.abstract
        ? `The paper abstract emphasizes: ${candidate.abstract.slice(0, 900)}`
        : "The current source record does not include a full abstract. A reviewer should inspect the source link before approving publication and add more specific details about method, sample, findings, and limitations.",
      "For teachers and school leaders, the most important review question is whether the work changes a real classroom decision: how learners receive feedback, how teachers monitor progress, how evidence is interpreted, or how AI risks are governed. AIEDHK should highlight concrete implementation conditions instead of treating model capability as educational impact.",
      "For product teams, this paper should be reviewed through a research-to-product lens. The reviewer should identify the user workflow, evidence quality, data assumptions, deployment risks, and any multilingual or Hong Kong relevance. If the claims are strong enough, the summary can become a product checklist item or a seed for a pilot hypothesis.",
      "This draft was generated from metadata, abstracts, and open-access links only. Before publishing, a human reviewer should verify bibliographic details, remove overclaims, and ensure the summary accurately reflects the source.",
    ].join("\n\n"),
    keyTakeaways: [
      `${candidate.title} connects ${topicPhrase} with AI in Education practice.`,
      "A reviewer should verify evidence quality, classroom fit, and responsible-AI implications.",
      "AIEDHK can translate the finding into product questions, pilot criteria, or teacher-facing guidance.",
    ],
    whyItMatters:
      `AIEDHK can use this item to connect global work on ${topicPhrase} with Hong Kong's multilingual education context, responsible AI expectations, and research-to-product strategy.`,
    confidenceNotes: candidate.abstract
      ? "Draft based on source metadata and abstract; reviewer should verify claims against the paper before publishing."
      : "Low confidence: source metadata had no abstract. Human review is required before approval.",
  };
}

function extractJsonObject(text: string) {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i)?.[1];
  const source = fenced ?? text;
  const start = source.indexOf("{");
  const end = source.lastIndexOf("}");
  if (start === -1 || end === -1 || end <= start) {
    throw new Error("AI response did not contain a JSON object.");
  }
  return JSON.parse(source.slice(start, end + 1)) as Partial<GeneratedResearchSummary>;
}

function asStringArray(value: unknown, fallback: string[]) {
  if (!Array.isArray(value)) return fallback;
  const items = value.filter((item): item is string => typeof item === "string" && item.trim().length > 0).map((item) => item.trim());
  return items.length > 0 ? items : fallback;
}

function sanitizeGeneratedSummary(value: Partial<GeneratedResearchSummary>, fallback: GeneratedResearchSummary): GeneratedResearchSummary {
  const type = value.type ?? fallback.type;
  return {
    type,
    tags: asStringArray(value.tags, fallback.tags).slice(0, 5),
    imageAlt: typeof value.imageAlt === "string" && value.imageAlt.trim() ? value.imageAlt.trim() : fallback.imageAlt,
    shortSummary: typeof value.shortSummary === "string" && value.shortSummary.trim() ? value.shortSummary.trim() : fallback.shortSummary,
    fullSummary: typeof value.fullSummary === "string" && value.fullSummary.trim() ? value.fullSummary.trim() : fallback.fullSummary,
    keyTakeaways: asStringArray(value.keyTakeaways, fallback.keyTakeaways).slice(0, 5),
    whyItMatters: typeof value.whyItMatters === "string" && value.whyItMatters.trim() ? value.whyItMatters.trim() : fallback.whyItMatters,
    confidenceNotes:
      typeof value.confidenceNotes === "string" && value.confidenceNotes.trim() ? value.confidenceNotes.trim() : fallback.confidenceNotes,
  };
}

async function generateWithConfiguredModel(candidate: ResearchCandidate, fallback: GeneratedResearchSummary) {
  const apiKey = process.env.AI_API_KEY;
  const baseUrl = process.env.AI_BASE_URL?.replace(/\/+$/g, "");
  const model = process.env.AI_MODEL || "qwen-plus";

  if (!apiKey || !baseUrl) {
    return { summary: fallback, model: "deterministic-fallback", usedModel: false };
  }

  const prompt = `You are preparing a human-review draft for AIEDHK, a Hong Kong AI in Education knowledge hub.

Use ONLY the bibliographic metadata and abstract below. Do not claim to have read the full paper unless the abstract says so. Do not quote long passages. Return strict JSON with keys:
type, tags, imageAlt, shortSummary, fullSummary, keyTakeaways, whyItMatters, confidenceNotes.

Constraints:
- type must be one of: journal, conference, review, tool-dataset, policy-ethics.
- tags: 3 to 5 concise AIED topic tags.
- shortSummary: 80 to 120 words.
- fullSummary: 450 to 600 words.
- keyTakeaways: exactly 3 strings.
- whyItMatters: 1 paragraph for AIEDHK and Hong Kong/multilingual/responsible-AI relevance when justified.
- confidenceNotes: what must be checked by the human reviewer.

Paper metadata:
Title: ${candidate.title}
Authors: ${candidate.authors.join(", ") || "Unknown"}
Venue: ${venueFromCandidate(candidate)}
Year: ${yearFromCandidate(candidate)}
DOI: ${candidate.doi ?? "not provided"}
Source URL: ${candidate.sourceUrl}
Open access URL: ${candidate.openAccessUrl ?? "not provided"}
Abstract: ${candidate.abstract ?? "No abstract provided."}`;

  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "authorization": `Bearer ${apiKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: "You create accurate, cautious, source-grounded research summary drafts for human review." },
        { role: "user", content: prompt },
      ],
      temperature: 0.2,
    }),
  });

  if (!response.ok) {
    throw new Error(`AI generation failed with HTTP ${response.status}`);
  }

  const body = (await response.json()) as { choices?: Array<{ message?: { content?: string } }> };
  const content = body.choices?.[0]?.message?.content;
  if (!content) {
    throw new Error("AI generation returned no content.");
  }

  return {
    summary: sanitizeGeneratedSummary(extractJsonObject(content), fallback),
    model,
    usedModel: true,
  };
}

export async function generateResearchPaperDraft(candidate: ResearchCandidate): Promise<ResearchPaperDraft> {
  const fallback = createFallbackSummary(candidate);
  let generated = fallback;
  let model = "deterministic-fallback";
  let generationError: string | undefined;

  try {
    const result = await generateWithConfiguredModel(candidate, fallback);
    generated = result.summary;
    model = result.model;
  } catch (error) {
    generationError = error instanceof Error ? error.message : "unknown AI generation error";
  }

  const tags = generated.tags.slice(0, 5);

  return {
    slug: createUniqueSlug(candidate.title),
    title: candidate.title,
    authors: candidate.authors,
    venue: venueFromCandidate(candidate),
    year: yearFromCandidate(candidate),
    type: generated.type,
    tags,
    image: selectResearchImage(tags),
    imageAlt: generated.imageAlt,
    shortSummary: generated.shortSummary,
    fullSummary: generated.fullSummary,
    keyTakeaways: generated.keyTakeaways.slice(0, 5),
    whyItMatters: generated.whyItMatters,
    sourceUrl: candidate.sourceUrl,
    doi: candidate.doi,
    publicationDate: candidate.publicationDate,
    confidenceNotes: generated.confidenceNotes,
    generationPromptVersion: RESEARCH_GENERATION_PROMPT_VERSION,
    generationModel: model,
    generationMetadata: {
      candidateSourceKey: candidate.sourceKey,
      candidateScore: candidate.relevanceScore,
      candidateScoreReasons: candidate.scoreReasons,
      usedAbstract: Boolean(candidate.abstract),
      generationError,
    },
  };
}

export function createFallbackLocalization(locale: Locale, draft: ResearchPaperDraft): GeneratedLocalization {
  return {
    locale,
    title: draft.title,
    tags: draft.tags,
    imageAlt: draft.imageAlt,
    shortSummary: draft.shortSummary,
    fullSummary: draft.fullSummary,
    keyTakeaways: draft.keyTakeaways,
    whyItMatters: draft.whyItMatters,
    generationModel: "english-fallback-awaiting-localization",
  };
}

/** English source fields that can be translated into another locale. */
export interface LocalizableResearchFields {
  title: string;
  tags: string[];
  imageAlt?: string;
  shortSummary: string;
  fullSummary: string;
  keyTakeaways: string[];
  whyItMatters: string;
}

export interface ResearchLocalizationResult {
  locale: Locale;
  localization: ResearchPaperLocalization;
  usedModel: boolean;
  model: string;
  error?: string;
}

function englishLocalization(source: LocalizableResearchFields): ResearchPaperLocalization {
  return {
    title: source.title,
    tags: source.tags,
    imageAlt: source.imageAlt,
    shortSummary: source.shortSummary,
    fullSummary: source.fullSummary,
    keyTakeaways: source.keyTakeaways,
    whyItMatters: source.whyItMatters,
  };
}

function sanitizeLocalization(value: Partial<ResearchPaperLocalization>, fallback: ResearchPaperLocalization): ResearchPaperLocalization {
  const asString = (candidate: unknown, alt: string) =>
    typeof candidate === "string" && candidate.trim() ? candidate.trim() : alt;

  return {
    title: asString(value.title, fallback.title),
    tags: asStringArray(value.tags, fallback.tags).slice(0, 5),
    imageAlt: typeof value.imageAlt === "string" && value.imageAlt.trim() ? value.imageAlt.trim() : fallback.imageAlt,
    shortSummary: asString(value.shortSummary, fallback.shortSummary),
    fullSummary: asString(value.fullSummary, fallback.fullSummary),
    keyTakeaways: asStringArray(value.keyTakeaways, fallback.keyTakeaways).slice(0, 6),
    whyItMatters: asString(value.whyItMatters, fallback.whyItMatters),
  };
}

/**
 * Translate a curated/generated research article into `locale`.
 *
 * Uses the configured model when AI_API_KEY + AI_BASE_URL are present; otherwise
 * (and on any error) returns the English source unchanged, flagged via `usedModel`
 * and `model` so the caller/reviewer knows the entry still needs a real translation.
 */
export async function generateResearchLocalization(
  source: LocalizableResearchFields,
  locale: Locale
): Promise<ResearchLocalizationResult> {
  const english = englishLocalization(source);

  if (locale === "en") {
    return { locale, localization: english, usedModel: false, model: "source-english" };
  }

  const apiKey = process.env.AI_API_KEY;
  const baseUrl = process.env.AI_BASE_URL?.replace(/\/+$/g, "");
  const model = process.env.AI_MODEL || "qwen-plus";

  if (!apiKey || !baseUrl) {
    return { locale, localization: english, usedModel: false, model: "english-fallback-awaiting-localization" };
  }

  const localeName = localeMeta[locale].label;
  const prompt = `You are translating an AIEDHK Research News article into ${localeName} (${locale}).

Translate faithfully. Preserve the academic register, meaning, numbers, product names, and any cautionary framing. Do NOT add, remove, or reinterpret claims. Keep proper nouns (OpenAI, Anthropic, ChatGPT, Claude, GPT-4, AIEDHK) and acronyms as-is. Keep the same paragraph breaks in fullSummary (paragraphs separated by a blank line).

Return strict JSON with keys: title, tags, imageAlt, shortSummary, fullSummary, keyTakeaways, whyItMatters.
- tags: translate each tag; keep the same count.
- keyTakeaways: translate each item; keep the same count.

English source (JSON):
${JSON.stringify(source)}`;

  try {
    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "authorization": `Bearer ${apiKey}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: "You are a precise academic translator for an AI-in-Education knowledge hub. You never add or drop information." },
          { role: "user", content: prompt },
        ],
        temperature: 0.1,
      }),
    });

    if (!response.ok) {
      throw new Error(`AI localization failed with HTTP ${response.status}`);
    }

    const body = (await response.json()) as { choices?: Array<{ message?: { content?: string } }> };
    const content = body.choices?.[0]?.message?.content;
    if (!content) {
      throw new Error("AI localization returned no content.");
    }

    const parsed = extractJsonObject(content) as unknown as Partial<ResearchPaperLocalization>;
    return { locale, localization: sanitizeLocalization(parsed, english), usedModel: true, model };
  } catch (error) {
    return {
      locale,
      localization: english,
      usedModel: false,
      model: "english-fallback-awaiting-localization",
      error: error instanceof Error ? error.message : "unknown AI localization error",
    };
  }
}
