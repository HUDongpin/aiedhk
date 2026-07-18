import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ResearchCard from "@/components/ResearchCard";
import JsonLd from "@/components/JsonLd";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import { getAllResearchTopics, getLocalizedTopicLabel, getPapersForTopicSlug, getResearchTopicBySlug } from "@/lib/research-topics";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { absoluteUrl } from "@/lib/site";

interface TopicPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export const revalidate = 300;

export function generateStaticParams() {
  const topics = getAllResearchTopics();
  return locales.flatMap((locale) => topics.map((topic) => ({ locale, slug: topic.slug })));
}

export async function generateMetadata({ params }: TopicPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const topic = getResearchTopicBySlug(slug);
  if (!topic) return {};
  const label = getLocalizedTopicLabel(slug, locale);
  const dictionary = getDictionary(locale);
  return {
    title: `${label} · ${dictionary.nav.researchNews}`,
    description: `AIEDHK Research News tagged “${label}”.`,
    alternates: {
      languages: Object.fromEntries(locales.map((item) => [item, `/${item}/news/topic/${slug}`])),
    },
  };
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;

  const topic = getResearchTopicBySlug(slug);
  if (!topic) notFound();

  const dictionary = getDictionary(typedLocale);
  const label = getLocalizedTopicLabel(slug, typedLocale);
  const papers = getPapersForTopicSlug(slug, typedLocale);

  const breadcrumb = breadcrumbJsonLd([
    { name: "AIEDHK", url: absoluteUrl(`/${typedLocale}`) },
    { name: dictionary.nav.researchNews, url: absoluteUrl(`/${typedLocale}/news`) },
    { name: label, url: absoluteUrl(`/${typedLocale}/news/topic/${slug}`) },
  ]);

  return (
    <div className="bg-hub-gradient">
      <JsonLd data={breadcrumb} />
      <section className="container-page py-14 lg:py-20">
        <Link
          href={`/${typedLocale}/news`}
          className="focus-ring inline-flex rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-black text-aied-blue shadow-sm transition hover:border-aied-cyan"
        >
          ← {dictionary.common.backToResearch}
        </Link>

        <header className="mt-8">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-aied-blue">#{topic.englishTag}</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-aied-ink sm:text-5xl text-balance">{label}</h1>
          <p className="mt-4 text-lg text-aied-muted">
            {papers.length} {dictionary.research.resultCount}
          </p>
        </header>

        <div className="mt-10 grid gap-6">
          {papers.map((paper) => (
            <ResearchCard key={paper.id} paper={paper} locale={typedLocale} dictionary={dictionary} />
          ))}
        </div>
      </section>
    </div>
  );
}
