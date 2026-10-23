# Zhang Yue personal website

## Current scope

The owner asked for a much simpler personal site. The homepage has two main parts:

1. Who Yue is, what she cares about, current research, and a brief track record (MOH, MND, and NUS valedictorian).
2. Outside work: a few lines about hobbies followed by the two projects in progress, with separate live-prototype and GitHub source links. “Read” links to the reading-list subpage, “visual design” links directly to its focused subpage, and “making complex ideas and ecosystems easier to see” links to the projects below.

Keep the homepage concise. Do not reintroduce standalone writing, courses, timeline, research-question accordions, bookshelves, or extra project lists unless requested. Writing on Substack, Chinese-language AI safety content on Rednote, and GitHub apps are linked naturally within a short sentence; LinkedIn is the contact link. Use “Rednote,” not 小红书, in the English UI.

**Do not link to the previous UX portfolio.** `design.html` is now a new, focused visual-design page, not the old portfolio landing page. Older files (`about.html`, `skills.html`, and `projects/`) remain in the repository but are not part of the new visitor flow. Do not add links to them from current pages.

## Source and deployment

- Live site: https://nekocchi-0417.github.io/portfolio/
- GitHub Pages deploys `main` from the repository root. No build step or new deployment infrastructure is needed.
- `index.html` / `personal.css` / `personal.js`: homepage and its minimal year update.
- `design.html` / `design.css`: visual work across NUS HCI Lab identity/newsletters, Relive × Relove campaign/illustrations/posters, and Uncommon Minds identity/brand kit. The page shows ten verified images with full-size links plus the collaborative lab-film link.
- `reading.html` / `reading.css`: the seven favourite books from 2024–25 in the owner’s existing about-page content, with brief notes and verified local covers. Reuses `design.css` for base styling.
- `assets/images/`: local portrait and verified visual-design assets.
- `assets/fonts/`: self-hosted Merchant fonts.

Edit text directly in the HTML. Preserve native links, semantic headings, visible focus, 44px standalone link targets, and responsive layouts. Use a local static server for browser checks. Update this file whenever committing and pushing changes.

## Content integrity

Ground biographical and impact claims in the supplied résumé and application notes. Current research is ongoing: SPAR, Odyssean Institute, and Better Futures. Past government roles are past. Do not publish private application material or imply research papers are already published.

The homepage describes Yue as from Singapore and now based in Berkeley. It links the Odyssean Institute and names the Better Futures fellowship. Track record uses the owner’s updated wording: MND research for national-level housing/retirement policies and AI-assisted scenario-planning workflows; MOH citizen research/co-design for Healthier SG (over 1 million residents enrolled); NUS faculty valedictorian (approximately 2,000-student cohort), Psychology with Sociology minor, Highest Distinction. Hobbies are sewing, reading, bouldering, and visual design. The owner asked to remove the Kobo-versus-Kindle joke; keep hobby copy straightforward.

Verify actual image content before labeling it. The old source labels were swapped: `nWKdkx013gH1Mzw9` and `mJIWCzT5bER84QRN` are Relive × Relove workshop posters; `XLYzWI8MRMqOt3jq` and `UxclleLNVReUgL6j` are the actual Uncommon Minds logo and brand-kit boards. The current design page uses correctly named local assets. Do not add a year to Uncommon Minds without resolving conflicting source dates. Credit the HCI newsletters and film as collaborative work with other design interns.

## Review history

The earlier version received an expert usability / IA review using Uxcel skills from skills.sh and Vercel Web Interface Guidelines. Keep those principles where relevant, while prioritizing the owner's newer request for much less content and structure. Do not restore removed sections for audit completeness.

## Latest copy edits

- [x] Added Singapore origin, linked the Odyssean Institute, and named Better Futures as a fellowship.
- [x] Updated MND/MOH/NUS bullets with the owner’s supplied wording and approximate cohort size.
- [x] Replaced the social-button row with naturally linked writing, Rednote, and web-app phrases, plus a LinkedIn contact link.
- [x] Confirmed the Odyssean website and MOH’s published enrolment figure supporting “over 1 million.”

## Current work

- [x] Simplified the homepage; the owner’s latest revision groups the projects under Outside work.
- [x] Kept both AI projects and their prototype / GitHub destinations.
- [x] Replaced the old portfolio landing page with a standalone visual-design subpage and removed all previous-portfolio links from the current flow.
- [x] Removed the previous writing, courses, timeline, bookshelf, and expanded research sections from the homepage.
- [x] Browser-reviewed the homepage and design subpage at desktop and phone widths; local assets, anchors, return links, and the absence of previous-portfolio links passed. GitHub Pages publishes this change from `main`.

## Expanded visual examples

- [x] Added three HCI newsletter designs, campaign explainers and two workshop posters, and the recovered Uncommon Minds identity/brand kit.
- [x] Added full-size image links and project anchors while retaining short captions and a home link.
- [x] Optimized the eight new local WebP assets to about 222 KB total; retained the originals’ aspect ratios and kept workshop posters near their native display width.

- [x] Verified the expanded design gallery at desktop and phone widths: all ten images load, layout fits without horizontal overflow, and full-size asset links resolve.

- [x] Updated the current-research paragraph to the owner’s wording on international coordination, expert reasoning, and citizen deliberation; linked gradual disempowerment to the original paper at https://arxiv.org/abs/2501.16946.

## Reading-list subpage

- [x] Linked the homepage word “read” to `reading.html`, showing the owner’s seven favourites from 2024–25 with short notes and local covers.
- [x] Removed the Kobo-versus-Kindle joke and linked the words “visual design” directly to `design.html`.
- [x] Checked the reading page at desktop and phone widths: all seven covers load, no horizontal overflow, and home / reading / visual-design links work.

## Projects within Outside work

- [x] Moved both projects into Outside work, following the hobby sentence. The top navigation now reflects the two main sections.
- [x] Linked “making complex ideas and ecosystems easier to see” to the nested Projects in progress block; visual design still links directly to its subpage.
- [x] Preserved the two prototype and source-link pairs, adjusted heading levels, and checked desktop / phone layout and the internal project link.
