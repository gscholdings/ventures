# GSC Ventures

Internal registry for GSC portfolio ventures. Mirrored to Netlify so remote agents can navigate by URL.

## What's here

- **[`design-systems/`](design-systems/)** — brand and design systems, one folder per venture. Start at [`design-systems/INDEX.md`](design-systems/INDEX.md).
- **[`tools/`](tools/)** — utility scripts (e.g. `generate-file-map.py` for keeping each venture's File map section in sync).
- **`netlify.toml`** — deploy config: serves `.md` as `text/markdown`, redirects `/design-systems/` → `/design-systems/INDEX.md`.

## Live site

https://gsc-ventures.netlify.app/

Deployed from `main` via Netlify continuous deployment.
