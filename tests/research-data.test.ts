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

test("research news fallback contains one hundred nine curated Research News items", () => {
  const papers = getResearchPapers("en");

  assert.equal(papers.length, 109);
  assert.equal(papers[0]?.slug, "news-concise-output-style-gateway-cache-control");
  assert.ok(papers.every((paper) => !paper.sourceUrl.includes("example.com")));
  assert.ok(papers.every((paper) => paper.fullSummary.split(/\s+/).length >= 430));
});

test("the thirty-six-date backlog contains exactly one research paper and one clearly labeled product-news item per day", () => {
  const papers = getResearchPapers("en");
  const expectedByDate = new Map([
    ["2026-08-21", ["aied-108", "aied-109"]],
    ["2026-08-20", ["aied-106", "aied-107"]],
    ["2026-08-19", ["aied-096", "aied-097"]],
    ["2026-08-18", ["aied-104", "aied-105"]],
    ["2026-08-17", ["aied-102", "aied-103"]],
    ["2026-08-16", ["aied-094", "aied-095"]],
    ["2026-08-15", ["aied-100", "aied-101"]],
    ["2026-08-14", ["aied-092", "aied-093"]],
    ["2026-08-13", ["aied-090", "aied-091"]],
    ["2026-08-12", ["aied-088", "aied-089"]],
    ["2026-08-11", ["aied-098", "aied-099"]],
    ["2026-08-10", ["aied-086", "aied-087"]],
    ["2026-08-09", ["aied-054", "aied-055"]],
    ["2026-08-08", ["aied-052", "aied-053"]],
    ["2026-08-07", ["aied-050", "aied-051"]],
    ["2026-08-06", ["aied-068", "aied-069"]],
    ["2026-08-05", ["aied-066", "aied-067"]],
    ["2026-08-04", ["aied-064", "aied-065"]],
    ["2026-08-03", ["aied-062", "aied-063"]],
    ["2026-08-02", ["aied-060", "aied-061"]],
    ["2026-08-01", ["aied-058", "aied-059"]],
    ["2026-07-31", ["aied-056", "aied-057"]],
    ["2026-07-18", ["aied-084", "aied-085"]],
    ["2026-07-16", ["aied-082", "aied-083"]],
    ["2026-07-14", ["aied-080", "aied-081"]],
    ["2026-07-12", ["aied-078", "aied-079"]],
    ["2026-07-11", ["aied-076", "aied-077"]],
    ["2026-07-09", ["aied-074", "aied-075"]],
    ["2026-07-08", ["aied-072", "aied-073"]],
    ["2026-07-07", ["aied-070", "aied-071"]],
    ["2026-07-22", ["aied-040", "aied-041"]],
    ["2026-07-26", ["aied-038", "aied-039"]],
    ["2026-07-27", ["aied-042", "aied-043"]],
    ["2026-07-28", ["aied-044", "aied-045"]],
    ["2026-07-29", ["aied-046", "aied-047"]],
    ["2026-07-30", ["aied-048", "aied-049"]],
  ]);

  for (const [date, expectedIds] of expectedByDate) {
    const entries = papers.filter((paper) => paper.createdAt === date);
    assert.deepEqual(entries.map((paper) => paper.id).sort(), expectedIds);
    for (const paper of entries) {
      const wordCount = paper.fullSummary.trim().split(/\s+/).length;
      if (paper.id === "aied-038" || paper.id === "aied-039") {
        assert.ok(wordCount >= 700, `${paper.id} should preserve its already-published long-form report`);
      } else {
        assert.ok(wordCount >= 480 && wordCount <= 600, `${paper.id} should keep the 500-word detail-page contract`);
      }
    }

    const productNews = entries.filter((paper) => paper.type === "policy-ethics");
    const research = entries.filter((paper) => paper.type !== "policy-ethics");
    assert.equal(productNews.length, 1, `${date} should contain one product-news item`);
    assert.equal(research.length, 1, `${date} should contain one research paper`);
    assert.match(
      `${productNews[0]?.title} ${productNews[0]?.tags.join(" ")}`,
      /product news/i,
      `${date} product news should be explicitly labeled`,
    );
  }
});

