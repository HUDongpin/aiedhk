import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLocaleMeta, isLocale, locales, type Locale } from "@/lib/i18n";
import { monetizationCopy } from "@/lib/monetization-copy";
import { getPolicy, POLICY_UPDATED, type PolicyKind } from "@/lib/site-policies";
import { absoluteUrl } from "@/lib/site";

export function policyMetadata(locale: string, kind: PolicyKind): Metadata {
  if (!isLocale(locale)) notFound();
  const copy = monetizationCopy[locale];
  const title = kind === "privacy" ? copy.privacyTitle : copy.disclosureTitle;
  return {
    title, description: getPolicy(locale, kind).intro,
    alternates: { canonical: absoluteUrl(`/${locale}/${kind}`), languages: Object.fromEntries(locales.map((item) => [getLocaleMeta(item).htmlLang, `/${item}/${kind}`])) },
  };
}

export default function PolicyDocument({ locale, kind }: { locale: Locale; kind: PolicyKind }) {
  const copy = monetizationCopy[locale];
  const policy = getPolicy(locale, kind);
  return <div className="bg-hub-gradient"><article className="container-page py-12 sm:py-20">
    <div className="mx-auto max-w-3xl">
      <Link href={`/${locale}`} className="focus-ring text-sm font-bold text-aied-blue underline underline-offset-4">{copy.backHome}</Link>
      <h1 className="mt-6 text-3xl font-black tracking-tight text-aied-ink sm:text-4xl">{kind === "privacy" ? copy.privacyTitle : copy.disclosureTitle}</h1>
      <p className="mt-4 text-sm text-slate-500">{copy.updated}: <time dateTime={POLICY_UPDATED}>{POLICY_UPDATED}</time></p>
      <div className="mt-4 flex flex-wrap gap-4 text-sm text-aied-blue">
        <Link href={`/en/${kind}`} lang="en" className="focus-ring underline underline-offset-4">English</Link>
        <Link href={`/zh-hant/${kind}`} lang="zh-Hant" className="focus-ring underline underline-offset-4">繁體中文</Link>
        <Link href={`/zh-hans/${kind}`} lang="zh-Hans" className="focus-ring underline underline-offset-4">简体中文</Link>
      </div>
      {policy.isFallback ? <p className="mt-6 rounded-2xl border border-cyan-100 bg-cyan-50 px-5 py-4 text-sm leading-6 text-slate-700">{copy.policyLanguageNotice}</p> : null}
      <div lang={getLocaleMeta(policy.contentLocale).htmlLang} dir="ltr" className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 text-slate-700 shadow-card sm:p-9">
        <p className="text-lg leading-8">{policy.intro}</p>
        {policy.sections.map((section) => <section key={section.title} className="mt-9">
          <h2 className="text-xl font-bold text-aied-ink">{section.title}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-3 leading-7">{paragraph}</p>)}
        </section>)}
        <section className="mt-9 border-t border-slate-200 pt-6">
          <h2 className="text-xl font-bold text-aied-ink">{policy.providerLabel}</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-aied-blue">
            <li><Link href={`/${locale}/about`} className="focus-ring underline underline-offset-4">{policy.aboutLabel}</Link></li>
            <li><a href="https://vercel.com/docs/analytics/privacy-policy" className="focus-ring underline underline-offset-4">Vercel Web Analytics</a></li>
            <li><a href="https://policies.google.com/technologies/partner-sites" className="focus-ring underline underline-offset-4">Google</a> · <a href="https://myadcenter.google.com/" className="focus-ring underline underline-offset-4">My Ad Center</a></li>
            <li><a href="https://www.buymeacoffee.com/privacy-policy" className="focus-ring underline underline-offset-4">Buy Me a Coffee</a></li>
            <li><a href="https://gamma.app/privacy" className="focus-ring underline underline-offset-4">Gamma</a></li>
          </ul>
        </section>
      </div>
    </div>
  </article></div>;
}
