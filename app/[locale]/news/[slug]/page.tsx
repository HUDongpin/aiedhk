import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ResearchCard from "@/components/ResearchCard";
import SummaryAudioPlayer from "@/components/SummaryAudioPlayer";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import { getPublishedResearchPaperBySlug, getRelatedPublishedPapers, researchPapers } from "@/lib/research-data";
import { formatDate } from "@/lib/utils";

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
  return {
    title: paper ? paper.title : dictionary.common.latestResearch,
    description: paper?.shortSummary,
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
  const summaryAudioSrc = typedLocale === "en" ? paper.summaryAudio : undefined;
  const sourceLinks = paper.sourceUrls?.length ? paper.sourceUrls : [{ label: dictionary.common.source, url: paper.sourceUrl }];

  return (
    <div className="bg-hub-gradient">
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
              <span className="rounded-full bg-white px-3 py-1 text-aied-blue shadow-sm">{paper.year}</span>
              <span className="text-slate-400">{formatDate(paper.createdAt, typedLocale)}</span>
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
              {paper.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-500">
                  {tag}
                </span>
              ))}
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
              {paper.fullSummary.split("\n\n").map((paragraph) => (
                <p key={paragraph.slice(0, 60)}>{paragraph}</p>
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
