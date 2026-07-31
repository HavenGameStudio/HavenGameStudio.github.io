# Portfolio Review — havengamestudio.github.io
> Reviewed: July 31, 2026

---

## Overall Impression

The portfolio is solid — it has a clear identity (terminal/hacker aesthetic), a logical structure, real testimonials, and a good breadth of projects. The theming is distinctive and memorable for a game dev. That said, there are several issues across content, UX, performance, and credibility that are worth fixing before sending this to a senior-level recruiter or client.

---

## 1. Content & Credibility Issues

### 1.1 Broken counter animations on hero
The stat counters (Years Experience, Projects Shipped, Companies Served) appear to all read **"0"** in the raw HTML — meaning the JavaScript animation that counts them up either fails to load or is counting from zero with no actual target value visible to crawlers or users with JS issues. These numbers are one of the first things a visitor sees. **Fix:** ensure the counters have a visible fallback value, and confirm the animation fires correctly.

### 1.2 Two different resume links
There are **two different Google Drive resume links** on the page:
- Hero section: `1GnA-W-uSxPnr-Ba9B2SJfKIqFGb31tt5`
- Footer: `1Iike4bA2xejxIjM9-_I9n4iLsYCbq3FK`

This is a credibility red flag. Consolidate to a single, up-to-date resume link throughout.

### 1.3 Name inconsistency
The page title says **"Adrian Caamino"** but the email is `adriancaamino.ac@gmail.com` and contact section uses the same. Double-check the correct spelling of your last name is consistent everywhere (LinkedIn, GitHub bio, resume).

### 1.4 Spelling in the title
The meta title reads `Adrian Caamino` — verify this is the correct spelling vs. your resume/LinkedIn.

### 1.5 VR project has no image
Project #08 (VR Architectural Viz) uses a 🥽 emoji as a placeholder instead of an actual screenshot or render. Every other project has a screenshot. This one stands out as unfinished. Add a real image — even a render or wireframe.

### 1.6 Weak metrics in early career
The Junior Game Programmer entry mentions "reducing crash rates by 5%" and "enhancing player retention by 15%" — these are reasonable but quite modest. If you have stronger numbers from Niterion or Buko Studio, surface them. Senior-level positions expect impact at a bigger scale.

