# AIEDHK Worktree Hygiene

AIEDHK uses Git as the source boundary. Local generated files, credentials, and deployment state stay outside tracked source.

## Clean Source Boundary

Tracked source includes application code, tests, migrations, public runtime assets, design options, package files, and project configuration.

Do not track local-only material:

- `.next/`
- `node_modules/`
- `.playwright-cli/`
- `output/`
- `outputs/`
- `tmp/`
- `.vercel/`
- `.env*`, except `.env.example`
- `All API Keys*.docx`
- `tsconfig.tsbuildinfo`

## Worktree Flow

Use `main` as the clean integration branch. For new work:

```bash
git worktree add ../aiedhk-worktrees/<slug> -b codex/YYYYMMDD-<slug>
```

Finish each worktree by committing, discarding, or archiving reviewed changes. Remove merged worktrees and run `git worktree prune` when cleanup is complete.

## Overlap Classification

Run `npm run hygiene:overlap` before integrating concurrent work. The check compares the current candidate paths with other registered worktrees and reports four states:

- `active-writer`: the worktree has uncommitted files. Only an exact path overlap with this state blocks the check.
- `completed-clean`: the worktree is clean and has no patch that is still unique relative to `origin/main`. Patch-equivalent cherry-picks count as integrated, so a finished branch may remain registered without impersonating an active writer.
- `idle-unintegrated`: the worktree is clean but still has a unique patch. It is reported for follow-up but does not claim that someone is currently writing there.
- `prunable`: the registered worktree is missing or already marked prunable.

`release:verify` runs the overlap check before and after the build so a newly introduced active-writer collision cannot pass silently.

## Verification

Before handoff:

```bash
npm run hygiene:check
```

Before release or deployment:

```bash
npm run release:verify
```

Deploy only from a clean committed revision.
