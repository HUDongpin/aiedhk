import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ResearchCard from "@/components/ResearchCard";
import SummaryAudioPlayer from "@/components/SummaryAudioPlayer";
import JsonLd from "@/components/JsonLd";
import { getDictionary, getLocaleMeta, isLocale, locales, type Locale } from "@/lib/i18n";
import { getPublishedResearchPaperBySlug, getRelatedPublishedPapers, researchPapers } from "@/lib/research-data";
import { getReviewedLocalization } from "@/lib/research-reviewed-localizations";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";
import { topicSlug } from "@/lib/research-topics";
import { evidenceSignalCopy, evidenceSignalForType } from "@/lib/research-evidence";
import { absoluteUrl } from "@/lib/site";
import { formatDate, readingTimeMinutes } from "@/lib/utils";

interface ResearchDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export const revalidate = 300;

export function generateStaticParams() {
  return locales.flatMap((locale) => researchPapers.map((paper) => ({ locale, slug: paper.slug })));
}

export async function generateMetadata({ params }: ResearchDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const dictionary = getDictionary(locale);
  const paper = await getPublishedResearchPaperBySlug(slug, locale);

  if (!paper) {
    return { title: dictionary.common.latestResearch };
  }

  const url = absoluteUrl(`/${locale}/news/${slug}`);
  const image = absoluteUrl(paper.image);

  return {
    title: paper.title,
    description: paper.shortSummary,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(locales.map((item) => [item, `/${item}/news/${slug}`])),
    },
    openGraph: {
      type: "article",
      title: paper.title,
      description: paper.shortSummary,
      url,
      siteName: "AIEDHK",
      locale: getLocaleMeta(locale).htmlLang,
      publishedTime: paper.createdAt,
      authors: paper.authors,
      tags: paper.tags,
      images: [{ url: image, alt: paper.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: paper.title,
      description: paper.shortSummary,
      images: [image],
    },
  };
}

export default async function ResearchDetailPage({ params }: ResearchDetailPageProps) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const dictionary = getDictionary(typedLocale);
  const paper = await getPublishedResearchPaperBySlug(slug, typedLocale);
  if (!paper) notFound();

  const relatedPapers = await getRelatedPublishedPapers(paper, typedLocale, 3);
  // Static-audio-first: English uses its curated reading; other locales only get
  // audio when a reviewed, locale-specific recording exists (no English-audio leak,
  // no live TTS). The player is simply hidden where no localized audio is available.
  const summaryAudioSrc =
    typedLocale === "en" ? paper.summaryAudio : getReviewedLocalization(paper.id, typedLocale)?.summaryAudio;
  const sourceLinks = paper.sourceUrls?.length ? paper.sourceUrls : [{ label: dictionary.common.source, url: paper.sourceUrl }];
  // Canonical English tags (same order as the localized tags) give stable topic slugs.
  const englishTags = researchPapers.find((item) => item.id === paper.id)?.tags ?? paper.tags;
  const evidence = evidenceSignalCopy(evidenceSignalForType(paper.type), typedLocale);

  const breadcrumb = breadcrumbJsonLd([
    { name: "AIEDHK", url: absoluteUrl(`/${typedLocale}`) },
    { name: dictionary.nav.researchNews, url: absoluteUrl(`/${typedLocale}/news`) },
    { name: paper.title, url: absoluteUrl(`/${typedLocale}/news/${paper.slug}`) },
  ]);

  return (
    <div className="bg-hub-gradient">
      <JsonLd data={[articleJsonLd(paper, typedLocale), breadcrumb]} />
      <article className="container-page py-14 lg:py-20">
        <Link href={`/${typedLocale}/news`} className="focus-ring inline-flex rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-black text-aied-blue shadow-sm transition hover:border-aied-cyan">
          ← {dictionary.common.backToResearch}
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="relative aspect-[16/10] overflow-hidden rounded-4xl border border-slate-200 bg-aied-soft shadow-soft">
            <img
              src={paper.image}
              alt={paper.imageAlt}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-[0.18em]">
              <span className="rounded-full bg-aied-cyan px-3 py-1 text-slate-950">{dictionary.paperTypes[paper.type]}</span>
              <span className="rounded-full border border-aied-blue/30 bg-white px-3 py-1 text-aied-blue shadow-sm" title={evidence.description}>
                {evidence.label}
              </span>
              <span className="rounded-full bg-white px-3 py-1 text-aied-blue shadow-sm">{paper.year}</span>
              <span className="text-slate-400">{formatDate(paper.createdAt, typedLocale)}</span>
              <span className="text-slate-400" aria-label="estimated reading time">
                · {readingTimeMinutes(paper.fullSummary, typedLocale)} min
              </span>
            </div>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-aied-ink sm:text-5xl text-balance">{paper.title}</h1>
            <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-end sm:gap-8">
              <div className="min-w-0">
                <p className="text-lg leading-8 text-slate-500">{paper.authors.join(", ")}</p>
                <p className="mt-2 text-base font-bold text-aied-blue">{paper.venue}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {sourceLinks.map((source) => (
                  <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="focus-ring inline-flex w-fit rounded-full bg-aied-ink px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-aied-blue">
                    {source.label} ↗
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {paper.tags.map((tag, index) => {
                const slug = topicSlug(englishTags[index] ?? tag);
                const className =
                  "rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-500 transition hover:border-aied-cyan hover:text-aied-blue";
                return slug ? (
                  <Link key={tag} href={`/${typedLocale}/news/topic/${slug}`} className={`focus-ring ${className}`}>
                    {tag}
                  </Link>
                ) : (
                  <span key={tag} className={className}>
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_340px]">
          <div className="rounded-4xl border border-slate-200 bg-white p-7 shadow-card sm:p-9">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-aied-blue">{dictionary.common.summaryHeading}</p>
            {paper.summaryImage ? (
              <figure className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
                <img
                  src={paper.summaryImage}
                  alt={paper.summaryImageAlt ?? ""}
                  className="block aspect-[16/10] h-auto w-full object-cover"
                />
              </figure>
            ) : null}
            {summaryAudioSrc ? <SummaryAudioPlayer src={summaryAudioSrc} title={paper.summaryAudioTitle} /> : null}
            <div className="research-summary mt-7 text-lg leading-8 text-aied-muted">
              {paper.fullSummary.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          <aside className="space-y-6">
            <div className="rounded-4xl border border-slate-200 bg-white p-7 shadow-card">
              <h2 className="text-xl font-black tracking-tight text-aied-ink">{dictionary.common.keyTakeaways}</h2>
              <ul className="mt-5 space-y-5">
                {paper.keyTakeaways.map((takeaway) => (
                  <li key={takeaway} className="flex gap-3 text-base font-bold leading-7 text-aied-muted sm:text-lg sm:leading-8">
                    <span className="mt-1.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-aied-cyan text-slate-950">
                      <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3 w-3">
                        <path
                          d="M3.5 8.2 6.4 11 12.5 4.7"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.1"
                        />
                      </svg>
                    </span>
                    {takeaway}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-4xl border border-slate-200 bg-white p-7 shadow-card">
              <h2 className="text-xl font-black tracking-tight text-aied-ink">{dictionary.common.whyItMatters}</h2>
              <p className="mt-4 text-base font-bold leading-7 text-aied-muted sm:text-lg sm:leading-8">{paper.whyItMatters}</p>
              <div className="mt-6 flex items-start gap-3 rounded-2xl bg-aied-soft px-4 py-3">
                <span className="mt-0.5 rounded-full bg-white px-2.5 py-0.5 text-xs font-black text-aied-blue shadow-sm">{evidence.label}</span>
                <p className="text-xs leading-5 text-slate-500">{evidence.description}</p>
              </div>
            </div>
          </aside>
        </div>
      </article>

      <section className="bg-white/72 py-16">
        <div className="container-page">
          <h2 className="text-3xl font-black tracking-tight text-aied-ink">{dictionary.common.relatedPapers}</h2>
          <div className="mt-8 grid gap-6">
            {relatedPapers.map((related) => (
              <ResearchCard key={related.id} paper={related} locale={typedLocale} dictionary={dictionary} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
