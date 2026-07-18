# AIEDHK Bug Report — 2026-07-18

**Scope:** Exhaustive bug detection across the runnable AIEDHK Next.js site (`/Users/dongpinhu/Desktop/aiedhk`) — App Router pages, API routes, the Postgres research pipeline, the i18n layer (14 locales), and every client component.
**Reviewer:** Claude (Opus 4.8), driven by Peter (Dongpin HU).
**Baseline commit:** `f6bc24d` ("Label CLIL review and enlarge hub caption").
**Stack:** Next.js 16.2.9 (Turbopack) · React 19.2 · TypeScript 5.8 (strict) · Tailwind 3.4 · `postgres` 3.4.

> ⚠️ **Concurrent session notice.** While this review was running, a **separate Codex agent** switched the repo off `main` to branch **`codex/20260718-next-dev-plan`** and began implementing `20260718_AIEDHK_Next Development Plan.md` in the same working tree (new `app/robots.ts`, `app/sitemap.ts`, `lib/site.ts`, `app/api/newsletter/unsubscribe/`, edits to `lib/newsletter.ts`, `lib/research-data.ts`, and the newsletter cron — all uncommitted, timestamps 08:38–08:40). My bug-fix edits are **isolated to three non-overlapping files** and do not conflict, but they now sit commingled in that branch's working tree. **No git write operations (commit/branch/stash/checkout) were performed** so as not to race with the active agent — see *Handoff*.

---

## 1. Method

Two complementary passes plus property-based fuzzing:

1. **Automated gates**
   - `tsc --noEmit` (strict) → **clean, exit 0** *(after a fresh `next build`; see O1)*
   - `npm test` (`tsx --test`) → at my verification, **57 passed / 0 failed** (53 pre-existing + 4 new F1 regression tests); the suite has since grown to **63/63** as the concurrent session added its own tests
   - `next build` → **success, 425/425 static pages generated, 0 warnings**
   - Source scan for `TODO/FIXME/HACK/@ts-ignore`, `console.log`, `dangerouslySetInnerHTML`, loose `==`, non-null `!.` → **none in product source**

2. **Manual read of every file** under `app/`, `lib/`, and `components/` (100% of the source tree), prioritising the highest-risk surfaces: the research pipeline (`store.ts`, `ingest.ts`, `generation.ts`, `scoring.ts`, `source-adapters.ts`), the SQL migrations vs. the queries that use them, the admin review/auth path (`proxy.ts` + `/api/admin`), the caching/revalidation contract, and the audio-player + language-switcher client state machines.

3. **Property/fuzz testing** — the pure functions were exercised with ~20,000 seeded random inputs and invariants asserted (see *Fuzzing*).

### Headline

The codebase is **mature and well-defended.** The numerical/filter core guards `NaN`, empty arrays, out-of-range pages, and bad dates; the SQL interpolation of `locale` is safe because it is allowlisted through `normalizeLocale` first; the admin surface is genuinely gated by the Next 16 `proxy.ts` middleware; and the schema matches every query. No crashes, type errors, failing tests, injection vectors, or broken asset references were found, and every fuzz invariant held.

**One genuine correctness bug** was found and **fixed + verified** (document-level `lang`/`dir`). The remaining items are low-severity polish or intentional design, documented below with rationale.

Severity legend: **Medium** = wrong observable behaviour on realistic input; **Low** = narrow trigger, cosmetic, robustness, or tooling; **Info** = noted for awareness.

---

## 2. Resolution status — 1 fixed, verified end-to-end

| # | Severity | Fix | Files |
|---|----------|-----|-------|
| **F1** | Medium (a11y/SEO) | Document `<html lang>`/`dir` now track the active locale via a small client sync, restoring the site default when the localized subtree unmounts. | `components/HtmlLangSync.tsx` *(new)*, `app/[locale]/layout.tsx` |

**Verification:** `tsc` clean · `npm test` green with **4 new tests** (`tests/html-lang-sync.test.ts`) · `next build` 425/425 · **live browser check** on the running production server: `/ar` → `document.documentElement` `lang="ar" dir="rtl"`; `/ja/mission` → `lang="ja" dir="ltr"`.

---

## 3. Finding detail

### F1 — Document `<html lang>`/`dir` never reflected the locale *(Medium, a11y/SEO) — FIXED*

`app/layout.tsx` (the root layout, which sits **above** the `[locale]` route segment and therefore cannot know the locale) statically renders `<html lang="en">` with **no `dir`**. The localized `app/[locale]/layout.tsx` only sets language/direction on an inner `<div lang dir>`. Consequences:

