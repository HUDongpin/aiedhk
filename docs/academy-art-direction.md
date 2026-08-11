# Academy illustration art direction

This contract applies to the single image asset assigned to every Academy lesson.

## Design read

Academy artwork is high-production editorial education imagery for teachers and adult learners. It should feel intelligent, cinematic, approachable, and visually memorable without becoming decorative noise.

## Required visual family

Every Academy lesson image must use the owner-defined `真人质感风格`: credible editorial photography of real teachers and learners actively participating in a real educational or professional environment. The scene must feel warm, bright, friendly, and immediately understandable.

Use these Taste Skill settings to guide restraint and density:

- `DESIGN_VARIANCE: 7`
- `MOTION_INTENSITY: 1`
- `VISUAL_DENSITY: 2`

Natural faces, anatomy, skin, hair, hands, clothing, expressions, light, and spatial detail are mandatory. If reliable real-person texture cannot be achieved, reject and regenerate the image rather than falling back to abstract artwork.

Academy casting must be racially and ethnically diverse. Multi-person scenes must include teachers and learners from visibly different racial or ethnic backgrounds. Single-person scenes must rotate representation across the catalog. Do not default to an all-Asian cast, and avoid tokenism or stereotypes.

## Hard visual bans

Do not generate or approve:

- dense decorative fields of particles, granules, beads, pebbles, dots, or point clouds;
- high-frequency scatter fields, confetti, glitter, stippling, swarms, or dotted meshes;
- large collections of tiny repeated objects;
- abstract geometric compositions or exhibition-installation-style imagery;
- generic blue-purple AI gradients, neon glow, or glossy sci-fi surfaces;
- cut-paper, clay, vector, cartoon, mannequin-like, waxy, or visibly rendered people;
- a reused, recolored, or lightly modified Academy or News image;
- text, labels, numbers, logos, captions, or watermarks inside the artwork.
- blank paper, cards, notebooks, worksheets, or whiteboards; use meaningful lesson-related diagrams, sketches, or natural non-legible handwriting instead.

Subtle material shading is acceptable. It must not read as a grain or particle effect.

Sparse, semantically meaningful diagram nodes, isolated marks, or ordinary photographed details are acceptable. The rejection target is the high-density decorative particle field highlighted by the owner, not every individual dot.

## Preferred visual system

- Start with generous negative space and a controlled object count.
- Make the lesson concept legible through scale, separation, direction, and hierarchy.
- Show teachers and learners in a credible educational relationship and a natural teaching activity.
- Keep every visible teaching surface purposeful and nonblank without relying on generated readable text.

## Publication checks

- Assign exactly one image asset to each lesson. Render that same source image twice on every lesson detail page: once as the smaller top hero and once as the larger image immediately beneath the Full Lesson Summary heading. The two renders must use different responsive `sizes` contracts while preserving the identical bitmap, crop, scene, people, setting, objects, composition, and visual content. The same asset also serves as the listing-card and social-sharing image.
- Preserve unreferenced existing Academy images; do not delete them. Use suitable unpublished inventory before generating a new image.
- Normalize the selected lesson image to a real 1600x1000 PNG.
- Write literal alt text that describes visible content.
- Confirm every published Academy lesson image has a unique SHA-256 hash.
- Inspect the final normalized image at full size.
- Keep responsive delivery through `next/image`.
- Reject the lesson image if it violates this contract.

## References

- Taste Skill: https://www.tasteskill.dev/
- Taste Skill source: https://github.com/Leonxlnx/taste-skill
- Anthropic Fable 5: https://www.anthropic.com/claude/fable
