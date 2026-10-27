import { createHash } from "node:crypto";
import { readFile, mkdir, realpath, rename, writeFile } from "node:fs/promises";
import { dirname, join, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { reviewedResearchPapers } from "../lib/research-reviewed-data";
import { getAcademyLessons } from "../lib/academy-data";
import type { NewsletterChannel } from "../lib/newsletter/types";
import type { NewsletterImageManifest, NewsletterImageManifestEntry } from "../lib/newsletter/images";

export interface NewsletterImageSource {
  channel: NewsletterChannel;
  id: string;
  sourcePath: string;
}

const MAX_EDGE = 720;
const MAX_BYTES = 120000;
const PROCESSOR = { version: 1, maxEdge: MAX_EDGE, maxBytes: MAX_BYTES, sharp: sharp.versions.sharp };
const sha256 = (bytes: Buffer) => createHash("sha256").update(bytes).digest("hex");
const keyFor = (source: NewsletterImageSource) => `${source.channel}:${source.id}`;
const outputPath = (source: NewsletterImageSource, hash: string) => `/images/newsletter/${source.channel}-${source.id}-${hash}.jpg`;
const manifestPath = (root: string) => join(root, "lib/newsletter/image-manifest.json");

function validSource(value: unknown): value is NewsletterImageSource {
  if (!value || typeof value !== "object") return false;
  const source = value as NewsletterImageSource;
  return (source.channel === "news" || source.channel === "academy")
    && typeof source.id === "string" && /^[a-z0-9][a-z0-9_-]{0,119}$/.test(source.id)
    && typeof source.sourcePath === "string" && /^\/images\/[a-zA-Z0-9/_.-]+$/.test(source.sourcePath)
    && !source.sourcePath.split("/").slice(1).some((segment) => !segment || segment === "." || segment === "..")
    && !source.sourcePath.startsWith("/images/newsletter/");
}

async function loadSources(root: string): Promise<NewsletterImageSource[]> {
  const additional: unknown = JSON.parse(await readFile(join(root, "lib/newsletter/additional-image-sources.json"), "utf8"));
  if (!Array.isArray(additional) || !additional.every(validSource)) throw new Error("invalid_source_catalog");
  return [
    ...reviewedResearchPapers.map((paper) => ({ channel: "news" as const, id: paper.contentId ?? paper.id, sourcePath: paper.image })),
    ...getAcademyLessons("en").map((lesson) => ({ channel: "academy" as const, id: lesson.id, sourcePath: lesson.image })),
    ...additional,
  ];
}

async function readSource(root: string, source: NewsletterImageSource): Promise<Buffer> {
  if (!validSource(source)) throw new Error("invalid_source");
  const publicRoot = await realpath(join(root, "public"));
  const path = await realpath(join(publicRoot, source.sourcePath));
  if (!path.startsWith(publicRoot + sep)) throw new Error("invalid_source_location");
  return readFile(path);
}

async function encode(bytes: Buffer): Promise<{ data: Buffer; width: number; height: number }> {
  // First prefer the full 720 px image; retain aspect ratio, never crop or enlarge.
  // Simple scenes can naturally be smaller than 80 KB: do not pad or add detail.
  for (const edge of [MAX_EDGE, 640, 560, 480, 400, 320]) {
    for (const quality of [88, 84, 80, 76, 72, 68, 64, 60]) {
      const { data, info } = await sharp(bytes).rotate()
        .resize({ width: edge, height: edge, fit: "inside", withoutEnlargement: true })
        .flatten({ background: "#ffffff" })
        .jpeg({ quality, mozjpeg: true, chromaSubsampling: "4:2:0" })
        .toBuffer({ resolveWithObject: true });
      if (data.length <= MAX_BYTES) return { data, width: info.width, height: info.height };
    }
  }
  throw new Error("image_size_limit");
}

async function readManifest(root: string): Promise<NewsletterImageManifest> {
  return JSON.parse(await readFile(manifestPath(root), "utf8")) as NewsletterImageManifest;
}

async function checkEntry(root: string, source: NewsletterImageSource, entry: NewsletterImageManifestEntry | undefined): Promise<void> {
  const original = await readSource(root, source);
  if (!entry || entry.sourcePath !== source.sourcePath || entry.sourceSha256 !== sha256(original)
    || !/^\/images\/newsletter\/[a-z0-9_-]+-[a-f0-9]{64}\.jpg$/.test(entry.path)) throw new Error("stale_mapping");
  const emitted = await readFile(join(root, "public", entry.path));
  const metadata = await sharp(emitted).metadata();
  if (entry.path !== outputPath(source, sha256(emitted)) || metadata.format !== "jpeg"
    || !metadata.width || !metadata.height || entry.width !== metadata.width || entry.height !== metadata.height
    || Math.max(entry.width, entry.height) > MAX_EDGE || emitted.length !== entry.bytes || entry.bytes > MAX_BYTES
    || metadata.exif || metadata.icc || metadata.xmp) throw new Error("invalid_derivative");
}

export async function prepareNewsletterImages(options: { rootDir: string; sources?: NewsletterImageSource[]; check?: boolean }) {
  const root = resolve(options.rootDir);
  const failure = options.check ? "newsletter_images_check_failed" : "newsletter_images_prepare_failed";
  let sources: NewsletterImageSource[];
  try {
    sources = options.sources ?? await loadSources(root);
    if (!sources.every(validSource) || new Set(sources.map(keyFor)).size !== sources.length) throw new Error("invalid_source_catalog");
    sources = [...sources].sort((a, b) => keyFor(a).localeCompare(keyFor(b), "en"));
  } catch { throw new Error(`${failure}: invalid_source_catalog`); }
  const manifest: NewsletterImageManifest = { schemaVersion: 1, processor: PROCESSOR, images: {} };
  let filesWritten = 0;
  let manifestChanged = false;
  let failures = 0;
  if (options.check) {
    let stored: NewsletterImageManifest;
    try {
      stored = await readManifest(root);
      if (stored.schemaVersion !== 1 || JSON.stringify(stored.processor) !== JSON.stringify(PROCESSOR)
        || !stored.images || Object.keys(stored.images).length !== sources.length) throw new Error("stale_manifest");
    } catch { throw new Error(`${failure}: invalid_manifest`); }
    for (const source of sources) {
      try {
        await checkEntry(root, source, stored.images[keyFor(source)]);
        manifest.images[keyFor(source)] = stored.images[keyFor(source)];
      } catch { failures++; }
    }
  } else {
    await mkdir(join(root, "public/images/newsletter"), { recursive: true });
    for (const source of sources) {
      try {
        const original = await readSource(root, source);
        const { data, width, height } = await encode(original);
        const path = outputPath(source, sha256(data));
        const target = join(root, "public", path);
        try {
          // Existing URLs are immutable, including derivatives no longer in the current manifest.
          await writeFile(target, data, { flag: "wx" });
          filesWritten++;
        } catch (error) {
          if ((error as NodeJS.ErrnoException).code !== "EEXIST" || !(await readFile(target)).equals(data)) throw new Error("immutable_asset_conflict");
        }
        manifest.images[keyFor(source)] = { sourcePath: source.sourcePath, sourceSha256: sha256(original), path, width, height, bytes: data.length };
      } catch { failures++; }
    }
    if (!failures) {
      const serialized = `${JSON.stringify(manifest, null, 2)}\n`;
      const existing = await readFile(manifestPath(root), "utf8").catch(() => "");
      if (serialized !== existing) {
        await mkdir(dirname(manifestPath(root)), { recursive: true });
        await writeFile(`${manifestPath(root)}.tmp`, serialized);
        await rename(`${manifestPath(root)}.tmp`, manifestPath(root));
        manifestChanged = true;
      }
    }
  }
  if (failures) throw new Error(`${failure}: ${failures} source(s) missing, stale or invalid; no source URLs logged`);
  const sizes = Object.values(manifest.images).map((entry) => entry.bytes);
  return { sources: sources.length, bytes: sizes.reduce((a, b) => a + b, 0), minBytes: Math.min(...sizes), maxBytes: Math.max(...sizes),
    belowTarget: sizes.filter((size) => size < 80000).length, withinTarget: sizes.filter((size) => size >= 80000).length, filesWritten, manifestChanged };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  if (args.some((argument) => argument !== "--check")) {
    console.error("Usage: node --import tsx scripts/prepare-newsletter-images.ts [--check]");
    process.exitCode = 1;
  } else {
    prepareNewsletterImages({ rootDir: process.cwd(), check: args.includes("--check") })
      .then((result) => console.log(JSON.stringify({ mode: args.includes("--check") ? "check" : "prepare", ...result })))
      .catch((error: Error) => { console.error(error.message); process.exitCode = 1; });
  }
}
