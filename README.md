# AIEDHK Website Template

AIEDHK means **AI in Education Hub of Knowledge | Hong Kong as an AIED Hub**.

This is a complete Next.js website template for `www.aied.hk`. It is designed as a multilingual information platform for global AI in Education research and development, with a Postgres-backed weekly research pipeline for Codex-assisted paper crawling, summarization, tagging, review, and publishing.

## Tech stack

- Next.js App Router
- TypeScript
- React
- Tailwind CSS
- Next.js API routes
- Postgres channel subscriptions through `NEWSLETTER_DATABASE_URL` or `DATABASE_URL`
- Postgres research CMS with local mock data fallback
- Static SVG thumbnails
- English, Traditional Chinese, and Simplified Chinese UI

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open:

- `http://localhost:3000/en`
- `http://localhost:3000/zh-hant`
- `http://localhost:3000/zh-hans`

## Build

```bash
npm run build
npm run start
```

## Environment variables

`DATABASE_URL` supplies the existing research database and, by default, newsletter state. `NEWSLETTER_DATABASE_URL` can isolate newsletter state for a particular Preview deployment. Research content reads continue to use `DATABASE_URL`.

Newsletter delivery defaults to `NEWSLETTER_DELIVERY_MODE=off`. Test mode requires `NEWSLETTER_TEST_RECIPIENTS`, `RESEND_API_KEY`, and `NEWSLETTER_FROM`; live mode also requires `RESEND_WEBHOOK_SECRET`. Set `NEWSLETTER_PUBLIC_ORIGIN` to a verified server origin, or use Vercel's trusted Preview hostname. `CRON_SECRET` protects the minute worker. `.env.example` lists variable names only; inject real values securely and keep environment files out of Git and deployment artifacts.

The research pipeline separately uses `ADMIN_USERNAME`, `ADMIN_PASSWORD`, the `AI_*` settings, and optional source API settings. These publication controls are unchanged by newsletter work.

Before production newsletter migration, back up the database. Apply `migrations/001_newsletter_subscribers.sql` followed by additive `migrations/003_newsletter_channels.sql` to the newsletter database, inspect and apply legacy consent migration, then initialize the baseline once. The existing research schema remains `migrations/002_research_pipeline.sql`; do not change research source data for newsletter acceptance. See [Newsletter operations](docs/newsletter-operations.md) for the exact sequence, configuration, migration categories, Preview isolation, and rollback procedure.

## Pages

### Home

Path examples:

- `/en`
- `/zh-hant`
- `/zh-hans`

Includes the AIEDHK hero, mission statement, latest research news, Hong Kong hub positioning, and research-to-impact sections.

### Mission

Path examples:

- `/en/mission`
- `/zh-hant/mission`
- `/zh-hans/mission`

Includes the mission:

> Accelerate the world’s transition to personalized learning and teaching.

It also includes strategy cards for research intelligence, product innovation, teacher empowerment, student-centered learning, global-local bridge, and responsible AI.

### Research News

Path examples:

- `/en/news`
- `/en/news?type=journal`
- `/en/news?q=feedback&year=2025`

Includes a paper list inspired by academic publication pages, but redesigned with modern cards, thumbnails, search, filters, pagination, and a free weekly email trial signup.

Each mock paper includes:

- `id`
- `slug`
- `title`
- `authors`
- `venue`
- `year`
- `type`
- `tags`
- `image`
- `shortSummary`
- `fullSummary`
- `keyTakeaways`
- `whyItMatters`
- `sourceUrl`
- `createdAt`

### Research News Detail

Path example:

- `/en/news/adaptive-ai-tutors-for-classroom-personalized-learning`

Includes title, authors, venue, tags, image, 500-word summary, key takeaways, AIEDHK relevance, related papers, and a back button.

### About

Path examples:

- `/en/about`
- `/zh-hant/about`
- `/zh-hans/about`

Includes editable placeholder content for:

- Dr. Peter Hu Dongpin: `www.hudongpin.com`
- PedaNova Technology: `www.pedanova.tech`
- MAIS: `mais.ac`
- CAIS: `www.cais.hk`

The content is intentionally conservative and editable. Replace it with verified biography, company information, product descriptions, evidence, and milestones before public launch.

## API routes

### Health check

```http
GET /api/health
```

Returns service status, supported locales, and mock research count.

### Research list

```http
GET /api/research-news
```

Supported query parameters:

- `language=en | zh-hant | zh-hans`
- `type=journal | conference | review | tool-dataset | policy-ethics`
- `year=2025`
- `q=feedback`
- `page=1`
- `pageSize=6`

Example:

```http
GET /api/research-news?language=en&type=journal&q=feedback&page=1
```

### Research detail

```http
GET /api/research-news/[slug]
```

Example:

```http
GET /api/research-news/adaptive-ai-tutors-for-classroom-personalized-learning
```

