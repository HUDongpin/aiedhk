import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import Pagination from "@/components/Pagination";
import AcademyExplorerView from "@/components/AcademyExplorerView";
import ResearchNewsExplorerView from "@/components/ResearchNewsExplorerView";
import { getAcademyLessons } from "@/lib/academy-data";
import { getDictionary, locales, type Locale } from "@/lib/i18n";
import { getPaginationItems } from "@/lib/pagination";
import type { ResearchPaper } from "@/lib/types";

function attributes(tag: string) {
  return Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map((match) => [match[1], match[2].replaceAll("&amp;", "&").replaceAll("&#x27;", "'").replaceAll("&quot;", '"')]));
}

function paginationMarkup(html: string) {
  const nav = html.match(/<nav\b[^>]*>[\s\S]*?<\/nav>/);
  assert.ok(nav, "multiple result pages should render a pagination navigation landmark");
  return nav[0];
}

function paginationLinks(html: string) {
  return [...paginationMarkup(html).matchAll(/<a\b[^>]*>/g)].map(([tag]) => attributes(tag));
}

function renderPagination(page: number, totalPages: number, locale: Locale = "en") {
  return renderToStaticMarkup(React.createElement(Pagination, {
    locale,
    dictionary: getDictionary(locale),
    page,
    totalPages,
    hrefForPage: (target) => `/${locale}/news?page=${target}`,
  }));
}

test("pagination uses compact leading, middle, and trailing windows", () => {
  assert.deepEqual(getPaginationItems(1, 0), []);
  assert.deepEqual(getPaginationItems(1, 1), []);
  assert.deepEqual(getPaginationItems(4, 7), [1, 2, 3, 4, 5, 6, 7]);
  assert.deepEqual(getPaginationItems(1, 100), [1, 2, 3, 4, 5, "end-ellipsis", 100]);
  assert.deepEqual(getPaginationItems(4, 100), [1, 2, 3, 4, 5, "end-ellipsis", 100]);
  assert.deepEqual(getPaginationItems(5, 100), [1, "start-ellipsis", 4, 5, 6, "end-ellipsis", 100]);
  assert.deepEqual(getPaginationItems(50, 100), [1, "start-ellipsis", 49, 50, 51, "end-ellipsis", 100]);
  assert.deepEqual(getPaginationItems(97, 100), [1, "start-ellipsis", 96, 97, 98, 99, 100]);
  assert.deepEqual(getPaginationItems(100, 100), [1, "start-ellipsis", 96, 97, 98, 99, 100]);
  assert.deepEqual(getPaginationItems(5000, 10000), [1, "start-ellipsis", 4999, 5000, 5001, "end-ellipsis", 10000]);
});

test("every page through 120 keeps a bounded, ordered, reachable window without redundant ellipses", () => {
  for (let total = 2; total <= 120; total += 1) {
    for (let page = 1; page <= total; page += 1) {
      const items = getPaginationItems(page, total);
      const description = `page ${page} of ${total}`;
      assert.ok(items.length <= 7, description);
      assert.equal(new Set(items).size, items.length, description);
      assert.equal(items[0], 1, description);
      assert.equal(items.at(-1), total, description);
      assert.ok(items.includes(page), description);
      const pages = items.filter((item): item is number => typeof item === "number");
      assert.deepEqual(pages, [...pages].sort((a, b) => a - b), description);
      assert.ok(pages.every((item) => Number.isInteger(item) && item >= 1 && item <= total), description);
      items.forEach((item, index) => {
        if (typeof item === "number") {
          const next = items[index + 1];
          if (typeof next === "number") assert.equal(next, item + 1, description);
          return;
        }
        const previous = items[index - 1];
        const next = items[index + 1];
        assert.equal(typeof previous, "number", description);
        assert.equal(typeof next, "number", description);
        assert.ok((next as number) - (previous as number) > 2, description);
      });
    }
  }
});

test("pagination hides for a single page and exposes one current page with bounded links for large collections", () => {
  assert.equal(renderPagination(1, 1), "");
  for (const [page, total] of [[1, 100], [50, 100], [100, 100], [5000, 10000], [10000, 10000]]) {
    const links = paginationLinks(renderPagination(page, total));
    const current = links.filter((link) => link["aria-current"] === "page");
    assert.equal(current.length, 1);
    assert.equal(current[0].href, `/en/news?page=${page}`);
    for (const link of links) {
      const target = Number(new URL(link.href, "https://www.aied.hk").searchParams.get("page"));
      assert.ok(target >= 1 && target <= total, `link must be in range: ${link.href}`);
    }
    assert.ok(links.length <= 11, "page count must not increase the number of rendered navigation links");
  }
});

