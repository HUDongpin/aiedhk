import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
import { getResearchPapers } from "@/lib/research-data";

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function readableSvgText(svg: string) {
  return Array.from(svg.matchAll(/<(?:title|desc|text|tspan)\b[^>]*>([\s\S]*?)<\/(?:title|desc|text|tspan)>/g))
    .map(([, content]) => content.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .join("\n");
}

function familyName(author: string) {
  return author.trim().split(/\s+/).at(-1)?.replace(/[.,]/g, "") ?? author;
}

function numericSvgAttribute(tag: string, name: string) {
  const match = tag.match(new RegExp(`\\b${name}="([\\d.]+)"`));
  assert.ok(match, `${tag} should include a numeric ${name} attribute`);
  return Number(match[1]);
}

function textCoordinates(svg: string, text: string) {
  return Array.from(svg.matchAll(/<text\b([^>]*)>([^<]+)<\/text>/g))
    .filter(([, , content]) => content.trim() === text)
    .map(([, attributes]) => ({
      x: numericSvgAttribute(attributes, "x"),
      y: numericSvgAttribute(attributes, "y"),
    }));
}

function nodeTextBox(svg: string, text: string) {
  const match = Array.from(svg.matchAll(/<text\b([^>]*)>([^<]+)<\/text>/g)).find(
    ([, attributes, content]) => content.trim() === text && numericSvgAttribute(attributes, "y") < 640
  );

  assert.ok(match, `network cover should include a ${text} node label`);

  const [, attributes] = match;
  const x = numericSvgAttribute(attributes, "x");
  const y = numericSvgAttribute(attributes, "y");
  const width = text.length * 8;
  const anchor = attributes.match(/\btext-anchor="([^"]+)"/)?.[1] ?? "start";
  const left = anchor === "middle" ? x - width / 2 : anchor === "end" ? x - width : x;

  return {
    text,
    left,
    right: left + width,
    top: y - 14,
    bottom: y + 4,
    x,
    y,
  };
}

function textBoxesOverlap(a: ReturnType<typeof nodeTextBox>, b: ReturnType<typeof nodeTextBox>, padding = 8) {
  return !(a.right + padding < b.left || b.right + padding < a.left || a.bottom + padding < b.top || b.bottom + padding < a.top);
}

function distance(x1: number, y1: number, x2: number, y2: number) {
  return Math.hypot(x1 - x2, y1 - y2);
}

test("research news fallback contains ten reviewed AIED papers", () => {
  const papers = getResearchPapers("en");

  assert.equal(papers.length, 10);
  assert.equal(papers[0]?.slug, "systematic-review-ai-applications-higher-education-where-are-the-educators");
  assert.ok(papers.every((paper) => !paper.sourceUrl.includes("example.com")));
  assert.ok(papers.every((paper) => paper.fullSummary.split(/\s+/).length >= 450));
});

test("each reviewed paper has a local academic cover asset", () => {
  const papers = getResearchPapers("en");

  for (const paper of papers) {
    assert.match(paper.image, /^\/images\/research\/covers\/.+\.svg$/);
    assert.ok(existsSync(join(process.cwd(), "public", paper.image)), `${paper.image} should exist`);
  }
});

test("reviewed paper covers use full-bleed visualization poster artwork", () => {
  const papers = getResearchPapers("en");

  for (const paper of papers) {
    const svg = readFileSync(join(process.cwd(), "public", paper.image), "utf8");

    assert.match(svg, /viewBox="0 0 1600 1000"/, `${paper.image} should keep the cover canvas`);
    assert.match(svg, /research-visualization-poster/, `${paper.image} should use the visualization poster treatment`);
    assert.doesNotMatch(svg, /clean-title-cover|graph-free/, `${paper.image} should not use the old title-panel treatment`);
  }
});

test("reviewed paper covers keep only visualization text and omit bibliographic text", () => {
  const papers = getResearchPapers("en");

  for (const paper of papers) {
    const svg = readFileSync(join(process.cwd(), "public", paper.image), "utf8");
    const readableText = readableSvgText(svg);
    const titleLead = paper.title.split(/[?:.]/)[0]?.trim();

    if (titleLead && titleLead.length > 12) {
      assert.doesNotMatch(
        readableText,
        new RegExp(escapeRegExp(titleLead), "i"),
        `${paper.image} should not repeat the paper title in the cover artwork`
      );
    }

    for (const author of paper.authors) {
      const surname = familyName(author);
      assert.doesNotMatch(
        readableText,
        new RegExp(`(^|[^A-Za-z])${escapeRegExp(surname)}([^A-Za-z]|$)`),
        `${paper.image} should not include author text in the cover artwork`
      );
    }

    assert.ok(!readableText.includes(paper.venue), `${paper.image} should not include venue text in the cover artwork`);
    assert.doesNotMatch(readableText, /RESEARCH SIGNALS/, `${paper.image} should not include the old metadata signal block`);
  }
});

