import type { Locale } from "@/lib/i18n";
import type { SupportConfig } from "@/lib/monetization";
import { monetizationCopy } from "@/lib/monetization-copy";
import MonetizationLink from "./MonetizationLink";

export default function SupportButton({ locale, support, trackClicks = false, placement = "header" }: {
  locale: Locale; support: SupportConfig | null; trackClicks?: boolean; placement?: string;
}) {
  if (!support) return null;
  return <MonetizationLink href={support.url} locale={locale} placement={placement} trackClicks={trackClicks} kind="support"
    className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-center text-sm font-bold text-aied-ink transition hover:border-aied-blue hover:bg-aied-soft">
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5 shrink-0">
      <path d="M4 8h12v7a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Zm12 1h2a3 3 0 0 1 0 6h-2M7 3v2m4-2v2m4-2v2M3 21h16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    {monetizationCopy[locale].supportLabel}
  </MonetizationLink>;
}
