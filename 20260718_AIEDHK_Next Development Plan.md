# AIEDHK — Next Development Plan

**Date:** 2026-07-18
**Author:** Prepared for Dr. Peter Hu Dongpin (AIEDHK)
**Repo:** `aiedhk` (Next.js 16 / React 19 / TypeScript / Tailwind)
**Status:** `main` clean · 53 tests passing · deployed to `www.aied.hk` via Vercel

---

## 1. Snapshot: where AIEDHK is today

AIEDHK ("AI in Education Hub of Knowledge | Hong Kong as an AIED Hub") is a live multilingual information platform whose core value is a **weekly AI-in-Education Research News feed** with AI-assisted crawling, summarization, review, and publishing.

### Architecture (built and working)
- **Frontend:** Next.js App Router, React 19, Tailwind, Phosphor icons, Vercel Analytics.
- **Locales:** 14 shipped — `en`, `zh-hant`, `zh-hans`, `es`, `fr`, `pt`, `de`, `ar` (RTL), `ko`, `ja`, `hi`, `ru`, `id`, `bn` — with `hreflang` alternates in [layout metadata](app/[locale]/layout.tsx:19).
- **Pages:** Home, Mission, News (list + detail), About, logo-concepts.
- **Research CMS:** Postgres-backed pipeline with a local static fallback so the site renders with or without a database.
  - Source adapters (OpenAlex / Semantic Scholar / arXiv) with scoring, dedup, timeouts — [source-adapters.ts](lib/research-pipeline/source-adapters.ts), [scoring.ts](lib/research-pipeline/scoring.ts).
  - AI draft generation (configurable model, e.g. Qwen/DashScope) with a deterministic fallback — [generation.ts](lib/research-pipeline/generation.ts).
  - Postgres store + admin review workflow (Save / Approve / Publish / Unpublish / Regenerate / Reject / Archive) — [store.ts](lib/research-pipeline/store.ts), [admin page](app/admin/research-news/page.tsx).
  - Weekly Vercel crons: ingest (Mon 09:00 HKT) + newsletter (Mon 09:20 HKT) — [vercel.json](vercel.json).
  - Newsletter via Resend; audio summaries via DashScope TTS with a "static-audio-first" pattern.

### Content
- **25 curated Research News articles** (`aied-001`…`aied-025`) in [research-reviewed-data.ts](lib/research-reviewed-data.ts), mostly 2026 product-news and journal/review pieces, each with a unique cover, summary image, and (English) audio.
- **8 legacy mock papers** (`rp-001`…`rp-008`) remain in [research-data.ts](lib/research-data.ts) but are no longer served (`researchPapers = reviewedResearchPapers`).

### Health
- 53 tests pass (`npm test`); typecheck and build are wired into `npm run release:verify`.
- Recent work (last ~15 commits) is almost entirely **hand-curated weekly editorial content**, not automated pipeline runs.

---

## 2. Gap analysis (what's missing or unfinished)

Ranked by impact on the platform's stated mission.

| # | Gap | Evidence | Impact |
|---|-----|----------|--------|
| **G1** | **Multilingual content is a facade for real articles.** UI chrome is translated, but the 25 real articles (`aied-*`) have **no per-article translations**. `localizedPaper()` looks up `paperTitles[locale][paper.id]`, which only exists for the 8 dead mock papers — so every non-English visitor silently sees **English** titles, summaries, takeaways. | [research-data.ts](lib/research-data.ts:627) `localizedPaper` returns the English paper when no localized title exists. | The central "global + Hong Kong multilingual" promise is unmet where it matters most. |
| **G2** | **Audio is English-only.** The summary-audio route rejects any non-English request. | [summary-audio/route.ts](app/api/research-news/[slug]/summary-audio/route.ts:37) | Accessibility + reach limited to English readers. |
| **G3** | **No newsletter unsubscribe endpoint.** `unsubscribe_token` is stored and fetched, but there is no public route to honor it, and no confirmation/double opt-in. | [migrations/001](migrations/001_newsletter_subscribers.sql); no `app/**/unsubscribe` route. | CAN-SPAM / Hong Kong PDPO compliance risk before scaling email. |
| **G4** | **SEO surface incomplete.** No `sitemap.ts`, no `robots.ts`, no JSON-LD structured data (Article/Organization/BreadcrumbList). `hreflang` alternates exist; the rest do not. | `app/` has no sitemap/robots; no `application/ld+json`. | Weak discoverability for a knowledge hub whose growth depends on search. |
| **G5** | **Content velocity is manual.** The automated pipeline is built but the evidence is that articles are added by hand each week. Unclear whether ingest→draft→review actually runs live in production (needs `DATABASE_URL` + AI keys + a human reviewer). | Commit history; `getPublishedResearchPapers` falls back to static data when DB absent. | Scaling to true "weekly intelligence" is bottlenecked on one person. |
| **G6** | **Newsletter localized to English only.** Only `?language=en` is scheduled. | [vercel.json](vercel.json:8) | Non-English subscribers get nothing / English only. |
| **G7** | **Public POST `/api/research-news` is a no-op.** Validates but never persists. | [README](README.md:218) | Misleading API surface; dead endpoint. |
| **G8** | **About page is placeholder.** Explicitly flagged as editable placeholder pending verified bios/products (Hu Dongpin, PedaNova, MAIS, CAIS, UAIS). | [README](README.md:404), [about/page.tsx](app/[locale]/about/page.tsx) | Credibility gap on a public-facing hub. |
| **G9** | **Dead code.** 8 legacy mock papers + their 14-language translation tables ship but are never rendered. | [research-data.ts](lib/research-data.ts:16) | Maintenance drag, confusing source of truth. |
| **G10** | **No analytics-informed content loop or engagement features.** No "most read," no tag landing pages, no related-topic hubs beyond tag overlap. | — | Under-uses the growing corpus. |

