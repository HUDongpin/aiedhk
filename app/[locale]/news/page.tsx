import { Suspense } from "react";
import { notFound } from "next/navigation";
import ResearchNewsExplorer from "@/components/ResearchNewsExplorer";
import ResearchNewsExplorerView from "@/components/ResearchNewsExplorerView";
import ResearchNewsletterSignup from "@/components/ResearchNewsletterSignup";
import SectionHeader from "@/components/SectionHeader";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { getPublishedResearchPapers, getResearchYears } from "@/lib/research-data";
import { filterResearchPaperList } from "@/lib/research-filter";

interface ResearchNewsPageProps {
  params: Promise<{ locale: string }>;
}

export const revalidate = 300;

export default async function ResearchNewsPage({ params }: ResearchNewsPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const dictionary = getDictionary(typedLocale);
  const papers = await getPublishedResearchPapers(typedLocale);
  const years = await getResearchYears();
  const current = {};
  const result = filterResearchPaperList(papers, { pageSize: 6 });

  return (
    <div className="bg-hub-gradient">
      <section className="container-page pb-10 pt-16 lg:pb-12 lg:pt-20">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionHeader eyebrow={dictionary.research.eyebrow} title={dictionary.research.title} description={dictionary.research.intro} />
          <div className="grid gap-4">
            <ResearchNewsletterSignup
              locale={typedLocale}
              sourcePath={`/${typedLocale}/news`}
              copy={dictionary.research.newsletter}
            />
          </div>
        </div>
      </section>

      <Suspense fallback={<ResearchNewsExplorerView locale={typedLocale} dictionary={dictionary} years={years} current={current} result={result} />}>
        <ResearchNewsExplorer locale={typedLocale} dictionary={dictionary} years={years} papers={papers} />
      </Suspense>
    </div>
  );
}
