# Zhang Yue personal website

## Current scope

The owner asked for a much simpler personal site. The homepage has two main parts:

1. Who Yue is, what she cares about, current research, and a brief track record (MOH, MND, and NUS valedictorian).
2. Outside work: a few lines about hobbies. “Read” links to the reading-list subpage, “visual design” links directly to its focused subpage, and “making complex ideas and ecosystems easier to visualise” links to `visualising.html`. The two projects in progress now live on that subpage, with separate live-prototype and GitHub source links.

Keep the homepage concise. Do not reintroduce standalone writing, courses, timeline, research-question accordions, bookshelves, or extra project lists unless requested. Writing on Substack, Chinese-language AI safety content on Rednote, and GitHub apps are linked naturally within a short sentence. The contact link is “Say hello at zhangyuexp@gmail.com” using mailto, replacing LinkedIn. Use “Rednote,” not 小红书, in the English UI. Hobby copy begins “I sometimes sew, boulder, and read.”

The owner requested more white space: keep a clear gap between the introduction, Currently, Previously, social links, and Outside work. The current layout uses 16px body text, restrained line lengths, and larger spacing between content groups. Current research is three short bullets, rather than a paragraph.

**Do not link to the previous UX portfolio.** `design.html` is now a new, focused visual-design page, not the old portfolio landing page. Older files (`about.html`, `skills.html`, and `projects/`) remain in the repository but are not part of the new visitor flow. Do not add links to them from current pages.

## Source and deployment

- Live site: https://nekocchi-0417.github.io/portfolio/
- GitHub Pages deploys `main` from the repository root. No build step or new deployment infrastructure is needed.
- `index.html` / `personal.css` / `personal.js`: homepage and its minimal year update.
- `design.html` / `design.css`: visual work across NUS HCI Lab identity/newsletters, Relive × Relove campaign/illustrations/posters, and Uncommon Minds identity/brand kit. The page shows ten verified images with full-size links plus the collaborative lab-film link.
- `reading.html` / `reading.css`: nine books, including the seven original favourites from 2024–25 plus Skin in the Game and Abundance added by the owner. Includes brief notes and verified local covers. Reuses `design.css` for base styling.
- `visualising.html` / `visualising.css`: the Gradual Disempowerment Dashboard and AI Governance Ecosystem prototypes, moved off the homepage at the owner’s request. Reuses `design.css` for base styling and links back to Outside work. The homepage retains `#projects` on the hobby paragraph so older fragment links still reach the new subpage link.
- `assets/images/`: verified book-cover and visual-design assets, plus older assets used only by legacy pages.
- The current homepage is text-only. The owner asked to remove the profile photo; do not restore a portrait or its social-preview image without a new request.
- `assets/fonts/`: self-hosted Merchant fonts.

Edit text directly in the HTML. Preserve native links, semantic headings, visible focus, 44px standalone link targets, and responsive layouts. Use a local static server for browser checks. Update this file whenever committing and pushing changes.

## Content integrity

Ground biographical and impact claims in the supplied résumé and application notes. Current research is ongoing: SPAR and Odyssean Institute. The owner’s latest edit removes Better Futures from the site. Past government roles are past. Do not publish private application material or imply research papers are already published.

The homepage describes Yue as from Singapore and now based in Berkeley. Current work is a short list: research fellow at SPAR and the Odyssean Institute; studying international AI coordination, expert judgments of AI risk, and citizen deliberation; exploring research on AI-driven gradual disempowerment. Keep the final point unlinked and do not imply a completed study. Track record uses the owner’s updated wording: MND research for national-level housing/retirement policies and AI-assisted scenario-planning workflows; MOH citizen research/co-design for Healthier SG (over 1 million residents enrolled); NUS faculty valedictorian (approximately 2,000-student cohort), Psychology with Sociology minor, Highest Distinction. Hobbies are sewing, reading, bouldering, and visual design. The owner asked to remove the Kobo-versus-Kindle joke; keep hobby copy straightforward.

Verify actual image content before labeling it. The old source labels were swapped: `nWKdkx013gH1Mzw9` and `mJIWCzT5bER84QRN` are Relive × Relove workshop posters; `XLYzWI8MRMqOt3jq` and `UxclleLNVReUgL6j` are the actual Uncommon Minds logo and brand-kit boards. The current design page uses correctly named local assets. Do not add a year to Uncommon Minds without resolving conflicting source dates. Credit the HCI newsletters and film as collaborative work with other design interns.

## Review history

The earlier version received an expert usability / IA review using Uxcel skills from skills.sh and Vercel Web Interface Guidelines. Keep those principles where relevant, while prioritizing the owner's newer request for much less content and structure. Do not restore removed sections for audit completeness.

## Latest copy edits

- [x] Added Singapore origin and linked the Odyssean Institute. Better Futures was subsequently removed at the owner’s request.
- [x] Updated MND/MOH/NUS bullets with the owner’s supplied wording and approximate cohort size.
- [x] Replaced the social-button row with naturally linked writing, Rednote, and web-app phrases, plus a LinkedIn contact link.
- [x] Confirmed the Odyssean website and MOH’s published enrolment figure supporting “over 1 million.”

