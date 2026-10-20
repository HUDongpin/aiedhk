# News backfill: 14–20 October 2026

The owner authorized completing fourteen News articles in three production batches on 20 October 2026. Each date receives one research summary and one clearly labelled Industry report. Daily automation remains paused.

The starting production deployment is `dpl_C12hvV5ReUQsHF56qzoVUJmr46nM`, with the 213-article content and pagination revision `0a6d73d44550c852fc39f33ac7001b803b42d37d`. The isolated working branch is `codex/20261020-news-backfill-14`.

| Batch | Coverage dates | IDs | Expected live total | Status |
|---|---|---|---:|---|
| A | 14–15 October | 214–217 | 217 | Live and verified |
| B | 16–18 October | 218–223 | 223 | Live and verified |
| C | 19–20 October | 224–227 | 227 | Live; functional checks complete; loading latency observed |

Each article retains the existing 480–600-word English summary, three takeaways, educational relevance, a distinct photographic master copied to the two News image paths, and complete static English narration. Coverage dates use the existing owner-approved `createdAt` convention; release receipts record actual deployment times separately. Unreviewed locales retain the existing English fallback and do not claim localized audio.

Read original methods, results and limitations before approving a research summary. Check primary-source dates, DOI/title/event duplication and source URL uniqueness. Preserve existing source and media constraints. Distinguish research findings, vendor descriptions and proposed instructional uses.

Review and commit content, images and audio together. Run `npm run release:verify` from each clean committed batch. Verify the actual production alias, complete public inventory, new detail pages, stable identifiers, localizations and static media. Observe real initial audio playback, time advancement and pause; do not infer uninterrupted streaming or every seek behavior from those checks.

Local evidence, candidate drafts, prompts, audio receipts and release reports are retained outside Git under `tmp/backfill-20261020/`. This task does not restore the daily automation, send newsletters, change existing articles, fill the separate 22 August gap, or expand localization.

Batch A reached READY on 20 October 2026 at 09:16:39 UTC (17:16:39 Hong Kong), deployment `dpl_7JW1tHHn2zMSGBmMvuxjhQwRSZQq`, committed revision `a28c53e3196b3f4be87a95d8f2e5e4875431318e`. Production verification confirmed 217 items, all 56 new localized detail routes, 12 static media files, four real initial audio play/pause checks, and all four listing images and stable identifiers on desktop and mobile. A supplemental browser navigation timed out; bounded image-decoding checks subsequently passed, with the original observation retained in local evidence.

Batch B reached READY on 20 October 2026 at 10:18:16 UTC (18:18:16 Hong Kong), deployment `dpl_BVLNMXtKCbyuUpSLNt1PSFZjDWnW`, committed revision `6823c94a50ec1d1aa31e1c5199b7ec623fc6cccc`. Production verification confirmed 223 items, all 84 new localized detail routes, 18 static media files, six real initial audio play/pause checks, and all six cards and images on desktop and mobile. A temporary verifier incorrectly required each badge to start to the right of the card midpoint; the 220 badge missed that heuristic by 0.03125 CSS pixels while correctly aligning with the header right/top. Direct right/top/padding/bounds checks passed for all twelve viewport-card cases. Original observations and one recovered navigation timeout remain in local evidence; no production styling changed.

Batch C reached READY on 20 October 2026 at 11:27:16 UTC (19:27:16 Hong Kong), deployment `dpl_RbtqP83nEevXimc4wWqBmVUzFncE`, committed revision `100d2f8167a6eda975ab1819e91549d889dfca8e`. Production verification confirmed 227 items, 56 new localized detail routes, 12 static media files with exact downloaded hashes and four full audio decodes, four real initial audio play/pause checks, and all eight desktop/mobile card geometry cases. A separate in-app browser verified all sixteen image targets: eight detail images and four listing images at each of the desktop and mobile viewport sizes. Every target actually decoded and matched its expected source, alt text and natural dimensions, with a current connected node, full visibility and no horizontal document overflow. Native screenshots are retained.

The Batch C receipt is `live_verified_with_loading_latency_observations`. Earlier Chrome 20-second and 60-second loading observations did not all pass. They remain in the evidence, including a cover response around 24 seconds and an audio response around 22 seconds; the cause is undetermined. The independent browser observations establish actual image functionality in opened pages. They do not establish cold-load speed, stable fast loading, uninterrupted streaming or all seek/resume behavior. No production styling, networking settings or business assertions were changed to hide these observations.

The authorized backfill is complete: seven coverage dates, fourteen new entries (five journal reports, two explicitly identified preprints and seven Industry reports), fourteen distinct cover masters and fourteen complete English AAC narrations totaling about 49 minutes. Across the three batches, the checks cover 196 localized detail routes and 42 static media references. Every content release passed the 169-test local release gate, build, typecheck and worktree checks before deployment. The original 213 published records were preserved. Local daily automation remains PAUSED with unchanged configuration hashes. English locale fallback and the unverified nonpublic draft/approved queue remain explicitly documented boundaries.

Final release receipts, immutable evidence snapshots, the reference-integrity check and the article-by-article execution report are retained under the ignored `tmp/backfill-20261020/` directory. This completion entry is a documentation-only follow-up to the deployed content revision `100d2f8`; it does not require a fourth production deployment.
