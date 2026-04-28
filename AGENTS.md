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

- [ ] **Personal photo on About page** — the original UXfolio About page has a photo of Zhang Yue with caption "Fell with grace right after this was taken 🤪". The image asset still has not been recovered.
- [ ] **Concept video on future-of-work case study** — the original case study page includes a concept video embed. Confirm URL with owner.

### Improvements / polish

- [ ] **About page image carousels** — the original UXfolio used prev/next carousels for the logo redesign and newsletter image groups. These were simplified to static CSS grids. Could add a lightweight JS carousel if the owner wants it back.
- [ ] **Active nav state on case study pages** — case study pages don't highlight any nav item as "active" (they live under `projects/`). Consider whether this matters.
- [ ] **Responsive pass** — check all pages at mobile widths (375px, 390px). Image grids, phase bubbles, and hero text have basic responsive rules but haven't been thoroughly QA'd on small screens. Mobile hover states for project cards are now handled, but the full-page QA pass is still not complete.
- [ ] **Self-host fonts and images** — currently fonts load from UXfolio's S3 CDN and images point to UXfolio's S3 bucket. If UXfolio ever takes those down the site breaks. Owner may eventually want to copy assets into the repo.
- [ ] **Desktop comparison pass** — continue tightening image sizing and spacing in wide layouts where recovered static galleries still feel larger than the original UXfolio presentation.

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
