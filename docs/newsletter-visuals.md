# Newsletter visuals

News and Academy digests use the existing Resend sender, consent, scheduling, and frozen delivery records. Each prepared content item has one linked JPEG, a text title and summary, and a localized reading button. Academy core ideas remain text. Subjects/headings use 📰 for News and 🎓 for Academy. All 14 interface languages, RTL content boundaries, review labels, plain-text bodies, and channel unsubscribe links are retained. Confirmation emails retain their previous layout.

## Prepare and review a release

Run from an isolated feature branch based on the current production revision:

```sh
npm ci
npm run newsletter:images:prepare
npm run newsletter:images:check
npm run newsletter:preview -- --serve
```

The local gallery is `http://127.0.0.1:4173`. Its six examples include the three stories in the owner's screenshot followed by two further reviewed News items, the first complete Academy pair, a one-story digest, Academy review mode, Arabic chrome with an honest English fallback, and a clearly labelled Chinese long-title fixture. Each has a browser preview, an image-omission simulation, the exact production-origin HTML, and plain text. Size reports and files are saved under ignored `outputs/newsletter-preview/`. No subscriber list, live database, or mail provider is used. Unsubscribe links contain an inert placeholder token.

Inspect desktop and mobile rendering, image omission, links, and language direction. Browser inspection is not proof of rendering or receipt in 126, Gmail, Outlook, or Apple Mail. Actual test sends and deployment require their separately scoped authorization.

Commit reviewed sources, the manifest, and all new JPEGs together; keep local previews outside Git. On the clean commit run:

```sh
npm run hygiene:check
npm run release:verify
```

`release:verify` includes the read-only image check, existing test suite, required local PostgreSQL integration suite, build, types, and hygiene gates. `npm run build` never prepares or rewrites image assets. Publication/automation workflows that add or replace a cover must run image preparation before committing the release. Preparation has no AI calls, remote image downloads, or database writes.

## Asset contract

- `NewsletterEmailItem.image` is optional and contains `path`, `alt`, `width`, and `height`. This is an additive JSON catalog field; no schema migration or subscription API change is needed.
- The manifest maps channel plus stable content ID to the prepared JPEG and the exact original source path/hash. Database News uses `paper.contentId ?? paper.id`; Academy uses its existing ID. A changed source path cannot silently borrow another image.
- Originals are resized inside a 720px bounding box without cropping or enlargement, converted to JPEG, and stripped of metadata. Encoding starts at quality 88 and reduces quality/size only when needed to remain at or below 120,000 bytes. Naturally smaller images are not inflated to the 80 KB target.
- The derivative filename contains the channel, stable ID, and full SHA-256 of the emitted JPEG. Existing derivative URLs are immutable. The preparation command never deletes old derivatives or original images, including unpublished Academy artwork. Old derivatives must remain in future deployments and template rollback releases so older emails can still load them.
- The scoped `/images/newsletter/` cache header is `public, max-age=31536000, immutable`. Content changes receive a new hashed URL rather than replacing cached bytes.
- Runtime mapping and rendering do not read files, fetch images, compress media, or call an AI provider. Missing, unprepared, source-mismatched or invalid media is omitted; the text card remains complete. `newsletter_images_omitted` logs only channel and aggregate counts. Counts are locale-resolution counts, not unique articles; one missing article across 14 locales contributes 14.
- The release check verifies original-byte freshness, JPEG bytes/hash/dimensions, stripped metadata and size. Missing/stale assets fail that check rather than silently publishing a partial static corpus.
- All image sources rendered into emails are validated local derivative paths resolved to the supplied HTTPS site origin (HTTP loopback is allowed for local development). No external image URL, data URI, CID attachment, or dynamic optimizer URL is accepted.

For an approved **DB-only** article whose image is not already in the static corpus, retain its approved original under `public/images/` and add an entry to `lib/newsletter/additional-image-sources.json`:

```json
[
  {
    "channel": "news",
    "id": "stable-content-id-or-database-id",
    "sourcePath": "/images/research/covers/example.jpg"
  }
]
```

The ID must match `paper.contentId ?? paper.id`, and `sourcePath` must match the article's current `image` exactly. Run prepare/check and commit the approved original, registry, manifest and JPEG together. Do not change production content from this script. Remote-only source URLs use the readable no-image fallback until an independently authorized publication prepares a local asset.

## Frozen deliveries and rollback

Catalog refresh adds media only to future run snapshots. Existing runs, queued payloads, provider envelopes, logical keys, baseline flags, first-seen dates and retry requests are not rewritten. An already-frozen text-only run may legitimately finish without images after this release. Never reset the baseline or manufacture fresh delivery IDs to make the new appearance take effect sooner.

Follow `newsletter-operations.md` for authorized sending and rollback. A template rollback must retain the current consent/suppression schema and frozen delivery ledger, plus all public JPEG URLs that may already have been emailed. It must not restore the legacy sender or resend already accepted material.

## Measured size and costs — 27 October 2026

The prepared corpus is 242 News covers plus 202 Academy images: 444 JPEGs, **28,998,141 bytes** total. Individual files are 35,367–102,096 bytes. Sources and unpublished image inventories were retained.

The five-story News sample loads **314,407 image bytes**; the two-lesson Academy sample loads **129,072 image bytes**. Generated HTML and image totals are measured again by `newsletter:preview`; its limits are 80,000 HTML bytes and 600,000 image bytes per case. Images are fetched separately and do not become mail attachments.

Emoji and template rendering need no new paid service. No new AI image generation is used. Sending to the same recipients on the same schedule retains the same Resend email count; `/emails` quota is per recipient, not per image ([Resend pricing](https://resend.com/pricing)).

Using these two sample messages, 1,000 recipients receiving both on 30 days and loading each image once would add approximately **13.30 GB and 210,000 image requests/month**. If all of that usage were newly billed at Vercel's published regional rates of US$0.15–0.35/GB and US$2.00–3.20/million requests, the arithmetic is **US$2.42–5.33/month**, excluding tax, protocol overhead and other platform metrics ([regional pricing](https://vercel.com/docs/pricing/regional-pricing)). This is a sample-based scenario, not an account quote or a maximum. Future images can be larger (up to 120 KB each); proxies may prefetch, cache, or reload images; News may send on fewer days.

Existing allowances or an applicable Flat Rate CDN tier may absorb the incremental usage ([Flat Rate CDN](https://vercel.com/docs/pricing/flat-rate-cdn)). Actual account plans, shared usage, active subscribers and remaining allowances must be read before an authorized rollout cost decision. This change does not purchase or change any plan, tracking service, or recurring monitor.
