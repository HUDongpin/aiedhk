import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import ResearchCard from "@/components/ResearchCard";
import { getDictionary } from "@/lib/i18n";
import type { ResearchPaper } from "@/lib/types";
import { formatDate } from "@/lib/utils";

function paper(overrides: Partial<ResearchPaper> = {}): ResearchPaper {
  return {
    id: "paper-1",
    slug: "example-paper",
    title: "AI Feedback for Classroom Learning",
    authors: ["Ada Lee", "Sam Wong"],
    venue: "International Journal of Artificial Intelligence in Education",
    year: 2026,
    type: "journal",
    tags: ["feedback", "classroom AI"],
    image: "/images/research/ai-tutoring.svg",
    imageAlt: "Abstract classroom AI illustration",
    shortSummary: "A concise research summary for the card.",
    fullSummary: "A longer research summary.",
    keyTakeaways: ["AI feedback needs teacher oversight."],
    whyItMatters: "It supports responsible classroom AI.",
    sourceUrl: "https://example.com/paper",
    createdAt: "2026-06-06",
    ...overrides,
  };
}

test("research cards show the paper year without the published date", () => {
  const item = paper();
  const html = renderToStaticMarkup(
    React.createElement(ResearchCard, {
      paper: item,
      locale: "en",
      dictionary: getDictionary("en"),
    })
  );

  assert.match(html, />2026</);
  assert.doesNotMatch(html, new RegExp(formatDate(item.createdAt, "en").replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
});

test("industry news cards show the full publication date", () => {
  const item = paper({
    type: "policy-ethics",
    createdAt: "2026-07-20",
  });
  const html = renderToStaticMarkup(
    React.createElement(ResearchCard, {
      paper: item,
      locale: "en",
      dictionary: getDictionary("en"),
    })
  );

  assert.match(html, new RegExp(formatDate(item.createdAt, "en").replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
});

test("research cards render full-height full-bleed cover media", () => {
  const item = paper();
  const html = renderToStaticMarkup(
    React.createElement(ResearchCard, {
      paper: item,
      locale: "en",
      dictionary: getDictionary("en"),
    })
  );

  assert.match(html, /\bmd:h-full\b/);
  assert.match(html, /\bmd:self-stretch\b/);
  assert.match(html, /\bobject-cover\b/);
  assert.doesNotMatch(html, /\bobject-contain\b/);
});

test("research cards display a stable localized type-and-number identifier", () => {
  const englishHtml = renderToStaticMarkup(
    React.createElement(ResearchCard, {
      paper: paper({ id: "aied-007", type: "conference" }),
      locale: "en",
      dictionary: getDictionary("en"),
    })
  );
  const traditionalChineseHtml = renderToStaticMarkup(
    React.createElement(ResearchCard, {
      paper: paper({ id: "aied-107", type: "conference" }),
      locale: "zh-hant",
      dictionary: getDictionary("zh-hant"),
    })
  );

  assert.match(englishHtml, /aria-label="Article identifier Conference Paper 07"/);
  assert.match(englishHtml, />Conference Paper 07</);
  assert.match(traditionalChineseHtml, /aria-label="Article identifier 會議論文 107"/);
  assert.match(traditionalChineseHtml, />會議論文 107</);
});
