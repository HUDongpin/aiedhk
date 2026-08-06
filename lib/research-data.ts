import { unstable_cache } from "next/cache";
import { PAPER_TYPES, type PaperType, type ResearchFilterOptions, type ResearchFilterResult, type ResearchPaper } from "@/lib/types";
import { normalizeLocale } from "@/lib/i18n";
import { reviewedResearchPapers } from "@/lib/research-reviewed-data";
import { getReviewedLocalization } from "@/lib/research-reviewed-localizations";
import { RESEARCH_NEWS_CACHE_TAG, RESEARCH_NEWS_REVALIDATE_SECONDS } from "@/lib/research-cache";
import { filterResearchPaperList } from "@/lib/research-filter";
import {
  getPublishedResearchPaperBySlugFromDatabase,
  getPublishedResearchPapersFromDatabase,
  getPublishedResearchYearsFromDatabase,
  getRelatedPublishedPapersFromDatabase,
} from "@/lib/research-pipeline/store";

export { RESEARCH_NEWS_CACHE_TAG, RESEARCH_NEWS_REVALIDATE_SECONDS } from "@/lib/research-cache";

// A News detail page deliberately renders the canonical hero bitmap twice: once
// at the top and once with the full summary.  Keep the accessible descriptions
// tied to that same scene even while the two id-aligned asset paths remain
// distinct for delivery and layout.
export const researchPapers: ResearchPaper[] = reviewedResearchPapers.map((paper) => ({
  ...paper,
  summaryImageAlt: paper.imageAlt,
}));

function localizedPaper(paper: ResearchPaper, localeInput: string): ResearchPaper {
  const locale = normalizeLocale(localeInput);
  if (locale === "en") return paper;

  const localization = getReviewedLocalization(paper.id, locale);
  if (!localization) return paper;

  return {
    ...paper,
    title: localization.title,
    tags: localization.tags.length > 0 ? localization.tags : paper.tags,
    imageAlt: localization.imageAlt ?? paper.imageAlt,
    summaryImageAlt: localization.imageAlt ?? paper.imageAlt,
    shortSummary: localization.shortSummary,
    fullSummary: localization.fullSummary,
    keyTakeaways: localization.keyTakeaways,
    whyItMatters: localization.whyItMatters,
    summaryAudio: localization.summaryAudio,
    summaryAudioTitle: localization.summaryAudioTitle ?? paper.summaryAudioTitle,
  };
}

export const YEARS = Array.from(new Set(researchPapers.map((paper) => paper.year))).sort((a, b) => b - a);

export function isPaperType(value: string): value is PaperType {
  return PAPER_TYPES.some((type) => type.value === value);
}

export function getResearchPapers(locale: string = "en") {
  return researchPapers.map((paper) => localizedPaper(paper, locale));
}

export function getResearchPaperBySlug(slug: string, locale: string = "en") {
  const paper = researchPapers.find((item) => item.slug === slug);
  return paper ? localizedPaper(paper, locale) : undefined;
}

export function getRelatedPapers(paper: ResearchPaper, locale: string = "en", limit = 3) {
  const source = researchPapers.find((candidate) => candidate.id === paper.id) ?? paper;
  const tagSet = new Set(source.tags.map((tag) => tag.toLowerCase()));
  return researchPapers
    .filter((candidate) => candidate.id !== source.id)
    .map((candidate) => {
      const score = candidate.tags.reduce((total, tag) => total + (tagSet.has(tag.toLowerCase()) ? 1 : 0), 0);
      return { candidate, score };
    })
    .sort((a, b) => b.score - a.score || b.candidate.year - a.candidate.year)
    .slice(0, limit)
    .map(({ candidate }) => localizedPaper(candidate, locale));
}

function createdAtTime(paper: ResearchPaper) {
  const time = new Date(paper.createdAt).getTime();
  return Number.isFinite(time) ? time : 0;
}

