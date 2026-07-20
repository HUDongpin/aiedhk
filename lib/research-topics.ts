import { getResearchPapers, researchPapers } from "@/lib/research-data";
import type { ResearchPaper } from "@/lib/types";
import { slugify } from "@/lib/utils";

export interface ResearchTopic {
  slug: string;
  /** Canonical English tag that defines this topic. */
  englishTag: string;
  count: number;
}

export function topicSlug(tag: string) {
  return slugify(tag);
}

/**
 * Group the curated corpus by its canonical (English) tags. Slugs are derived
 * from the English tag so a topic URL is stable across locales, even though the
 * displayed tag text is localized per article.
 */
export function getAllResearchTopics(): ResearchTopic[] {
  const topics = new Map<string, { englishTag: string; count: number }>();

  for (const paper of researchPapers) {
    for (const tag of paper.tags) {
      const slug = topicSlug(tag);
      if (!slug) continue;
      const existing = topics.get(slug);
      if (existing) existing.count += 1;
      else topics.set(slug, { englishTag: tag, count: 1 });
    }
  }

  return [...topics.entries()]
    .map(([slug, value]) => ({ slug, englishTag: value.englishTag, count: value.count }))
    .sort((a, b) => b.count - a.count || a.englishTag.localeCompare(b.englishTag));
}

export function getResearchTopicBySlug(slug: string): ResearchTopic | undefined {
  return getAllResearchTopics().find((topic) => topic.slug === slug);
}

/** Papers carrying the topic's canonical tag, returned localized for the reader. */
export function getPapersForTopicSlug(slug: string, locale: string = "en"): ResearchPaper[] {
  const matchingIds = new Set(
    researchPapers.filter((paper) => paper.tags.some((tag) => topicSlug(tag) === slug)).map((paper) => paper.id)
  );
  return getResearchPapers(locale).filter((paper) => matchingIds.has(paper.id));
}

/**
 * Best-effort localized label for a topic: the translated tag text at the same
 * position as the canonical English tag in a paper that carries it. Falls back
 * to the English tag when no translation is available.
 */
export function getLocalizedTopicLabel(slug: string, locale: string = "en"): string {
  const source = researchPapers.find((paper) => paper.tags.some((tag) => topicSlug(tag) === slug));
  if (!source) return slug;
  const index = source.tags.findIndex((tag) => topicSlug(tag) === slug);
  const localized = getResearchPapers(locale).find((paper) => paper.id === source.id);
  return localized?.tags[index] ?? source.tags[index] ?? slug;
}
