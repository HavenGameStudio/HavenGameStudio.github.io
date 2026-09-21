# Project Instructions

Static GitHub Pages portfolio for Adrian Caamino (Unity developer). No build step, package manager, tests, or linter. Plain HTML/CSS/JS.

## Commands

```bash
python -m http.server 8000   # local preview at http://localhost:8000
```

## Architecture

- `index.html` is the live portfolio: all CSS (design tokens in `:root`) and JS are inline in that one file. `Improvements.md` is its review backlog.
- Each subfolder is a standalone site served at `/<folder>/` (HavenSite, FutureSite, Lawfirm, create-invoice, Emperor's gambit tutorial).
- Contact form posts to formsubmit.co via `fetch`; there is no backend.

## Workflow

- Commits go straight to `Master`; pushing publishes the site. No PRs.

## Don'ts

- Don't hand-edit `emperors-gambit/` (Unity WebGL export) or `WhiteLies/` (Vite build). They're replaced by re-exporting.
- Don't touch `Old/`. It's an archive.
