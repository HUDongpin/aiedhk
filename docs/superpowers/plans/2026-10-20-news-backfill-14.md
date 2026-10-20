# News backfill: 14–20 October 2026

The owner authorized completing fourteen News articles in three production batches on 20 October 2026. Each date receives one research summary and one clearly labelled Industry report. Daily automation remains paused.

The starting production deployment is `dpl_C12hvV5ReUQsHF56qzoVUJmr46nM`, with the 213-article content and pagination revision `0a6d73d44550c852fc39f33ac7001b803b42d37d`. The isolated working branch is `codex/20261020-news-backfill-14`.

| Batch | Coverage dates | IDs | Expected live total | Status |
|---|---|---|---:|---|
| A | 14–15 October | 214–217 | 217 | In progress |
| B | 16–18 October | 218–223 | 223 | Planned |
| C | 19–20 October | 224–227 | 227 | Planned |

Each article retains the existing 480–600-word English summary, three takeaways, educational relevance, a distinct photographic master copied to the two News image paths, and complete static English narration. Coverage dates use the existing owner-approved `createdAt` convention; release receipts record actual deployment times separately. Unreviewed locales retain the existing English fallback and do not claim localized audio.

Read original methods, results and limitations before approving a research summary. Check primary-source dates, DOI/title/event duplication and source URL uniqueness. Preserve existing source and media constraints. Distinguish research findings, vendor descriptions and proposed instructional uses.

Review and commit content, images and audio together. Run `npm run release:verify` from each clean committed batch. Verify the actual production alias, complete public inventory, new detail pages, stable identifiers, localizations and static media. Observe real initial audio playback, time advancement and pause; do not infer uninterrupted streaming or every seek behavior from those checks.

Local evidence, candidate drafts, prompts, audio receipts and release reports are retained outside Git under `tmp/backfill-20261020/`. This task does not restore the daily automation, send newsletters, change existing articles, fill the separate 22 August gap, or expand localization.
