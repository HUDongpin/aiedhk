# GPT-5.6 and Codex in ChatGPT Research News Design

Date: 2026-07-10  
Status: Approved editorial direction

## Objective

Publish one Friday Research News item about OpenAI's public GPT-5.6 launch and the availability of Codex inside ChatGPT, then deploy the clean, validated revision to `www.aied.hk` through Vercel.

## Source Contract

Use only these official OpenAI pages for the product-news claims:

- `https://openai.com/index/gpt-5-6/`
- `https://openai.com/codex/`

The article must describe GPT-5.6 as generally available, not as a preview. It may state that the July 9 release made GPT-5.6 available across ChatGPT, Codex, and the OpenAI API, with a gradual global rollout. It may describe Codex as being available inside ChatGPT and across the editor and terminal through a connected ChatGPT account. It must not claim that every plan has identical model-tier access.

## Editorial Design

Add a single reviewed news item at the top of `reviewedResearchPapers`:

- ID: `aied-019`
- Slug: `news-openai-gpt-5-6-codex-in-chatgpt-agentic-learning`
- Title: `News: OpenAI launches GPT-5.6 and brings Codex into ChatGPT`
- Author: OpenAI
- Venue: OpenAI Product
- Date: 2026-07-10
- Type: `policy-ethics`
- Tags: `news`, `GPT-5.6`, `Codex in ChatGPT`
- Primary source link: `https://openai.com/index/gpt-5-6/`

The long-form summary will follow the existing five-paragraph Research News pattern and contain at least 430 words. It will cover:

1. Public availability and the Sol, Terra, and Luna model family.
2. The shift from chat-only assistance toward end-to-end agentic work through Codex in ChatGPT.
3. AIED opportunities in research, coding, document production, visual explanation, and tool-mediated learning.
4. Risks involving overreliance, process invisibility, unequal access, assessment validity, privacy, and teacher oversight.
5. Practical implications for Hong Kong institutions: AI literacy, process evidence, staged adoption, local evaluation, and governance.

The title, short summary, tags, key takeaways, and why-it-matters field must all identify the entry as product news rather than independent evidence of educational impact.

## Visual Design

Create two new raster images with the established AIED.HK science-magazine style:

1. Cover: `public/images/research/covers/aied-019-openai-gpt-5-6-codex-2026.png`
2. Summary image: `public/images/research/summary/aied-019-openai-gpt-5-6-codex-summary.png`

Generate both images from scratch with the built-in `imagegen` tool, using one dedicated generation call and prompt per asset. Do not copy, crop, edit, composite, trace, or reuse pixels from any previous Research News cover or summary image. Existing covers may inform the written AIED.HK style rules only; they must not be supplied to the generator as reference images.

Both images will be approximately 16:10 and at least 1500 by 900 pixels. They will show a credible higher-education or research setting with students, educators, or researchers using agentic AI workflows. Warm institutional light will mix with restrained cyan/teal data layers representing multiple coordinated workstreams. The images must remain photographic, crop-safe, human-centered, and free of titles, logos, watermarks, robots, and decorative interface clutter.

The cover will emphasize the public release and connected ChatGPT/Codex workspace. The summary image will emphasize the educational workflow: planning, research, tool use, review, and human judgment.

## Audio

Generate a complete static audio reading of the long-form summary at:

`public/audio/research/aied-019-openai-gpt-5-6-codex-summary.m4a`

The detail page will reference this asset through `summaryAudio`, preserving the site's static-audio-first behavior.

## Data and Test Changes

Update:

- `lib/research-reviewed-data.ts`
- `tests/research-data.test.ts`

The tests will expect nineteen curated entries, the new slug at the top, the new image assets, and `aied-019` at the front of the static-audio list. Existing July entries `aied-017` and `aied-018` remain intact.

## Validation and Release

Run the focused tests, full test suite, typecheck, and production build. Inspect both PNGs for dimensions, crop, photographic quality, and visual relevance. Validate the M4A container and playback metadata. Commit all reviewed data and static media together, then run `npm run hygiene:check` and `npm run release:verify` from the clean commit.

Deploy that clean commit to the existing Vercel production project. Wait for the deployment to become Ready and confirm that `www.aied.hk` resolves to the new deployment and displays the new Research News item and detail page.

## Out of Scope

- Adding a new journal paper in this manual Friday update.
- Changing the Research News schema or page layout.
- Claiming that GPT-5.6 itself has demonstrated learning-outcome gains.
- Rewriting or removing existing Research News entries.