test("backlog identifiers aied-038 through aied-109 are continuous and non-duplicated", () => {
  const ids = getResearchPapers("en")
    .map((paper) => Number.parseInt(paper.id.replace("aied-", ""), 10))
    .filter((id) => id >= 38 && id <= 109)
    .sort((a, b) => a - b);

  assert.deepEqual(ids, Array.from({ length: 72 }, (_, index) => index + 38));
});

test("reviewed Research News keeps identifiers, slugs, media paths, and primary sources unique", () => {
  const papers = getResearchPapers("en");
  const fields = [
    ["id", papers.map((paper) => paper.id)],
    ["slug", papers.map((paper) => paper.slug)],
    ["cover", papers.map((paper) => paper.image)],
    ["summary image", papers.map((paper) => paper.summaryImage)],
    ["summary audio", papers.map((paper) => paper.summaryAudio)],
    ["primary source", papers.map((paper) => paper.sourceUrl)],
  ] as const;

  for (const [label, values] of fields) {
    assert.ok(values.every(Boolean), `${label} values must be present`);
    assert.equal(new Set(values).size, papers.length, `${label} values must be unique`);
  }
});

test("July 31 through August 6 backfill keeps its reviewed date, type, and primary source manifest", () => {
  const byId = new Map(getResearchPapers("en").map((paper) => [paper.id, paper]));
  const expected = [
    ["aied-056", "2026-07-31", "journal", "https://doi.org/10.1073/pnas.2422633122"],
    ["aied-057", "2026-07-31", "policy-ethics", "https://news.microsoft.com/source/asia/features/microsoft-elevate-for-educators-korea-2026-en/"],
    ["aied-058", "2026-08-01", "journal", "https://arxiv.org/abs/2410.03017"],
    ["aied-059", "2026-08-01", "policy-ethics", "https://workspaceupdates.googleblog.com/2026/07/expanded-language-support-for-gemini-in-Google-Docs.html"],
    ["aied-060", "2026-08-02", "journal", "https://doi.org/10.1186/s40561-025-00385-2"],
    ["aied-061", "2026-08-02", "policy-ethics", "https://digital-strategy.ec.europa.eu/en/news/commission-publishes-guidelines-transparency-obligations-providers-and-deployers-certain-ai-systems"],
    ["aied-062", "2026-08-03", "journal", "https://doi.org/10.1186/s40594-025-00574-y"],
    ["aied-063", "2026-08-03", "policy-ethics", "https://workspaceupdates.googleblog.com/2026/07/new-google-meet-take-notes-for-me-settings-for-admins-and-end-users.html"],
    ["aied-064", "2026-08-04", "journal", "https://doi.org/10.1007/s11528-025-01123-8"],
    ["aied-065", "2026-08-04", "policy-ethics", "https://openai.com/index/learn-teach-chatgpt-work-codex/"],
    ["aied-066", "2026-08-05", "conference", "https://aclanthology.org/2025.naacl-industry.62/"],
    ["aied-067", "2026-08-05", "policy-ethics", "https://workspaceupdates.googleblog.com/2026/07/use-gemini-in-google-forms-to-quickly-create-a-new-quiz.html"],
    ["aied-068", "2026-08-06", "journal", "https://cepr.org/publications/dp21577"],
    ["aied-069", "2026-08-06", "policy-ethics", "https://openai.com/index/improving-gpt-5-6-sol-in-chatgpt/"],
  ] as const;

  for (const [id, createdAt, type, sourceUrl] of expected) {
    assert.deepEqual(
      { createdAt: byId.get(id)?.createdAt, type: byId.get(id)?.type, sourceUrl: byId.get(id)?.sourceUrl },
      { createdAt, type, sourceUrl },
    );
  }
});

