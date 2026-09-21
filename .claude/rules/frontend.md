---
paths:
  - "**/*.html"
  - "**/*.css"
  - "**/*.js"
---

# Frontend

## Design Tokens

Each page defines its tokens as CSS custom properties in `:root` (inline `<style>` in `index.html`, or the page's `styles.css`). Reuse them; never hardcode raw colors, spacing, or fonts. Add a new token to `:root` before using a new value.

## Stack

Vanilla HTML, CSS, and JS only. No frameworks, bundlers, or npm packages. External assets only via CDN or Google Fonts.

## Layout

- CSS Grid for 2D, Flexbox for 1D. Use `gap`, not margin hacks.
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- Mobile-first. Touch targets: minimum 44x44px.

## Accessibility (non-negotiable)

- All interactive elements keyboard-accessible.
- Images: meaningful `alt` text. Decorative: `alt=""`.
- Form inputs: associated `<label>` or `aria-label`.
- Contrast: 4.5:1 normal text, 3:1 large text.
- Visible focus indicators. Never `outline: none` without replacement.
- Color never the sole indicator.
- `aria-live` for dynamic content. Respect `prefers-reduced-motion`.

## Performance

- Images: `loading="lazy"` below fold, explicit `width`/`height`.
- Fonts: `font-display: swap`.
- Animations: `transform` and `opacity` only.
