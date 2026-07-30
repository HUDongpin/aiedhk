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
- Use a concise content-label-plus-number format with a minimum two-digit, zero-padded sequence, such as `Conference Paper 01` or `AI Knowledge 01`. Use two digits for `01` through `99`, three digits for `100` through `999`, four digits for `1000` through `9999`, and continue expanding the number of digits as the sequence grows. The wording and visual treatment may be refined to match the item's content type and page design, but both the label and full number must remain visible.
- Keep each identifier stable for its item across locales, pagination, filtering, and future releases; do not restart numbering on each page or derive the identifier from the card's current on-screen position.

## Academy Illustration Art Direction

- Before generating Academy artwork, read `docs/academy-art-direction.md` and the installed `design-taste-frontend` Taste Skill.
- Each Academy lesson must declare exactly one image asset. On the lesson detail page, render that same asset once in the top hero and once beneath `Full Lesson Summary`; only the rendered dimensions and responsive `sizes` may differ. Never introduce separate cover and summary image fields or files. The same asset also serves as the listing-card and social-sharing image.
- Keep all generated Academy images that are not assigned to a published lesson, including decommissioned second-detail images in `public/images/academy/summary/`, as future lesson-cover inventory; do not delete them. Before generating new artwork, first review this inventory. When a suitable legacy summary image is selected, preserve it by moving it to that lesson's canonical `public/images/academy/covers/` path and use it as the lesson's single image asset. Generate new images only after the inventory is exhausted.
- For all new Academy lesson images, use the owner-defined `真人质感风格`: show real teachers and learners visibly participating in a warm, bright, friendly, and immediately understandable teaching scene.
- Academy imagery that includes people must satisfy a racial- and ethnic-diversity requirement. Multi-person scenes must include teachers and learners from visibly different racial or ethnic backgrounds; single-person scenes must rotate representation across the Academy catalog. Do not default to an all-Asian cast, and avoid tokenism or stereotypes.
- Abstract geometric compositions and exhibition-installation-style imagery are not permitted for new Academy page images. Fable 5 and the Taste Skill may inform restraint, hierarchy, and layout only; they must not be used to justify abstract subject matter.
- Dense decorative fields of particles, granules, beads, pebbles, point clouds, scatter marks, confetti, glitter, stippling, dotted meshes, swarms, and other high-frequency micro-elements are forbidden.
- Sparse, semantically meaningful diagram nodes or ordinary photographed details are allowed. The rejection target is the high-density particle aesthetic, not every isolated dot.
- The `真人质感风格` itself is approved; only particle-heavy props or overlays within that photography are forbidden.
- Use low-density compositions with generous negative space and a controlled object count.
- Visible paper, cards, notebooks, worksheets, and whiteboards must contain credible lesson-related content; they must not be blank. Prefer meaningful diagrams, sketches, or natural non-legible handwriting over generated readable text.
- Teachers and learners must have credible real-person photographic texture, natural anatomy, skin, hair, hands, clothing, and expressions. Cut-paper, clay, vector, cartoon, mannequin-like, or visibly rendered people are forbidden. If photorealism is not reliable, reject and regenerate the image; do not fall back to an abstract no-human composition.
- When the Fable 5 family is selected, its UI may inform restraint and hierarchy, but never copy Anthropic logos, wordmarks, butterflies, layouts, or proprietary assets.
- Reject the lesson image if it violates the Academy art-direction contract.

Run `npm run hygiene:check` before handoff and `npm run release:verify` before release/deploy.
