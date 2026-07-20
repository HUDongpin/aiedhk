import type { AcademyLessonLocalization } from "@/lib/types";
import type { Locale } from "@/lib/i18n";

const reviewedAcademyLocalizations: Partial<Record<string, Partial<Record<Locale, AcademyLessonLocalization>>>> = {};

export function getReviewedAcademyLocalization(id: string, locale: Locale) {
  return reviewedAcademyLocalizations[id]?.[locale];
}
