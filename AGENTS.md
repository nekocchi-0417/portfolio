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
├── index.html                    # Landing page (hero, work experience, project grid)
├── skills.html                   # Skills page (service design / UX research / behavioural insights)
├── about.html                    # About page (bio, hobbies, visual design work)
├── style.css                     # Shared stylesheet for all pages
└── projects/
    ├── health-programmes.html    # Case study: national health programme engagement
    ├── policy-concept-testing.html  # Case study: scenario-based policy debate
    ├── hotel-management.html     # Case study: hotel management app usability
    └── future-of-work.html       # Case study: Johnson Controls innovation challenge
```

## Design

- Font: **Merchant** (Bold/Medium/Regular) loaded from the original UXfolio S3 CDN, plus **Open Sans** via Google Fonts
- Palette: `--navy: #2c2669`, `--orange: #FA8006`, `--muted: #817D93`, `--bg: #F5F4FF`
- Background: CSS radial-gradient blobs approximating the original UXfolio template background
- All images are referenced directly from the original UXfolio S3 bucket (`uxfolio-prod.s3.us-east-1.amazonaws.com`)

## Deployment

Push to `main` → GitHub Pages serves the site automatically (configured via the Pages API, no Actions workflow needed).
