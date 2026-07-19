import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AcademyCard from "@/components/AcademyCard";
import JsonLd from "@/components/JsonLd";
import SummaryAudioPlayer from "@/components/SummaryAudioPlayer";
import { academyLessons, getAcademyLessonPresentationBySlug, getRelatedAcademyLessons } from "@/lib/academy-data";
import { getDictionary, getLocaleMeta, isLocale, locales, type Locale } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";
import { academyLearningResourceJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";
import { formatDate, readingTimeMinutes } from "@/lib/utils";

interface AcademyDetailPageProps { params: Promise<{ locale: string; slug: string }> }

export function generateStaticParams() {
  return locales.flatMap((locale) => academyLessons.map((lesson) => ({ locale, slug: lesson.slug })));
}

export async function generateMetadata({ params }: AcademyDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const dictionary = getDictionary(locale);
  const presentation = getAcademyLessonPresentationBySlug(slug, locale);
  if (!presentation) return { title: dictionary.nav.academy };
  const { lesson } = presentation;
  const url = absoluteUrl(`/${locale}/academy/${slug}`);
  const image = absoluteUrl(lesson.image);
  return {
    title: lesson.title, description: lesson.shortSummary,
    alternates: { canonical: url, languages: Object.fromEntries(locales.map((item) => [getLocaleMeta(item).htmlLang, `/${item}/academy/${slug}`])) },
    openGraph: { type: "article", title: lesson.title, description: lesson.shortSummary, url, siteName: "AIEDHK", locale: presentation.contentHtmlLang, publishedTime: lesson.createdAt, tags: lesson.tags, images: [{ url: image, alt: lesson.imageAlt }] },
    twitter: { card: "summary_large_image", title: lesson.title, description: lesson.shortSummary, images: [image] },
  };
}

export default async function AcademyDetailPage({ params }: AcademyDetailPageProps) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const dictionary = getDictionary(typedLocale);
  const presentation = getAcademyLessonPresentationBySlug(slug, typedLocale);
  if (!presentation) notFound();
  const { lesson } = presentation;
  const related = getRelatedAcademyLessons(lesson, typedLocale, 3);
  const readingMinutes = readingTimeMinutes(lesson.fullSummary, presentation.contentLocale);
  const breadcrumb = breadcrumbJsonLd([
    { name: "AIEDHK", url: absoluteUrl(`/${typedLocale}`) },
    { name: dictionary.nav.academy, url: absoluteUrl(`/${typedLocale}/academy`) },
    { name: lesson.title, url: absoluteUrl(`/${typedLocale}/academy/${lesson.slug}`) },
  ]);

  return <div className="bg-hub-gradient">
    <JsonLd data={[academyLearningResourceJsonLd(presentation, typedLocale), breadcrumb]} />
    <article className="container-page py-14 lg:py-20">
      <Link href={`/${typedLocale}/academy`} className="focus-ring inline-flex rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-black text-aied-blue shadow-sm transition hover:border-aied-cyan">← {dictionary.academy.backToAcademy}</Link>
      <div className="mt-8 grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <div className="relative aspect-[16/10] overflow-hidden rounded-4xl border border-slate-200 bg-aied-soft shadow-soft" lang={presentation.contentHtmlLang} dir={presentation.contentDir}>
          <Image
            src={lesson.image}
            alt={lesson.imageAlt}
            fill
            preload
            sizes="(min-width: 1280px) 516px, (min-width: 1024px) 44vw, 100vw"
            className="object-cover object-center"
          />
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-[0.18em]">
            <span className="rounded-full bg-aied-cyan px-3 py-1 text-slate-950">{dictionary.academy.tracks[lesson.track]}</span>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-aied-blue">{dictionary.academy.levels[lesson.level]}</span>
            <span className="text-slate-400">{formatDate(lesson.createdAt, typedLocale)}</span>
            <span className="text-slate-400" aria-label={`${dictionary.academy.readingTimeLabel} ${readingMinutes} ${dictionary.academy.minuteAbbreviation}`}>· {readingMinutes} {dictionary.academy.minuteAbbreviation}</span>
          </div>
          <div lang={presentation.contentHtmlLang} dir={presentation.contentDir}>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-aied-ink sm:text-5xl text-balance">{lesson.title}</h1>
            <p className="mt-5 text-lg leading-8 text-aied-muted">{lesson.shortSummary}</p>
            <div className="mt-7 flex flex-wrap gap-2">{lesson.tags.map((tag) => <span key={tag} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-500">{tag}</span>)}</div>
          </div>
          <p className="mt-7 text-xs font-black uppercase tracking-[0.2em] text-slate-400">{dictionary.academy.sources}</p>
          <div className="mt-3 flex flex-wrap gap-2" lang={presentation.contentHtmlLang} dir={presentation.contentDir}>{lesson.sourceUrls.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="focus-ring inline-flex rounded-full bg-aied-ink px-5 py-2.5 text-sm font-black text-white transition hover:bg-aied-blue">{source.label} ↗</a>)}</div>
        </div>
      </div>
      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_340px]">
        <div className="rounded-4xl border border-slate-200 bg-white p-7 shadow-card sm:p-9">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-aied-blue">{dictionary.academy.summaryHeading}</p>
          <figure className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50" lang={presentation.contentHtmlLang} dir={presentation.contentDir}>
            <Image
              src={lesson.summaryImage}
              alt={lesson.summaryImageAlt}
              width={1600}
              height={1000}
              loading="lazy"
              sizes="(min-width: 1280px) 740px, (min-width: 1024px) calc(100vw - 404px), 100vw"
              className="block h-auto w-full object-cover"
            />
          </figure>
          {lesson.summaryAudio ? <SummaryAudioPlayer src={lesson.summaryAudio} title={lesson.summaryAudioTitle} /> : null}
          <div className="research-summary mt-7 text-lg leading-8 text-aied-muted" lang={presentation.contentHtmlLang} dir={presentation.contentDir}>{lesson.fullSummary.split("\n\n").map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
        </div>
        <aside className="space-y-6">
          <div className="rounded-4xl border border-slate-200 bg-white p-7 shadow-card"><h2 className="text-xl font-black tracking-tight text-aied-ink">{dictionary.academy.coreIdeas}</h2><ol className="mt-5 space-y-5" lang={presentation.contentHtmlLang} dir={presentation.contentDir}>{lesson.coreIdeas.map((idea, index) => <li key={idea} className="flex gap-3 text-base font-bold leading-7 text-aied-muted"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-aied-cyan text-xs text-slate-950">{index + 1}</span>{idea}</li>)}</ol></div>
          <div className="rounded-4xl border border-slate-200 bg-white p-7 shadow-card"><h2 className="text-xl font-black tracking-tight text-aied-ink">{dictionary.academy.educationConnection}</h2><p className="mt-4 text-base font-bold leading-7 text-aied-muted" lang={presentation.contentHtmlLang} dir={presentation.contentDir}>{lesson.educationConnection}</p></div>
          <div className="rounded-4xl border border-slate-200 bg-white p-7 shadow-card"><h2 className="text-xl font-black tracking-tight text-aied-ink">{dictionary.academy.relatedConcepts}</h2><div className="mt-4 flex flex-wrap gap-2" lang={presentation.contentHtmlLang} dir={presentation.contentDir}>{lesson.relatedConcepts.map((concept) => <span key={concept} className="rounded-full bg-aied-soft px-3 py-1.5 text-sm font-bold text-aied-blue">{concept}</span>)}</div></div>
        </aside>
      </div>
    </article>
    <section className="bg-white/72 py-16"><div className="container-page"><h2 className="text-3xl font-black tracking-tight text-aied-ink">{dictionary.academy.relatedLessons}</h2><div className="mt-8 grid gap-6">{related.map((item) => <AcademyCard key={item.id} lesson={item} locale={typedLocale} dictionary={dictionary} />)}</div></div></section>
  </div>;
}
