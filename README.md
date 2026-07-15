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

### Mock paper creation endpoint

```http
POST /api/research-news
Content-Type: application/json
```

Example body:

```json
{
  "title": "Example AIED Paper",
  "authors": ["Author One", "Author Two"],
  "venue": "AIED 2026",
  "year": 2026,
  "type": "conference",
  "shortSummary": "Short summary here.",
  "fullSummary": "Longer 500-word summary here."
}
```

This endpoint performs basic validation and returns a mock accepted draft. It does not persist data yet.

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

Review actions:

- Save
- Approve
- Publish
- Unpublish
- Regenerate
- Reject
- Archive

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
