# AIEDHK Codex Instructions

## Worktree Hygiene

- Treat `main` as the clean integration branch.
- Do not deploy from a dirty checkout. Use a committed, clean revision.
- Do feature work in a branch or Git worktree. Preferred shape:
  `git worktree add ../aiedhk-worktrees/<slug> -b codex/YYYYMMDD-<slug>`.
- Commit, discard, or archive reviewed changes before handoff. Do not leave mixed work in `main`.
- Keep local artifacts outside Git. Generated and local-only paths include `.next/`, `node_modules/`, `.playwright-cli/`, `output/`, `outputs/`, `tmp/`, `.vercel/`, and `tsconfig.tsbuildinfo`.
- Never commit or print secret-bearing files or values, including `.env*` and `All API Keys*.docx`. `.env.example` may contain variable names only.
- Research News automation must check existing entries for duplicates first, commit reviewed data and static audio together, and deploy only from a clean commit.

Run `npm run hygiene:check` before handoff and `npm run release:verify` before release/deploy.
