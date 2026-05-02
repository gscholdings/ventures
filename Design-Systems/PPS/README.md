# Pollack Peacebuilding Systems — Design System

> "The Calm Amidst the Storm." A brand system for a workplace‑conflict‑resolution
> consultancy. The visual identity has to bridge **high‑level corporate consultancy**
> and **deep psychological insight** — it should feel like a "deep breath" for a
> stressed executive: organized, steady, optimistic.

---

## Company at a glance

**Pollack Peacebuilding Systems (PPS)** is a workplace conflict resolution
consulting firm. They sell three buckets of services:

1. **Active intervention** — "We have a current coworker conflict" (mediation,
   coaching, facilitated dialogue).
2. **Training & prevention** — "We need conflict resolution training" (workshops,
   online courses, certifications).
3. **Content & thought leadership** — articles, free resources, keynote
   speaking from founder Jeremy Pollack, Ph.D.

Their audience is HR leaders, people‑ops directors, and executives at
organizations like the ones featured on their homepage rail (Deloitte, Coca‑Cola
Reyes Bottling, Instacart, Robinhood, Portland Housing Authority, UMass, etc.).

The brand promise: take an organization from **Acute Friction → Cohesive Unity**.
Every layout follows a **Problem → Solution → Proof** rhythm.

## Source materials provided

This system was built from a small reference pack the user uploaded — there is
**no codebase, no Figma, no formal brand book** in the project. Treat the
typography as a best‑effort substitution; flag fonts to the user before
shipping production work.

| File | Used for |
|---|---|
| `uploads/Logo.png` | Full logo on light. Sampled for navy + orange hex. |
| `uploads/Logo-WHITE.png`, `Logo-White-Transparent.png` | Logo for dark surfaces. |
| `uploads/Icon.png` | Standalone mark — six interlocked rings. |
| `uploads/Screenshot 2026-05-01 at 14.25.01.JPG` | Homepage hero + nav. |
| `uploads/Screenshot 2026-05-01 at 14.25.15.JPG` | "Meet Our Team" cards. |
| `uploads/Screenshot 2026-05-01 at 14.25.23.JPG` | "Latest Articles" block. |

If you have access to the live site (pollackpeacebuilding.com) or a brand book
PDF, drop it in `uploads/` and re‑run — type and motion details will sharpen.

---

## CONTENT FUNDAMENTALS

The voice is **Wise Expert, not Wellness Retreat**. It is direct and
solution‑oriented; it talks about hard things (conflict, friction, dysfunction)
without softening into therapy‑speak, and it talks about outcomes (peace,
unity, productivity) without sliding into corporate jargon.

### Voice & tone

- **Direct, problem‑first.** Headlines name the pain before they name the cure:
  *"Workplace Conflict Resolution Consulting Firm"*, *"Got conflict? We can help
  bring peace to your team."*
- **Confident, not clever.** No puns, no winking. The serif headlines do the
  heavy lifting; copy underneath is plain‑spoken.
