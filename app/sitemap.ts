import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { getPublishedResearchPapers } from "@/lib/research-data";
import { getAllResearchTopics } from "@/lib/research-topics";
import { absoluteUrl } from "@/lib/site";

export const revalidate = 3600;

const STATIC_PATHS = ["", "/mission", "/news", "/about"] as const;

export interface SitemapArticle {
  slug: string;
  createdAt: string;
}

// Pure builder so the URL/locale matrix can be unit-tested without the
// Next incremental cache that backs getPublishedResearchPapers().
export function buildSitemapEntries(articles: SitemapArticle[], topicSlugs: string[] = [], now = new Date()): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of STATIC_PATHS) {
      entries.push({
        url: absoluteUrl(`/${locale}${path}`),
        lastModified: now,
        changeFrequency: path === "/news" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.7,
      });
    }

    for (const article of articles) {
      const lastModified = new Date(article.createdAt);
      entries.push({
        url: absoluteUrl(`/${locale}/news/${article.slug}`),
        lastModified: Number.isNaN(lastModified.getTime()) ? now : lastModified,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }

    for (const slug of topicSlugs) {
      entries.push({
        url: absoluteUrl(`/${locale}/news/topic/${slug}`),
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.5,
      });
    }
  }

  return entries;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const papers = await getPublishedResearchPapers("en");
  const topicSlugs = getAllResearchTopics().map((topic) => topic.slug);
  return buildSitemapEntries(
    papers.map((paper) => ({ slug: paper.slug, createdAt: paper.createdAt })),
    topicSlugs
  );
}
