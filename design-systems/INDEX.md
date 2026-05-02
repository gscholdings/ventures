# GSC Design Systems — Index

This folder is a registry of brand and design systems for the ventures inside GSC's portfolio. Each subfolder is one venture's complete visual identity — design tokens, brand assets, reference uploads, preview cards, and a website UI kit — packaged so that any agent or designer can drop into a venture and start producing on-brand work without rediscovering the system from scratch.

## How to use this with a remote Claude

A remote Claude (e.g. on claude.ai) reads this registry through the deployed Netlify mirror. Its `web_fetch` tool can only retrieve URLs that have already appeared in conversation context — it can't list directories or guess paths. So the workflow is:

1. Paste the **full URL to this file** into the chat:
   `https://gsc-ventures.netlify.app/design-systems/INDEX.md`
2. Claude fetches it and now has every venture's entry-point URL in context.
3. Claude follows the entry-point URL for the venture you care about. That venture's `README.md` opens with a **File map (for remote fetchers)** section that lists every file in the folder by full URL — once Claude has that page, it can reach any asset, token file, preview card, or UI-kit component in the system.

This chained-fetch pattern (`INDEX.md` → venture `README.md` → individual files) is the only way the remote tool can navigate. Relative paths work for humans on GitHub but are useless to `web_fetch`; that's why every URL in this registry is fully qualified.

## Registry

| Brand | Status | Entry point |
|---|---|---|
| **Pollack Peacebuilding Systems (PPS)** | active | https://gsc-ventures.netlify.app/design-systems/pps/README.md |
<!-- Template — copy and uncomment when adding a new venture:
| **Venture Name (CODE)** | active | https://gsc-ventures.netlify.app/design-systems/CODE/README.md |
-->

## Conventions

Every brand folder under `design-systems/` follows the same shape. A remote Claude can predict these paths from the entry-point URL alone:

| Path | Purpose |
|---|---|
| `README.md` | Entry point. Must open with a **File map (for remote fetchers)** section before any prose. Then narrative on positioning, voice, content fundamentals, layout, and component spec. |
| `SKILL.md` | Skill-tool front-matter version of the brand brief — for invocation as a Claude Code / Claude API skill. |
| `colors_and_type.css` | Design tokens as CSS custom properties: brand colors, neutrals, semantic colors, type scale, spacing, radius, shadow. The single source of truth for tokens. |
| `assets/` | Production-ready brand assets that the system itself produces — cleaned logos, derived icon marks, processed reference imagery. Stable filenames; safe to link from live products. |
| `preview/` | Static HTML preview cards, one per token group or component. Useful for visual review and for AI agents that need a rendered example to reason about. |
| `ui_kits/website/` | Production-grade React/JSX components implementing the system for a marketing-site context. Each kit has its own `README.md` describing component contracts. |
| `uploads/` | Raw source materials the user provided (logos, screenshots, brand-book PDFs). Treated as input, not output — re-running the generator on richer uploads sharpens the system. |

**Load-bearing rule for future ventures.** Every brand folder's `README.md` MUST open with a **File map (for remote fetchers)** section listing every file in the folder by full Netlify URL, grouped by purpose. Treat this section as load-bearing — it's the only way a remote Claude can navigate the system. Generate it with `tools/generate-file-map.py <venture-path> --write` so it doesn't drift; the script wraps the section in `<!-- FILE_MAP_START -->` / `<!-- FILE_MAP_END -->` markers and re-runs idempotently. Each venture's structure can vary — known folders (`assets/`, `uploads/`, `preview/`, `ui_kits/<kit>/`) get named buckets; any other subfolder auto-appears as a `Custom` bucket, so unique files (motion specs, brand-book PDFs, Figma exports) get mapped without script changes. **After every run of the generator, commit and push the regenerated README** — Netlify deploys on push, and a stale file map on the live site will silently break remote navigation. Never hand-write the section.

## Adding a new venture

1. **Create the folder** at `design-systems/<code>/` using a short lowercase code (e.g. `pps`, `tma`).
2. **Drop raw brand materials** into `<code>/uploads/` — logos, screenshots, brand-book PDFs, anything the user has.
3. **Run the design-system generator** to produce `colors_and_type.css`, the contents of `assets/`, the cards in `preview/`, and the components in `ui_kits/website/`.
4. **Author `README.md`** so it opens with the **File map (for remote fetchers)** section followed by the narrative brand brief. Drop the `<!-- FILE_MAP_START -->` / `<!-- FILE_MAP_END -->` markers where the section should live (right after the title block, before any prose), then run `python3 tools/generate-file-map.py design-systems/<code> --write` to fill it in. Re-run the same command after any change to the venture folder. Author a matching `SKILL.md`.
5. **Register the entry** in this `INDEX.md` — add a row to the registry table with the venture's full Netlify entry-point URL.
6. **Commit and push to the GitHub remote** — `git add design-systems/<code> design-systems/INDEX.md && git commit -m "Add <code> design system" && git push`. Netlify is wired to the repo for continuous deployment, so the push is what actually publishes the new URLs. Nothing is live until you push.
7. **Wait for the Netlify deploy** to go green (the dashboard will show the new commit), then **smoke-test from a remote Claude**: paste the INDEX URL, ask Claude to fetch the new venture's README, then ask it to fetch one asset URL from the file map. If all three resolve as `text/markdown` or the expected MIME, the venture is navigable.
