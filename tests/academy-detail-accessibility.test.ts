import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import AcademyDetailPage from "@/app/[locale]/academy/[slug]/page";
import { getAcademyLessonPresentationBySlug } from "@/lib/academy-data";
import { getDictionary } from "@/lib/i18n";
import { readingTimeMinutes } from "@/lib/utils";

test("Academy reading-time accessible name includes localized label, duration, and suffix", async () => {
  const locale = "zh-hant";
  const slug = "what-artificial-intelligence-is";
  const presentation = getAcademyLessonPresentationBySlug(slug, locale);
  assert.ok(presentation);
  const dictionary = getDictionary(locale);
  const minutes = readingTimeMinutes(presentation.lesson.fullSummary, presentation.contentLocale);
  const html = renderToStaticMarkup(await AcademyDetailPage({ params: Promise.resolve({ locale, slug }) }));

  assert.match(
    html,
    new RegExp(`aria-label="${dictionary.academy.readingTimeLabel} ${minutes} ${dictionary.academy.minuteAbbreviation}"`)
  );
});
