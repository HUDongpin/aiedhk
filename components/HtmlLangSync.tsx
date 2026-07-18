"use client";

import { useEffect } from "react";
import type { TextDirection } from "@/lib/i18n";
import { defaultLocale, localeMeta } from "@/lib/i18n";

interface HtmlLangSyncProps {
  lang: string;
  dir: TextDirection;
}

/**
 * Keeps the document element's `lang` and `dir` in sync with the active locale.
 *
 * The root layout (`app/layout.tsx`) sits above the `[locale]` route segment, so it
 * cannot know the locale and statically renders `<html lang="en">` with no `dir`.
 * That leaves every non-English page — and especially the Arabic RTL page — with an
 * incorrect document-level language and direction for assistive technology, browser
 * hyphenation, and translation tooling. This component corrects the attributes on the
 * client and restores the site default when the localized subtree unmounts.
 */
export default function HtmlLangSync({ lang, dir }: HtmlLangSyncProps) {
  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = dir;

    return () => {
      root.lang = localeMeta[defaultLocale].htmlLang;
      root.dir = localeMeta[defaultLocale].dir;
    };
  }, [lang, dir]);

  return null;
}
