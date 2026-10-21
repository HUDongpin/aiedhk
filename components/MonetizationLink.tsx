"use client";

import type { ReactNode } from "react";
import { track } from "@vercel/analytics";
import type { Locale } from "@/lib/i18n";

interface Props {
  href: string; locale: Locale; placement: string; trackClicks: boolean;
  kind: "support" | "affiliate"; className?: string; children: ReactNode;
}

export default function MonetizationLink({ href, locale, placement, trackClicks, kind, className, children }: Props) {
  return <a href={href} target="_blank" rel={kind === "affiliate" ? "sponsored noopener noreferrer" : "noopener noreferrer"}
    className={className} onClick={() => {
      if (!trackClicks) return;
      try { track(kind === "support" ? "support_click" : "affiliate_click", { locale, placement }); }
      catch { /* Analytics must never prevent a visitor from following the link. */ }
    }}>{children}<span aria-hidden="true"> ↗</span></a>;
}