---

## 3. Strategic priorities

Three themes should drive the next quarter, in order:

1. **Make the multilingual promise real** (G1, G2, G6) — this is the platform's differentiator and its biggest current lie-by-omission.
2. **Make the growth engine reliable and compliant** (G3, G4, G5) — SEO + automation + email compliance turn the corpus into an audience.
3. **Establish credibility and hygiene** (G8, G9, G7) — verified About content, remove dead code, close misleading endpoints.

---

## 4. Phased roadmap

### Phase 0 — Compliance & hygiene (this sprint, ~1 week)
Low-effort, high-necessity items that reduce risk immediately.

- **P0.1 Newsletter unsubscribe + one-click compliance.**
  - Add `GET /api/newsletter/unsubscribe?token=…` that flips `status='unsubscribed'`, sets `unsubscribed_at`, and shows a localized confirmation page.
  - Include the unsubscribe URL and a `List-Unsubscribe` header in every send in [newsletter cron](app/api/cron/research-newsletter/route.ts) / [newsletter.ts](lib/newsletter.ts).
  - *Acceptance:* a token round-trips (subscribe → email link → unsubscribed row); a re-send excludes unsubscribed addresses; test added.
- **P0.2 SEO baseline.** Add `app/sitemap.ts` (all locales × static pages × published article slugs) and `app/robots.ts`. Add `metadataBase` and per-page canonical.
  - *Acceptance:* `/sitemap.xml` and `/robots.txt` resolve; sitemap lists every published slug in every locale; test asserts non-empty + valid URLs.
- **P0.3 Remove dead code.** Delete the 8 `rp-*` mock papers and their translation tables, or clearly quarantine them behind a `legacy/` module excluded from the build. Keep the generic `researchTextTemplates` if reused by G1.
  - *Acceptance:* build + tests green; no `rp-00x` references remain in shipped paths.
- **P0.4 Close or finish public POST `/api/research-news`.** Either return `410 Gone`/remove it, or wire it to create a `draft` row behind auth. Recommend removal for now.
  - *Acceptance:* README + route agree; test updated.

### Phase 1 — Real multilingual content (2–4 weeks)
The flagship workstream.

- **P1.1 Per-article localization data model.** Extend the pipeline's existing `research_paper_localizations` concept to the **static reviewed corpus**: give each `aied-*` article real translated `title`, `shortSummary`, `fullSummary`, `keyTakeaways`, `whyItMatters` (start with `zh-hant` + `zh-hans`, then the rest).
  - Reuse [store.ts](lib/research-pipeline/store.ts) localization tables for DB-served content; for the static fallback, add a `reviewedResearchPaperLocalizations` map keyed by `id`+`locale`.
  - Update [localizedPaper](lib/research-data.ts:627) to prefer real per-article translations and only fall back to the generic template as a last resort.
  - *Acceptance:* a Traditional-Chinese visitor sees a genuinely translated `aied-024`/`aied-025`, not English; test asserts non-English detail differs from English for at least the top N articles.
- **P1.2 AI translation step in the pipeline.** Add a `localize` stage to [generation.ts](lib/research-pipeline/generation.ts) that produces the localized fields for approved drafts (model + deterministic fallback, same pattern as summary generation). Surface translations in the admin review UI for human sign-off.
  - *Acceptance:* an approved English draft can be one-click localized into `zh-hant`/`zh-hans`; reviewer can edit before publish.
- **P1.3 Prioritized backfill.** Localize the current 25 articles into at least `zh-hant` + `zh-hans` (the Hong Kong / Greater China core), then queue `es`, `fr`, `ja`, `ko`.
  - *Acceptance:* 100% of published articles have `zh-hant` + `zh-hans`; a coverage report/test flags any missing locale.