test("July 7 through July 18 backfill keeps its reviewed date, type, and primary source manifest", () => {
  const byId = new Map(getResearchPapers("en").map((paper) => [paper.id, paper]));
  const expected = [
    ["aied-070", "2026-07-07", "journal", "https://doi.org/10.3390/educsci16071087"],
    [
      "aied-071",
      "2026-07-07",
      "policy-ethics",
      "https://blogs.microsoft.com/on-the-issues/2026/07/07/new-cohort-of-ai-economy-institute-fellows-to-examine-frontier-ai-firms-and-the-transformation-of-work/",
    ],
    ["aied-072", "2026-07-08", "journal", "https://doi.org/10.1002/tesq.70184"],
    [
      "aied-073",
      "2026-07-08",
      "policy-ethics",
      "https://www.microsoft.com/en-us/education/blog/2026/07/6-key-takeaways-from-iste-2026-how-educators-are-applying-ai-in-the-classroom/",
    ],
    ["aied-074", "2026-07-09", "review", "https://doi.org/10.1007/s44217-026-01872-5"],
    [
      "aied-075",
      "2026-07-09",
      "policy-ethics",
      "https://blogs.microsoft.com/on-the-issues/2026/07/09/responsibly-building-the-ai-future/",
    ],
    ["aied-076", "2026-07-11", "journal", "https://doi.org/10.1007/s10639-026-14082-1"],
    [
      "aied-077",
      "2026-07-11",
      "policy-ethics",
      "https://iite.unesco.org/announcements/call-for-proposals-technical-services-for-the-development-of-a-new-multilingual-ai-enabled-chatbot-with-an-embedded-prompt-optimization-tool-and-the-consolidation-of-oilo-and-aspan-chatbots-on-a-share/",
    ],
    ["aied-078", "2026-07-12", "review", "https://doi.org/10.1080/2331186X.2026.2696619"],
    [
      "aied-079",
      "2026-07-12",
      "policy-ethics",
      "https://www.gov.uk/guidance/data-protection-in-schools/procuring-educational-technology-edtech",
    ],
    ["aied-080", "2026-07-14", "journal", "https://doi.org/10.3390/educsci16071123"],
    [
      "aied-081",
      "2026-07-14",
      "policy-ethics",
      "https://blog.google/products-and-platforms/products/chrome/were-expanding-gemini-in-chrome-to-users-in-the-uk/",
    ],
    ["aied-082", "2026-07-16", "journal", "https://doi.org/10.3390/systems14070846"],
    [
      "aied-083",
      "2026-07-16",
      "policy-ethics",
      "https://www.moe.gov.cn/jyb_xwfb/gzdt_gzdt/s5987/202607/t20260715_1443823.html",
    ],
    ["aied-084", "2026-07-18", "journal", "https://doi.org/10.3390/bs16071221"],
    [
      "aied-085",
      "2026-07-18",
      "policy-ethics",
      "https://www.moe.gov.cn/jyb_zzjg/huodong/202607/t20260718_1444258.html",
    ],
  ] as const;

  for (const [id, createdAt, type, sourceUrl] of expected) {
    assert.deepEqual(
      { createdAt: byId.get(id)?.createdAt, type: byId.get(id)?.type, sourceUrl: byId.get(id)?.sourceUrl },
      { createdAt, type, sourceUrl },
    );
  }
});

test("July 30 Research News entries retain their reviewed type, date, and canonical source", () => {
  const byId = new Map(getResearchPapers("en").map((paper) => [paper.id, paper]));

  assert.deepEqual(
    {
      type: byId.get("aied-048")?.type,
      createdAt: byId.get("aied-048")?.createdAt,
      sourceUrl: byId.get("aied-048")?.sourceUrl,
    },
    { type: "journal", createdAt: "2026-07-30", sourceUrl: "https://doi.org/10.3390/bs16071114" },
  );
  assert.deepEqual(
    {
      type: byId.get("aied-049")?.type,
      createdAt: byId.get("aied-049")?.createdAt,
      sourceUrl: byId.get("aied-049")?.sourceUrl,
    },
    {
      type: "policy-ethics",
      createdAt: "2026-07-30",
      sourceUrl: "https://openai.com/index/k-12-educators-practical-skills/",
    },
  );
});

test("July 26 Research News retains the already-published evidence and product scope", () => {
  const byId = new Map(getResearchPapers("en").map((paper) => [paper.id, paper]));
  const motivationReview = byId.get("aied-038");
  const crossDeviceReport = byId.get("aied-039");

  assert.equal(motivationReview?.createdAt, "2026-07-26");
  assert.ok((motivationReview?.fullSummary.trim().split(/\s+/).length ?? 0) >= 700);
  assert.equal(motivationReview?.summaryAudioTitle, "Listen to the paper summary");
  assert.equal(crossDeviceReport?.createdAt, "2026-07-26");
  assert.deepEqual(crossDeviceReport?.authors, ["OpenAI", "Anthropic", "Google for Education"]);
  assert.ok(crossDeviceReport?.sourceUrls?.some(({ url }) => url.includes("blog.google")));
});

