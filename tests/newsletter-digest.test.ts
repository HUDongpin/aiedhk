import assert from "node:assert/strict";
import test from "node:test";
import { createDailyResearchDigest } from "@/lib/newsletter-digest";
import type { ResearchPaper } from "@/lib/types";

function paper(slug: string, createdAt: string): ResearchPaper {
  return {
    id: slug,
    slug,
    title: `Title ${slug}`,
    authors: ["AIEDHK"],
    venue: "Test venue",
    year: 2026,
    type: "journal",
    tags: ["AIED"],
    image: "/test.png",
    imageAlt: "Test image",
    shortSummary: `Summary ${slug}`,
    fullSummary: `Full summary ${slug}`,
    keyTakeaways: ["Takeaway"],
    whyItMatters: "It matters.",
    sourceUrl: "https://example.com",
    createdAt,
  };
}

test("daily digest includes only the previous 24 hours in newest-first order", () => {
  const now = new Date("2026-07-20T12:00:00.000Z");
  const digest = createDailyResearchDigest([
    paper("old", "2026-07-19T11:59:59.999Z"),
    paper("newer", "2026-07-20T11:00:00.000Z"),
    paper("boundary", "2026-07-19T12:00:00.000Z"),
    paper("future", "2026-07-20T12:00:00.001Z"),
  ], now);

  assert.equal(digest.windowStart, "2026-07-19T12:00:00.000Z");
  assert.deepEqual(digest.items.map((item) => item.slug), ["newer", "boundary"]);
});

test("daily digest does not fall back to older news when the window is empty", () => {
  const digest = createDailyResearchDigest(
    [paper("old", "2026-07-18T12:00:00.000Z")],
    new Date("2026-07-20T12:00:00.000Z")
  );

  assert.deepEqual(digest.items, []);
});
