import Link from "next/link";
import AcademyCard from "@/components/AcademyCard";
import AcademyFilters from "@/components/AcademyFilters";
import type { Dictionary, Locale } from "@/lib/i18n";
import type { AcademyFilterResult } from "@/lib/types";

interface AcademyExplorerViewProps {
  locale: Locale;
  dictionary: Dictionary;
  current: { q?: string; track?: string; level?: string; page?: string };
  result: AcademyFilterResult;
}

export function academyPageHref(locale: Locale, current: AcademyExplorerViewProps["current"], page: number) {
  const params = new URLSearchParams();
  if (current.q) params.set("q", current.q);
  if (current.track) params.set("track", current.track);
  if (current.level) params.set("level", current.level);
  params.set("page", String(page));
  return `/${locale}/academy?${params.toString()}`;
}

export default function AcademyExplorerView({ locale, dictionary, current, result }: AcademyExplorerViewProps) {
  return (
    <section className="container-page pb-20">
      <div className="mb-10"><AcademyFilters locale={locale} dictionary={dictionary} current={current} /></div>
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-500">{result.total} {dictionary.academy.resultCount}</p>
        <p className="text-sm font-semibold text-slate-500">{dictionary.common.page} {result.page} / {result.totalPages}</p>
      </div>
      {result.items.length ? <div className="grid gap-6">{result.items.map((lesson) => <AcademyCard key={lesson.id} lesson={lesson} locale={locale} dictionary={dictionary} />)}</div> : <div className="rounded-4xl border border-slate-200 bg-white p-10 text-center shadow-card"><p className="text-lg font-bold text-aied-muted">{dictionary.academy.noResults}</p></div>}
      {result.totalPages > 1 ? <div className="mt-10 flex flex-wrap justify-center gap-3">{Array.from({ length: result.totalPages }, (_, index) => index + 1).map((page) => <Link key={page} aria-current={page === result.page ? "page" : undefined} href={academyPageHref(locale, current, page)} className={`focus-ring grid h-11 w-11 place-items-center rounded-full text-sm font-black transition ${page === result.page ? "bg-aied-cyan text-slate-950" : "border border-slate-200 bg-white text-slate-600 hover:text-aied-blue"}`}>{page}</Link>)}</div> : null}
    </section>
  );
}