export function withReviewedStaticEnhancements(paper: ResearchPaper): ResearchPaper {
  const reviewedPaper = reviewedResearchPapers.find((item) => item.slug === paper.slug || item.id === paper.id);
  if (!reviewedPaper) return paper;

  return {
    ...paper,
    image: reviewedPaper.image,
    imageAlt: paper.imageAlt || reviewedPaper.imageAlt,
    summaryImage: paper.summaryImage ?? reviewedPaper.summaryImage,
    summaryImageAlt: paper.imageAlt || reviewedPaper.imageAlt,
    summaryAudio: paper.summaryAudio ?? reviewedPaper.summaryAudio,
    summaryAudioTitle: paper.summaryAudioTitle ?? reviewedPaper.summaryAudioTitle,
  };
}

function mergeResearchPapers(primary: ResearchPaper[], secondary: ResearchPaper[]) {
  const seen = new Set<string>();
  const merged: ResearchPaper[] = [];

  for (const paper of [...primary, ...secondary]) {
    const key = paper.slug || paper.id;
    if (seen.has(key)) continue;
    seen.add(key);
    merged.push(withReviewedStaticEnhancements(paper));
  }

  return merged.sort((a, b) => createdAtTime(b) - createdAtTime(a) || b.year - a.year || a.title.localeCompare(b.title));
}

export function filterResearchPapers(options: ResearchFilterOptions = {}, locale: string = "en"): ResearchFilterResult {
  return filterResearchPaperList(getResearchPapers(locale), options);
}

const getCachedDatabasePapers = unstable_cache(
  async (locale: string) => getPublishedResearchPapersFromDatabase(locale),
  ["published-research-papers"],
  {
    revalidate: RESEARCH_NEWS_REVALIDATE_SECONDS,
    tags: [RESEARCH_NEWS_CACHE_TAG],
  }
);

const getCachedDatabasePaperBySlug = unstable_cache(
  async (slug: string, locale: string) => getPublishedResearchPaperBySlugFromDatabase(slug, locale),
  ["published-research-paper-by-slug"],
  {
    revalidate: RESEARCH_NEWS_REVALIDATE_SECONDS,
    tags: [RESEARCH_NEWS_CACHE_TAG],
  }
);

const getCachedDatabaseRelatedPapers = unstable_cache(
  async (paper: ResearchPaper, locale: string, limit: number) => getRelatedPublishedPapersFromDatabase(paper, locale, limit),
  ["related-published-research-papers"],
  {
    revalidate: RESEARCH_NEWS_REVALIDATE_SECONDS,
    tags: [RESEARCH_NEWS_CACHE_TAG],
  }
);

const getCachedDatabaseYears = unstable_cache(
  async () => getPublishedResearchYearsFromDatabase(),
  ["published-research-years"],
  {
    revalidate: RESEARCH_NEWS_REVALIDATE_SECONDS,
    tags: [RESEARCH_NEWS_CACHE_TAG],
  }
);

export async function getPublishedResearchPapers(locale: string = "en") {
  const databasePapers = await getCachedDatabasePapers(locale);
  const reviewedPapers = getResearchPapers(locale);
  return databasePapers === null ? reviewedPapers : mergeResearchPapers(databasePapers, reviewedPapers);
}

export async function getPublishedResearchPaperBySlug(slug: string, locale: string = "en") {
  const databasePaper = await getCachedDatabasePaperBySlug(slug, locale);
  if (databasePaper) return withReviewedStaticEnhancements(databasePaper);
  return getResearchPaperBySlug(slug, locale);
}

export async function getRelatedPublishedPapers(paper: ResearchPaper, locale: string = "en", limit = 3) {
  const databasePapers = await getCachedDatabaseRelatedPapers(paper, locale, limit);
  const reviewedPapers = getRelatedPapers(paper, locale, limit);
  if (databasePapers === null) return reviewedPapers;
  return mergeResearchPapers(databasePapers, reviewedPapers).slice(0, limit);
}

export async function filterPublishedResearchPapers(options: ResearchFilterOptions = {}, locale: string = "en") {
  return filterResearchPaperList(await getPublishedResearchPapers(locale), options);
}

export async function getResearchYears() {
  const years = await getCachedDatabaseYears();
  if (!years || years.length === 0) return YEARS;
  return Array.from(new Set([...years, ...YEARS])).sort((a, b) => b - a);
}
