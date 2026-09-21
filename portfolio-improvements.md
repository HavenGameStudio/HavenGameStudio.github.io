# Portfolio Improvements: havengamestudio.github.io

Goal: stop telling recruiters you're senior and start showing it.
Reviewed: September 21, 2026.

Verdict in one line: the projects are real, but the packaging reads as an AI template. The fix is evidence, honest titles, and your own words, not a redesign.

## Priority order

1. Credibility fixes (titles, timeline, mismatches)
2. Proof (playable demos, case studies, code)
3. Copy rewrite
4. Housekeeping
5. Design polish

---

## 1. Credibility fixes (do these first)

- [x] **Pick one title.** The site currently uses three: "Senior Game Developer" (H1), "Senior Lead Unity Developer & Game Engineer" (subtitle), "Senior Lead Unity Developer" (page title). Suggested: *Senior Unity Developer: multiplayer, WebGL, mobile*.
- [x] **Back "Lead" with specifics or drop it.** Say what you led: team size, scope, outcome. Example: "Led 3 developers on X, from planning to deployment."
- [x] **Make Buko match its testimonial.** The site says you oversaw technical direction and mentored engineers. The testimonial says you worked on one Unity mobile racing game project. Label the role "project-based" and describe what you actually owned.
- [x] **Merge the two Niterion entries** (2022-2023 and 2023-2025) into one entry that shows progression, with one set of non-repeating bullets.
- [x] **Add numbers to the senior roles.** Right now the only metrics (5% fewer crashes, 15% better retention) sit on the junior job. Candidates: team size, build-time savings from your internal tools, playable ad file size and load time, crash-free rate, FPS targets, concurrent players.
- [x] **Fix The Horde's demo link.** It goes to "Last Keep" on someone else's itch.io account, a jam prototype. Either credit the collaborator and use the real title, or host your own build.
- [x] **Fix the skills list.** "EQS" is an Unreal term, not Unity. The VR project is UE5/C++ but Unreal isn't listed. Add Unreal or drop the project. Remove any skill you can't point to a project for (Dedicated Servers, Cloud Save/Load), or show where you used it.
- [x] **Make names consistent:** Buko Studio vs Buko Studios, HPL Game Design Corporation vs Corporations, Niterion vs Niterion Designs.
- [x] **Only say "shipped" for shipped work.** Label prototypes as prototypes.

## 2. Proof (the biggest upgrade)

- [x] **Embed the Emperor's Gambit WebGL build on the homepage.** You're a WebGL specialist, so the portfolio should be the demo.
- [ ] **Add a 30-60 second reel or GIFs to every project.** Screenshots alone don't prove anything.
- [x] **Cut 8 projects down to 3-4 real case studies.**
  - Keep and expand: Emperor's Gambit, Cards and Magic, a playable ad (if shareable), and the Buko racing game (describe it if an NDA blocks visuals).
  - Demote or remove: Rags to Riches, Bubbly Typing, and IQuiz unless you can show evidence.
- [x] **Use this case study template for each project:**
  - What it is (one sentence)
  - Your role (solo or team size, what you owned)
  - Stack
  - The hard problem and how you solved it (for Cards and Magic: Photon state sync, turn validation, reconnects)
  - A number (build size, FPS, load time, players)
  - What you'd do differently
  - Links: playable build, video, repo
- [ ] **Publish 1-2 clean public repos** on your GitHub org, such as an NGO/Photon multiplayer sample or one of your internal editor tools rebuilt as a sample. Pin them. Right now there is nothing to inspect.
- [ ] **Make testimonials verifiable.** Link each to its LinkedIn recommendation and add a photo and company. Jay Ar's is specific and strong. The Buko one is lukewarm for a "Senior Lead", so reframe it or replace it.
- [x] **Decide on Digifight.** Web3 plus cockfighting makes many studios flinch. If it stays, lead with the networking and blockchain integration work and drop the "ultimate cockfighting game" pitch.

## 3. Copy rewrite

Rules:
- Cut "passionate", "innovation", "scalable", "high-performance", "production-ready" unless a number, noun, or link follows immediately.
- Every claim needs proof next to it.
- Write it the way you'd say it to a hiring manager.

| Section | Now | Direction |
|---|---|---|
| Hero | "I architect scalable game systems, lead engineering teams, and ship production-ready experiences..." | "I build multiplayer, mobile and WebGL games in Unity. Six years, mostly client work: playable ads, a racing game, a Photon card battler." |
| About | "Driven by a passion for innovation, I consistently deliver high-quality, immersive games..." | Two or three plain sentences: what you're best at, what you've shipped, what you're looking for. |
| Section titles | "Crafting Games That Matter", "Let's Build Something Great" | Plain labels: "About", "Work", "Contact". |
| Experience bullets | "Led design and development of high-performance games..." | "Built X with Y, which did Z (number)." |

## 4. Housekeeping

- [x] Replace the og:image (currently the favicon) with a real 1200x630 social card so link previews look right.
- [ ] Host the resume as a PDF on the site instead of a Google Drive link.
- [x] Remove the public phone number (spam risk). Keep email and LinkedIn.
- [x] Remove the Facebook link (raw profile ID, adds nothing).
- [ ] Confirm the contact form actually sends (static GitHub Pages has no backend). Use Formspree or similar, or replace it with a mailto link.
- [x] Make sure the stat counters show real numbers without JavaScript (the raw HTML shows "0").
- [ ] Run Lighthouse and test on a real phone. Check image sizes, alt text, and load time.

## 5. Design polish

- [x] Keep at most one signature visual touch. The terminal/cyberpunk chrome (`[ SYS.STATUS ]`, `//` comments, `[ 01 ]` labels) is the strongest AI-template tell, so let plain writing carry the site.
- [x] Remove emoji from buttons and headings.
- [x] Use the same card layout for all projects, with the playable build or video as the main element, not a static image.

---

## Definition of done

A recruiter should be able to do all of this in 60 seconds:

1. See one clear title and what you specialize in.
2. Play a build without leaving the page.
3. Read one case study with a real number in it.
4. Open a public repo.
5. Download your resume as a PDF.
