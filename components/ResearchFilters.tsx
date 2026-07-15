import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";
import { PAPER_TYPES } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ResearchFiltersProps {
  locale: Locale;
  dictionary: Dictionary;
  years: number[];
  current: {
    q?: string;
    type?: string;
    year?: string;
    page?: string;
  };
}

export default function ResearchFilters({ locale, dictionary, years, current }: ResearchFiltersProps) {
  const hrefForType = (type?: string) => {
    const params = new URLSearchParams();
    if (current.q) params.set("q", current.q);
    if (current.year) params.set("year", current.year);
    if (type) params.set("type", type);
    const query = params.toString();
    return `/${locale}/news${query ? `?${query}` : ""}`;
  };

  return (
    <div className="rounded-4xl border border-slate-200 bg-white/92 p-5 shadow-card backdrop-blur">
      <form action={`/${locale}/news`} method="get" className="grid gap-3 lg:grid-cols-[1fr_190px_160px_auto_auto]">
        <input
          name="q"
          defaultValue={current.q ?? ""}
          placeholder={dictionary.research.searchPlaceholder}
          className="focus-ring rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-aied-ink outline-none transition placeholder:text-slate-400 focus:border-aied-cyan focus:bg-white"
        />
        <select
          name="type"
          defaultValue={current.type ?? ""}
          className="focus-ring rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-aied-ink outline-none transition focus:border-aied-cyan focus:bg-white"
        >
          <option value="">{dictionary.common.allTypes}</option>
          {PAPER_TYPES.map((type) => (
            <option key={type.value} value={type.value}>
              {dictionary.paperTypes[type.value]}
            </option>
          ))}
        </select>
        <select
          name="year"
          defaultValue={current.year ?? ""}
          className="focus-ring rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-aied-ink outline-none transition focus:border-aied-cyan focus:bg-white"
        >
          <option value="">{dictionary.common.allYears}</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <button type="submit" className="focus-ring rounded-2xl bg-aied-ink px-5 py-3 text-sm font-black text-white transition hover:bg-aied-blue">
          {dictionary.common.search}
        </button>
        <Link href={`/${locale}/news`} className="focus-ring rounded-2xl border border-slate-200 px-5 py-3 text-center text-sm font-black text-aied-ink transition hover:border-aied-cyan hover:text-aied-blue">
          {dictionary.common.reset}
        </Link>
      </form>
      <div className="mt-5 flex flex-wrap gap-2">
        <Link
          href={hrefForType(undefined)}
          className={cn(
            "focus-ring rounded-full px-4 py-2 text-xs font-black transition",
            !current.type ? "bg-aied-cyan text-slate-950" : "bg-slate-100 text-slate-600 hover:bg-aied-soft hover:text-aied-blue"
          )}
        >
          {dictionary.common.allTypes}
        </Link>
        {PAPER_TYPES.map((type) => (
          <Link
            key={type.value}
            href={hrefForType(type.value)}
            className={cn(
              "focus-ring rounded-full px-4 py-2 text-xs font-black transition",
              current.type === type.value ? "bg-aied-cyan text-slate-950" : "bg-slate-100 text-slate-600 hover:bg-aied-soft hover:text-aied-blue"
            )}
          >
            {dictionary.paperTypes[type.value]}
          </Link>
        ))}
      </div>
    </div>
  );
}
