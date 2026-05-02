---
name: pollack-peacebuilding-design
description: Use this skill to generate well-branded interfaces and assets for Pollack Peacebuilding Systems (PPS) — a workplace conflict resolution consulting firm. Use for production work or throwaway prototypes/mocks/decks. Contains brand colors, typography, fonts, logos, voice/tone guidelines, iconography rules, and a marketing-website UI kit with reusable JSX components.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

Key files:
- `README.md` — full system: company context, content fundamentals (voice/tone/casing), visual foundations (color/type/spacing/motion), iconography rules
- `colors_and_type.css` — drop-in stylesheet with all CSS custom properties + element defaults
- `assets/` — logos (color, white, white-transparent, icon mark), reference screenshots
- `ui_kits/website/` — high-fidelity recreation of the PPS marketing site as JSX components (Header, Hero, ServiceCards, TeamGrid, ArticleGrid, Footer + ui.jsx primitives)
- `preview/` — design system specimen cards (colors, type, spacing, components, brand)

Brand essentials at a glance:
- Two-color brand: Navy `#0F2E3C` + Orange `#F16334` on warm Bone `#FAF7F3`
- Display: Playfair Display (serif). Body: Source Sans 3. (Both substituted Google Fonts — flag if user provides licensed brand fonts.)
- Buttons are full-pill with ALL-CAPS letter-spaced labels
- No emoji. No bright reds. No gradients (except subtle navy depth). No bouncy animation.
- Voice: Wise Expert, direct, problem-first ("Got conflict? We can help bring peace to your team")
- Highlight ONE word/phrase per heading in orange — never whole sentences
- Imagery: candid photos of active human collaboration, warm tones, never grainy/B&W

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out of `assets/` and create static HTML files for the user to view, importing `colors_and_type.css`. If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
