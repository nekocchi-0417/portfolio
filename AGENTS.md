# Zhang Yue personal website

## Current scope

The owner asked for a much simpler personal site. The homepage has exactly three parts:

1. Who Yue is, what she cares about, current research, and a brief track record (MOH, MND, and NUS valedictorian).
2. The two projects in progress, with separate live-prototype and GitHub source links.
3. A few lines about hobbies and one link to a focused visual-design subpage.

Keep the homepage concise. Do not reintroduce standalone writing, courses, timeline, research-question accordions, bookshelves, or extra project lists unless requested. Writing on Substack, Chinese-language AI safety content on Rednote, and GitHub apps are linked naturally within a short sentence; LinkedIn is the contact link. Use “Rednote,” not 小红书, in the English UI.

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

The homepage describes Yue as from Singapore and now based in Berkeley. It links the Odyssean Institute and names the Better Futures fellowship. Track record uses the owner’s updated wording: MND research for national-level housing/retirement policies and AI-assisted scenario-planning workflows; MOH citizen research/co-design for Healthier SG (over 1 million residents enrolled); NUS faculty valedictorian (approximately 2,000-student cohort), Psychology with Sociology minor, Highest Distinction. Hobbies are sewing, reading on a Kobo, bouldering, and visual design.

Verify actual image content before labeling it. Two source images previously labeled as Uncommon Minds were actually Relive × Relove workshop posters; neither is used as an Uncommon Minds example.

## Review history

The earlier version received an expert usability / IA review using Uxcel skills from skills.sh and Vercel Web Interface Guidelines. Keep those principles where relevant, while prioritizing the owner's newer request for much less content and structure. Do not restore removed sections for audit completeness.

## Latest copy edits

- [x] Added Singapore origin, linked the Odyssean Institute, and named Better Futures as a fellowship.
- [x] Updated MND/MOH/NUS bullets with the owner’s supplied wording and approximate cohort size.
- [x] Replaced the social-button row with naturally linked writing, Rednote, and web-app phrases, plus a LinkedIn contact link.
- [x] Confirmed the Odyssean website and MOH’s published enrolment figure supporting “over 1 million.”

## Current work

- [x] Reduced the homepage to the three requested parts.
- [x] Kept both AI projects and their prototype / GitHub destinations.
- [x] Replaced the old portfolio landing page with a standalone visual-design subpage and removed all previous-portfolio links from the current flow.
- [x] Removed the previous writing, courses, timeline, bookshelf, and expanded research sections from the homepage.
- [x] Browser-reviewed the homepage and design subpage at desktop and phone widths; local assets, anchors, return links, and the absence of previous-portfolio links passed. GitHub Pages publishes this change from `main`.
