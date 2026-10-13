# News Backfill 100 Implementation Plan

**Goal:** Publish 100 reviewed News articles covering all 50 empty dates from 2026-08-24 through 2026-10-13, excluding the already populated 2026-09-07.

**Architecture:** Extend the existing reviewed static ResearchPaper modules. Each date has one research summary and one product report. Preserve all 113 existing articles, IDs, sources and assets. Use the historical coverage date as createdAt and the displayed publication date, as explicitly requested by the owner on 2026-10-13. No new date fields or labels.

**Tech Stack:** Next.js, TypeScript, built-in ImageGen, existing approved static narration workflow (Daniel), static PNG/M4A, linked Vercel production project.

## Authorized scope and invariants

- [x] Verify clean baseline 8496845 and live 113-entry inventory; isolate work on codex/20261013-news-backfill-100.
- [x] Allocate stable chronological IDs aied-114 through aied-213; odd IDs are product news, even IDs are research.
- [x] Complete all 50 date pairs. First batch: 2026-09-22 IDs 170/171 (Opus 5.5) and 2026-09-29 IDs 184/185 (DevDay).
- [x] Each article: 480-600-word reviewed English fullSummary, concise overview, 3 takeaways, educational relevance, verifiable primary sources, source dates appropriate to coverage date.
- [x] Sources and titles unique against existing and all new entries. Read research methods/results/limitations; distinguish vendor claims from learning evidence.
- [x] Each article: one unique photographic PNG master, copied byte-identically to separate cover and summary paths, accurate alt text, serial ImageGen generation and visual review.
- [x] Each article: complete static English narration, AAC M4A with faststart; full decode, sensible duration, page reference, and actual initial browser playback/progress/pause.
- [x] Every batch: add reviewed data module import, preserve old entries, update explicit count and date-pair tests to cover the new manifest, verify source/media uniqueness.
- [x] Every batch: run relevant tests, typecheck, build; commit reviewed data and assets together; run npm run release:verify from clean commit.
- [x] Every batch: deploy existing canonical Vercel project prj_jDunoY9wzVVHCSFAyBnKW32OExoR, then verify production listing/API, localized detail routes, images, audio and stable card identifiers.
- [x] Finish: live total 213, all 100 new IDs, all 50 pairs, no missing/reused media, clean Git state, record release SHAs and URLs.

## Files and batch workflow

Create lib/research-news-backfill-20260824-1013.ts (or small batch modules if necessary), import from lib/research-reviewed-data.ts. Media belongs in public/images/research/{covers,summary} and public/audio/research. Extend tests/research-data.test.ts with exact reviewed date-pair expectations; do not weaken existing business assertions. Local evidence and generation scripts stay under ignored tmp/backfill-20261013/. No credential contents enter Git or logs.

Use small batches, starting with four priority articles, then chronological date groups. Source research and editorial drafts may run in parallel; one coordinator integrates and releases, and image generation remains strictly serial. The 100-article objective stays active until every article is production-verified.

## Audio provider check

The old DashScope credential was rejected (401), and the existing Vercel variable did not yield a usable value. Reuse the macOS Daniel voice from the last September 7 release. This choice was disclosed to the owner. Preserve failed receipts; validate actual narration and do not label it as DashScope output.

## Completion record — 2026-10-14 HKT

The authorized archive window is complete: 2026-08-24 through 2026-10-13, excluding the already populated 2026-09-07. Nine production batches added exactly 100 articles (50 research summaries and 50 clearly labeled industry/product/application reports), bringing the live inventory from 113 to 213. Each previously empty date now has its assigned pair. The original 113 records retain every original field value.

The final deployed content revision is `2c78a2a76c38963732c409cb617bd6e904885d95`, deployment `dpl_235ay9ZnmTGuS3yo2B2TbtoX5JwB`, on the existing AIEDHK production project. The Opus 5.5 and OpenAI DevDay reports were prioritized for the requested September 22 and September 29 dates. The owner-requested notebook orientation correction for article 119 is published. This completion record is a later documentation-only change; it does not claim that the documentation commit was deployed.

Validation evidence:

- Final live coverage: 213 records, 100 new IDs, 50 complete date pairs; reviewed English summaries contain 483–566 words, three takeaways and educational relevance. All primary-source date cutoffs passed.
- All 100 articles have distinct photographic masters and complete static English narration. Each News hero/summary pair uses separate paths for the same bitmap, following the existing News format.
- Across the nine batches, 1,400 localized detail routes passed, and all 100 sets of cover, summary image and audio matched local bytes/hashes. All 100 audio files passed Range 206 and complete decoding. Localized-route checks retain the site's existing English fallback where reviewed translations are absent; they are not a claim of 100 fully translated articles.
- All 100 articles had actual initial browser playback and time advancement observed, followed by pause. The records retain actual readiness and visible buffering states, rather than treating every observation as readyState 4.
- The final release gate passed 157 tests, type checking, a 13,223-page production build and worktree hygiene checks. No business assertions were weakened.
- Final lightweight availability: 400 HEAD 200 results (100 English detail pages and 300 media URLs), correct MIME types, and all 300 media Content-Length values matching local files. Three initial SSL/read-timeout attempts passed on their second attempt; original attempts are retained. This check did not repeat complete media downloads.

The browser checks establish initial playback, progress and pause, not uninterrupted streaming or every seek/resume behavior. Cold buffering occurred. Article 181's additional resume/seek probe stalled and has no passing result; offline 181/196 checks found no visible packet-timestamp discontinuity or faststart defect, but did not establish or fix a browser/network cause. No player code was changed for these observations.

Operational receipts are retained outside Git under `tmp/backfill-20261013/`, including per-release records, the final coverage and availability reports, the original 113-record API baseline, and the 181/196 diagnostics. Earlier failed attempts and image revisions are preserved. Daily automation configuration was not changed.