test("directional navigation has valid destinations and disabled endpoints are not links", () => {
  const copy = getDictionary("en").pagination;
  const middle = paginationLinks(renderPagination(50, 100));
  assert.equal(middle.find((link) => link["aria-label"] === copy.first)?.href, "/en/news?page=1");
  assert.equal(middle.find((link) => link["aria-label"] === copy.previous)?.href, "/en/news?page=49");
  assert.equal(middle.find((link) => link["aria-label"] === copy.next)?.href, "/en/news?page=51");
  assert.equal(middle.find((link) => link["aria-label"] === copy.last)?.href, "/en/news?page=100");
  for (const [page, label] of [[1, copy.first], [1, copy.previous], [100, copy.next], [100, copy.last]] as const) {
    const html = paginationMarkup(renderPagination(page, 100));
    const disabled = [...html.matchAll(/<span\b[^>]*>/g)].map(([tag]) => attributes(tag)).find((item) => item["aria-label"] === label);
    assert.ok(disabled, `${label} should remain visible as a disabled control`);
    assert.equal(disabled.role, "link");
    assert.equal(disabled["aria-disabled"], "true");
    assert.equal(disabled.href, undefined);
    assert.ok(disabled.tabindex === undefined || disabled.tabindex === "-1");
    assert.ok(!paginationLinks(html).some((link) => link["aria-label"] === label));
  }
});

test("all locales provide localized pagination navigation and previous/next labels", () => {
  for (const locale of locales) {
    const copy = getDictionary(locale).pagination;
    for (const label of Object.values(copy)) assert.ok(label.trim(), `${locale} pagination labels should be nonempty`);
    const html = renderPagination(50, 100, locale);
    const nav = attributes(paginationMarkup(html).match(/<nav\b[^>]*>/)![0]);
    assert.equal(nav["aria-label"], copy.label);
    assert.equal(nav.dir, locale === "ar" ? "rtl" : "ltr");
    const links = paginationLinks(html);
    assert.ok(links.some((link) => link["aria-label"] === copy.previous));
    assert.ok(links.some((link) => link["aria-label"] === copy.next));
  }
  assert.notEqual(getDictionary("ar").pagination.previous, getDictionary("en").pagination.previous);
  assert.notEqual(getDictionary("zh-hant").pagination.next, getDictionary("en").pagination.next);
});

const paper: ResearchPaper = {
  id: "aied-001", slug: "pagination-fixture", title: "Classroom AI", authors: ["Example Author"],
  venue: "Example Conference", year: 2026, type: "conference", tags: ["learning"],
  image: "/images/research/ai-tutoring.svg", imageAlt: "Classroom learning illustration",
  shortSummary: "A research summary.", fullSummary: "A full research summary.",
  keyTakeaways: ["Support teachers."], whyItMatters: "Classroom application.",
  sourceUrl: "https://example.com/paper", createdAt: "2026-10-01",
};

test("News and Academy pagination preserve all filters, encoded search text, locale, and card identifiers", () => {
  const q = "AI & learning + 教學";
  for (const locale of ["en", "zh-hant", "ar"] as const) {
    const dictionary = getDictionary(locale);
    const researchHtml = renderToStaticMarkup(React.createElement(ResearchNewsExplorerView, {
      locale, dictionary, years: [2026], current: { q, type: "conference", year: "2026", page: "50" },
      result: { items: Array.from({ length: 6 }, (_, index) => ({ ...paper, id: `aied-${String(index + 1).padStart(3, "0")}`, slug: `${paper.slug}-${index + 1}` })), total: 600, page: 50, pageSize: 6, totalPages: 100 },
    }));
    const academyLessons = getAcademyLessons(locale).slice(0, 6);
    const academyHtml = renderToStaticMarkup(React.createElement(AcademyExplorerView, {
      locale, dictionary, current: { q, track: "ai-knowledge", level: "core", page: "50" },
      result: { items: academyLessons, total: 600, page: 50, pageSize: 6, totalPages: 100 },
    }));
    for (const [path, html, filters] of [
      ["news", researchHtml, { q, type: "conference", year: "2026" }],
      ["academy", academyHtml, { q, track: "ai-knowledge", level: "core" }],
    ] as const) {
      const links = paginationLinks(html);
      assert.ok(links.length > 0 && links.length <= 11);
      for (const link of links) {
        const url = new URL(link.href, "https://www.aied.hk");
        assert.equal(url.pathname, `/${locale}/${path}`);
        for (const [name, value] of Object.entries(filters)) assert.equal(url.searchParams.get(name), value);
        assert.ok(Number(url.searchParams.get("page")) >= 1 && Number(url.searchParams.get("page")) <= 100);
        assert.equal([...url.searchParams.keys()].length, 4, "pagination must retain filters and replace the page only");
      }
      assert.equal(links.filter((link) => link["aria-current"] === "page").length, 1);
    }
    assert.ok(researchHtml.includes(`Article identifier ${dictionary.paperTypes.conference} 01`));
    assert.ok(academyHtml.includes(`Lesson identifier ${academyLessons[0].listingIdentifier}`));
  }
});
