"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import ResearchNewsExplorerView from "@/components/ResearchNewsExplorerView";
import type { Dictionary, Locale } from "@/lib/i18n";
import { filterResearchPaperList } from "@/lib/research-filter";
import type { ResearchPaper } from "@/lib/types";

interface ResearchNewsExplorerProps {
  locale: Locale;
  dictionary: Dictionary;
  years: number[];
  papers: ResearchPaper[];
}

function currentFromSearchParams(searchParams: URLSearchParams) {
  return {
    q: searchParams.get("q") ?? undefined,
    type: searchParams.get("type") ?? undefined,
    year: searchParams.get("year") ?? undefined,
    page: searchParams.get("page") ?? undefined,
  };
}

export default function ResearchNewsExplorer({ locale, dictionary, years, papers }: ResearchNewsExplorerProps) {
  const searchParams = useSearchParams();
  const current = currentFromSearchParams(searchParams);
  const page = Number(current.page ?? "1");
  const result = useMemo(
    () => filterResearchPaperList(papers, { q: current.q, type: current.type, year: current.year, page, pageSize: 6 }),
    [current.page, current.q, current.type, current.year, page, papers]
  );

  return <ResearchNewsExplorerView locale={locale} dictionary={dictionary} years={years} current={current} result={result} />;
}