## Current work

- [x] Simplified the homepage; the owner’s latest revision moves the projects to a subpage linked from Outside work.
- [x] Kept both AI projects and their prototype / GitHub destinations.
- [x] Replaced the old portfolio landing page with a standalone visual-design subpage and removed all previous-portfolio links from the current flow.
- [x] Removed the previous writing, courses, timeline, bookshelf, and expanded research sections from the homepage.
- [x] Browser-reviewed the homepage and design subpage at desktop and phone widths; local assets, anchors, return links, and the absence of previous-portfolio links passed. GitHub Pages publishes this change from `main`.

## Expanded visual examples

- [x] Added three HCI newsletter designs, campaign explainers and two workshop posters, and the recovered Uncommon Minds identity/brand kit.
- [x] Added full-size image links and project anchors while retaining short captions and a home link.
- [x] Optimized the eight new local WebP assets to about 222 KB total; retained the originals’ aspect ratios and kept workshop posters near their native display width.

- [x] Verified the expanded design gallery at desktop and phone widths: all ten images load, layout fits without horizontal overflow, and full-size asset links resolve.

- [x] Replaced the current-research paragraph with three concise points, removed Better Futures, and kept “AI-driven gradual disempowerment” as plain text.

## Reading-list subpage

- [x] Linked the homepage word “read” to `reading.html`, showing the owner’s seven favourites from 2024–25 with short notes and local covers.
- [x] Removed the Kobo-versus-Kindle joke and linked the words “visual design” directly to `design.html`.
- [x] Checked the reading page at desktop and phone widths: all seven covers load, no horizontal overflow, and home / reading / visual-design links work.

## Visualisation projects subpage

- [x] Moved both projects from Outside work to `visualising.html`. The homepage phrase “making complex ideas and ecosystems easier to visualise” now links to that page.
- [x] Preserved the two prototype and source-link pairs, the in-progress status, concise descriptions, and return-home links. No legacy UX portfolio links are introduced.
- [x] Checked the new page at desktop, phone, and 320px widths; homepage-to-subpage navigation, return links, keyboard skip-link focus, and local references pass. The homepage no longer repeats the project details.

## Ministry of Health zine feature

- [x] Added a concise “Featured in DotGrid, Singapore Product Design’s zine (Pg 19)” reference to the Ministry of Health bullet. The zine title remains linked, with the owner’s requested page number shown immediately after it.
- [x] Verified the public issue through the publisher’s initiatives page, https://www.productdesign.community/singapore/initiatives. Its Volume 3 link points to the public PDF at https://drive.google.com/file/d/19zQRNbIVw1d5SOHKjRikX2pg8H9No7ix/view?usp=sharing.
- [x] The feature is “Designed to Care,” written and designed by Leonard Reese, printed pp. 16–21 of DotGrid Vol. III: Nation by Design. Yue is named and quoted about her MOH / Healthier SG work on pp. 19–20, and listed as a collaborator on p. 41. Describe this as a feature/interview, not an article authored by Yue.

## Latest photo and reading additions

- [x] The owner’s latest revision removes the profile photo and social-preview image. The introduction now uses the full text width, and the unused uploaded photo asset is removed from the current site.
- [x] Checked the text-only introduction at desktop and phone widths: no reserved photo column or horizontal overflow remains.
- [x] Added Skin in the Game by Nassim Nicholas Taleb and Abundance by Ezra Klein and Derek Thompson to the reading list. Keep book notes descriptive rather than inventing personal reactions or reading dates.
- [x] Verified both new covers against publisher pages: https://www.penguinrandomhouse.com/books/537828/skin-in-the-game-by-nassim-nicholas-taleb/ and https://www.simonandschuster.com/books/Abundance/Ezra-Klein/9781668023488. Checked the new photo and nine-book list at desktop and phone widths, including cover loading and no horizontal overflow.

## Final UI and usability audit

- [x] Added space between major content groups, increased paragraph and project text sizes, and shortened the text measure on the homepage. Kept the two main sections and all approved content.
- [x] Replaced the research paragraph with a Currently list and removed Better Futures. The gradual-disempowerment point says “Exploring research on AI-driven gradual disempowerment.”
- [x] Reviewed all three current pages with the cached Uxcel usability / IA skills and fresh Vercel Web Interface Guidelines. Corrected accessible link names to preserve visible labels, and added `role="list"` to preserve the unstyled reading list’s semantics in Safari / VoiceOver.
- [x] Browser checks at 320px, 390px, 768px, and 1440px found no horizontal overflow. Checked homepage anchors, reading / design navigation and return paths, all 19 images, and keyboard skip links with visible focus on all three pages.
- [x] Local file, fragment, ID, image-dimension, canonical, sitemap, and robots checks passed. All 30 distinct published page / asset URLs checked returned 200. Outbound public destinations worked; LinkedIn blocks automated access and Rednote redirects to login, so those two destinations were treated as access limits rather than broken links.
- [x] Text contrast on the paper background passes WCAG AA for normal text: body 12.36:1, muted 4.82:1, accent 4.99:1. Reduced-motion handling and content without JavaScript remain intact. No critical or major issues were found in this review; both minor accessibility findings were fixed.
