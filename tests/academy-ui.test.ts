import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import AcademyFilters from "@/components/AcademyFilters";
import AcademyExplorerView, { academyPageHref } from "@/components/AcademyExplorerView";
import { filterAcademyLessonList } from "@/lib/academy-filter";
import { getAcademyLessons } from "@/lib/academy-data";
import { getDictionary } from "@/lib/i18n";

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
