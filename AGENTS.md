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

## News and Academy Listing Card Numbering

- On every News and Academy landing or listing page, including localized and paginated routes such as `/en/academy?page=1`, every article or lesson card must display that item's identifier in the card's top-right corner.
- Use a concise content-label-plus-number format with a zero-padded two-digit sequence, such as `Conference Paper 01` or `AI Knowledge 01`. The wording and visual treatment may be refined to match the item's content type and page design, but both the label and number must remain visible.
- Keep each identifier stable for its item across locales, pagination, filtering, and future releases; do not restart numbering on each page or derive the identifier from the card's current on-screen position.

## Academy Illustration Art Direction

- Before generating Academy artwork, read `docs/academy-art-direction.md` and the installed `design-taste-frontend` Taste Skill.
- Each Academy lesson must use exactly one image asset and display it only once on the lesson detail page, not as separate cover and summary images. The same asset may also be used as the lesson-card thumbnail outside the lesson detail page.
- Keep all generated Academy images that have not yet been published on `www.aied.hk`; do not delete them. For future lesson releases, first select and publish a suitable image from this unpublished-image inventory. Once that inventory is exhausted, begin generating new images in accordance with the one-image-per-lesson rule.
- For all new Academy page images, use the owner-defined `真人质感风格`: show real teachers and learners visibly participating in a warm, bright, friendly, and immediately understandable teaching scene.
- Abstract geometric compositions and exhibition-installation-style imagery are not permitted for new Academy page images.
- Dense decorative fields of particles, granules, beads, pebbles, point clouds, scatter marks, confetti, glitter, stippling, dotted meshes, swarms, and other high-frequency micro-elements are forbidden.
- Sparse, semantically meaningful diagram nodes or ordinary photographed details are allowed. The rejection target is the high-density particle aesthetic, not every isolated dot.
- The `真人质感风格` itself is approved; only particle-heavy props or overlays within that photography are forbidden.
- Use low-density compositions with generous negative space and a controlled object count.
- Teachers and learners must have credible real-person photographic texture, natural anatomy, skin, hair, hands, clothing, and expressions. Cut-paper, clay, vector, cartoon, mannequin-like, or visibly rendered people are forbidden. If photorealism is not reliable, reject and regenerate the image; do not fall back to an abstract no-human composition.
- When the Fable 5 family is selected, its UI may inform restraint and hierarchy, but never copy Anthropic logos, wordmarks, butterflies, layouts, or proprietary assets.
- Reject the lesson image if it violates the Academy art-direction contract.

Run `npm run hygiene:check` before handoff and `npm run release:verify` before release/deploy.
