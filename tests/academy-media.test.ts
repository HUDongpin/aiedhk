import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { getAcademyLessons } from "@/lib/academy-data";

const projectRoot = process.cwd();
const pngSignature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

function publicFile(assetPath: string) {
  assert.ok(assetPath.startsWith("/"), `expected a root-relative asset path: ${assetPath}`);
  return path.join(projectRoot, "public", assetPath.slice(1));
}

test("Academy lessons directly reference sixteen valid, distinct 1600x1000 PNG images", async () => {
  const lessons = getAcademyLessons("en");
  assert.equal(lessons.length, 8);

  const hashes = new Set<string>();
  for (const lesson of lessons) {
    const declaredImages = [
      { kind: "cover", assetPath: lesson.image, expectedDirectory: "/images/academy/covers/" },
      { kind: "summary", assetPath: lesson.summaryImage, expectedDirectory: "/images/academy/summary/" },
    ];

    for (const { kind, assetPath, expectedDirectory } of declaredImages) {
      assert.ok(assetPath, `${lesson.id} must directly reference a ${kind} image`);
      assert.ok(assetPath.startsWith(expectedDirectory), `${assetPath} must stay in ${expectedDirectory}`);
      assert.equal(path.extname(assetPath), ".png");
      assert.ok(path.basename(assetPath).includes(lesson.id), `${assetPath} must contain ${lesson.id}`);

      const bytes = await readFile(publicFile(assetPath));
      assert.ok(bytes.subarray(0, 8).equals(pngSignature), `${assetPath} must have a PNG signature`);
      assert.equal(bytes.subarray(12, 16).toString("ascii"), "IHDR", `${assetPath} must begin with IHDR`);

      const width = bytes.readUInt32BE(16);
      const height = bytes.readUInt32BE(20);
      assert.equal(width, 1600, `${assetPath} width must be normalized to 1600`);
      assert.equal(height, 1000, `${assetPath} height must be normalized to 1000`);

      hashes.add(createHash("sha256").update(bytes).digest("hex"));
    }
  }

  assert.equal(hashes.size, 16, "all Academy cover and summary images must have unique SHA-256 hashes");
});

test("Academy lessons directly reference eight valid local M4A narrations", async () => {
  const lessons = getAcademyLessons("en");
  assert.equal(lessons.length, 8);
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

  assert.equal(hashes.size, 8, "all Academy narrations must have unique SHA-256 hashes");
});