### 1.7 No live demos or video for most projects
Only 2 of 8 projects have a demo link (The Horde and Emperor's Gambit). Game development portfolios benefit enormously from video or playable demos. At minimum, add a short gameplay GIF or YouTube/video link for each project.

---

## 2. UX & Design Issues

### 2.1 Stat counters are the first thing seen — and they show "0"
See 1.1. This is both a content and UX problem. A visitor landing on the hero section seeing "0 Years Experience" creates immediate distrust.

### 2.2 Contact form doesn't actually send messages
The "Send Message" form's action is a `mailto:` link, which opens the user's local email client rather than submitting via a backend or service like Formspree. Many users (especially on mobile or corporate devices) don't have a default email client configured. **Fix:** use Formspree, EmailJS, or Netlify Forms so the contact form works reliably without any email client dependency.

### 2.3 "Hire Me" CTA duplication
The nav has a "Hire Me" button and a mailto link. This is fine, but both just open an email draft — there's no friction-reducing alternative like a calendly/booking link for discovery calls, which can convert better for senior freelance work.

### 2.4 No "Back to top" button visible on scroll
Long single-page sites benefit from a sticky back-to-top button. The nav appears fixed, which helps, but making it more obvious aids navigation on mobile.

### 2.5 Facebook link in footer is unexpected
Linking a personal Facebook profile from a professional portfolio feels out of place unless it's a dedicated professional/studio page. Consider replacing it with a portfolio-relevant link (itch.io, ArtStation, or a game jam profile).

---

## 3. SEO & Discoverability

### 3.1 No meta description
There is no `<meta name="description">` tag. This means Google will auto-generate a snippet, which is typically worse than a hand-crafted one. Add a 150–160 character description targeting your primary keywords (Unity developer, game engineer, Philippines, etc.).

### 3.2 No Open Graph / Twitter Card tags
When someone shares your portfolio link on LinkedIn, Slack, or Twitter, it will show no preview image or description. Add OG tags (`og:title`, `og:description`, `og:image`) so the link unfurls properly — this is especially important since you're using it for job hunting.

### 3.3 No structured data
Adding `application/ld+json` schema (Person schema) would help search engines understand who you are and could surface your portfolio in richer search results.

### 3.4 Counter values invisible to crawlers
If the stat counters count up from JS, Google sees "0 Years Experience, 0 Projects Shipped" in the indexed content. Either render the actual values server-side or include them as HTML with JS enhancement on top.

---

## 4. Technical Issues

### 4.1 Project images hosted via raw GitHub blob URLs
All project images use `github.com/.../blob/Master/...?raw=true` URLs. This is fragile — GitHub can throttle or block hotlinking raw assets, and the URL format is not CDN-optimized. **Fix:** move images to the `/images/` folder of the gh-pages repo and reference them with relative paths (e.g., `./images/Iquiz Image.png`).

### 4.2 Image filenames have spaces
Image filenames contain spaces (e.g., `Iquiz Image.png`, `The horde.png`, `Emperor's Gambit.png`). Spaces and apostrophes in URLs require percent-encoding and can cause broken images in some environments. Rename to kebab-case: `iquiz.png`, `the-horde.png`, `emperors-gambit.png`.

### 4.3 No favicon
The site has no favicon specified in the HTML (or it's missing). A missing favicon causes a 404 request on every page load and looks unprofessional in browser tabs and bookmarks.

### 4.4 Resume hosted on Google Drive (not ideal)
Google Drive sharing links for resumes can break if permissions change or if the viewer is not logged in. Consider hosting the PDF directly in the repo at `resume.pdf` for a stable, always-accessible link.

### 4.5 Copyright year is 2025
The footer says `© 2025 Adrian Caamino`. It's now 2026 — update this, or better yet, make it dynamic: `© <script>document.write(new Date().getFullYear())</script>`.

---

## 5. Positioning & Strategy

### 5.1 "Senior Lead" is prominent but the most recent role was only 3 months
The top billing is "Senior Lead Unity Developer" but the most recent listed experience (HPL Game Design, 2025–2026) was project-based and only 3 months. This juxtaposition can raise questions. Consider leading with your Buko Studio role or framing HPL as a concurrent/parallel engagement.

### 5.2 No clear niche or specialization call-out in the hero
The hero says "Building Immersive Digital Worlds" — which is generic. You have a distinctive niche (Unity, multiplayer, mobile, WebGL, Philippines-based). A more specific headline like *"Unity Multiplayer & Mobile Game Engineer — 6 Years"* would convert better for targeted job searches.

### 5.3 Testimonials are all 5 stars with no specifics on outcomes
Every testimonial is 5 stars, which paradoxically reduces credibility (looks curated). If possible, ask referees to mention a specific measurable outcome (e.g., "shipped on time and under budget," "player retention improved") rather than general praise.

### 5.4 No blog, devlog, or thought leadership content
For a "Senior Lead" positioning, having even 2–3 technical write-ups (on Unity architecture, a multiplayer system you built, etc.) would dramatically increase perceived expertise and SEO footprint. GitHub Pages supports Jekyll natively, which makes this easy to add.

---

## Priority Fix List

| # | Issue | Impact | Effort |
|---|-------|--------|--------|
| 1 | Fix broken stat counters (showing "0") | High | Low |
| 2 | Consolidate to one resume link | High | Low |
| 3 | Add meta description + OG tags | High | Low |
| 4 | Fix contact form (use Formspree/EmailJS) | High | Low |
| 5 | Move images to repo, fix filenames | Medium | Low |
| 6 | Add real image to VR project | Medium | Low |
| 7 | Update copyright year to 2026 | Low | Low |
| 8 | Add gameplay videos/GIFs to projects | High | Medium |
| 9 | Add favicon | Low | Low |
| 10 | Replace Facebook link with itch.io | Low | Low |
| 11 | Write 1–2 technical blog posts | High | High |
| 12 | Add Calendly link to CTA | Medium | Low |