# GPT-5.6 and Codex in ChatGPT Research News Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish one source-faithful Friday Research News item about the public GPT-5.6 launch and Codex in ChatGPT, with two newly generated images and static audio, then deploy the clean revision to `www.aied.hk`.

**Architecture:** Extend the existing static `reviewedResearchPapers` array without changing its schema or page components. The new item becomes the first reviewed entry, points to project-local cover, summary, and audio assets, and inherits the existing static-media-first rendering path. Tests remain the release contract for item order, summary length, image dimensions, and M4A availability.

**Tech Stack:** Next.js 16, React 19, TypeScript, Node test runner through `tsx`, built-in OpenAI `imagegen`, DashScope CosyVoice TTS, FFmpeg/FFprobe, Vercel CLI.

---

## File Map

- Modify `tests/research-data.test.ts`: expect nineteen entries, the new leading slug/title, and `aied-019` static audio.
- Modify `lib/research-reviewed-data.ts`: add the source-backed `aied-019` news record at the front of the array.
- Create `public/images/research/covers/aied-019-openai-gpt-5-6-codex-2026.png`: newly generated card/hero cover.
- Create `public/images/research/summary/aied-019-openai-gpt-5-6-codex-summary.png`: separately generated summary illustration.
- Create `public/audio/research/aied-019-openai-gpt-5-6-codex-summary.m4a`: complete static reading of the long summary.

### Task 1: Establish the failing Research News contract

**Files:**
- Modify: `tests/research-data.test.ts`

- [ ] **Step 1: Update the curated-entry test**

Change the count/title contract to:

```ts
test("research news fallback contains nineteen curated Research News items", () => {
  const papers = getResearchPapers("en");

  assert.equal(papers.length, 19);
  assert.equal(papers[0]?.slug, "news-openai-gpt-5-6-codex-in-chatgpt-agentic-learning");
  assert.ok(papers.every((paper) => !paper.sourceUrl.includes("example.com")));
  assert.ok(papers.every((paper) => paper.fullSummary.split(/\s+/).length >= 430));
});
```

- [ ] **Step 2: Add `aied-019` to the static-audio order**

Make the expected list begin:

```ts
[
  "aied-019",
  "aied-018",
  "aied-017",
```

- [ ] **Step 3: Update the untranslated-locale title contract**

Use:

```ts
assert.equal(papers[0]?.title, "News: OpenAI launches GPT-5.6 and brings Codex into ChatGPT");
```

- [ ] **Step 4: Run the focused test and confirm the red state**

Run:

```bash
npx tsx --test tests/research-data.test.ts
```

Expected: FAIL because the implementation still returns eighteen items and the old leading slug.

### Task 2: Add the source-backed `aied-019` entry

**Files:**
- Modify: `lib/research-reviewed-data.ts`

- [ ] **Step 1: Insert the new record before `aied-018`**

Use this field contract and prose:

```ts
{
  id: "aied-019",
  slug: "news-openai-gpt-5-6-codex-in-chatgpt-agentic-learning",
  title: "News: OpenAI launches GPT-5.6 and brings Codex into ChatGPT",
  authors: ["OpenAI"],
  venue: "OpenAI Product",
  year: 2026,
  type: "policy-ethics",
  tags: ["news", "GPT-5.6", "Codex in ChatGPT"],
  image: "/images/research/covers/aied-019-openai-gpt-5-6-codex-2026.png",
  imageAlt: "Editorial cover for the public GPT-5.6 launch and Codex inside ChatGPT",
  summaryImage: "/images/research/summary/aied-019-openai-gpt-5-6-codex-summary.png",
  summaryImageAlt:
    "Science-editorial scene of learners and educators directing agentic AI workflows with planning, research, review, and human oversight.",
  summaryAudio: "/audio/research/aied-019-openai-gpt-5-6-codex-summary.m4a",
  summaryAudioTitle: "Listen to the 500-word summary",
  shortSummary:
    "News item: OpenAI has made GPT-5.6 generally available across ChatGPT, Codex, and the API while bringing the Codex agent directly into ChatGPT.",
  fullSummary: `OpenAI's July 9 release of GPT-5.6 is significant for artificial intelligence in education because it combines a more capable model family with a broader shift in how people use AI. OpenAI says GPT-5.6 is now generally available across ChatGPT, Codex, and the OpenAI API. The family includes Sol as the flagship model, Terra as a balanced option for everyday work, and Luna as the fastest and most affordable tier. The release emphasizes stronger performance per token, improved computer use, better design judgment, and more reliable end-to-end knowledge work. For education, the important change is not only a higher benchmark score. It is the growing ability of one model family to research, create, inspect, revise, and coordinate tools across a complete task.

