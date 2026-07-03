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
