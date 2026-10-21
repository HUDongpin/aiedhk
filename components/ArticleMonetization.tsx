import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { gammaForArticle, getMonetizationConfig, type MonetizationConfig } from "@/lib/monetization";
import { monetizationCopy } from "@/lib/monetization-copy";
import MonetizationLink from "./MonetizationLink";
import SupportButton from "./SupportButton";

export default function ArticleMonetization({ locale, section, slug, config = getMonetizationConfig() }: {
  locale: Locale; section: "news" | "academy"; slug: string; config?: MonetizationConfig;
}) {
  const gamma = gammaForArticle(config, section, slug);
  if (!config.support && !gamma) return null;
  const copy = monetizationCopy[locale];
  return <div className="mt-10 space-y-6" data-article-monetization>
    {gamma ? <aside className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8" aria-label={copy.affiliateLabel}>
      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{copy.affiliateLabel}</p>
      <h2 className="mt-3 text-xl font-bold text-aied-ink">Gamma</h2>
      <p className="mt-3 max-w-3xl leading-7 text-aied-muted">{copy.gammaDescription}</p>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{copy.gammaLimitations}</p>
      <p className="mt-4 max-w-3xl text-sm font-medium leading-6 text-slate-700">{copy.affiliateDisclosure}</p>
      <div className="mt-4 flex flex-wrap items-center gap-4">
        <MonetizationLink href={gamma.url} locale={locale} placement={section} kind="affiliate" trackClicks={config.trackClicks}
          className="focus-ring inline-flex min-h-11 items-center rounded-full bg-aied-ink px-5 py-2.5 text-sm font-bold text-white transition hover:bg-aied-blue">{copy.affiliateCta}</MonetizationLink>
        <Link href={`/${locale}/disclosure`} className="focus-ring text-sm text-aied-blue underline underline-offset-4">{copy.disclosureTitle}</Link>
      </div>
    </aside> : null}
    {config.support ? <aside className="flex flex-col gap-5 rounded-3xl border border-cyan-100 bg-cyan-50/60 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between" aria-label={copy.supportTitle}>
      <div className="max-w-3xl"><h2 className="text-xl font-bold text-aied-ink">{copy.supportTitle}</h2><p className="mt-3 leading-7 text-aied-muted">{copy.supportBody}</p></div>
      <div className="shrink-0"><SupportButton locale={locale} support={config.support} trackClicks={config.trackClicks} placement={section} /></div>
    </aside> : null}
  </div>;
}