test("reviewed paper covers use refined editorial science illustration layers", () => {
  const papers = getResearchPapers("en");
  const oldFigureHeadings =
    /EVIDENCE LANDSCAPE|CLASSROOM MODEL WORKFLOW|APPLICATION TAXONOMY|INTELLIGENT TUTORING LOOP|LEARNING TRACE MINING|MASTERY PROBABILITY TRACE|COMPARATIVE EFFECT FIGURE|MODEL TRACING SEQUENCE|HIGHER EDUCATION FIELD MAP|AIED ROLE TRIANGLE/i;
  const oldFigureDecks =
    /Clustered reading of AIED application areas|A language model becomes educational infrastructure|AIED applications are arranged|A tutor coordinates domain knowledge|Trace data becomes useful|Bayesian learner modeling|Tutoring evidence is easier to read|Cognitive tutor logic|Research activity is organized|Roles, settings, and research issues/i;

  for (const paper of papers) {
    const svg = readFileSync(join(process.cwd(), "public", paper.image), "utf8");
    const readableText = readableSvgText(svg);
    const panelTag = svg.match(/<rect\b[^>]*data-role="figure-panel"[^>]*>/)?.[0];
    const primaryVisualTransform = svg.match(
      /<g\b[^>]*data-role="primary-visual"[^>]*transform="translate\(([-\d.]+) ([-\d.]+)\) scale\(([\d.]+)\)"/
    );

    assert.match(svg, /data-style="editorial-science"/, `${paper.image} should use the refined science editorial cover style`);
    assert.doesNotMatch(svg, /data-role="micro-chart"/, `${paper.image} should not include the bottom micro-chart strip`);
    assert.doesNotMatch(svg, /data-role="legend"/, `${paper.image} should not include the right-side figure key`);
    assert.doesNotMatch(svg, /data-role="callout"/, `${paper.image} should not include right-side explanatory callouts`);
    assert.doesNotMatch(readableText, /FIGURE KEY/i, `${paper.image} should not include the old figure key label`);
    assert.doesNotMatch(readableText, oldFigureHeadings, `${paper.image} should not include the old figure heading`);
    assert.doesNotMatch(readableText, oldFigureDecks, `${paper.image} should not include the old figure deck text`);
    assert.doesNotMatch(readableText, /REVIEW MAP|AIED TAXONOMY|EDUCATOR GAP/, `${paper.image} should not use the old bubble diagram labels`);
    assert.ok(panelTag, `${paper.image} should mark the expanded figure panel`);
    assert.ok(numericSvgAttribute(panelTag, "y") <= 140, `${paper.image} should move the figure upward after removing the title`);
    assert.ok(numericSvgAttribute(panelTag, "width") >= 1280, `${paper.image} should stretch the figure panel horizontally`);
    assert.ok(numericSvgAttribute(panelTag, "height") >= 700, `${paper.image} should stretch the figure panel vertically`);
    assert.ok(primaryVisualTransform, `${paper.image} should scale and position the primary visual explicitly`);
    assert.ok(Number(primaryVisualTransform[1]) <= -220, `${paper.image} should bias the enlarged visual left for the card crop`);
    assert.ok(Number(primaryVisualTransform[3]) >= 1.55, `${paper.image} should enlarge the graph inside the cover`);
  }
});

test("network cover positions the prediction node label in the right-side open area", () => {
  const paper = getResearchPapers("en").find((item) => item.image.includes("aied-001"));
  assert.ok(paper, "the reviewed paper set should include the network cover");

  const svg = readFileSync(join(process.cwd(), "public", paper.image), "utf8");
  const nodeLabel = textCoordinates(svg, "prediction").find(({ y }) => y < 640);

  assert.ok(nodeLabel, "network cover should include a prediction node label");
  assert.ok(nodeLabel.x >= 860, "the prediction node label should sit in the right-side open area");
  assert.ok(nodeLabel.x <= 930, "the prediction node label should stay inside the right-side open area");
});

test("network cover keeps node labels away from collisions and panel edges", () => {
  const paper = getResearchPapers("en").find((item) => item.image.includes("aied-001"));
  assert.ok(paper, "the reviewed paper set should include the network cover");

  const svg = readFileSync(join(process.cwd(), "public", paper.image), "utf8");
  const nodeLabels = ["assessment", "prediction", "tutoring", "adaptive", "ethics", "feedback", "admin", "analytics", "student"];
  const nodeTextBoxes = nodeLabels.map((label) => nodeTextBox(svg, label));

  for (const labelBox of nodeTextBoxes) {
    assert.ok(labelBox.left >= 210, `${labelBox.text} node label should not overflow the left side of the figure`);
    assert.ok(labelBox.right <= 980, `${labelBox.text} node label should not overflow the right side of the figure`);
    assert.ok(labelBox.top >= 250, `${labelBox.text} node label should not overflow the top of the figure`);
    assert.ok(labelBox.bottom <= 624, `${labelBox.text} node label should not overflow the bottom of the figure`);
    assert.ok(
      distance(labelBox.x, labelBox.y, 568, 442) >= 92,
      `${labelBox.text} node label should not collide with the central pedagogy lens label`
    );
  }

  for (let index = 0; index < nodeTextBoxes.length; index += 1) {
    for (let nextIndex = index + 1; nextIndex < nodeTextBoxes.length; nextIndex += 1) {
      const a = nodeTextBoxes[index];
      const b = nodeTextBoxes[nextIndex];
      assert.ok(!textBoxesOverlap(a, b), `${a.text} node label should not collide with ${b.text}`);
    }
  }
});

test("untranslated locales keep reviewed English paper titles instead of stale mock titles", () => {
  const papers = getResearchPapers("zh-hant");

  assert.equal(papers[0]?.title, "Systematic review of research on artificial intelligence applications in higher education: where are the educators?");
});
