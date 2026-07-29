import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
import { getResearchPapers, withReviewedStaticEnhancements } from "@/lib/research-data";

function localPublicPath(path: string) {
  return join(process.cwd(), "public", path);
}

function pngDimensions(path: string) {
  const buffer = readFileSync(path);
  assert.equal(buffer.toString("ascii", 1, 4), "PNG", `${path} should be a PNG file`);
  assert.equal(buffer.readUInt32BE(12), 0x49484452, `${path} should include a PNG IHDR chunk`);

  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
  };
}

function fileHash(path: string) {
  return createHash("sha256").update(readFileSync(path)).digest("hex");
}

test("research news fallback contains forty-seven curated Research News items", () => {
  const papers = getResearchPapers("en");

  assert.equal(papers.length, 47);
  assert.equal(papers[0]?.slug, "news-anthropic-mcp-2026-07-28-institutional-connectors");
  assert.ok(papers.every((paper) => !paper.sourceUrl.includes("example.com")));
  assert.ok(papers.every((paper) => paper.fullSummary.split(/\s+/).length >= 430));
});

test("the five-date backlog contains exactly one research paper and one clearly labeled product-news item per day", () => {
  const papers = getResearchPapers("en");
  const expectedByDate = new Map([
    ["2026-07-22", ["aied-040", "aied-041"]],
    ["2026-07-26", ["aied-038", "aied-039"]],
    ["2026-07-27", ["aied-042", "aied-043"]],
    ["2026-07-28", ["aied-044", "aied-045"]],
    ["2026-07-29", ["aied-046", "aied-047"]],
  ]);

  for (const [date, expectedIds] of expectedByDate) {
    const entries = papers.filter((paper) => paper.createdAt === date);
    assert.deepEqual(entries.map((paper) => paper.id).sort(), expectedIds);
    for (const paper of entries) {
      const wordCount = paper.fullSummary.trim().split(/\s+/).length;
      assert.ok(wordCount >= 480 && wordCount <= 600, `${paper.id} should keep the 500-word detail-page contract`);
    }

    const productNews = entries.filter((paper) => paper.type === "policy-ethics");
    const research = entries.filter((paper) => paper.type !== "policy-ethics");
    assert.equal(productNews.length, 1, `${date} should contain one product-news item`);
    assert.equal(research.length, 1, `${date} should contain one research paper`);
    assert.match(
      `${productNews[0]?.title} ${productNews[0]?.tags.join(" ")}`,
      /news/i,
      `${date} product news should be explicitly labeled`,
    );
  }
});

test("backlog identifiers aied-038 through aied-047 are continuous and non-duplicated", () => {
  const ids = getResearchPapers("en")
    .map((paper) => Number.parseInt(paper.id.replace("aied-", ""), 10))
    .filter((id) => id >= 38 && id <= 47)
    .sort((a, b) => a - b);

  assert.deepEqual(ids, [38, 39, 40, 41, 42, 43, 44, 45, 46, 47]);
});

test("technology-enhanced CLIL systematic review is classified as Review", () => {
  const paper = getResearchPapers("en").find((candidate) => candidate.id === "aied-022");

  assert.ok(paper);
  assert.equal(paper.type, "review");
});

test("each reviewed paper has a local generated raster cover asset", () => {
  const papers = getResearchPapers("en");

  for (const paper of papers) {
    assert.match(paper.image, /^\/images\/research\/covers\/.+\.png$/);
    assert.ok(existsSync(localPublicPath(paper.image)), `${paper.image} should exist`);
  }
});

test("reviewed paper covers are wide science-magazine bitmap images, not SVG posters", () => {
  const papers = getResearchPapers("en");

  for (const paper of papers) {
    const filePath = localPublicPath(paper.image);
    const { width, height } = pngDimensions(filePath);
    const aspectRatio = width / height;

    assert.ok(width >= 1500, `${paper.image} should have enough horizontal detail for full-bleed cards`);
    assert.ok(height >= 900, `${paper.image} should have enough vertical detail for detail-page heroes`);
    assert.ok(aspectRatio > 1.55 && aspectRatio < 1.65, `${paper.image} should stay close to the 16:10 cover crop`);
  }
});

test("each reviewed paper has a local generated summary illustration asset", () => {
  const papers = getResearchPapers("en");

  for (const paper of papers) {
    assert.ok(paper.summaryImage, `${paper.slug} should have a summary illustration`);
    assert.match(paper.summaryImage, /^\/images\/research\/summary\/.+\.png$/);
    assert.ok(existsSync(localPublicPath(paper.summaryImage)), `${paper.summaryImage} should exist`);
    assert.ok(paper.summaryImageAlt, `${paper.slug} should describe its summary illustration`);

    const { width, height } = pngDimensions(localPublicPath(paper.summaryImage));
    const aspectRatio = width / height;

    assert.ok(width >= 1500, `${paper.summaryImage} should have enough horizontal detail`);
    assert.ok(height >= 900, `${paper.summaryImage} should have enough vertical detail`);
    assert.ok(aspectRatio > 1.45 && aspectRatio < 1.65, `${paper.summaryImage} should fit the 16:10 summary crop`);
  }
});

test("reviewed paper cover filenames stay aligned with paper ids", () => {
  const papers = getResearchPapers("en");

  for (const paper of papers) {
    assert.ok(paper.image.includes(paper.id), `${paper.image} should include ${paper.id}`);
  }
});