### Paper creation

Public draft creation over `POST /api/research-news` has been retired (it never persisted data). The endpoint now returns `410 Gone`.

Research News drafts are created by the automated ingestion cron and curated through the authenticated admin review workflow instead:

- Ingestion: `GET /api/cron/research-ingest`
- Review and publish: `/admin/research-news`

### News and Academy subscriptions

```http
POST /api/newsletter/subscribe
Content-Type: application/json
```

Example body:

```json
{
  "email": "<subscriber email>",
  "channel": "news",
  "locale": "en",
  "sourcePath": "/en/news",
  "honeypot": ""
}
```

Responses:

- `202` with `status: "pending_confirmation"` after the provider accepts the confirmation message. The channel remains pending until an explicit confirmation POST.
- `200` with `status: "already_subscribed"` for an active channel with the same language.
- `400` for invalid input, `429` for throttling, and `503` for unavailable or unconfigured delivery.

The endpoint also accepts native URL-encoded forms. `channel` is explicitly `news` or `academy`; each has independent consent and language. The compatibility JSON endpoint `/api/research-news/subscribe` remains available. Confirmation links expire after 48 hours. `GET /api/newsletter/confirm?token=…` is read-only; the page's POST confirms consent. All 14 site locales are supported, with clearly labelled English fallback where reviewed content translations are absent.

### Channel unsubscribe

```http
GET  /api/newsletter/unsubscribe?token=<token>&language=en
POST /api/newsletter/unsubscribe?token=<token>
```

- `GET` is a read-only localized page. It never cancels enrollment just because a scanner opens the link.
- The human form submits `intent=unsubscribe` by POST. RFC 8058 one-click clients POST `List-Unsubscribe=One-Click` in a URL-encoded or multipart body, as advertised by the digest's unsubscribe headers.
- New links stop only their own channel. Preserved legacy links stop the enrollments derived from the legacy record. One-click responses are idempotent and avoid exposing subscription existence.

### SEO routes

- `GET /sitemap.xml` — all locales × static pages × published article slugs.
- `GET /robots.txt` — allows crawling, disallows `/admin` and `/api/`, and points to the sitemap.

### Weekly research ingestion

```http
GET /api/cron/research-ingest?dryRun=1
Authorization: Bearer <CRON_SECRET>
```

Dry run crawls sources and returns ranked candidates without writing drafts.

```http
GET /api/cron/research-ingest
Authorization: Bearer <CRON_SECRET>
```

Live mode stores candidates, creates private drafts, and leaves them in the admin review queue.

### Research review admin

Path:

```text
/admin/research-news
```

Protected by HTTP Basic Auth through `ADMIN_USERNAME` and `ADMIN_PASSWORD`.

The queue header shows a **Recent ingestion runs** panel (status, mode, candidate
count, drafted, skipped, and source errors) read from `research_ingestion_runs`,
so the reviewer can see whether the weekly crawl actually ran. The panel appears
only when `DATABASE_URL` is configured.

Review actions:

- Save
- Approve
- Publish
- Unpublish
- Regenerate
- Reject
- Archive

### Weekly research workflow (operations)

To run the automated pipeline live in production, the deployment needs
`DATABASE_URL` (with `migrations/002_research_pipeline.sql` applied), the `AI_*`
variables for summarization and translation, `CRON_SECRET`, and the `ADMIN_*`
credentials. The weekly loop is then:

1. Monday cron `POST`/`GET /api/cron/research-ingest` crawls sources, scores and
   dedupes candidates, and writes private drafts to the review queue.
2. A human opens `/admin/research-news`, checks the ingestion-run panel, and
   edits, approves, and publishes drafts.
3. Optionally run `npm run translate:research` to draft `zh-hant`/`zh-hans`
   versions for review before publishing multilingual copies.
4. The separate minute newsletter worker plans daily, per-subscriber digests using only published content and the recorded channel consent.

### Daily newsletter worker

```http
GET /api/cron/newsletter?dryRun=1
Authorization: Bearer <CRON_SECRET>
```

Dry run previews eligibility without writing catalog, run, queue, or lease state. The compatibility `/api/cron/research-newsletter` route uses the same worker restricted to News. Delivery requires an explicit configured test/live mode and an initialized content baseline.

News starts daily at 09:20 HKT, sends only eligible newly available content, and includes at most five articles; overflow remains for later days and empty batches send nothing. Academy starts at 09:30 HKT and sends a complete two-lesson curriculum pair, with per-subscriber cycles and labelled reviews. Frozen payloads, stable idempotency keys, bounded retries, signed webhook reconciliation, and channel-specific holds prevent blind resends after uncertain outcomes.

Administrative commands default to read-only output:

