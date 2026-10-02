# Project Instructions

Static GitHub Pages portfolio for Adrian Caamino (Unity developer). No build step, package manager, tests, or linter. Plain HTML/CSS/JS.

## Commands

```bash
python -m http.server 8000   # local preview at http://localhost:8000
```

## Architecture

- `index.html` is the live portfolio; its JS is inline. `Improvements.md` is its review backlog.
- Styles: `css/main.css` is the base (and on its own, the Classic design). `css/key-art.css` is a design layer loaded after it that overrides tokens and layout. The `key-art.css` `<link>` in `index.html` is the design switch: delete it to go back to Classic. Content is written once; designs only differ in CSS.
- New designs go in a new layer file. Fonts come from `--font-display` / `--font-body` / `--font-mono` tokens, so a layer can swap them.
- Each subfolder is a standalone site served at `/<folder>/` (HavenSite, FutureSite, Lawfirm, create-invoice, Emperor's gambit tutorial).
- Contact form posts to formsubmit.co via `fetch`; there is no backend.

## Workflow

- Commits go straight to `Master`; pushing publishes the site. No PRs.

## Don'ts

- Don't hand-edit `emperors-gambit/` (Unity WebGL export) or `WhiteLies/` (Vite build). They're replaced by re-exporting.
- Don't touch `Old/`. It's an archive.
