# Zhang Yue personal website

## Current scope

The owner asked for a much simpler personal site. The homepage has exactly three parts:

1. Who Yue is, what she cares about, current research, and a brief track record (MOH, MND, and NUS valedictorian).
2. The two projects in progress, with separate live-prototype and GitHub source links.
3. A few lines about hobbies and one link to a focused visual-design subpage.

Keep the homepage concise. Do not reintroduce standalone writing, courses, timeline, research-question accordions, bookshelves, or extra project lists unless requested. LinkedIn, Substack, 小红书, and GitHub remain as social links.

**Do not link to the previous UX portfolio.** `design.html` is now a new, focused visual-design page, not the old portfolio landing page. Older files (`about.html`, `skills.html`, and `projects/`) remain in the repository but are not part of the new visitor flow. Do not add links to them from either current page.

## Source and deployment

- Live site: https://nekocchi-0417.github.io/portfolio/
- GitHub Pages deploys `main` from the repository root. No build step or new deployment infrastructure is needed.
- `index.html` / `personal.css` / `personal.js`: homepage and its minimal year update.
- `design.html` / `design.css`: visual work, currently NUS HCI Lab identity and Relive × Relove campaign.
- `assets/images/`: local portrait and verified visual-design assets.
- `assets/fonts/`: self-hosted Merchant fonts.

Edit text directly in the HTML. Preserve native links, semantic headings, visible focus, 44px standalone link targets, and responsive layouts. Use a local static server for browser checks. Update this file whenever committing and pushing changes.

## Content integrity

Ground biographical and impact claims in the supplied résumé and application notes. Current research is ongoing: SPAR, Odyssean Institute, and Better Futures. Past government roles are past. Do not publish private application material or imply research papers are already published.

The homepage summarizes MOH research/co-design for Healthier SG, MND housing and retirement research prompting a policy review, and NUS Highest Distinction / faculty valedictorian. Hobbies are sewing, reading on a Kobo, bouldering, and visual design.

Verify actual image content before labeling it. Two source images previously labeled as Uncommon Minds were actually Relive × Relove workshop posters; neither is used as an Uncommon Minds example.

## Review history

The earlier version received an expert usability / IA review using Uxcel skills from skills.sh and Vercel Web Interface Guidelines. Keep those principles where relevant, while prioritizing the owner's newer request for much less content and structure. Do not restore removed sections for audit completeness.

## Current work

- [x] Reduced the homepage to the three requested parts.
- [x] Kept both AI projects and their prototype / GitHub destinations.
- [x] Replaced the old portfolio landing page with a standalone visual-design subpage and removed all previous-portfolio links from the current flow.
- [x] Removed the previous writing, courses, timeline, bookshelf, and expanded research sections from the homepage.
- [x] Browser-reviewed the homepage and design subpage at desktop and phone widths; local assets, anchors, return links, and the absence of previous-portfolio links passed. GitHub Pages publishes this change from `main`.
