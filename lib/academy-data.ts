import { normalizeLocale } from "@/lib/i18n";
import { getReviewedAcademyLocalization } from "@/lib/academy-reviewed-localizations";
import { reviewedAcademyLessons } from "@/lib/academy-reviewed-data";
import type { AcademyLesson } from "@/lib/types";
import type { AcademyFilterOptions } from "@/lib/types";
import { filterAcademyLessonList } from "@/lib/academy-filter";

export const academyLessons = [...reviewedAcademyLessons].sort(
  (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
);

function localizeLesson(lesson: AcademyLesson, localeInput: string): AcademyLesson {
  const locale = normalizeLocale(localeInput);
  if (locale === "en") return lesson;
  const localization = getReviewedAcademyLocalization(lesson.id, locale);

  if (!localization) return { ...lesson, summaryAudio: "", summaryAudioTitle: "" };

  return {
    ...lesson,
    ...localization,
    tags: localization.tags.length ? localization.tags : lesson.tags,
    imageAlt: localization.imageAlt ?? lesson.imageAlt,
    summaryImageAlt: localization.summaryImageAlt ?? lesson.summaryImageAlt,
    summaryAudio: localization.summaryAudio ?? "",
    summaryAudioTitle: localization.summaryAudioTitle ?? "",
  };
}

export function getAcademyLessons(locale = "en") {
  return academyLessons.map((lesson) => localizeLesson(lesson, locale));
}

export function getAcademyLessonBySlug(slug: string, locale = "en") {
  const lesson = academyLessons.find((item) => item.slug === slug);
  return lesson ? localizeLesson(lesson, locale) : undefined;
}

export function getRelatedAcademyLessons(lesson: AcademyLesson, locale = "en", limit = 3) {
  const canonical = academyLessons.find((item) => item.id === lesson.id) ?? lesson;
  const tags = new Set(canonical.tags.map((tag) => tag.toLowerCase()));

  return academyLessons
    .filter((candidate) => candidate.id !== canonical.id)
    .map((candidate) => ({
      candidate,
      score:
        candidate.tags.filter((tag) => tags.has(tag.toLowerCase())).length * 2 +
        (candidate.track === canonical.track ? 1 : 0),
    }))
    .sort((a, b) => b.score - a.score || new Date(b.candidate.createdAt).getTime() - new Date(a.candidate.createdAt).getTime())
    .slice(0, limit)
    .map(({ candidate }) => localizeLesson(candidate, locale));
}

export function filterAcademyLessons(options: AcademyFilterOptions = {}, locale = "en") {
  return filterAcademyLessonList(getAcademyLessons(locale), options);
}
