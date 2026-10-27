import { locales, type Locale } from "@/lib/i18n";
import { academyCurriculumV1 } from "@/lib/academy-curriculum";
import { getAcademyLessons, getAcademyLessonPresentationBySlug } from "@/lib/academy-data";
import { reviewedResearchPapers } from "@/lib/research-reviewed-data";
import { getReviewedLocalization } from "@/lib/research-reviewed-localizations";
import { getPublishedResearchNewsletterPapers, getPublishedResearchNewsletterSlugs } from "@/lib/research-pipeline/store";
import type { AcademyLesson, ResearchPaper } from "@/lib/types";
import type { NewsletterFeedEntry } from "./policy";
import type { NewsletterChannel, NewsletterEmailItem } from "./types";
import { resolveNewsletterImage, reportNewsletterImageDiagnostics } from "./images";

export function buildAcademyCatalog(published = getAcademyLessons("en")): NewsletterFeedEntry[] {
  const diagnostics = { missing: 0, sourceMismatch: 0, invalid: 0 };
  const bySlug = new Map(published.map((lesson) => [lesson.slug, lesson]));
  const catalog = academyCurriculumV1.pairs.flatMap((pair) => {
    const lessons = pair.topics.map((topic) => bySlug.get(topic.slug));
    if (lessons.some((lesson) => !lesson)) return [];
    const complete = lessons as AcademyLesson[];
    const items = Object.fromEntries(locales.map((locale) => [locale, complete.map((canonical) => {
      const presentation = getAcademyLessonPresentationBySlug(canonical.slug, locale);
      if (!presentation) throw new Error("academy_content_missing");
      const { lesson, contentLocale } = presentation;
      return { id: lesson.id, slug: lesson.slug, title: lesson.title, summary: lesson.shortSummary, coreIdeas: [...lesson.coreIdeas], contentLocale, image: resolveNewsletterImage("academy", lesson, diagnostics) };
    })]));
    return [{ key: complete.map((lesson) => lesson.id).join(":"), channel: "academy" as const, order: pair.order, items }];
  });
  reportNewsletterImageDiagnostics("academy", diagnostics);
  return catalog;
}

type DatabasePaper = { paper: ResearchPaper; contentLocale: Locale };
export async function loadNewsletterAvailability(channel: NewsletterChannel): Promise<string[]> {
  if (channel === "academy") return buildAcademyCatalog().map((entry) => entry.key);
  return [...new Set([...(await getPublishedResearchNewsletterSlugs()), ...reviewedResearchPapers.map((paper) => paper.slug)])];
}

export async function loadNewsletterFeed(channel: NewsletterChannel, options: { databasePapers?: (locale: Locale) => Promise<DatabasePaper[]> } = {}): Promise<NewsletterFeedEntry[]> {
  if (channel === "academy") return buildAcademyCatalog();
  const diagnostics = { missing: 0, sourceMismatch: 0, invalid: 0 };
  const load = options.databasePapers ?? getPublishedResearchNewsletterPapers;
  const byLocale = new Map<Locale, Map<string, NewsletterEmailItem>>();
  const reviewedBySlug = new Map(reviewedResearchPapers.map((paper) => [paper.slug, paper]));
  // Load all reviewed languages before touching the catalog. Any source failure aborts this channel.
  const database = await Promise.all(locales.map(async (locale) => [locale, await load(locale)] as const));
  for (const [locale, rows] of database) {
    const localized = new Map<string, NewsletterEmailItem>();
    for (const { paper, contentLocale } of rows) {
      const reviewed = reviewedBySlug.get(paper.slug);
      // Database rows use UUIDs. Reuse a reviewed media identity only for the
      // same article and exact source, without replacing database content.
      const imageSource = paper.contentId == null && reviewed && reviewed.image === paper.image
        ? { ...paper, contentId: reviewed.contentId ?? reviewed.id } : paper;
      localized.set(paper.slug, { id: paper.id, slug: paper.slug, title: paper.title, summary: paper.shortSummary, contentLocale,
        image: resolveNewsletterImage("news", imageSource, diagnostics) });
    }
    for (const paper of reviewedResearchPapers) {
      if (localized.has(paper.slug)) continue;
      const translation = locale === "en" ? undefined : getReviewedLocalization(paper.id, locale);
      localized.set(paper.slug, { id: paper.id, slug: paper.slug, title: translation?.title ?? paper.title,
        summary: translation?.shortSummary ?? paper.shortSummary, contentLocale: translation ? locale : "en",
        image: resolveNewsletterImage("news", { ...paper, imageAlt: translation?.imageAlt ?? paper.imageAlt }, diagnostics) });
    }
    byLocale.set(locale, localized);
  }
  reportNewsletterImageDiagnostics("news", diagnostics);
  const canonical = byLocale.get("en")!;
  return [...canonical.keys()].sort().map((slug, index) => {
    const items = Object.fromEntries(locales.map((locale) => [locale, [byLocale.get(locale)?.get(slug) ?? canonical.get(slug)!]]));
    return { key: slug, channel: "news", order: index, items };
  });
}
