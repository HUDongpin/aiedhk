import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import AcademyExplorer from "@/components/AcademyExplorer";
import AcademyExplorerView from "@/components/AcademyExplorerView";
import ResearchNewsletterSignup from "@/components/ResearchNewsletterSignup";
import SectionHeader from "@/components/SectionHeader";
import { filterAcademyLessonList } from "@/lib/academy-filter";
import { getAcademyLessons } from "@/lib/academy-data";
import { getDictionary, getLocaleMeta, isLocale, locales, type Locale } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";

interface AcademyPageProps { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: AcademyPageProps): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = getDictionary(locale);
  const url = absoluteUrl(`/${locale}/academy`);
  const image = absoluteUrl(getAcademyLessons("en")[0].image);
  return {
    title: `${dictionary.nav.academy} | AIEDHK`, description: dictionary.academy.intro,
    alternates: { canonical: url, languages: Object.fromEntries(locales.map((item) => [getLocaleMeta(item).htmlLang, `/${item}/academy`])) },
    openGraph: { type: "website", title: dictionary.academy.title, description: dictionary.academy.intro, url, siteName: "AIEDHK", locale: getLocaleMeta(locale).htmlLang, images: [{ url: image, alt: dictionary.academy.title }] },
    twitter: { card: "summary_large_image", title: dictionary.academy.title, description: dictionary.academy.intro, images: [image] },
  };
}

export default async function AcademyPage({ params }: AcademyPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const dictionary = getDictionary(typedLocale);
  const lessons = getAcademyLessons(typedLocale);
  const result = filterAcademyLessonList(lessons, { pageSize: 6 });
  const newsletterCopy = {
    ...dictionary.research.newsletter,
    ...dictionary.academy.newsletter,
    privacyNote: "",
  };
  return <div className="bg-hub-gradient">
    <section className="container-page pb-10 pt-16 lg:pb-12 lg:pt-20"><SectionHeader eyebrow={dictionary.academy.eyebrow} title={dictionary.academy.title} description={dictionary.academy.intro} /></section>
    <Suspense fallback={<AcademyExplorerView locale={typedLocale} dictionary={dictionary} current={{}} result={result} />}><AcademyExplorer locale={typedLocale} dictionary={dictionary} lessons={lessons} /></Suspense>
    <section className="container-page pb-20" aria-label={dictionary.academy.newsletter.eyebrow}>
      <ResearchNewsletterSignup
        locale={typedLocale}
        sourcePath={`/${typedLocale}/academy`}
        copy={newsletterCopy}
        variant="wide"
      />
    </section>
  </div>;
}
