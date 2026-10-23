import { isLocale, type Locale } from "@/lib/i18n";
import type { NewsletterChannel, NewsletterEmailItem } from "./types";

export interface NewsletterFeedEntry {
  key: string;
  channel: NewsletterChannel;
  order: number;
  items: Partial<Record<Locale, NewsletterEmailItem[]>>;
}
export interface CatalogEntry extends NewsletterFeedEntry {
  firstSeenAt: string;
  baseline: boolean;
}

export function hongKongDate(now: Date): string {
  return new Date(now.getTime() + 8 * 60 * 60_000).toISOString().slice(0, 10);
}

export function dueNewsletterChannels(now: Date): NewsletterChannel[] {
  const local = new Date(now.getTime() + 8 * 60 * 60_000);
  const minute = local.getUTCHours() * 60 + local.getUTCMinutes();
  return (["news", "academy"] as const).filter((channel) => minute >= (channel === "news" ? 560 : 570));
}

export function classifyLegacySource(source: string | null | undefined): NewsletterChannel | "unknown" {
  if (!source?.startsWith("/") || source.startsWith("//")) return "unknown";
  const parts = source.split(/[?#]/, 1)[0].replace(/\/+$/, "").split("/").filter(Boolean);
  if (parts.length === 2 && isLocale(parts[0])) parts.shift();
  if (parts.length !== 1) return "unknown";
  return parts[0] === "news" || parts[0] === "research-news" ? "news" : parts[0] === "academy" ? "academy" : "unknown";
}

export function selectNewsItems(entries: CatalogEntry[], activatedAt: Date, sentKeys: ReadonlySet<string>, cutoff: Date): CatalogEntry[] {
  return entries.filter((entry) => entry.channel === "news" && !entry.baseline && !sentKeys.has(entry.key)
    && Date.parse(entry.firstSeenAt) >= activatedAt.getTime() && Date.parse(entry.firstSeenAt) <= cutoff.getTime())
    .sort((a, b) => Date.parse(a.firstSeenAt) - Date.parse(b.firstSeenAt) || a.order - b.order || a.key.localeCompare(b.key))
    .slice(0, 5);
}

export function selectAcademyPair(entries: CatalogEntry[], history: Array<{ key: string; cycle: number }>) {
  const pairs = entries.filter((entry) => entry.channel === "academy");
  if (!pairs.length) return null;
  const cycle = Math.max(1, ...history.map((sent) => sent.cycle));
  const everSent = new Set(history.map((sent) => sent.key));
  const currentSent = new Set(history.filter((sent) => sent.cycle === cycle).map((sent) => sent.key));
  const byOrder = (a: CatalogEntry, b: CatalogEntry) => a.order - b.order || a.key.localeCompare(b.key);
  const newPair = pairs.filter((pair) => !pair.baseline && !everSent.has(pair.key))
    .sort((a, b) => Date.parse(a.firstSeenAt) - Date.parse(b.firstSeenAt) || byOrder(a, b))[0];
  if (newPair) return { entry: newPair, cycle, review: false };
  const next = pairs.filter((pair) => !currentSent.has(pair.key)).sort(byOrder)[0];
  if (next) return { entry: next, cycle, review: everSent.has(next.key) };
  return { entry: pairs.slice().sort(byOrder)[0], cycle: cycle + 1, review: true };
}

export function retryDecision(input: {
  attempt: number; firstAttemptAt: Date; now: Date; retryable: boolean; ambiguous: boolean; retryAfterSeconds?: number;
}): { status: "queued" | "failed" | "unknown"; nextAttemptAt?: Date } {
  const delays = [60, 300, 1800, 7200, 21600];
  if (!input.retryable || input.attempt > delays.length) return { status: input.ambiguous ? "unknown" : "failed" };
  const delay = Math.max(delays[Math.max(0, input.attempt - 1)], input.retryAfterSeconds ?? 0);
  const nextAttemptAt = new Date(input.now.getTime() + delay * 1000);
  // Leave an hour of margin inside Resend's 24-hour deduplication window.
  if (nextAttemptAt.getTime() - input.firstAttemptAt.getTime() >= 23 * 60 * 60_000) {
    return { status: input.ambiguous ? "unknown" : "failed" };
  }
  return { status: "queued", nextAttemptAt };
}
