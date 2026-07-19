"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import AcademyExplorerView from "@/components/AcademyExplorerView";
import { filterAcademyLessonList } from "@/lib/academy-filter";
import type { Dictionary, Locale } from "@/lib/i18n";
import type { AcademyLesson } from "@/lib/types";

export default function AcademyExplorer({ locale, dictionary, lessons }: { locale: Locale; dictionary: Dictionary; lessons: AcademyLesson[] }) {
  const params = useSearchParams();
  const current = {
    q: params.get("q") ?? undefined,
    track: params.get("track") ?? undefined,
    level: params.get("level") ?? undefined,
    page: params.get("page") ?? undefined,
  };
  const page = Number(current.page ?? "1");
  const result = useMemo(() => filterAcademyLessonList(lessons, { q: current.q, track: current.track, level: current.level, page, pageSize: 6 }), [current.q, current.track, current.level, current.page, lessons, page]);
  return <AcademyExplorerView locale={locale} dictionary={dictionary} current={current} result={result} />;
}
