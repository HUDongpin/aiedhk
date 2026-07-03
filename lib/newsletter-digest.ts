import { getPublishedResearchPapers } from "@/lib/research-data";
import type { ResearchPaper } from "@/lib/types";

export interface WeeklyResearchDigestItem {
  slug: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  tags: string[];
  shortSummary: string;
  createdAt: string;
}

export interface WeeklyResearchDigest {
  generatedAt: string;
  windowStart: string;
  windowEnd: string;
  usedLatestFallback: boolean;
  items: WeeklyResearchDigestItem[];
}

function toDigestItem(paper: ResearchPaper): WeeklyResearchDigestItem {
  return {
    slug: paper.slug,
    title: paper.title,
    authors: paper.authors,
    venue: paper.venue,
    year: paper.year,
    tags: paper.tags,
    shortSummary: paper.shortSummary,
    createdAt: paper.createdAt,
  };
}

export async function buildWeeklyResearchDigest(locale = "en", now = new Date(), limit = 5): Promise<WeeklyResearchDigest> {
  const windowEnd = new Date(now);
  const windowStart = new Date(windowEnd);
  windowStart.setDate(windowStart.getDate() - 7);

  const papers = (await getPublishedResearchPapers(locale))
    .slice()
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  const weeklyItems = papers.filter((paper) => {
    const createdAt = new Date(paper.createdAt).getTime();
    return createdAt >= windowStart.getTime() && createdAt <= windowEnd.getTime();
  });

  const sourceItems = weeklyItems.length > 0 ? weeklyItems : papers;

  return {
    generatedAt: now.toISOString(),
    windowStart: windowStart.toISOString(),
    windowEnd: windowEnd.toISOString(),
    usedLatestFallback: weeklyItems.length === 0,
    items: sourceItems.slice(0, limit).map(toDigestItem),
  };
}
