import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import AcademyFilters from "@/components/AcademyFilters";
import { academyPageHref } from "@/components/AcademyExplorerView";
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
  assert.match(html, /value="ai-knowledge" selected=""/);
  assert.match(html, /value="core" selected=""/);
  assert.match(html, /href="\/en\/academy"/);
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
