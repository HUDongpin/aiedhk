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