test("the ChatGPT learning-outcomes meta-analysis keeps its canonical DOI", () => {
  const paper = getResearchPapers("en").find((candidate) => candidate.id === "aied-046");

  assert.equal(paper?.sourceUrl, "https://doi.org/10.1057/s41599-026-07019-z");
  assert.ok(
    paper?.sourceUrls?.some(({ url }) => url === "https://doi.org/10.1057/s41599-026-07019-z"),
  );
});

test("Research News keeps original scheduled dates in descending order instead of update time", () => {
  const timestamps = getResearchPapers("en").map((paper) => new Date(paper.createdAt).getTime());

  for (let index = 1; index < timestamps.length; index += 1) {
    assert.ok(
      timestamps[index - 1] >= timestamps[index],
      `item ${index + 1} must not appear ahead of an item with a later scheduled date`,
    );
  }
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

test("News hero and summary use separate id-aligned paths for the same bitmap, while master visuals stay unique across articles", () => {
  const papers = getResearchPapers("en");
  const heroHashes = new Set<string>();

  for (const paper of papers) {
    assert.ok(paper.summaryImage);
    assert.ok(paper.image.includes(paper.id), `${paper.image} should include ${paper.id}`);
    assert.ok(paper.summaryImage.includes(paper.id), `${paper.summaryImage} should include ${paper.id}`);
    const coverPath = localPublicPath(paper.image);
    const summaryPath = localPublicPath(paper.summaryImage);
    assert.equal(fileHash(coverPath), fileHash(summaryPath), `${paper.id} hero and summary must be the same visual`);
    assert.equal(paper.summaryImageAlt, paper.imageAlt, `${paper.id} alt text must describe the shared visual`);
    heroHashes.add(fileHash(coverPath));
  }
  assert.equal(heroHashes.size, papers.length, "each article must retain a unique master visual");
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
      "aied-109",
      "aied-108",
      "aied-107",
      "aied-106",
      "aied-097",
      "aied-096",
      "aied-105",
      "aied-104",
      "aied-103",
      "aied-102",
      "aied-095",
      "aied-094",
      "aied-101",
      "aied-100",
      "aied-093",
      "aied-092",
      "aied-091",
      "aied-090",
      "aied-089",
      "aied-088",
      "aied-099",
      "aied-098",
      "aied-087",
      "aied-086",
      "aied-055",
      "aied-054",
      "aied-053",
      "aied-052",
      "aied-051",
      "aied-050",
      "aied-069",
      "aied-068",
      "aied-067",
      "aied-066",
      "aied-065",
      "aied-064",
      "aied-063",
      "aied-062",
      "aied-061",
      "aied-060",
      "aied-059",
      "aied-058",
      "aied-057",
      "aied-056",
      "aied-049",
      "aied-048",
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
      "aied-085",
      "aied-084",
      "aied-025",
      "aied-024",
      "aied-083",
      "aied-082",
      "aied-023",
      "aied-022",
      "aied-081",
      "aied-080",
      "aied-021",
      "aied-020",
      "aied-079",
      "aied-078",
      "aied-077",
      "aied-076",
      "aied-019",
      "aied-075",
      "aied-074",
      "aied-073",
      "aied-072",
      "aied-071",
      "aied-070",
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

test("backlog entries aied-038 through aied-109 have non-empty local M4A audio", () => {
  const backlog = getResearchPapers("en").filter((paper) => {
    const id = Number.parseInt(paper.id.replace("aied-", ""), 10);
    return id >= 38 && id <= 109;
  });

  assert.equal(backlog.length, 72);
  const hashes = new Set<string>();
  for (const paper of backlog) {
    assert.ok(paper.summaryAudio, `${paper.id} should declare summary audio`);
    const audioBuffer = readFileSync(localPublicPath(paper.summaryAudio));
    assert.equal(audioBuffer.toString("ascii", 4, 8), "ftyp", `${paper.summaryAudio} should be an M4A file`);
    assert.ok(audioBuffer.includes(Buffer.from("mdat")), `${paper.summaryAudio} should contain an MP4 media-data atom`);
    assert.ok(audioBuffer.byteLength > 100_000, `${paper.summaryAudio} should contain audible narration`);
    hashes.add(createHash("sha256").update(audioBuffer).digest("hex"));
  }
  assert.equal(hashes.size, 72, "all backlog narrations must have unique SHA-256 hashes");
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