The second part of the news is the placement of Codex inside ChatGPT. OpenAI describes Codex as the same coding agent now available in ChatGPT, while remaining connected across the editor and terminal through a ChatGPT account. Codex can run multi-step engineering work, use isolated worktrees, apply reusable Skills, schedule background tasks, and coordinate multiple agents. This moves the familiar ChatGPT interface closer to an agentic workspace. A learner or educator is no longer limited to asking for an explanation or a draft. They can potentially delegate a longer workflow that gathers context, produces an artifact, checks the result, and returns evidence of what changed.

For AIED, this creates real opportunities. GPT-5.6 is presented as stronger at coding, browsing, computer use, scientific work, documents, spreadsheets, presentations, and interactive visual explanations. Those capabilities could support project-based learning, programming education, research apprenticeships, data analysis, multilingual content development, and teacher preparation. Codex-style workflows can also make process visible through plans, terminal output, diffs, tests, and review checkpoints. Used well, that evidence can help students examine how an AI system approached a task instead of treating the final answer as magic. It may also help educators design authentic tasks in which students direct, critique, and improve an agent's work.

The same capabilities increase the need for careful educational design. An agent that completes an entire workflow can hide the thinking that learners are meant to practice. Fast production may weaken planning, debugging, source evaluation, writing, or reflection if students accept finished artifacts without understanding them. Access also differs by plan and model tier, raising equity questions. Institutions must consider privacy, connected-tool permissions, assessment validity, provenance, and the possibility that multi-agent systems produce polished but poorly understood work. OpenAI's product claims and benchmarks are useful evidence about capability, but they are not independent proof of improved learning outcomes.

For Hong Kong schools and universities, the practical response should be staged and evidence-informed. AI literacy now needs to include agent literacy: how to define a task, constrain tools, inspect intermediate work, verify sources, review changes, and decide what must remain human judgment. Assessment can require process records, oral explanation, version history, and reflection on rejected AI suggestions. Teachers need supported time to test workflows before adopting them at scale, while institutions need clear rules for student data and connected services. The broader lesson is that GPT-5.6 and Codex in ChatGPT move educational AI from answer generation toward delegated action. AIEDHK should track that transition through learning evidence, human oversight, and local governance rather than capability excitement alone.`,
  keyTakeaways: [
    "News: GPT-5.6 is generally available across ChatGPT, Codex, and the OpenAI API.",
    "Codex in ChatGPT shifts familiar chat interaction toward multi-step agentic work with tools, review, and background execution.",
    "AIED adoption should teach agent literacy and preserve process evidence, teacher oversight, equity, privacy, and assessment validity.",
  ],
  whyItMatters:
    "News signal: GPT-5.6 and Codex in ChatGPT make agentic AI a mainstream education issue, requiring learning designs that combine delegated work with verification, reflection, and accountable human judgment.",
  sourceUrl: "https://openai.com/index/gpt-5-6/",
  createdAt: "2026-07-10",
},
```

The GPT-5.6 availability and capability claims come from `https://openai.com/index/gpt-5-6/`. The Codex-in-ChatGPT, multi-agent, Skills, background work, and cross-surface claims come from `https://openai.com/codex/`.

- [ ] **Step 2: Run the focused test and inspect the expected media failures**

Run:

```bash
npx tsx --test tests/research-data.test.ts
```

Expected: the count, slug, title, and summary-length assertions pass; the new cover, summary image, and audio assertions fail because those files do not exist yet.

### Task 3: Generate two original images and one static audio asset

**Files:**
- Create: `public/images/research/covers/aied-019-openai-gpt-5-6-codex-2026.png`
- Create: `public/images/research/summary/aied-019-openai-gpt-5-6-codex-summary.png`
- Create: `public/audio/research/aied-019-openai-gpt-5-6-codex-summary.m4a`

- [ ] **Step 1: Generate the cover from scratch with built-in `imagegen`**

Use one generation call with no reference images:

```text
Use case: photorealistic-natural
Asset type: AIED.HK Research News cover, wide 16:10
Primary request: Create an original science-magazine editorial photograph for OpenAI's public GPT-5.6 launch and Codex becoming available inside ChatGPT, emphasizing the shift from conversational AI to supervised agentic work in education.
Scene/backdrop: A modern Hong Kong university learning-technology studio at dusk, with campus and city depth visible through glass.
Subject: A diverse small group of university students, one educator, and one researcher actively directing and reviewing several coordinated AI workstreams across laptops, printed notes, and a shared display; focused natural behavior, no posing.
Style/medium: cinematic editorial photography, realistic full-bleed raster image, high-trust science magazine feature image.
Composition/framing: wide 16:10, layered foreground papers and laptop, midground collaborative review, background campus context, crop-safe faces and hands.
Lighting/mood: warm amber institutional light balanced with restrained cyan and teal data glow, serious, optimistic, evidence-led.
AI/data overlay: four subtle connected workflow paths for research, coding, visual explanation, and verification, integrated into the room's perspective and lighting.
Text (verbatim): none
Constraints: entirely new generation; no reference images; no title, logo, watermark, readable interface text, brand mark, or copied prior-cover composition.
Avoid: poster, slide, infographic, vector art, giant robot, stock-photo smiles, fantasy sci-fi, random UI clutter, one-note blue palette.
```

