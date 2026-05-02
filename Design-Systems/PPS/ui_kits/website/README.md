# Pollack Peacebuilding — Marketing Website UI Kit

A high-fidelity recreation of the PPS marketing site, built from the three reference screenshots in `assets/`. No production code was provided — these JSX components are cosmetic recreations, not ports.

## Files
- `index.html` — interactive demo: hero, logos, services, team grid, articles, footer
- `ui.jsx` — primitives: `Button`, `Eyebrow`, `Section`, `Container`, `AccentWord`
- `Header.jsx` — top bar (utility row + nav + sticky contact rail)
- `Hero.jsx` — full-bleed photo hero with two-tone CTAs
- `LogoBar.jsx` — "as featured" client logo strip
- `ServiceCards.jsx` — 3-up service cards with icon medallions
- `TeamGrid.jsx` — 3-up team cards (one orange, two navy)
- `ArticleGrid.jsx` — duotone-overlay article grid
- `Footer.jsx` — navy footer with logo + columns

## What is interactive
- Header search popover toggles
- Hero CTAs cycle three offer states
- Article + button hover/press states animate
- Right rail "Contact Us" persists on scroll

## Caveats
- No real photographs in assets — using subtle gradient placeholders sized like the originals.
- Lucide icon set is a substitution; actual site appears to use a similar line-icon system.
- Fonts are Google Fonts substitutes (Playfair Display + Source Sans 3).