- All 13 non-English locales presented `lang="en"` at the document root — wrong for screen readers, browser hyphenation/spellcheck, and translation tooling.
- **Arabic** (`dir: "rtl"`) had **no `dir` at the document level.** Content still flipped correctly (the inner `<div dir="rtl">` cascades), but the document element was inconsistent with the content.

**Fix.** Added `components/HtmlLangSync.tsx` — a `"use client"` component that, in `useEffect`, writes `document.documentElement.lang`/`.dir` from the locale's `htmlLang`/`dir`, and resets to the `en`/`ltr` default on unmount (so a client-side navigation out of the `[locale]` subtree to `/admin` etc. doesn't leave stale attributes). It is rendered once inside `app/[locale]/layout.tsx`.

**Known limitation (documented honestly).** Because the correction runs after hydration, the **raw SSR HTML still contains `lang="en"`**, so a crawler reading only the initial markup won't see the localized value. The primary SEO signal is already carried by `alternates.languages` (hreflang) in `generateMetadata`, and assistive tech / browser behaviour is corrected on load. A fully-SSR fix would require either middleware injecting the locale as a request header consumed by an `async` root layout (which would opt the whole site out of static generation — a performance regression) or restructuring so `[locale]/layout` owns `<html>` (which breaks `/`, `/admin`, and `not-found`, all of which need the root `<html>`). The client sync is the standard, low-risk trade-off for a locale-in-subpath App Router site.

---

## 4. Fuzzing / property testing (no defects found)

To search exhaustively rather than by eye, the pure functions were driven with a seeded generator (`~20,000` cases) and invariants asserted — **all held ✅**:

- **`filterResearchPaperList` (5,000 cases)** across random paper sets and adversarial options (`page` ∈ {NaN, ∞, −5, 2.7, 1e9}, `pageSize` ∈ {−1, 0, 3.9, 1000, NaN}, bogus `type`/`year`/`q`): `items.length ≤ pageSize`, `pageSize ∈ [1,50]`, `page ∈ [1,totalPages]`, `total` sane, `totalPages ≥ 1`, and **the pages partition the filtered set** (`Σ items over all pages === total`).
- **Scoring / normalization (5,000 + 2,000 cases):** `relevanceScore` finite ≥ 0 with ≥1 reason; `normalizeTitle` collapsed+trimmed; `normalizeDoi` lower-cased with no `http(s)://` prefix; `inferPaperType` always a valid `PaperType`; `suggestTags` 1–5 tags; `createUniqueSlug` matches `^[a-z0-9-]+$` with no edge dashes; `dedupeResearchCandidates` shrinks and yields unique DOI/title identities.
- **`clampPage` / `slugify` / `normalizeLocale` (3,000 cases):** integer ≥ 1 and ≤ `totalPages`; slug charset clean; locale always valid; `getDictionary` returns a structurally complete dictionary.
- **Dictionary completeness:** every one of the **14 locales** was shape-checked against the English template — **no missing keys, no type drift** (this transitively validates the array-driven `makeRomanceDictionary`/`localizedBase` machinery for fr/pt/de/ar/ko/ja/hi/ru/id/bn).

---

## 5. Observations (reviewed — low priority / not fixed, with rationale)