- **P1.4 Multilingual audio (G2).** Extend the DashScope TTS route to non-English once localized text exists, or scope audio explicitly per locale. If TTS quality is uneven, gate audio to locales with verified voice quality and hide the player elsewhere.
  - *Acceptance:* `zh` audio generates and plays, or the player is cleanly hidden where unsupported (no broken control).

### Phase 2 — Growth engine (4–8 weeks)
- **P2.1 Reliable weekly automation (G5).** Confirm production has `DATABASE_URL` + AI keys; run the ingest cron live into the review queue; document the weekly reviewer workflow. Add a lightweight admin dashboard: last run status, candidate counts, source errors (data already in `research_ingestion_runs`).
  - *Acceptance:* one full automated cycle (crawl → draft → human approve → publish) completes in production; run metrics visible in admin.
- **P2.2 Structured data / JSON-LD (G4).** Add `Article`, `Organization`, and `BreadcrumbList` JSON-LD to detail and org pages.
  - *Acceptance:* Google Rich Results test passes for a sample article.
- **P2.3 Localized newsletters (G6).** Schedule per-locale digests for locales with subscribers and translated content; localize the email template.
  - *Acceptance:* `zh-hant`/`zh-hans` digests send to their subscriber segments.
- **P2.4 Topic/tag landing pages (G10).** Generate `/[locale]/news/topic/[tag]` hubs from the existing tag taxonomy to deepen internal linking and SEO.
  - *Acceptance:* tag pages render, are in the sitemap, and cross-link articles.

### Phase 3 — Credibility & depth (parallel / ongoing)
- **P3.1 Verified About content (G8).** Replace placeholder bios/product copy with verified information for Hu Dongpin, PedaNova, MAIS, CAIS, UAIS. Localize.
- **P3.2 Engagement layer.** "Most read this month" (from Vercel Analytics), reading-time, share metadata, related-by-topic beyond tag overlap.
- **P3.3 Research-to-product features.** The living-lab thesis (`aied-008`) suggests future value: an "evidence & readiness" rubric per article, and product-pilot notes linking research to MAIS/CAIS/UAIS.

---

## 5. Suggested first two-week sprint

| Priority | Task | Est. | Owner |
|----------|------|------|-------|
| P0 | Unsubscribe endpoint + `List-Unsubscribe` header + test (P0.1) | 1 d | Eng |
| P0 | `sitemap.ts` + `robots.ts` + `metadataBase` (P0.2) | 0.5 d | Eng |
| P0 | Remove/quarantine legacy `rp-*` mock papers (P0.3) | 0.5 d | Eng |
| P0 | Resolve public POST endpoint (P0.4) | 0.5 d | Eng |
| P1 | Localization data model + `localizedPaper` upgrade (P1.1) | 2 d | Eng |
| P1 | Backfill `zh-hant` + `zh-hans` for all 25 articles (P1.3) | 2–3 d | Eng + reviewer |

**Sprint exit criteria:** unsubscribe compliant; sitemap/robots live; dead code gone; every published article fully readable in Traditional and Simplified Chinese; `npm run release:verify` green; deployed from a clean commit.

---

## 6. Technical debt & cleanup checklist
- Remove `rp-*` mock papers and their 14-language `paperTitles` / `topicLabels` scaffolding once G1 supersedes them.
- Consolidate the "source of truth" story: static reviewed data vs. DB-published data — document precedence (`mergeResearchPapers`) in the README.
- Add a localization-coverage test that fails when a published article is missing a required locale.
- Verify `www.aied.hk` DNS/SSL and that production env has `DATABASE_URL`, `AI_*`, `RESEND_*`, `CRON_SECRET`, `ADMIN_*` set (README notes this was unverified at template time).

## 7. Risks & dependencies
- **Translation quality:** machine translation of academic summaries needs human review; budget reviewer time (ties P1.2 to admin UX).
- **API cost/limits:** live ingestion + per-locale generation + TTS multiply model/API spend — add per-run caps and caching (cache infra already exists via `unstable_cache` + revalidate tags).
- **Compliance:** email (PDPO/CAN-SPAM) is a hard gate before scaling subscribers — do not grow the list until P0.1 ships.
- **Single-maintainer bottleneck:** automation (P2.1) is the main lever to reduce reliance on manual weekly curation.

## 8. Definition of "next milestone done"
1. Compliance: unsubscribe works; sitemap/robots live.
2. Multilingual: all published articles fully translated into at least `zh-hant` + `zh-hans`, with a coverage guard test.
3. Automation: at least one end-to-end automated ingest→review→publish cycle run in production.
4. Hygiene: dead code removed; About page verified; `release:verify` green; deployed from clean `main`.

---

*Process note (per `AGENTS.md`): do this work in `codex/YYYYMMDD-<slug>` branches or worktrees, keep `main` clean, run `npm run hygiene:check` before handoff and `npm run release:verify` before any deploy, and ship each Research News change with its cover + static audio together from a clean commit.*
