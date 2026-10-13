# News Backfill 100 Implementation Plan

**Goal:** Publish 100 reviewed News articles covering all 50 empty dates from 2026-08-24 through 2026-10-13, excluding the already populated 2026-09-07.

**Architecture:** Extend the existing reviewed static ResearchPaper modules. Each date has one research summary and one product report. Preserve all 113 existing articles, IDs, sources and assets. Use the historical coverage date as createdAt and the displayed publication date, as explicitly requested by the owner on 2026-10-13. No new date fields or labels.

**Tech Stack:** Next.js, TypeScript, built-in ImageGen, existing approved static narration workflow (Daniel), static PNG/M4A, linked Vercel production project.

## Authorized scope and invariants
- [x] Verify clean baseline 8496845 and live 113-entry inventory; isolate work on codex/20261013-news-backfill-100.
- [x] Allocate stable chronological IDs aied-114 through aied-213; odd IDs are product news, even IDs are research.
- [ ] Complete all 50 date pairs. First batch: 2026-09-22 IDs170/171 (Opus5.5) and 2026-09-29 IDs184/185 (DevDay).
- [ ] Each article: 480-600-word reviewed English fullSummary, concise overview, 3 takeaways, educational relevance, verifiable primary sources, source dates appropriate to coverage date.
- [ ] Sources and titles unique against existing and all new entries. Read research methods/results/limitations; distinguish vendor claims from learning evidence.
- [ ] Each article: one unique photographic PNG master, copied byte-identically to separate cover and summary paths, accurate alt text, serial ImageGen generation and visual review.
- [ ] Each article: complete static English narration, AAC M4A with faststart; full decode, sensible duration, page reference and browser playback.
- [ ] Every batch: add reviewed data module import, preserve old entries, update explicit count and date-pair tests to cover the new manifest, verify source/media uniqueness.
- [ ] Every batch: run relevant tests, typecheck, build; commit reviewed data and assets together; run npm run release:verify from clean commit.
- [ ] Every batch: deploy existing canonical Vercel project prj_jDunoY9wzVVHCSFAyBnKW32OExoR, then verify production listing/API, localized detail routes, images, audio and stable card identifiers.
- [ ] Finish: live total213, all100 new IDs, all50 pairs, no missing/reused media, clean Git state, record release SHAs and URLs.

## Files and batch workflow
Create lib/research-news-backfill-20260824-1013.ts (or small batch modules if necessary), import from lib/research-reviewed-data.ts. Media belongs in public/images/research/{covers,summary} and public/audio/research. Extend tests/research-data.test.ts with exact reviewed date-pair expectations; do not weaken existing business assertions. Local evidence and generation scripts stay under ignored tmp/backfill-20261013/. No credential contents enter Git or logs.

Use small batches, starting with four priority articles, then chronological date groups. Source research and editorial drafts may run in parallel; one coordinator integrates and releases, and image generation remains strictly serial. The 100-article objective stays active until every article is production-verified.

## Audio provider check
The old DashScope credential was rejected (401), and the existing Vercel variable did not yield a usable value. Reuse the macOS Daniel voice from the last September 7 release. This choice was disclosed to the owner. Preserve failed receipts; validate actual narration and do not label it as DashScope output.