| # | Severity | Area | Note |
|---|----------|------|------|
| O1 | Low (tooling) | `.next` types | `npm run typecheck` (and thus `release:verify`) **fails against a stale `.next/types`** — leftover generated route validators for the old `/[locale]/research-news` routes (migrated to `/news`). Since `release:verify` runs `typecheck` **before** `build`, a dev with a stale `.next` sees a false failure. A fresh `next build` regenerates the validators and typecheck goes clean; **clean CI (no `.next`) is unaffected.** *Recommend:* clean `.next` (or build) before typecheck, or add a `prebuild`/`pretypecheck` clean step. |
| O2 | Low (by design) | `reviewResearchPaper` | `doi`/`publication_date`/`confidence_notes` are written **unconditionally** (`= ${v ?? null}`), while every other field uses `coalesce(..., existing)`. No data loss in practice — the admin form always submits current values for these fields — and the asymmetry lets an admin *clear* them. Left as-is; "fixing" would change intended clear-on-empty behaviour. |
| O3 | Low (robustness) | Newsletter cron | `Promise.all(subscribers.map(sendDigestEmail))` — a thrown `fetch` (network error, not an HTTP error, which is already caught) rejects the whole batch → 500, losing per-recipient sent/failed accounting. `Promise.allSettled` would isolate failures. *(This route is being edited by the concurrent session — confirm against its final state.)* |
| O4 | Low (dead code) | `research-data.ts` | `legacyMockResearchPapers` (~257 lines) and the `rp-001..rp-008`-keyed `paperTitles`/`paperTopicKeys`/topic-localization maps are unused for the live `aied-*` dataset, so per-paper localization for es/fr/de/… never runs (reviewed papers fall back to English — the tests assert this as intended). **The concurrent Codex session removed `legacyMockResearchPapers` during this review.** |
| O5 | Very low | News detail | `key={paragraph.slice(0,60)}` for summary paragraphs risks a React key collision if two paragraphs share their first 60 chars (not seen in any real content). An index key is strictly safer. |
| O6 | Very low | Filters | The public filter `GET` form emits empty `?q=&type=&year=` params; purely cosmetic (both server and client normalize empty → "no filter"). |
| O7 | Info | Cron auth | Bearer-token check is a non-constant-time string compare (standard for these templates; low risk given secret entropy). |
| O8 | Info | CSS | `bg-hub-gradient` is defined **both** as a Tailwind `backgroundImage` key and as a richer `.bg-hub-gradient` rule in `globals.css`; the CSS rule wins (source order) and the Tailwind key is redundant. |

---

## 6. Verified — *not* a bug (checked because they look suspicious)

- **`revalidateTag(TAG, { expire: 0 })`** (admin route) — **valid** in Next 16.2.9. The signature is now `revalidateTag(tag, profile: string | CacheLifeConfig)` and `{ expire?: number }` is a `CacheLifeConfig`. Typechecks and matches the test that asserts this exact call.
- **`proxy.ts` admin Basic Auth** — Next 16.2.9 recognises `proxy` as the middleware convention (`PROXY_FILENAME = 'proxy'` in `next/dist/lib/constants`), and the production build reports **`ƒ Proxy (Middleware)`**. `/admin` and `/api/admin` are genuinely gated by `ADMIN_USERNAME`/`ADMIN_PASSWORD`.
- **SQL `locale` interpolation** in `publishedPaperSelect` — **not injectable**: the value passes through `normalizeLocale`, which allowlists to the 14 known locale codes before interpolation.
- **Migrations vs. queries** — every column and constraint the code relies on exists, including `unique (research_paper_id, locale)` used by the localization `on conflict` upsert, the partial unique indexes on candidate `doi`/`normalized_title`, and every `research_papers` column read/written by the admin flow.
- **Static assets** — all referenced covers, summary illustrations, `.m4a` audio, logos, and the home hero image exist on disk (also covered by existing tests).
- **News page `revalidate = 300` vs. API `force-dynamic`** — intentional and test-enforced; the cacheable public **page** is the one the "cacheable instead of force-dynamic" test targets, not the API route.

---

## 7. Handoff

- **Changed by this review (all verified, uncommitted working-tree edits):**
  - `components/HtmlLangSync.tsx` *(new)*
  - `app/[locale]/layout.tsx` *(+2 lines: import + render)*
  - `tests/html-lang-sync.test.ts` *(new — 4 tests)*
- **Not touched:** every file the concurrent Codex agent is editing on `codex/20260718-next-dev-plan` (`robots.ts`, `sitemap.ts`, `lib/site.ts`, `app/api/newsletter/…`, `newsletter.ts`, `research-data.ts`, newsletter cron). Those looked clean on a light read but were **in active development** and were treated as out of scope.
- **Recommended next steps for Peter:**
  1. Because the working tree currently commingles two agents' work on `codex/20260718-next-dev-plan`, review both diffs and split them if you want the bug fix and the dev-plan work in separate commits (e.g. cherry-pick the three F1 files onto their own branch).
  2. Address **O1** (clean `.next` before `typecheck`) so `release:verify` is reliable.
  3. Consider **O3** (`Promise.allSettled` in the newsletter cron) and **O5** (index key) as trivial polish.
  4. Run `npm run release:verify` from a clean checkout before any deploy (per `AGENTS.md`).

**Final state at handoff:** `tsc` clean · `npm test` **63/63** (my 4 F1 tests + the concurrent session's additions) · `next build` 425/425 · fuzz invariants ✅ · F1 fix confirmed live in-browser for RTL and non-Latin locales.
