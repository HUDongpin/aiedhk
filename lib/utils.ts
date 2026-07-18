import { getLocaleMeta } from "@/lib/i18n";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function clampPage(page: number, totalPages: number) {
  if (!Number.isFinite(page) || page < 1) return 1;
  if (totalPages <= 0) return 1;
  return Math.min(Math.floor(page), totalPages);
}

export function formatDate(dateString: string, locale: string) {
  return new Intl.DateTimeFormat(getLocaleMeta(locale).dateLocale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(dateString));
}

/**
 * Estimated reading time in whole minutes. CJK scripts have no word spacing, so
 * they are counted by character (~360 chars/min); other scripts by word
 * (~200 words/min). Always at least 1 minute.
 */
export function readingTimeMinutes(text: string, locale: string) {
  const cjkCount = (text.match(/[　-鿿가-힯]/g) ?? []).length;
  const dateLocale = getLocaleMeta(locale).dateLocale;
  const isCjk = cjkCount > text.length * 0.2 || dateLocale.startsWith("zh") || ["ja-JP", "ko-KR"].includes(dateLocale);

  const units = isCjk ? text.replace(/\s+/g, "").length / 360 : text.trim().split(/\s+/).filter(Boolean).length / 200;
  return Math.max(1, Math.round(units));
}
