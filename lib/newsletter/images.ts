import generatedManifest from "./image-manifest.json";
import type { NewsletterChannel, NewsletterEmailImage } from "./types";

export interface NewsletterImageManifestEntry {
  sourcePath: string;
  sourceSha256: string;
  path: string;
  width: number;
  height: number;
  bytes: number;
}

export interface NewsletterImageManifest {
  schemaVersion: number;
  processor: { version: number; maxEdge: number; maxBytes: number; sharp: string };
  images: Record<string, NewsletterImageManifestEntry>;
}

export interface NewsletterImageDiagnostics {
  missing: number;
  sourceMismatch: number;
  invalid: number;
}

export const newsletterImageManifest = generatedManifest as NewsletterImageManifest;

/** Resolve prepared local media only. No filesystem, remote URL, or provider work at send time. */
export function resolveNewsletterImage(
  channel: NewsletterChannel,
  item: { id: string; contentId?: string; image: string; imageAlt: string },
  diagnostics?: NewsletterImageDiagnostics,
): NewsletterEmailImage | undefined {
  const key = `${channel}:${item.contentId ?? item.id}`;
  const entry = Object.hasOwn(newsletterImageManifest.images, key) ? newsletterImageManifest.images[key] : undefined;
  if (!entry) {
    if (diagnostics) diagnostics.missing++;
    return undefined;
  }
  if (entry.sourcePath !== item.image || !item.image) {
    if (diagnostics) diagnostics.sourceMismatch++;
    return undefined;
  }
  if (!/^\/images\/newsletter\/[a-z0-9_-]+-[a-f0-9]{64}\.jpg$/.test(entry.path)
    || !Number.isInteger(entry.width) || !Number.isInteger(entry.height)
    || entry.width < 1 || entry.height < 1 || Math.max(entry.width, entry.height) > 720
    || entry.bytes < 1 || entry.bytes > 120000) {
    if (diagnostics) diagnostics.invalid++;
    return undefined;
  }
  return { path: entry.path, alt: item.imageAlt, width: entry.width, height: entry.height };
}

/** Aggregate counts only: never include source URLs, article data or subscriber information. */
export function reportNewsletterImageDiagnostics(channel: NewsletterChannel, counts: NewsletterImageDiagnostics): void {
  if (counts.missing || counts.sourceMismatch || counts.invalid) {
    console.warn("newsletter_images_omitted", { channel, ...counts });
  }
}
