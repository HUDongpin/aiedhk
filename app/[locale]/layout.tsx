import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HtmlLangSync from "@/components/HtmlLangSync";
import { getDictionary, getLocaleMeta, isLocale, locales, type Locale } from "@/lib/i18n";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = getDictionary(locale);
  const languages = Object.fromEntries(locales.map((item) => [getLocaleMeta(item).htmlLang, `/${item}`]));

  return {
    title: dictionary.meta.siteTitle,
    description: dictionary.meta.siteDescription,
    alternates: {
      languages,
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const typedLocale = locale as Locale;
  const dictionary = getDictionary(typedLocale);
  const meta = getLocaleMeta(typedLocale);

  return (
    <div lang={meta.htmlLang} dir={meta.dir}>
      <HtmlLangSync lang={meta.htmlLang} dir={meta.dir} />
      <Header locale={typedLocale} dictionary={dictionary} />
      <main>{children}</main>
      <Footer locale={typedLocale} dictionary={dictionary} />
    </div>
  );
}
