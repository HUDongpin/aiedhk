"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { localeMeta, locales, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  locale: Locale;
  align?: "left" | "right";
}

function buildLocalePath(pathname: string, queryString: string, targetLocale: Locale) {
  const segments = pathname.split("/");

  if (locales.includes(segments[1] as Locale)) {
    segments[1] = targetLocale;
  } else {
    segments.splice(1, 0, targetLocale);
  }

  const path = segments.join("/") || `/${targetLocale}`;
  return queryString ? `${path}?${queryString}` : path;
}

export default function LanguageSwitcher({ locale, align = "right" }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryString = searchParams.toString();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentMeta = localeMeta[locale];

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="focus-ring inline-flex h-11 items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 text-sm font-black text-aied-ink shadow-[inset_0_0_0_1px_rgba(148,163,184,0.25),0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur transition hover:border-aied-cyan hover:text-aied-blue"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Language selector"
      >
        <span dir={currentMeta.dir}>{currentMeta.label}</span>
        <span className={cn("text-xs text-slate-400 transition", open && "rotate-180")}>⌄</span>
      </button>

      <div
        className={cn(
          "absolute z-[60] mt-3 w-max min-w-full max-w-[calc(100vw-2rem)] rounded-3xl border border-slate-200 bg-white p-2 shadow-[0_24px_70px_rgba(15,23,42,0.16)] transition",
          align === "left" ? "left-0 origin-top-left" : "right-0 origin-top-right",
          open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
        )}
        role="listbox"
        aria-label="Language options"
      >
        <div className="max-h-80 overflow-y-auto overscroll-contain pr-1">
          {locales.map((item) => {
            const active = item === locale;
            const meta = localeMeta[item];
            const href = buildLocalePath(pathname, queryString, item);

            return (
              <Link
                key={item}
                href={href}
                role="option"
                aria-selected={active}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={cn(
                  "focus-ring flex min-h-11 items-center justify-between gap-3 whitespace-nowrap rounded-2xl px-3 py-2 text-sm font-bold transition",
                  active
                    ? "bg-aied-cyan text-slate-950 shadow-[0_10px_24px_rgba(72,213,232,0.25)]"
                    : "text-slate-600 hover:bg-aied-soft hover:text-aied-blue"
                )}
              >
                <span dir={meta.dir}>{meta.label}</span>
                {active && <span aria-hidden="true">✓</span>}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
