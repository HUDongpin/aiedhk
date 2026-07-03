import assert from "node:assert/strict";
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

test("research news fallback contains sixteen curated Research News items", () => {
  const papers = getResearchPapers("en");

  assert.equal(papers.length, 16);
  assert.equal(papers[0]?.slug, "news-openai-chatgpt-education-opportunity-ai-capability-gap");
  assert.ok(papers.every((paper) => !paper.sourceUrl.includes("example.com")));
  assert.ok(papers.every((paper) => paper.fullSummary.split(/\s+/).length >= 430));
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

test("untranslated locales keep reviewed English paper titles instead of stale mock titles", () => {
  const papers = getResearchPapers("zh-hant");

  assert.equal(papers[0]?.title, "News: OpenAI frames ChatGPT Education as an AI opportunity and capability-gap strategy");
});