- [ ] **Step 2: Generate the summary image from scratch with a distinct prompt**

Use a separate generation call with no reference images:

```text
Use case: photorealistic-natural
Asset type: AIED.HK Research News summary illustration, wide 16:10
Primary request: Create an original science-magazine editorial photograph explaining agent literacy for GPT-5.6 and Codex in ChatGPT: planning, delegation, source checking, artifact review, reflection, and human judgment.
Scene/backdrop: A bright university seminar room in Hong Kong during a research-methods workshop.
Subject: An educator and students examine an AI-produced research artifact together; one student checks sources on paper, another reviews a change history on a laptop, and the educator guides a reflective discussion.
Style/medium: cinematic realistic editorial photography, full-bleed raster image, humane education-research feature art.
Composition/framing: wide 16:10, layered desk materials in the foreground, human review activity in the midground, whiteboard and campus architecture softly behind, distinct from the cover composition.
Lighting/mood: daylight and warm wood tones with restrained cyan verification paths and small amber highlights, thoughtful and accountable.
AI/data overlay: a meaningful loop connecting plan, tool use, evidence check, revision, and teacher approval without readable words.
Text (verbatim): none
Constraints: entirely new generation; no reference images; no reused prior-cover pixels, title, logo, watermark, readable text, or branded interface.
Avoid: poster, infographic, vector, robot, generic chatbot screen, decorative dashboards, theatrical posing, dark monochrome blue.
```

- [ ] **Step 3: Save and normalize each selected image**

Copy each built-in output from its reported `$CODEX_HOME/generated_images/...` path into the matching project path. Record those returned paths in `COVER_SOURCE` and `SUMMARY_SOURCE`. If an output is the built-in landscape size `1536x1024`, center-crop it to `1536x960`, then resample to `1586x992`. Do not use an existing cover as an input or pixel source.

```bash
cp "$COVER_SOURCE" /tmp/aied-019-cover-source.png
sips --cropToHeightWidth 960 1536 /tmp/aied-019-cover-source.png --out /tmp/aied-019-cover-crop.png
sips --resampleHeightWidth 992 1586 /tmp/aied-019-cover-crop.png --out public/images/research/covers/aied-019-openai-gpt-5-6-codex-2026.png

cp "$SUMMARY_SOURCE" /tmp/aied-019-summary-source.png
sips --cropToHeightWidth 960 1536 /tmp/aied-019-summary-source.png --out /tmp/aied-019-summary-crop.png
sips --resampleHeightWidth 992 1586 /tmp/aied-019-summary-crop.png --out public/images/research/summary/aied-019-openai-gpt-5-6-codex-summary.png
```

Verify:

```bash
sips -g pixelWidth -g pixelHeight public/images/research/covers/aied-019-openai-gpt-5-6-codex-2026.png
sips -g pixelWidth -g pixelHeight public/images/research/summary/aied-019-openai-gpt-5-6-codex-summary.png
```

Expected: both report width `1586` and height `992`.

- [ ] **Step 4: Visually inspect both images**

Use the local image viewer on each final file. Confirm a real photographic education scene, different compositions, specific agentic-learning motifs, crop-safe people, warm/cool balance, and no text, logo, watermark, robots, or copied prior-cover content. If one fails, make one targeted new-generation iteration and recheck.

- [ ] **Step 5: Generate the audio from the exact `aied-019` summary**

Load the archived local AIEDHK DashScope variables transiently without printing values:

```bash
set -a
source /Users/dongpinhu/Desktop/aiedhk-artifact-archive/20260703-165009/artifacts/.env.local
set +a
```

Run this `tsx -e` script with an async `main()`. It selects `aied-019`, synthesizes the exact long summary, downloads the temporary result, and exits nonzero on any error without printing the key or request headers:

```bash
npx tsx -e '
import { writeFile } from "node:fs/promises";
import { resolveDashScopeTtsConfig, synthesizeDashScopeTtsWithRetry } from "./lib/dashscope-tts";
import { reviewedResearchPapers } from "./lib/research-reviewed-data";

async function main() {
  const paper = reviewedResearchPapers.find((item) => item.id === "aied-019");
  if (!paper) throw new Error("aied-019 is missing");

  const config = resolveDashScopeTtsConfig();
  const audioUrl = await synthesizeDashScopeTtsWithRetry({ ...config, text: paper.fullSummary });
  const response = await fetch(audioUrl);
  if (!response.ok) throw new Error(`Audio download failed with status ${response.status}`);

  await writeFile(
    "/tmp/aied-019-openai-gpt-5-6-codex-summary.mp3",
    Buffer.from(await response.arrayBuffer()),
  );
  console.log("Downloaded aied-019 summary audio.");
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : "Audio generation failed");
  process.exit(1);
});
'
```

