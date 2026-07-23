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
- Each Research News article must have a different cover image; do not reuse the same cover file or visually duplicate cover art across articles.

## Academy Illustration Art Direction

- Before generating Academy artwork, read `docs/academy-art-direction.md` and the installed `design-taste-frontend` Taste Skill.
- Academy has three approved visual families: Fable 5-informed editorial abstraction, Taste Skill-directed visual design, and the owner-defined `真人质感风格` (credible editorial photography of real people and real environments).
- Dense decorative fields of particles, granules, beads, pebbles, point clouds, scatter marks, confetti, glitter, stippling, dotted meshes, swarms, and other high-frequency micro-elements are forbidden.
- Sparse, semantically meaningful diagram nodes or ordinary photographed details are allowed. The rejection target is the high-density particle aesthetic, not every isolated dot.
- The `真人质感风格` itself is approved; only particle-heavy props or overlays within that photography are forbidden.
- Use low-density compositions with generous negative space and a controlled object count.
- If people appear, they must have credible real-person photographic texture, natural anatomy, skin, hair, hands, clothing, and expressions. Cut-paper, clay, vector, cartoon, mannequin-like, or visibly rendered people are forbidden; use an abstract no-human composition instead if photorealism is not reliable.
- When the Fable 5 family is selected, its UI may inform restraint and hierarchy, but never copy Anthropic logos, wordmarks, butterflies, layouts, or proprietary assets.
- Reject both lesson images if either the cover or summary illustration violates the Academy art-direction contract.

Run `npm run hygiene:check` before handoff and `npm run release:verify` before release/deploy.
