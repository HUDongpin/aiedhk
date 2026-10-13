import Pagination from "@/components/Pagination";
import ResearchCard from "@/components/ResearchCard";
import ResearchFilters from "@/components/ResearchFilters";
import type { Dictionary, Locale } from "@/lib/i18n";
import type { ResearchFilterResult } from "@/lib/types";

interface ResearchNewsExplorerViewProps {
  locale: Locale;
  dictionary: Dictionary;
  years: number[];
  current: {
    q?: string;
    type?: string;
    year?: string;
    page?: string;
  };
  result: ResearchFilterResult;
}

function hrefWithPage(locale: Locale, current: Record<string, string | undefined>, page: number) {
  const params = new URLSearchParams();
  if (current.q) params.set("q", current.q);
  if (current.type) params.set("type", current.type);
  if (current.year) params.set("year", current.year);
  params.set("page", String(page));
  return `/${locale}/news?${params.toString()}`;
}

export default function ResearchNewsExplorerView({ locale, dictionary, years, current, result }: ResearchNewsExplorerViewProps) {
  return (
    <section className="container-page pb-20">
      <div className="mb-10">
        <ResearchFilters locale={locale} dictionary={dictionary} years={years} current={current} />
      </div>

      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-500">
          {result.total} {dictionary.research.resultCount}
        </p>
        <p className="text-sm font-semibold text-slate-500">
          {dictionary.common.page} {result.page} / {result.totalPages}
        </p>
      </div>

      {result.items.length > 0 ? (
        <div className="grid gap-6">
          {result.items.map((paper) => (
            <ResearchCard key={paper.id} paper={paper} locale={locale} dictionary={dictionary} />
          ))}
        </div>
      ) : (
        <div className="rounded-4xl border border-slate-200 bg-white p-10 text-center shadow-card">
          <p className="text-lg font-bold text-aied-muted">{dictionary.common.noResults}</p>
        </div>
      )}

      <Pagination locale={locale} dictionary={dictionary} page={result.page} totalPages={result.totalPages} hrefForPage={(page) => hrefWithPage(locale, current, page)} />
    </section>
  );
}
