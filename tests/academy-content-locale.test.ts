import assert from "node:assert/strict";
import test from "node:test";
import { getAcademyLessonPresentationBySlug, resolveAcademyContentPresentation } from "@/lib/academy-data";
import { academyLearningResourceJsonLd } from "@/lib/structured-data";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import AcademyCard from "@/components/AcademyCard";
import { getDictionary } from "@/lib/i18n";

const slug = "what-artificial-intelligence-is";

test("Academy English fallback content presents left-to-right English on Arabic and Chinese routes", () => {
  for (const locale of ["ar", "zh-hant"] as const) {
    const presentation = getAcademyLessonPresentationBySlug(slug, locale);
    assert.ok(presentation);
    assert.equal(presentation.contentLocale, "en");
    assert.equal(presentation.contentHtmlLang, "en-HK");
    assert.equal(presentation.contentDir, "ltr");
    assert.equal(presentation.isFallback, true);
  }

  const english = getAcademyLessonPresentationBySlug(slug, "en");
  assert.ok(english);
  assert.equal(english.contentLocale, "en");
  assert.equal(english.contentHtmlLang, "en-HK");
  assert.equal(english.contentDir, "ltr");
  assert.equal(english.isFallback, false);
});

test("reviewed lesson content uses its reviewed locale presentation", () => {
  const reviewedArabic = resolveAcademyContentPresentation("ar", true);
  assert.equal(reviewedArabic.contentLocale, "ar");
  assert.equal(reviewedArabic.contentHtmlLang, "ar");
  assert.equal(reviewedArabic.contentDir, "rtl");
  assert.equal(reviewedArabic.isFallback, false);
});

test("LearningResource language follows effective content while its URL follows the route", () => {
  const presentation = getAcademyLessonPresentationBySlug(slug, "ar");
  assert.ok(presentation);
  const data = academyLearningResourceJsonLd(presentation, "ar") as Record<string, unknown>;

  assert.equal(data.inLanguage, "en-HK");
  assert.match(String(data.url), /\/ar\/academy\//);
});

test("Academy cards mark fallback text as English while retaining route-localized UI", () => {
  for (const locale of ["ar", "zh-hant", "en"] as const) {
    const presentation = getAcademyLessonPresentationBySlug(slug, locale);
    assert.ok(presentation);
    const dictionary = getDictionary(locale);
    const html = renderToStaticMarkup(React.createElement(AcademyCard, {
      lesson: presentation.lesson,
      locale,
      dictionary,
    }));

    assert.match(html, /lang="en-HK" dir="ltr"/);
    assert.match(html, new RegExp(dictionary.academy.tracks[presentation.lesson.track]));
  }
});
