# AIEDHK Website Template

AIEDHK means **AI in Education Hub of Knowledge | Hong Kong as an AIED Hub**.

This is a complete Next.js website template for `www.aied.hk`. It is designed as a multilingual information platform for global AI in Education research and development, with a Postgres-backed weekly research pipeline for Codex-assisted paper crawling, summarization, tagging, review, and publishing.

## Tech stack

- Next.js App Router
- TypeScript
- React
- Tailwind CSS
- Next.js API routes
- Postgres subscription storage through `DATABASE_URL`
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

The research newsletter trial is runnable when a Postgres database is attached through Vercel Marketplace, Neon, Supabase, or another Postgres provider that exposes `DATABASE_URL`.

```bash
DATABASE_URL="postgres://..."
```

Optional future variables for weekly sending:

```bash
CRON_SECRET="change-me"
ADMIN_USERNAME="admin"
ADMIN_PASSWORD="change-me"
AI_BASE_URL="https://dashscope-intl.aliyuncs.com/compatible-mode/v1"
AI_API_KEY="sk-..."
AI_MODEL="qwen-plus"
OPENALEX_API_KEY="optional"
SEMANTIC_SCHOLAR_API_KEY="optional"
RESEND_API_KEY="re_..."
NEWSLETTER_FROM="AIEDHK <updates@aied.hk>"
```

Apply the subscription table before collecting emails:

```bash
psql "$DATABASE_URL" -f migrations/001_newsletter_subscribers.sql
psql "$DATABASE_URL" -f migrations/002_research_pipeline.sql
npm run seed:research
```

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

### Research newsletter subscription

```http
POST /api/research-news/subscribe
Content-Type: application/json
```

Example body:

```json
{
  "email": "reader@example.com",
  "locale": "en",
  "sourcePath": "/en/news",
  "honeypot": ""
}
```

Responses:

- `201` with `status: "subscribed"` for a new subscription.
- `200` with `status: "already_subscribed"` for an existing email.
- `400` with `status: "invalid_email"` for invalid email input.
- `503` with `status: "database_not_configured"` when `DATABASE_URL` is missing.

### Research newsletter unsubscribe

```http
GET  /api/newsletter/unsubscribe?token=<token>&language=en
POST /api/newsletter/unsubscribe?token=<token>
```

- `GET` is the human-facing link in every email footer. It flags the subscriber as `unsubscribed` and returns a localized confirmation page.
- `POST` is the RFC 8058 one-click target advertised through the `List-Unsubscribe` and `List-Unsubscribe-Post` headers on each weekly send.
- Responses: `200` unsubscribed / already unsubscribed, `400` missing token, `404` unknown token, `503` when `DATABASE_URL` is missing.

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
4. Monday newsletter crons send per-locale digests of published items.

### Weekly newsletter

```http
GET /api/cron/research-newsletter?dryRun=1
Authorization: Bearer <CRON_SECRET>
```

Dry run returns the current weekly digest payload. Live mode sends only published research items to active subscribers when `RESEND_API_KEY` and `NEWSLETTER_FROM` are configured.

### Vercel crons

`vercel.json` schedules:

- Research ingestion: Monday 01:00 UTC / 09:00 HKT
- English newsletter: Monday 01:20 UTC / 09:20 HKT

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

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Set the framework preset to Next.js.
4. Use default build command:

```bash
npm run build
```

5. Add the domain `www.aied.hk` in Vercel project settings.
6. Configure DNS at the domain registrar according to Vercel instructions.
7. Add `DATABASE_URL` and run `migrations/001_newsletter_subscribers.sql` before enabling the newsletter trial.
8. Add future environment variables for crawling, AI summarization, Resend, and weekly cron sending when those features are implemented.

## Design notes

- Day mode only.
- Clean academic design with soft gradients, large readable typography, rounded cards, and clear navigation.
- Responsive across desktop, tablet, and mobile.
- Logo is implemented as an inline SVG in `components/Logo.tsx`; favicon is in `public/favicon.svg`.
- Research thumbnails are generated as SVGs in `public/images/research/`.

## Important placeholder note

The About page and product descriptions use professional placeholder content because detailed verified information was not provided. Replace those sections before public launch.
