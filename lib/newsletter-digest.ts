import { getPublishedResearchPapers } from "@/lib/research-data";
import type { ResearchPaper } from "@/lib/types";

export interface DailyResearchDigestItem {
  slug: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  tags: string[];
  shortSummary: string;
  createdAt: string;
}

export interface DailyResearchDigest {
  generatedAt: string;
  windowStart: string;
  windowEnd: string;
  items: DailyResearchDigestItem[];
}

function toDigestItem(paper: ResearchPaper): DailyResearchDigestItem {
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

export function createDailyResearchDigest(
  papers: ResearchPaper[],
  now = new Date(),
  limit = 5
): DailyResearchDigest {
  const windowEnd = new Date(now);
  const windowStart = new Date(windowEnd.getTime() - 24 * 60 * 60 * 1000);

  const dailyItems = papers
    .slice()
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .filter((paper) => {
      const createdAt = new Date(paper.createdAt).getTime();
      return createdAt >= windowStart.getTime() && createdAt <= windowEnd.getTime();
    });

  return {
    generatedAt: now.toISOString(),
    windowStart: windowStart.toISOString(),
    windowEnd: windowEnd.toISOString(),
    items: dailyItems.slice(0, limit).map(toDigestItem),
  };
}

export async function buildDailyResearchDigest(locale = "en", now = new Date(), limit = 5): Promise<DailyResearchDigest> {
  return createDailyResearchDigest(await getPublishedResearchPapers(locale), now, limit);
}
