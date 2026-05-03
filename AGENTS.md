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

- Font: **Merchant** (Bold/Medium/Regular) self-hosted under `assets/fonts/`, plus **Open Sans** via Google Fonts
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

**Never assume what an image shows from its filename or alt text** — S3 asset IDs are random hashes and alt text was often wrong. If something looks off, navigate directly to the S3 URL in Chrome to verify the actual image content before changing structure.

---

## Image inventory — About page

All images live under: `https://uxfolio-prod.s3.us-east-1.amazonaws.com/64e041976fa9110002bbd1c9/6862a79422ffb97224f9d76b/`

| File | What it actually shows | Where used |
|------|------------------------|------------|
| `Il1QG07njlJh81BL.webp` | Personal portrait photo of Zhang Yue (against red roller-door wall) | `books-grid`, hobbies section |
| `oGJr0XuQGKmPEW1p.webp` | Bouldering photo — "Fell with grace right after this was taken 🤪" | `books-grid`, hobbies section |
| `S2dTX376383AONbL.webp` | Book cover — *Doing Good Better* (William MacAskill) | `image-gallery`, books section |
| `MjvgMVnVKwNKuvG4.webp` | Book cover — *Good Services* (Lou Downe) | `image-gallery`, books section |
| `MC4FS3DwApGtdJKR.webp` | Book cover — *Hillbilly Elegy* (JD Vance) | `image-gallery`, books section |
| `ETzfP0MzYLm0wjFy.webp` | Book cover — *Why Fish Don't Exist* (Lulu Miller) | `image-gallery`, books section |
| `hVBxtzsYDcAJY2eE.webp` | Book cover — *How to Know a Person* (David Brooks) | `image-gallery`, books section |
| `MOTJKMrNUJZizaU2.webp` | Book cover — *The Wedding People* (Alison Espach) | `image-gallery`, books section |
| `V5veDrNWvknD9LIN.webp` | Book cover — *The House in the Cerulean Sea* (TJ Klune) | `image-gallery`, books section |
| `qnxTryWqqtflSsCt.webp` | NUS HCI Lab logo redesign — full overview (BEFORE → ITERATIONS → AFTER), 1920×1080 | `cs-image`, HCI Lab logos section |
| `saxUJGASeEj2y9cb.webp` | NUS HCI Lab newsletter issue (blue/dark theme), 960×540 | `newsletters-gallery`, HCI Lab section |
| `Xqhb0U3OEaXvOCcX.webp` | NUS HCI Lab newsletter issue (orange/city theme), 960×540 | `newsletters-gallery`, HCI Lab section |
| `CAylXdM84CsHbhC1.webp` | NUS HCI Lab newsletter issue (dark/wave theme), 960×540 | `newsletters-gallery`, HCI Lab section |
| `g8mFDSEZuFj92cQY.webp` | Project Relive x Relove campaign visual (wide banner) | `relive-gallery` |
| `aM5RDmp4njP2twaL.webp` | Project Relive x Relove campaign visual (wide banner) | `relive-gallery` |
| `XLYzWI8MRMqOt3jq.webp` | Project Relive x Relove campaign visual | `relive-gallery` |
| `UxclleLNVReUgL6j.webp` | Project Relive x Relove campaign visual | `relive-gallery` |
| `nWKdkx013gH1Mzw9.webp` | Uncommon Minds logo design | `image-gallery`, Uncommon Minds section |
| `mJIWCzT5bER84QRN.webp` | Uncommon Minds logo variant | `image-gallery`, Uncommon Minds section |

---

## Key CSS classes (style.css reference)

### About page
| Class | Purpose |
|-------|---------|
| `.books-grid` | 2-col grid for the personal hobby photos (portrait + bouldering). `height: 280px; object-fit: cover` |
| `.image-gallery` | Auto-fill grid (`minmax(160px, 1fr)`). `height: 160px; object-fit: contain`. Used for book covers and Uncommon Minds logos |
| `.newsletters-gallery` | Modifier on `.image-gallery` — overrides to 2 columns, `height: 260px`. Used for HCI Lab newsletters |
| `.relive-gallery` | Modifier on `.image-gallery` — overrides to 2 columns, `height: 220px; object-fit: cover`. Used for Relive x Relove visuals |

### Case study pages
| Class | Purpose |
|-------|---------|
| `.cs-hero-grid` | 2-col header grid: title+subtitle left, hero image right |
| `.cs-prob-sol` | 2-col grid: Problem left, Solution right |
| `.cs-2col` | 2-col alternating section: image + text side-by-side. Children: `.cs-col-img`, `.cs-col-text` |
| `.cs-phases` | Horizontal step indicator with connecting lines. Children: `.cs-phase` (each with `.num` + label) |
| `.cs-image` | Full-width standalone image |
| `.cs-image-grid` | Auto-fill grid for process screenshots (`minmax(250px, 1fr)`) |
| `.cs-learnings` | Styled learnings section with numbered list |
| `.cs-impact` | Tinted box for impact metrics |
| `.finding-card` | Highlighted finding card with `.finding-label` badge |

---

## TODO

### Missing content (owner needs to supply or confirm)

- [x] **Personal photos on About page** — recovered: portrait (`Il1QG07njlJh81BL.webp`) and bouldering (`oGJr0XuQGKmPEW1p.webp`) now placed correctly in the hobbies section with the "Fell with grace" caption.
- [ ] **Concept video on future-of-work case study** — the original case study page includes a concept video embed. Owner needs to confirm the YouTube/Vimeo URL.

### Improvements / polish

- [ ] **About page image carousels** — the original UXfolio used prev/next carousels for the logo redesign and newsletter image groups. These were simplified to static CSS grids. Could add a lightweight JS carousel if the owner wants it back.
- [ ] **Self-host images** — images still point to UXfolio's S3 bucket. If UXfolio ever takes those down the image-heavy pages (about, all case studies) break. Fonts are now self-hosted; images are the larger remaining migration.

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
- [x] Hotel-management phase pills now link to their corresponding case study sections (User research → Understanding the Users, Usability Evaluation & Wireframing → Wireframes, The Pitch → pitch & feedback)
- [x] Self-hosted Merchant fonts under `assets/fonts/` (Bold/Medium/Regular); CSS @font-face rules now reference local paths and use `font-display: swap` for faster first paint. Removes one external dependency on the UXfolio S3 CDN.