test("each reviewed paper has a different cover bitmap", () => {
  const papers = getResearchPapers("en");
  const seen = new Map<string, string>();

  for (const paper of papers) {
    const hash = fileHash(localPublicPath(paper.image));
    const existing = seen.get(hash);

    assert.equal(existing, undefined, `${paper.image} should not reuse the same bitmap as ${existing}`);
    seen.set(hash, paper.image);
  }
});

test("visually duplicated News covers keep their dedicated replacement assets", () => {
  const papers = getResearchPapers("en");
  const nationalDeployments = papers.find((paper) => paper.id === "aied-014");
  const llmOpportunitiesAndRisks = papers.find((paper) => paper.id === "aied-002");

  assert.equal(
    nationalDeployments?.image,
    "/images/research/covers/aied-014-openai-countries-2026-v2.png",
  );
  assert.equal(llmOpportunitiesAndRisks?.image, "/images/research/covers/aied-002-kasneci-2023-v2.png");
});

test("reviewed static media overrides stale database cover paths", () => {
  const reviewedPaper = getResearchPapers("en").find((paper) => paper.id === "aied-001");
  assert.ok(reviewedPaper);

  const enhanced = withReviewedStaticEnhancements({
    ...reviewedPaper,
    image: "/images/research/covers/aied-001-zawacki-richter-2019.svg",
  });

  assert.equal(enhanced.image, "/images/research/covers/aied-001-zawacki-richter-2019.png");
  assert.equal(enhanced.summaryImage, reviewedPaper.summaryImage);
});

test("static summary media assets are available locally", () => {
  const papers = getResearchPapers("en");
  const papersWithAudio = papers.filter((paper) => paper.summaryAudio);

  assert.deepEqual(
    papersWithAudio.map((paper) => paper.id),
    [
      "aied-047",
      "aied-046",
      "aied-045",
      "aied-044",
      "aied-043",
      "aied-042",
      "aied-039",
      "aied-038",
      "aied-037",
      "aied-036",
      "aied-035",
      "aied-034",
      "aied-033",
      "aied-032",
      "aied-041",
      "aied-040",
      "aied-031",
      "aied-030",
      "aied-029",
      "aied-028",
      "aied-027",
      "aied-026",
      "aied-025",
      "aied-024",
      "aied-023",
      "aied-022",
      "aied-021",
      "aied-020",
      "aied-019",
      "aied-018",
      "aied-017",
      "aied-016",
      "aied-015",
      "aied-014",
      "aied-013",
      "aied-012",
      "aied-011",
      "aied-001",
      "aied-002",
      "aied-003",
      "aied-004",
      "aied-005",
      "aied-006",
      "aied-007",
      "aied-008",
      "aied-009",
      "aied-010",
    ]
  );

  for (const paper of papersWithAudio) {
    assert.ok(paper.summaryImage, `${paper.slug} should have a summary illustration`);
    assert.ok(paper.summaryAudio, `${paper.slug} should have a static summary audio file`);

    const summaryImagePath = localPublicPath(paper.summaryImage);
    const summaryAudioPath = localPublicPath(paper.summaryAudio);
    const { width, height } = pngDimensions(summaryImagePath);
    const audioBuffer = readFileSync(summaryAudioPath);

    assert.ok(width >= 1500, `${paper.summaryImage} should have enough horizontal detail`);
    assert.ok(height >= 900, `${paper.summaryImage} should have enough vertical detail`);
    assert.equal(audioBuffer.toString("ascii", 4, 8), "ftyp", `${paper.summaryAudio} should be an MP4/M4A media file`);
  }
});

test("backlog entries aied-038 through aied-047 have non-empty local M4A audio", () => {
  const backlog = getResearchPapers("en").filter((paper) => {
    const id = Number.parseInt(paper.id.replace("aied-", ""), 10);
    return id >= 38 && id <= 47;
  });

  assert.equal(backlog.length, 10);
  for (const paper of backlog) {
    assert.ok(paper.summaryAudio, `${paper.id} should declare summary audio`);
    const audioBuffer = readFileSync(localPublicPath(paper.summaryAudio));
    assert.equal(audioBuffer.toString("ascii", 4, 8), "ftyp", `${paper.summaryAudio} should be an M4A file`);
    assert.ok(audioBuffer.byteLength > 100_000, `${paper.summaryAudio} should contain audible narration`);
  }
});

test("reviewed papers use human-reviewed translations when present and fall back to English otherwise", () => {
  const enById = new Map(getResearchPapers("en").map((paper) => [paper.id, paper]));
  const zhHant = getResearchPapers("zh-hant");
  const zhById = new Map(zhHant.map((paper) => [paper.id, paper]));

  // aied-025 has a reviewed Traditional Chinese translation.
  const translated = zhById.get("aied-025");
  assert.ok(translated);
  assert.match(translated.title, /新聞/, "translated title should be in Traditional Chinese");
  assert.notEqual(translated.title, enById.get("aied-025")?.title);
  assert.notEqual(translated.fullSummary, enById.get("aied-025")?.fullSummary);
  assert.notEqual(translated.whyItMatters, enById.get("aied-025")?.whyItMatters);

  // A paper without a translation keeps its English content (never a stale mock title).
  const untranslated = zhById.get("aied-024");
  assert.ok(untranslated);
  assert.equal(untranslated.title, enById.get("aied-024")?.title, "untranslated paper should keep its English title");
  assert.doesNotMatch(untranslated.title, /面向課堂/, "must not resurrect stale rp-* mock titles");
});
