import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import AcademyFilters from "@/components/AcademyFilters";
import AcademyExplorerView, { academyPageHref } from "@/components/AcademyExplorerView";
import ResearchNewsletterSignup from "@/components/ResearchNewsletterSignup";
import { filterAcademyLessonList } from "@/lib/academy-filter";
import { getAcademyLessons } from "@/lib/academy-data";
import { getDictionary, locales } from "@/lib/i18n";

const academyCardSource = readFileSync("components/AcademyCard.tsx", "utf8");
const academyDetailSource = readFileSync("app/[locale]/academy/[slug]/page.tsx", "utf8");
const academyPageSource = readFileSync("app/[locale]/academy/page.tsx", "utf8");

test("Academy artwork uses responsive Next images and lazy-loads the below-fold summary", () => {
  assert.match(academyCardSource, /import Image from "next\/image"/);
  assert.match(academyCardSource, /<Image[\s\S]*?fill[\s\S]*?sizes=/);
  assert.doesNotMatch(academyCardSource, /<img\b/);

  assert.match(academyDetailSource, /import Image from "next\/image"/);
  assert.match(academyDetailSource, /<Image[\s\S]*?preload[\s\S]*?sizes=/);
  assert.match(academyDetailSource, /<Image[\s\S]*?summaryImage[\s\S]*?loading="lazy"[\s\S]*?sizes=/);
  assert.doesNotMatch(academyDetailSource, /<img\b/);
});

test("Academy filters expose q, track, and level controls plus a complete reset", () => {
  const html = renderToStaticMarkup(React.createElement(AcademyFilters, {
    locale: "en",
    dictionary: getDictionary("en"),
    current: { q: "learning", track: "ai-knowledge", level: "core", page: "2" },
  }));

  assert.match(html, /name="q"/);
  assert.match(html, /name="track"/);
  assert.match(html, /name="level"/);
  assert.match(html, /<label[^>]+for="academy-search"[^>]*>Search Academy lessons<\/label>/);
  assert.match(html, /<label[^>]+for="academy-track"[^>]*>Filter by track<\/label>/);
  assert.match(html, /<label[^>]+for="academy-level"[^>]*>Filter by level<\/label>/);
  assert.match(html, /id="academy-search"/);
  assert.match(html, /id="academy-track"/);
  assert.match(html, /id="academy-level"/);
  assert.match(html, /value="ai-knowledge" selected=""/);
  assert.match(html, /value="core" selected=""/);
  assert.match(html, /href="\/en\/academy"/);
  assert.match(html, /aria-current="page"[^>]*href="\/en\/academy\?q=learning&amp;track=ai-knowledge&amp;level=core"/);
});

test("Academy uses six-card pages and pagination preserves every filter query", () => {
  const lessons = [...getAcademyLessons("en"), ...getAcademyLessons("en").map((lesson) => ({ ...lesson, id: `${lesson.id}-copy`, slug: `${lesson.slug}-copy` }))];
  const result = filterAcademyLessonList(lessons, { page: 1 });

  assert.equal(result.items.length, 6);
  assert.equal(result.totalPages, 2);
  assert.equal(
    academyPageHref("en", { q: "memory", track: "educational-theory", level: "core" }, 2),
    "/en/academy?q=memory&track=educational-theory&level=core&page=2"
  );
});

test("active Academy pagination exposes the current page to assistive technology", () => {
  const lessons = getAcademyLessons("en");
  const html = renderToStaticMarkup(React.createElement(AcademyExplorerView, {
    locale: "en",
    dictionary: getDictionary("en"),
    current: {},
    result: { items: lessons, total: 12, page: 2, pageSize: 6, totalPages: 2 },
  }));

  assert.match(html, /aria-current="page"[^>]*href="\/en\/academy\?page=2"[^>]*>2<\/a>/);
});

test("Academy places a localized compact newsletter invitation beside the hero", () => {
  for (const locale of locales) {
    const copy = getDictionary(locale).academy.newsletter;
    assert.ok(copy.eyebrow.trim(), `${locale} newsletter eyebrow should be localized`);
    assert.ok(copy.title.trim(), `${locale} newsletter title should be localized`);
    assert.ok(copy.description.trim(), `${locale} newsletter description should be localized`);
  }

  const dictionary = getDictionary("en");
  const html = renderToStaticMarkup(React.createElement(ResearchNewsletterSignup, {
    locale: "en",
    sourcePath: "/en/academy",
    copy: { ...dictionary.research.newsletter, ...dictionary.academy.newsletter, privacyNote: "" },
  }));

  const heroGrid = academyPageSource.indexOf("lg:grid-cols-[1.05fr_0.95fr]");
  const signup = academyPageSource.indexOf("<ResearchNewsletterSignup");
  const explorer = academyPageSource.indexOf("<Suspense");
  assert.ok(heroGrid >= 0 && heroGrid < signup && signup < explorer);
  assert.match(academyPageSource, /sourcePath={`\/\$\{typedLocale\}\/academy`}/);
  assert.doesNotMatch(academyPageSource, /variant="wide"/);
  assert.match(html, /Keep learning/);
  assert.match(html, /Connect PedaNova Academy lessons with the latest AIED technologies and learning theories/);
  assert.match(html, /Get one carefully curated AIED update every day to extend what you learn in the Academy\./);
  assert.doesNotMatch(html, /each week/);
  assert.match(html, /you@example\.com/);
  assert.match(html, />Subscribe<\/button>/);
  assert.match(html, /text-2xl/);
  assert.doesNotMatch(html, /lg:text-5xl/);
});
