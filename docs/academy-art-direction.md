# Academy illustration art direction

This contract applies to every Academy cover and summary illustration.

## Design read

Academy artwork is editorial education imagery for teachers and adult learners. It should feel calm, intelligent, approachable, and visually memorable without becoming decorative noise.

## Approved visual families

Choose the visual family that best communicates the lesson. A cover and summary image may use different approved families when that makes them clearly distinct.

### Fable 5-informed editorial abstraction

Anthropic's Fable 5 product UI may inform the restraint of the work: generous ivory space, near-black structure, a single muted accent, large confident forms, and clear hierarchy. Create original AIEDHK artwork. Never copy Anthropic logos, wordmarks, butterflies, layouts, or proprietary assets.

### Taste Skill-directed visual design

Start from these Taste Skill defaults, then adapt them to the lesson:

- `DESIGN_VARIANCE: 7`
- `MOTION_INTENSITY: 1`
- `VISUAL_DENSITY: 2`

### 真人质感风格

This owner-defined style uses credible editorial photography of real people in real educational or professional environments. Natural faces, anatomy, skin, hair, hands, clothing, expressions, light, and spatial detail are part of the style and are approved. The style does not require Fable 5 colors or Taste Skill geometry.

The photographic style is not the problem shown in the rejected reference. Only the dense particle installation within that otherwise acceptable photographic scene is forbidden.

## Hard visual bans

Do not generate or approve:

- dense decorative fields of particles, granules, beads, pebbles, dots, or point clouds;
- high-frequency scatter fields, confetti, glitter, stippling, swarms, or dotted meshes;
- large collections of tiny repeated objects;
- generic blue-purple AI gradients, neon glow, or glossy sci-fi surfaces;
- cut-paper, clay, vector, cartoon, mannequin-like, waxy, or visibly rendered people;
- a reused, recolored, or lightly modified Academy or News image;
- text, labels, numbers, logos, captions, or watermarks inside the artwork.

Subtle material shading is acceptable. It must not read as a grain or particle effect.

Sparse, semantically meaningful diagram nodes, isolated marks, or ordinary photographed details are acceptable. The rejection target is the high-density decorative particle field highlighted by the owner, not every individual dot.

## Preferred visual system

- Start with generous negative space and a controlled object count.
- For abstract work, prefer a few large paper, ceramic, architectural, or editorial forms.
- For Fable 5-informed work, use one accent color with ivory and near-black neutrals.
- Give the cover and summary image different compositions and visual metaphors.
- Make the lesson concept legible through scale, separation, direction, and hierarchy.
- Include people only when they clarify the educational relationship.
- When people appear, use the `真人质感风格`: credible editorial photographic realism with natural anatomy, skin, hair, hands, fabric, expressions, lighting, and environment.
- If reliable real-person texture cannot be achieved, use a strong abstract composition with no people.

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
