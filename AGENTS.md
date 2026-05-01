# Portfolio — Zhang Yue

This is a static HTML/CSS portfolio site, built as a faithful replication of the original UXfolio portfolio at **https://uxfol.io/zhangyue**, so the owner no longer depends on the UXfolio platform.

## Project overview

- **Live site**: https://nekocchi-0417.github.io/portfolio/
- **Original**: https://uxfol.io/zhangyue
- **Host**: GitHub Pages (branch: `main`, root `/`)
- **Stack**: Plain HTML + CSS, no build step, no JS framework

## Structure

```
portfolio/
├── index.html                       # Landing page (hero, work experience, project grid)
├── skills.html                      # Skills page (service design / UX research / behavioural insights)
├── about.html                       # About page (bio, hobbies, visual design work)
├── style.css                        # Shared stylesheet for all pages
└── projects/
    ├── health-programmes.html       # Case study: national health programme engagement
    ├── policy-concept-testing.html  # Case study: scenario-based policy debate
    ├── hotel-management.html        # Case study: hotel management app usability
    └── future-of-work.html          # Case study: Johnson Controls innovation challenge
```

## Design

- Font: **Merchant** (Bold/Medium/Regular) loaded from the original UXfolio S3 CDN, plus **Open Sans** via Google Fonts
- Palette: `--navy: #2c2669`, `--orange: #FA8006`, `--muted: #817D93`, `--bg: #F5F4FF`
- Background: CSS radial-gradient blobs approximating the original UXfolio template background
- All images are referenced directly from the original UXfolio S3 bucket (`uxfolio-prod.s3.us-east-1.amazonaws.com`)

## Deployment

Push to `main` → GitHub Pages serves the site automatically (configured via the Pages API, no Actions workflow needed).

The `gh` CLI binary lives at `/tmp/gh_install/` (not in PATH) and is authenticated as `nekocchi-0417`. The token has `repo` scope but **not** `workflow` scope — do not stage or push `.github/workflows/` files or the push will be rejected.

---

## Notes for future agents

**Keep this TODO list updated.** When you complete an item, move it to Done. When you discover a new gap, add it here before starting work.

**Whenever you commit and push changes, update this `AGENTS.md` file in the same batch** so the remaining work, recovered assets, and completed items stay honest.

---

## TODO

### Missing content (owner needs to supply or confirm)

- [x] **Personal photos on About page** — recovered: portrait (`Il1QG07njlJh81BL.webp`) and bouldering (`oGJr0XuQGKmPEW1p.webp`) now placed correctly in the hobbies section with the "Fell with grace" caption.
- [ ] **Concept video on future-of-work case study** — the original case study page includes a concept video embed. Owner needs to confirm the YouTube/Vimeo URL.

### Improvements / polish

- [ ] **About page image carousels** — the original UXfolio used prev/next carousels for the logo redesign and newsletter image groups. These were simplified to static CSS grids. Could add a lightweight JS carousel if the owner wants it back.
- [ ] **Self-host fonts and images** — currently fonts load from UXfolio's S3 CDN and images point to UXfolio's S3 bucket. If UXfolio ever takes those down the site breaks. Owner may eventually want to copy assets into the repo.
- [ ] **hotel-management.html phase bubbles** — currently only 3 plain `<div class="cs-phase">` steps with no href anchors. Could add `id` anchors and link phase steps to sections like other case studies.

---

## Done

- [x] Full HTML/CSS replication of all pages: index, skills, about, and all 4 case studies
- [x] Background: CSS radial-gradient replacing the original PNG background image (prevents tiling artifacts)
- [x] Project grid: 2-column layout with full-width cards for projects 1 and 4
- [x] Nav: fully transparent (removed opaque white background)
- [x] Phase step bubbles: number in orange filled circle, pill-shaped container
- [x] Case study image grids: `height: auto` so process/research screenshots aren't cropped
- [x] About page image galleries: `object-fit: contain` so logos and newsletters display in full
- [x] Cat emoji favicon 🐱 on all pages
- [x] GitHub Pages enabled at https://nekocchi-0417.github.io/portfolio/
- [x] AGENTS.md + CLAUDE.md symlink
- [x] Mobile project cards: titles/descriptions remain visible on touch devices instead of depending on hover
- [x] About page: recovered HCI Lab promo video embed
- [x] About page: recovered Project Relive x Relove image gallery
- [x] Health-programmes phase pills now link to their corresponding case study sections
- [x] Future-of-work phase pills now link to their corresponding case study sections
- [x] Scroll-reveal animations via IntersectionObserver (script.js, progressive delay, disabled on small screens)
- [x] Skills page: orchestrator paragraph and skills-explainer list styled correctly
- [x] Project cards: aspect-ratio based sizing (no more min-height hacks), responsive resets to auto on mobile
- [x] Responsive pass complete: 768px and 520px breakpoints covering hero, nav, grids, phase pills, typography, and cards
- [x] Active nav state on case study pages: intentionally none (no top-level nav item corresponds to a case study) — matches original behaviour
- [x] ORIGINAL_SITE_COMPARISON.md added documenting confirmed matches and known differences vs original UXfolio
- [x] Case study layout restructure: all 4 case studies now use `cs-hero-grid` (title left, hero image right in header), `cs-prob-sol` (Problem + Solution side-by-side), and `cs-2col` (alternating image+text sections) matching the original UXfolio layout
- [x] About page images fully corrected: personal photos (portrait + bouldering) moved to hobbies section; 7 book covers moved to books section; HCI Lab logos section now shows correct logo overview image; newsletters section shows 3 actual newsletter designs
- [x] About page image sizing fixed: `books-grid` uses `object-fit: cover` for photos; `image-gallery` uses fixed 160px height for compact uniform display; `newsletters-gallery` uses 2-col 260px for landscape newsletters; `relive-gallery` uses 2-col 220px with cover
- [x] Phase step bubbles redesigned: vertical steps with connecting lines between number circles (thin lavender border, transparent bg on idle, orange fill on hover) — matches original UXfolio pattern
- [x] index.html: 4th project card removed `full-width` class so it renders as half-width (left column), matching original