```bash
npm run newsletter:admin -- status
npm run newsletter:admin -- migrate
npm run newsletter:admin -- baseline
npm run newsletter:admin -- preview
npm run newsletter:admin -- acceptance
npm run test:newsletter:integration
```

`migrate`, `baseline`, `tick`, and `acceptance` require `--apply` to mutate state. Acceptance sends are explicitly labelled Preview samples to already confirmed allowlisted subscribers; they do not manufacture evidence of a production publication. The integration runner uses an explicit loopback test database or an owned ephemeral local PostgreSQL and fails if neither is available. Follow [Newsletter operations](docs/newsletter-operations.md) for real inbox acceptance, source-failure handling, migration, and release requirements.

### Vercel crons

`vercel.json` schedules:

- Research ingestion: Monday 01:00 UTC / 09:00 HKT
- Newsletter queue: every minute; daily planning from 01:20 UTC / 09:20 HKT for News and 01:30 UTC / 09:30 HKT for Academy

Before public launch, configure and verify `www.aied.hk` DNS and SSL in Vercel. This environment could not resolve `www.aied.hk` during planning.

## Add or edit Research News

Edit:

```text
lib/research-data.ts
```

Add a new object to `researchPapers` with the required fields. Add a matching thumbnail to:

```text
public/images/research/
```

## Translate Research News articles

UI chrome is translated in `lib/i18n.ts`. The reader-facing article fields
(title, summaries, key takeaways, why-it-matters, tags) are translated
**per article** in:

```text
lib/research-reviewed-localizations.ts
```

Each entry is keyed by article `id` then locale. When a locale is missing for an
article, the reader sees the English source (never machine filler or a stale
title). `localizedPaper()` in `lib/research-data.ts` applies these translations.

To draft translations at scale, run the AI localization stage and review its
output before pasting it into the file above:

```bash
AI_API_KEY="sk-..." AI_BASE_URL="https://.../v1" AI_MODEL="qwen-plus" \
  npm run translate:research zh-hant zh-hans
```

Output is written to `output/reviewed-localizations.json` (gitignored). Without
AI credentials the script emits flagged English fallbacks so you can inspect
coverage without spending API calls. A per-article, per-locale static audio
reading can be attached through the optional `summaryAudio` field; the detail
page shows the player only when a localized recording exists.

## Change language copy

Edit:

```text
lib/i18n.ts
```

The supported locale routes are:

- `en`
- `zh-hant`
- `zh-hans`

The language switcher is a capsule segmented control inspired by the uploaded reference screenshot.

## Future paper crawling and AI summarization workflow

The template is ready for a future weekly workflow run by Dr. Peter Hu and Codex:

1. Crawl AIED journals and conferences.
2. Extract paper metadata: title, authors, venue, year, abstract, PDF URL, project URL, code URL.
3. Use an AI summarization pipeline to produce:
   - 500-word summary
   - Key takeaways
   - Why it matters for AIEDHK
   - Tags
   - Suggested paper type
4. Store drafts in a database table or CMS collection.
5. Review and edit drafts in a private admin workflow.
6. Publish approved papers to the public Research News feed.

Suggested future schema:

```ts
type ResearchDraft = {
  sourceId: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  abstract: string;
  pdfUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
  summary500: string;
  keyTakeaways: string[];
  whyItMatters: string;
  tags: string[];
  status: "draft" | "review" | "published" | "archived";
  reviewer?: string;
  createdAt: string;
  updatedAt: string;
};
```

Recommended storage options:

- Vercel Marketplace Postgres providers
- Supabase
- Neon
- Sanity
- Payload CMS
- A Git-based Markdown / MDX workflow for early-stage editing

## Suggested deployment to Vercel

The current project is manually deployed and has no Git integration. Deploy only a committed clean revision after `npm run release:verify`, which includes the local newsletter integration suite. Supply per-deployment Preview settings securely as described in [Newsletter operations](docs/newsletter-operations.md). The setup steps below apply when creating a new Vercel project.

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Set the framework preset to Next.js.
4. Use default build command:

```bash
npm run build
```

5. Add the domain `www.aied.hk` in Vercel project settings.
6. Configure DNS at the domain registrar according to Vercel instructions.
7. Configure database access, take the required backup, and apply newsletter migrations 001 and 003 before migration/baseline initialization; keep sending off during setup.
8. Configure publication and newsletter settings separately. Complete the relevant Preview and release evidence before enabling live newsletter delivery.

## Design notes

- Day mode only.
- Clean academic design with soft gradients, large readable typography, rounded cards, and clear navigation.
- Responsive across desktop, tablet, and mobile.
- Logo is implemented as an inline SVG in `components/Logo.tsx`; favicon is in `public/favicon.svg`.
- Research thumbnails are generated as SVGs in `public/images/research/`.

## Important placeholder note

The About page and product descriptions use professional placeholder content because detailed verified information was not provided. Replace those sections before public launch.
