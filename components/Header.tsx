"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense, useState } from "react";
import { localeMeta, type Dictionary, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";

interface HeaderProps {
  locale: Locale;
  dictionary: Dictionary;
}

function LanguageSwitcherFallback({ locale }: { locale: Locale }) {
  const meta = localeMeta[locale];

  return (
    <button
      type="button"
      className="inline-flex h-11 items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 text-sm font-black text-aied-ink shadow-[inset_0_0_0_1px_rgba(148,163,184,0.25),0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur"
      aria-label="Language selector loading"
      disabled
    >
      <span dir={meta.dir}>{meta.label}</span>
      <span className="text-xs text-slate-400">⌄</span>
    </button>
  );
}

function HeaderLanguageSwitcher({ locale, align = "right" }: { locale: Locale; align?: "left" | "right" }) {
  return (
    <Suspense fallback={<LanguageSwitcherFallback locale={locale} />}>
      <LanguageSwitcher locale={locale} align={align} />
    </Suspense>
  );
}

function normalizePath(path: string) {
  return path.replace(/\/$/, "") || "/";
}

export default function Header({ locale, dictionary }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const navItems = [
    { href: `/${locale}`, label: dictionary.nav.home },
    { href: `/${locale}/mission`, label: dictionary.nav.mission },
    { href: `/${locale}/news`, label: dictionary.nav.researchNews },
    { href: `/${locale}/academy`, label: dictionary.nav.academy },
    { href: `/${locale}/about`, label: dictionary.nav.about },
  ];
  const currentPath = normalizePath(pathname);

  function isActiveNavItem(href: string) {
    const currentHref = normalizePath(href);

    if (currentHref === `/${locale}`) {
      return currentPath === currentHref;
    }

    return currentPath === currentHref || currentPath.startsWith(`${currentHref}/`);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/82 backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between gap-5">
        <Logo locale={locale} />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = isActiveNavItem(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "focus-ring inline-flex h-11 items-center rounded-full px-4 text-sm font-bold transition",
                  active
                    ? "bg-aied-cyan text-aied-ink shadow-[0_10px_24px_rgba(72,213,232,0.30),0_8px_18px_rgba(15,23,42,0.10)]"
                    : "text-slate-600 hover:bg-aied-soft hover:text-aied-blue"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <HeaderLanguageSwitcher locale={locale} />
        </div>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="focus-ring inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-aied-ink shadow-sm lg:hidden"
          aria-expanded={open}
        >
          {open ? dictionary.nav.close : dictionary.nav.menu}
        </button>
      </div>
      <div className={cn("border-t border-slate-200 bg-white px-4 py-4 lg:hidden", open ? "block" : "hidden")}>
        <div className="container-page flex flex-col gap-3">
          {navItems.map((item) => {
            const active = isActiveNavItem(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={cn(
                  "focus-ring inline-flex min-h-12 items-center rounded-full px-4 py-3 text-base font-bold transition",
                  active
                    ? "bg-aied-cyan text-aied-ink shadow-[0_10px_24px_rgba(72,213,232,0.30),0_8px_18px_rgba(15,23,42,0.10)]"
                    : "text-slate-700 hover:bg-aied-soft hover:text-aied-blue"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <HeaderLanguageSwitcher locale={locale} align="left" />
          </div>
        </div>
      </div>
    </header>
  );
}
