import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { getAcademyLessons } from "@/lib/academy-data";

const projectRoot = process.cwd();
const pngSignature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const ownerRejectedImageHashes = new Set([
  "c617fd26e1d64c6f88ce3c42c4f66a83a9bc66b9a484e600d49a010f8f0855cb",
  "e47d37de4a1dc8ef44546afc17cdc0b691c3ffa919aeb7597387f3c9cffa72db",
  "375d7ac2bcf129cbdc98d5862b74961286782bc5d3ad0441bbbe631847bd01e7",
  "955e2d13ddf090c4b4f5b92560a4b6a55afedc91d0ed3a9318cb9ed20e1102b0",
  "c6356b43fe64de63fb83ad1f4253b1e21c508b456bb143b5c8d8ec71d1e52c76",
]);

function publicFile(assetPath: string) {
  assert.ok(assetPath.startsWith("/"), `expected a root-relative asset path: ${assetPath}`);
  return path.join(projectRoot, "public", assetPath.slice(1));
}

test("Academy lessons directly reference at least seventy valid, distinct 1600x1000 PNG images", async () => {
  const lessons = getAcademyLessons("en");
  assert.ok(lessons.length >= 70);

  const hashes = new Set<string>();
  for (const lesson of lessons) {
    const assetPath = lesson.image;
    assert.ok(assetPath, `${lesson.id} must directly reference one lesson image`);
    assert.ok(assetPath.startsWith("/images/academy/covers/"), `${assetPath} must stay in /images/academy/covers/`);
    assert.equal(path.extname(assetPath), ".png");
    assert.ok(path.basename(assetPath).includes(lesson.id), `${assetPath} must contain ${lesson.id}`);

    const bytes = await readFile(publicFile(assetPath));
    assert.ok(bytes.subarray(0, 8).equals(pngSignature), `${assetPath} must have a PNG signature`);
    assert.equal(bytes.subarray(12, 16).toString("ascii"), "IHDR", `${assetPath} must begin with IHDR`);

    const width = bytes.readUInt32BE(16);
    const height = bytes.readUInt32BE(20);
    assert.equal(width, 1600, `${assetPath} width must be normalized to 1600`);
    assert.equal(height, 1000, `${assetPath} height must be normalized to 1000`);

    const hash = createHash("sha256").update(bytes).digest("hex");
    assert.ok(
      !ownerRejectedImageHashes.has(hash),
      `${assetPath} is an owner-rejected plain-classroom Academy image and must be replaced`
    );
    hashes.add(hash);
  }

  assert.equal(hashes.size, lessons.length, "all Academy lesson images must have unique SHA-256 hashes");
});

test("Academy keeps sixteen retired summary images as unassigned future-cover inventory", async () => {
  const lessons = getAcademyLessons("en");
  const activeHashes = new Set<string>();
  for (const lesson of lessons) {
    const bytes = await readFile(publicFile(lesson.image));
    activeHashes.add(createHash("sha256").update(bytes).digest("hex"));
  }

  const inventoryDirectory = path.join(projectRoot, "public/images/academy/summary");
  const inventoryNames = (await readdir(inventoryDirectory)).filter((name) => name.endsWith(".png")).sort();
  assert.equal(inventoryNames.length, 16, "all retired second-detail images must remain available for future lessons");

  const inventoryHashes = new Set<string>();
  for (const name of inventoryNames) {
    const assetPath = `/images/academy/summary/${name}`;
    const bytes = await readFile(publicFile(assetPath));
    assert.ok(bytes.subarray(0, 8).equals(pngSignature), `${assetPath} must have a PNG signature`);
    assert.equal(bytes.readUInt32BE(16), 1600, `${assetPath} width must stay normalized to 1600`);
    assert.equal(bytes.readUInt32BE(20), 1000, `${assetPath} height must stay normalized to 1000`);

    const hash = createHash("sha256").update(bytes).digest("hex");
    assert.equal(activeHashes.has(hash), false, `${assetPath} must remain unassigned by current lessons`);
    inventoryHashes.add(hash);
  }

  assert.equal(inventoryHashes.size, 16, "future-cover inventory images must remain visually distinct");
});

test("Academy lessons directly reference at least seventy valid local M4A narrations", async () => {
  const lessons = getAcademyLessons("en");
  assert.ok(lessons.length >= 70);
  const hashes = new Set<string>();

  for (const lesson of lessons) {
    const assetPath = lesson.summaryAudio;
    assert.ok(assetPath, `${lesson.id} must directly reference a summary narration`);
    assert.ok(assetPath.startsWith("/audio/academy/"), `${assetPath} must stay in /audio/academy/`);
    assert.equal(path.extname(assetPath), ".m4a");
    assert.ok(path.basename(assetPath).includes(lesson.id), `${assetPath} must contain ${lesson.id}`);

    const bytes = await readFile(publicFile(assetPath));
    assert.ok(bytes.length > 10_000, `${assetPath} must contain nontrivial audio`);
    assert.equal(bytes.subarray(4, 8).toString("ascii"), "ftyp", `${assetPath} must have an ISO base media ftyp header`);
    assert.ok(bytes.includes(Buffer.from("mdat")), `${assetPath} must contain an MP4 media-data atom`);
    hashes.add(createHash("sha256").update(bytes).digest("hex"));
  }

  assert.equal(hashes.size, lessons.length, "all Academy narrations must have unique SHA-256 hashes");
});