- **Calm authority.** Sentences are short to medium length. No exclamation
  marks except in genuine claims of expertise (*"We're the Workplace Conflict
  Resolution experts!"*).
- **Empathetic, second‑person.** Talks to **"you"** and **"your team"**, not
  about "users" or "clients". The firm is **"we"**.

### Casing

- **Headlines: Title Case** — every major word capitalized, even short ones in
  some places. Serif display reinforces the editorial feel.
  *Example: "Who'll Be Working for You. Meet Our Team of Experts."*
- **Eyebrows / role labels: UPPERCASE, letter‑spaced.**
  *Example: `FOUNDER & PEACE DIRECTOR`, `ORGANIZATIONAL CULTURE`.*
- **Body: Sentence case.** Standard sentence punctuation. No quirks.
- **Buttons: Sentence case** with a leading capital.
  *Example: "We Have a Current Coworker Conflict", "We Need Conflict Resolution Training"* — buttons read like first‑person statements **the visitor would say**, not commands the brand barks at them.

### "I" vs "You"

- Brand → reader: **"you" / "your team" / "your organization"**.
- Reader → brand (the buttons): **"we"** ("We have a…", "We need…").
- Brand about itself: **"we" / "our"** ("our nationwide team").
- Founder bios are written in third person: *"As the founder of PPS, Jeremy
  oversees and consults with his team…"*.

### Color in copy

The orange is used **as a typographic highlight** for a single key word or
phrase per block — never for whole sentences:

- *"**Got conflict?** We can help bring **peace** to your team."*
- *"**Who'll Be Working for You.** Meet Our Team of Experts."* (entire
  question is orange; the answer is navy)
- *"**Workplace Conflict Resolution** Consulting Firm"*

Pick one phrase per heading. If everything is highlighted, nothing is.

### Length

- **Hero h1:** 3–6 words.
- **Section h2:** 6–10 words; often a question + answer pair.
- **Body paragraph:** 2–4 sentences. ~50–80 words.
- **Card descriptions:** 1–2 sentences, ~20–35 words.
- **Buttons:** 3–6 words.

### Emoji & exclamation

- **No emoji.** Ever. The brand reads as serious counsel.
- **Sparing exclamation points** — at most one per page section, only on
  expertise claims.
- **No em‑dash showmanship.** Periods over dashes; hyphens are fine.

### Specific examples (copy from live site)

- Hero: *"Workplace Conflict Resolution Consulting Firm"*
- Hero sub: *"Do you have a current workplace conflict that needs to be addressed, or are you looking for training to reduce or prevent future conflicts? We're the Workplace Conflict Resolution experts!"*
- Section header: *"Got conflict? We can help bring peace to your team"*
- Team intro: *"Our nationwide team of coaches, trainers, and peacebuilders have diverse conflict management experiences and methodologies that inform the solutions to your organization's needs."*
- Content section: *"Latest Articles" / "Read our latest blog posts to discover the latest research, tips, and advice to improve your workplace culture and resolve workplace conflicts more quickly."*

---

## VISUAL FOUNDATIONS

### Color

Two brand colors carry the identity. Everything else is warm neutral.

- **Navy `#0F2E3C` — Strategic Peacebuilding.** Headlines, primary buttons,
  dark cards, footer. The "ground" of the system. Sampled directly from
  `Logo.png`.
- **Orange `#F16334` — Transformation.** Accent only. Highlight words, primary
  CTAs, eyebrow labels, link color, single‑card "feature" backgrounds in a
  3‑up grid. Roughly 5–10% of pixels in any given layout. Sampled from `Icon.png`.
- **Bone `#FAF7F3`** — default page background. Warm off‑white, never pure
  `#FFFFFF` for full pages.
- **Mist `#F1EEE9` / Fog `#E4E0D9`** — section bands, hairlines.
- **Stone `#6B6F76`** — secondary body text on light backgrounds.

The site avoids bright reds entirely (`#FF0000` reads as "danger" — exactly
what a conflict‑resolution firm wants to NOT evoke). Critical/error states
use a muted clay (`#B14A3A`) or the navy itself.

### Typography

- **Display: serif.** The live site uses an editorial serif for all major
  headlines (the wordmark "Pollack" is set in a serif). We've substituted
  **Playfair Display** as the closest free Google Font; flag this to the user.
  Display weight is 700–800, tight leading (`1.1`–`1.25`), tight tracking
  (`-0.01em` to `-0.02em`).
- **Body: humanist sans.** **Source Sans 3** as substitution. Generous
  leading (`1.65`) for "easy to digest". Body color is Stone, not pure black.
- **Eyebrow: spaced uppercase sans.** Letter‑spacing `0.18em`, weight 600,
  13px. Always orange.
- **Italic accent:** italics on a single word inside a serif headline is a
  legit move (matches *"peace"* in the homepage h2).

### Spacing & layout

- **4px base.** Scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128.
- **Generous negative space** around hero blocks (`128px` top/bottom
  desktop). Mental clarity is a design goal, not just a tagline.
- **12‑column grid** with `1200px` max width and a `clamp(1.25rem, 4vw, 3rem)`
  side padding.
- Section headers sit **left‑aligned** more often than centered, like an
  editorial page. Centered is reserved for full‑bleed hero overlays.

### Backgrounds

- Default page: warm bone (`--pps-bone`).
- Section bands: alternate bone / mist for vertical rhythm.
- **Full‑bleed photo heroes** with a desaturated dark navy overlay for
  legibility (Articles section uses a navy + orange duotone treatment).
- **No hand‑drawn illustrations, no patterns, no gradients** as primary
  backgrounds. The one exception: a **navy → soft‑navy** vertical gradient
  is acceptable on the very largest dark blocks. No bluish‑purple gradients,
  no synthwave, no aurora.
- Photography duotone — when a photo is used as a background under text,
  push it to navy mid‑tones with a touch of orange highlight. Never neon.

### Imagery

- **Candid, high‑quality photos of people in active collaboration** — leaning
  in, listening, talking with their hands.
- **Warm color tone** — natural light, slightly warm white balance, no heavy
  filters, no black‑and‑white, no grain.
- **Real diversity** — age, race, gender. Not stock‑photo "diversity" tropes.
- Imagery is always **rectangular, sharp‑cornered or barely rounded** (4–8px),
  with a soft drop shadow on cards. **No circular avatars** in marketing — but
  team headshots are full‑bleed rectangles.
- The "+" plus button overlay on article cards is an orange circle in the
  top‑left of the image.

### Borders, shadows, corners

- **Corner radii:** mostly `0` or `4–8px` for cards. **Buttons are full
  pills** (`999px`) — this is the most distinctive shape choice. Avoid
  inventing other curvy shapes.
- **Hairline borders:** `1px solid var(--pps-fog)` for dividers, never
  thicker.
- **Shadows are subtle** — `0 8px 20px rgba(15,46,60,0.10)` on cards;
  `0 30px 60px -20px rgba(15,46,60,0.35)` on hero imagery for editorial
  weight. No neumorphism, no inner shadows.

### Buttons

- **Pill‑shape, generous horizontal padding** (`24–32px`).
- **Two flavors only:**
  - Primary orange — orange fill, white text. CTA.
  - Primary navy — navy fill, white text. Secondary CTA, often paired with
    orange (the homepage hero uses both).
- Hover: 8% darker fill (`--pps-orange-deep`, `--pps-navy-deep`).
- Press: scale `0.98`, no color shift.
- No outline buttons in the reference set. If needed, use a navy outline on
  bone — never an orange outline (reads as cheap).

### Animation & motion

- **Restrained.** This is not an animated brand.
- Primary use: **fade + 8px upward translation** on scroll‑in
  (`240ms cubic-bezier(0.22, 1, 0.36, 1)`). Use sparingly.
- Hover: color transition only, `150ms`.
- **No bounces, no springs, no marquee, no parallax.** The brand sells calm.

### Hover & press states

- **Links:** orange → orange‑deep, underline draws in.
- **Buttons:** fill darkens 8%; on press, `transform: scale(0.98)`.
- **Cards:** lift `2px` and shadow grows from `--shadow-sm` to `--shadow-md`
  over `240ms`. Image inside card may scale to `1.03` if it's a photo card.
- **Images in galleries:** orange duotone overlay fades in, plus icon scales
  `1.1`.

### Transparency & blur

- **Blur is rare.** The only place I'd use it: a sticky header on scroll
  (`backdrop-filter: blur(12px)` over `rgba(250,247,243,0.85)`).
- Photo overlays use **solid color at low alpha** (e.g. `rgba(15,46,60,0.55)`),
  not blur.

### Fixed / sticky elements

- **Header is sticky** on the live site. On scroll past hero it shrinks
  and gets the bone‑with‑blur treatment.
- The site has a **fixed right‑side "Contact Us" rail** in orange — this is
  a strong brand signature; replicate it on long‑scroll pages.

### Cards

- **Photo card:** rectangular image with `4px` rounded corners on top, body
  pad `24px`, navy background fill for body, white text. Used for team and
  article cards. **One card in a 3‑up gets the orange fill** as the visual
  anchor.
- **Article card:** photo, orange `+` icon top‑left of image, orange title,
  navy body text on bone background, orange tag pill bottom‑left.

---

## ICONOGRAPHY

PPS does **not** ship a documented icon set in the reference materials.
The screenshots show:

- **Logo mark:** six interlocked teardrop rings — three navy, three orange —
  rotationally symmetric. Used as favicon and standalone mark.
- **Outlined line icons** in cards (e.g. a target, a handshake). Single
  weight (~1.5–2px stroke), rounded line caps, monochrome navy on the
  white circle that sits over each card photo.
- **Social icons** in the top header (Facebook, LinkedIn, X, Instagram, TikTok,
  Google, Yelp) — solid black/dark, single weight, simple glyphs.
- **No emoji.** Ever.

### Recommended icon system

Use **Lucide** (formerly Feather) via CDN — its line weight (`1.5–2px`),
rounded caps, and 24×24 grid match the look of the site's existing card
icons exactly. Flagged substitution: confirm with the user that we should
use Lucide vs. their actual designer's set.

```html
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="handshake"></i>
<script>lucide.createIcons();</script>
```

For a per‑icon SVG (no JS), use:
`https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/<name>.svg`

**Recommended Lucide icons for common PPS contexts:**
- Mediation / dialog: `messages-square`, `handshake`, `users`
- Training / programs: `book-open`, `presentation`, `graduation-cap`
- Assessment / tools: `clipboard-check`, `target`, `compass`
- Outcomes: `trending-up`, `heart-handshake`, `shield-check`
- Navigation: `arrow-right`, `chevron-right`, `play-circle`

Stroke width: **1.75** for in‑text icons, **1.5** for large card icons.
Color: `currentColor` so they pick up the link/heading color.

### Logos

- `assets/logo-color.png` — full lockup on light backgrounds.
- `assets/logo-white.png`, `assets/logo-white-transparent.png` — for navy
  backgrounds.
- `assets/icon-mark.png` — standalone mark for favicons / avatars.

---

## Index

```
.
├── README.md                  ← you are here
├── colors_and_type.css        ← all CSS variables + element defaults
├── SKILL.md                   ← portable skill manifest (Claude Code compatible)
├── assets/
│   ├── icon-mark.png
│   ├── logo-color.png
│   ├── logo-white.png
│   ├── logo-white-transparent.png
│   ├── reference-homepage-hero.jpg
│   ├── reference-team.jpg
│   └── reference-articles.jpg
├── preview/                   ← cards rendered in the Design System tab
│   ├── tokens-colors-brand.html
│   ├── tokens-colors-neutrals.html
│   ├── tokens-colors-semantic.html
│   ├── type-display.html
│   ├── type-body.html
│   ├── type-eyebrow.html
│   ├── type-scale.html
│   ├── tokens-spacing.html
│   ├── tokens-radius.html
│   ├── tokens-shadow.html
│   ├── components-buttons.html
│   ├── components-cards.html
│   ├── components-form.html
│   ├── components-eyebrow-headline.html
│   ├── brand-logos.html
│   └── brand-icon-mark.html
└── ui_kits/
    └── website/
        ├── README.md
        ├── index.html
        ├── Header.jsx
        ├── Hero.jsx
        ├── LogoBar.jsx
        ├── ServiceCards.jsx
        ├── TeamGrid.jsx
        ├── ArticleGrid.jsx
        ├── Footer.jsx
        └── ui.jsx          ← Button, Eyebrow, Section primitives
```

### Caveats / open questions

- **Fonts are substituted.** Playfair Display and Source Sans 3 are
  approximate Google Font matches. Replace with the brand's actual
  licensed display serif and body sans when the user provides them.
- **No icon library in the source.** Lucide is the recommended substitution.
- **No live site code or Figma** was provided — only logos + screenshots.
  The marketing‑site UI kit is a high‑fidelity recreation against the three
  screens we have, not a port of production code.