Convert it to M4A:

```bash
ffmpeg -y -i /tmp/aied-019-openai-gpt-5-6-codex-summary.mp3 -c:a aac -b:a 128k public/audio/research/aied-019-openai-gpt-5-6-codex-summary.m4a
```

- [ ] **Step 6: Validate the media and focused tests**

Run:

```bash
ffprobe -v error -show_entries format=format_name,duration -show_entries stream=codec_name,sample_rate,channels -of json public/audio/research/aied-019-openai-gpt-5-6-codex-summary.m4a
npx tsx --test tests/research-data.test.ts
```

Expected: FFprobe reports an MP4/M4A container with AAC audio and positive duration; all Research News tests pass.

### Task 4: Verify and commit the complete content slice

**Files:**
- Modify: `lib/research-reviewed-data.ts`
- Modify: `tests/research-data.test.ts`
- Create: the two PNGs and one M4A listed above

- [ ] **Step 1: Run fresh quality gates while the content is uncommitted**

Run:

```bash
git diff --check
npm test
npm run typecheck
npm run build
```

Expected: zero diff errors, 45 tests passing, typecheck exit 0, and Next.js production build exit 0.

- [ ] **Step 2: Review scope and source wording**

Run:

```bash
git status --short
git diff --stat
git diff -- lib/research-reviewed-data.ts tests/research-data.test.ts
```

Confirm only the approved data, tests, two new images, and new audio are part of this implementation slice. Confirm the title contains `launches`, not `previews`, and the article does not claim independently demonstrated learning gains.

- [ ] **Step 3: Commit reviewed data and media together**

```bash
git add lib/research-reviewed-data.ts tests/research-data.test.ts public/images/research/covers/aied-019-openai-gpt-5-6-codex-2026.png public/images/research/summary/aied-019-openai-gpt-5-6-codex-summary.png public/audio/research/aied-019-openai-gpt-5-6-codex-summary.m4a
git commit -m "Add GPT-5.6 and Codex Research News"
```

- [ ] **Step 4: Run the clean-release gate**

```bash
npm run hygiene:check
npm run release:verify
```

Expected: the worktree is clean before and after the full test, typecheck, and build sequence; every command exits 0.

### Task 5: Deploy and verify the named production domain

**Files:**
- Read only: `.vercel/project.json`
- No tracked changes

- [ ] **Step 1: Restore the ignored Vercel project link**

Copy the existing project-managed `.vercel` directory from `/Users/dongpinhu/Desktop/aiedhk-worktrees/research-news-20260706/.vercel/` into this worktree. Read only the linked project metadata and confirm it targets the existing AIEDHK project; do not edit the file.

- [ ] **Step 2: Confirm CLI authentication without printing credentials**

Run:

```bash
vercel whoami
vercel --version
```

Expected: the authenticated owner/team identity and CLI version are returned without exposing a token.

- [ ] **Step 3: Deploy the clean commit to production**

```bash
vercel deploy --prod -y --no-wait
```

Capture the deployment URL. Do not deploy if `git status --porcelain` is nonempty.

- [ ] **Step 4: Wait for Vercel readiness and alias attachment**

Poll:

```bash
DEPLOYMENT_URL="$(vercel ls --format json | node -e 'let data=""; process.stdin.on("data", (chunk) => data += chunk); process.stdin.on("end", () => { const payload = JSON.parse(data); const latest = payload.deployments?.[0]; if (!latest?.url) process.exit(1); process.stdout.write(latest.url.startsWith("http") ? latest.url : `https://${latest.url}`); });')"
vercel inspect "$DEPLOYMENT_URL"
vercel ls --format json
```

Expected: status `Ready` and `www.aied.hk` attached to the new production deployment.

- [ ] **Step 5: Verify the public experience**

Open `https://www.aied.hk/en/research-news` and the new detail path `/en/research-news/news-openai-gpt-5-6-codex-in-chatgpt-agentic-learning` in a browser. Confirm the new item is first, the title uses `launches`, both new images load, the source link reaches the GPT-5.6 release, and the static audio control loads the new M4A.

- [ ] **Step 6: Record final evidence**

Report the commit, changed files, image-generation prompts and built-in mode, media dimensions, audio metadata, test/typecheck/build/release results, deployment URL, and verified `www.aied.hk` routes.
