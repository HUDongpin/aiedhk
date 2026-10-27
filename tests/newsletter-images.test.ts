import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdtemp, mkdir, readFile, readdir, rm, writeFile, stat } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import sharp from "sharp";
import { reviewedResearchPapers } from "@/lib/research-reviewed-data";
import { getAcademyLessons } from "@/lib/academy-data";
import additionalSources from "@/lib/newsletter/additional-image-sources.json";
import { newsletterImageManifest, resolveNewsletterImage } from "@/lib/newsletter/images";
import { prepareNewsletterImages, type NewsletterImageSource } from "../scripts/prepare-newsletter-images";

const sha256 = (bytes: Buffer) => createHash("sha256").update(bytes).digest("hex");
const manifestFile = (root: string) => join(root, "lib/newsletter/image-manifest.json");
const sources: NewsletterImageSource[] = [{ channel: "news", id: "fixture", sourcePath: "/images/source.png" }];

async function fixture() {
  const root = await mkdtemp(join(tmpdir(), "newsletter-images-"));
  await mkdir(join(root, "public/images"), { recursive: true });
  await writeFile(join(root, "public/images/source.png"), await sharp({ create: { width: 1800, height: 900, channels: 3, background: "#b66729" } }).png().toBuffer());
  return root;
}

test("published sources have complete, current encoded JPEG coverage", async () => {
  const result = await prepareNewsletterImages({ rootDir: process.cwd(), check: true });
  assert.equal(result.sources, reviewedResearchPapers.length + getAcademyLessons("en").length + additionalSources.length);
  assert.equal(Object.keys(newsletterImageManifest.images).length, result.sources);
  assert.ok(result.maxBytes <= 120000);
  for (const entry of Object.values(newsletterImageManifest.images)) {
    const bytes = await readFile(join(process.cwd(), "public", entry.path));
    const metadata = await sharp(bytes).metadata();
    assert.equal(metadata.format, "jpeg");
    assert.equal(entry.width, metadata.width);
    assert.equal(entry.height, metadata.height);
    assert.ok(Math.max(entry.width, entry.height) <= 720);
    assert.equal(bytes.length, entry.bytes);
    assert.ok(bytes.length <= 120000);
    assert.ok(entry.path.endsWith(`-${sha256(bytes)}.jpg`));
  }
});

test("resolution matches stable identity, channel and the current source without leaking diagnostics", () => {
  const paper = reviewedResearchPapers[0];
  const diagnostics = { missing: 0, sourceMismatch: 0, invalid: 0 };
  const actual = resolveNewsletterImage("news", paper, diagnostics);
  assert.ok(actual);
  assert.equal(actual.alt, paper.imageAlt);
  assert.equal(resolveNewsletterImage("academy", paper, diagnostics), undefined);
  assert.equal(resolveNewsletterImage("news", { ...paper, image: "https://example.test/private?token=DO_NOT_LOG" }, diagnostics), undefined);
  assert.equal(resolveNewsletterImage("news", { ...paper, image: "" }, diagnostics), undefined);
  assert.deepEqual(diagnostics, { missing: 1, sourceMismatch: 2, invalid: 0 });
  assert.equal(JSON.stringify(diagnostics).includes("DO_NOT_LOG"), false);
});

test("preparation is deterministic, never crops or inflates small images, and preserves old URLs", async () => {
  const root = await fixture();
  try {
    await prepareNewsletterImages({ rootDir: root, sources });
    const first = await readFile(manifestFile(root), "utf8");
    const entry = JSON.parse(first).images["news:fixture"];
    assert.equal(entry.width, 720);
    assert.equal(entry.height, 360);
    assert.ok(entry.bytes < 80000, "simple image is not padded to the size target");
    const asset = join(root, "public", entry.path);
    const originalBytes = await readFile(asset);
    const before = await stat(asset);
    await prepareNewsletterImages({ rootDir: root, sources });
    assert.equal(await readFile(manifestFile(root), "utf8"), first);
    assert.deepEqual(await readFile(asset), originalBytes);
    assert.equal((await stat(asset)).mtimeMs, before.mtimeMs, "same immutable file is not rewritten");
    await writeFile(join(root, "public/images/source.png"), await sharp({ create: { width: 900, height: 1800, channels: 3, background: "#3065b5" } }).png().toBuffer());
    await assert.rejects(prepareNewsletterImages({ rootDir: root, sources, check: true }), /newsletter_images_check_failed/);
    await prepareNewsletterImages({ rootDir: root, sources });
    const second = JSON.parse(await readFile(manifestFile(root), "utf8")).images["news:fixture"];
    assert.notEqual(second.path, entry.path);
    assert.equal(second.width, 360);
    assert.equal(second.height, 720);
    assert.deepEqual(await readFile(asset), originalBytes, "old email image URL remains byte-for-byte intact");
    assert.equal((await readdir(join(root, "public/images/newsletter"))).length, 2);
    const manifestBeforeCheck = await readFile(manifestFile(root), "utf8");
    await prepareNewsletterImages({ rootDir: root, sources, check: true });
    assert.equal(await readFile(manifestFile(root), "utf8"), manifestBeforeCheck);
  } finally { await rm(root, { recursive: true, force: true }); }
});

test("missing or unsafe sources fail preparation without publishing a partial manifest", async () => {
  const root = await fixture();
  try {
    await prepareNewsletterImages({ rootDir: root, sources });
    const before = await readFile(manifestFile(root), "utf8");
    for (const sourcePath of ["/images/missing.png", "/images/../../private.png", "/images//source.png", "https://example.test/asset?token=DO_NOT_LOG"]) {
      await assert.rejects(prepareNewsletterImages({ rootDir: root, sources: [{ ...sources[0], sourcePath }] }), (error: Error) => {
        assert.ok(!error.message.includes("DO_NOT_LOG"));
        return /newsletter_images_prepare_failed/.test(error.message);
      });
      assert.equal(await readFile(manifestFile(root), "utf8"), before);
    }
    const entry = JSON.parse(before).images["news:fixture"];
    await writeFile(join(root, "public", entry.path), "broken-jpeg");
    await assert.rejects(prepareNewsletterImages({ rootDir: root, sources, check: true }), /newsletter_images_check_failed/);
    assert.equal(await readFile(manifestFile(root), "utf8"), before);
  } finally { await rm(root, { recursive: true, force: true }); }
});
