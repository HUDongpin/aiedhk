# Academy illustration art direction

This contract applies to every Academy cover and summary illustration.

## Design read

Academy artwork is high-production editorial education imagery for teachers and adult learners. It should feel intelligent, cinematic, approachable, and visually memorable without becoming decorative noise.

## Current visual target

Use concept-rich technology editorial photography: credible real teachers and learners visibly investigate, build, compare, or explain one lesson-specific physical or optical apparatus in a contemporary lab, studio, maker space, or advanced learning environment. Use architectural depth, controlled contrast, refined materials, and a restrained luminous accent to make the lesson concept immediately legible.

The desired result should feel like a carefully art-directed technology magazine feature, not an ordinary classroom snapshot. A cover and summary image must still use different compositions and concept-specific props.

Luminous elements must be sparse continuous surfaces, lines, planes, or a small number of large nodes. They may clarify the educational concept, but they must never become a dense particle field, dotted mesh, or decorative sci-fi overlay.

## Supporting design systems

### Fable 5-informed restraint

Anthropic's Fable 5 product UI may inform the restraint of the work: generous ivory space, near-black structure, a single muted accent, large confident forms, and clear hierarchy. Create original AIEDHK artwork. Never copy Anthropic logos, wordmarks, butterflies, layouts, or proprietary assets.

### Taste Skill-directed visual design

Start from these Taste Skill defaults, then adapt them to the lesson:

- `DESIGN_VARIANCE: 7`
- `MOTION_INTENSITY: 1`
- `VISUAL_DENSITY: 2`

### 真人质感风格

This owner-defined style uses credible editorial photography of real people in real educational or professional environments. Natural faces, anatomy, skin, hair, hands, clothing, expressions, light, and spatial detail are part of the style and are approved. The style does not require Fable 5 colors or Taste Skill geometry.

The real-person photographic style and technology-studio setting are approved. Only dense particle installations or decorative micro-detail within that otherwise acceptable direction are forbidden.

## Rejected plain-classroom pattern

Do not default to generic beige classrooms, routine meeting-table scenes, blank prompt cards, plain worksheets, ordinary whiteboards, or minimally staged exercises as the main visual idea. These props may appear incidentally when genuinely needed, but they cannot carry the composition by themselves. The image needs a distinctive, lesson-specific teaching apparatus or visual metaphor with the production quality of technology editorial photography.

## Hard visual bans

Do not generate or approve:

- dense decorative fields of particles, granules, beads, pebbles, dots, or point clouds;
- high-frequency scatter fields, confetti, glitter, stippling, swarms, or dotted meshes;
- large collections of tiny repeated objects;
- generic blue-purple AI gradients, uncontrolled neon glow, or glossy sci-fi surfaces with no lesson-specific meaning;
- cut-paper, clay, vector, cartoon, mannequin-like, waxy, or visibly rendered people;
- a reused, recolored, or lightly modified Academy or News image;
- text, labels, numbers, logos, captions, or watermarks inside the artwork.

Subtle material shading is acceptable. It must not read as a grain or particle effect.

Sparse, semantically meaningful diagram nodes, isolated marks, or ordinary photographed details are acceptable. The rejection target is the high-density decorative particle field highlighted by the owner, not every individual dot.

## Preferred visual system

- Start with generous negative space and a controlled object count.
- Use one concept-specific physical or optical apparatus as the visual anchor.
- Use a restrained luminous accent with ivory, near-black, metal, glass, or natural wood materials.
- Give the cover and summary image different compositions and visual metaphors.
- Make the lesson concept legible through scale, separation, direction, and hierarchy.
- Show real teachers and learners visibly participating in the educational relationship.
- Use the `真人质感风格`: credible editorial photographic realism with natural anatomy, skin, hair, hands, fabric, expressions, lighting, and environment.
- If reliable real-person texture cannot be achieved, reject and regenerate the image; do not fall back to an abstract no-human composition.

## Publication checks

- Generate new artwork for both the cover and summary image.
- Normalize each image to a real 1600x1000 PNG.
- Write literal alt text that describes visible content.
- Confirm every Academy image has a unique SHA-256 hash.
- Inspect the final normalized images at full size.
- Keep responsive delivery through `next/image`.
- Reject the entire media pair if either image violates this contract.

## References

- Taste Skill: https://www.tasteskill.dev/
- Taste Skill source: https://github.com/Leonxlnx/taste-skill
- Anthropic Fable 5: https://www.anthropic.com/claude/fable
