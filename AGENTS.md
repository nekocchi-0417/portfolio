# Zhang Yue personal website

## Current scope

The owner asked for a much simpler personal site. The homepage has two main parts:

1. Who Yue is, what she cares about, current research, and a brief track record (MOH, MND, and NUS valedictorian).
2. Outside work: a few lines about hobbies. “Read” links to the reading-list subpage, “visual design” links directly to its focused subpage, and “building small web apps” links to `apps.html`, a directory of six verified public apps.

Keep the homepage concise. Do not reintroduce standalone writing, courses, timeline, research-question accordions, bookshelves, or extra project lists unless requested. Writing on Substack and Chinese-language AI safety content on Rednote are linked naturally within a short sentence. The previous coding clause was removed to avoid duplicating the Web apps link in Outside work. The contact link is “Say hello at zhangyuexp@gmail.com” using mailto, replacing LinkedIn; a short “Thinking about similar questions?” invitation precedes it. Use “Rednote,” not 小红书, in the English UI. Hobby copy begins “I sometimes sew, boulder, and read.”

The owner requested more white space, then stronger information hierarchy because the page still felt wordy and lumpy. Use clear section dividers and left-hand serif labels on desktop, stacked above their content on phone widths. Current research has a prominent role/affiliation line and two short bullet points. Past institutions are H3 headings, followed by a concise outcome and smaller supporting details. Keep the main text at 16px; supporting details are 15px and the DotGrid source note is 14px. Avoid restoring dense inline institution-and-description paragraphs. Contact sits directly below the introduction; writing and Rednote sit with Outside work.

In the introduction, both “keeping human agency as AI becomes more capable” and “helping institutions recognise risks and act early” are bold. The complete “I care about…” sentence has a pale orange highlight (`#f8dfc3`), wrapping naturally across lines, in its own paragraph after the identity sentence.

**Do not link to the previous UX portfolio.** `design.html` is now a new, focused visual-design page, not the old portfolio landing page. Older files (`about.html`, `skills.html`, and `projects/`) remain in the repository but are not part of the new visitor flow. Do not add links to them from current pages.

## Source and deployment

- Live site: https://nekocchi-0417.github.io/portfolio/
- GitHub Pages deploys `main` from the repository root. No build step or new deployment infrastructure is needed.
- `index.html` / `personal.css` / `personal.js`: homepage and its minimal year update.
- `design.html` / `design.css`: visual work across NUS HCI Lab identity/newsletters, Relive × Relove campaign/illustrations/posters, and Uncommon Minds identity/brand kit. The page shows ten verified images with full-size links plus the collaborative lab-film link.
- The visual-design page’s intro is “I like making ideas clearer through design.”
- `reading.html` / `reading.css`: nine books, including the seven original favourites from 2024–25 plus Skin in the Game and Abundance added by the owner. Native `details` / `summary` controls reveal the existing brief notes; titles and authors stay visible. Verified local covers move gently on hover, focus, and open, with reduced-motion overrides. Reuses `design.css` for base styling. Do not invent personal reactions to the books.
- `apps.html` / `apps.css`: six public web apps, with verified demo / prototype links where available and public source links. Four real local screenshots show the dashboard, governance map, housing guide, and wedding game. Original SVG illustrations represent BookWith (sign-in required) and Media Monitor (runs locally); do not describe those two images as app screenshots. Reuses `design.css` for base styling and links back to Outside work. The homepage retains `#projects` on the hobby paragraph so older fragment links still reach the new subpage link.
- `visualising.html`: immediate redirect and fallback link to `apps.html`, preserving the previously published URL. Its canonical URL points to the apps page. `visualising.css` was removed.
- `assets/images/`: verified book-cover and visual-design assets, plus older assets used only by legacy pages.
- The owner asked to remove the profile photo; do not restore a portrait or its social-preview image without a new request. A small original `books-and-thread.svg` illustration now accompanies the greeting and links to the reading list.
- `assets/fonts/`: self-hosted Merchant fonts.

Edit text directly in the HTML. Preserve native links, semantic headings, visible focus, 44px standalone link targets, and responsive layouts. Use a local static server for browser checks. Update this file whenever committing and pushing changes.

## Content integrity

Ground biographical and impact claims in the supplied résumé and application notes. Current research is ongoing: SPAR and Odyssean Institute. The owner’s latest edit removes Better Futures from the site. Past government roles are past. Do not publish private application material or imply research papers are already published.

The homepage describes Yue as from Singapore and now based in Berkeley. Current work: research fellow at SPAR and the Odyssean Institute; studying international AI coordination, how experts judge AI risks, and ways to improve citizen deliberation; also exploring AI-driven gradual disempowerment. Keep the final point unlinked and do not imply a completed study. Concise track-record wording preserves MND national housing/retirement policy research and piloting AI-assisted scenario-planning workflows; MOH leading citizen research/co-design for Healthier SG (national preventive health programme, over 1 million residents enrolled); NUS Faculty of Arts and Social Sciences valedictorian (approximately 2,000-student cohort), Psychology with Sociology minor, Honours with Highest Distinction. Hobbies are sewing, reading, bouldering, and visual design. The owner asked to remove the Kobo-versus-Kindle joke; keep hobby copy straightforward.

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

## Web apps subpage

- [x] Expanded the former two-project page into `apps.html`, linked as “building small web apps” from Outside work. The homepage no longer repeats the projects or the earlier coding phrase.
- [x] Listed the two research projects plus HDB Housing Monetisation Guide, BookWith, Zootopia Wedding Run, and Media Monitor. Only public repositories were used; do not publish private repository details without a new explicit request.
- [x] Verified public demo URLs for BookWith (`https://nekobookbuddy.netlify.app/`), HDB (`https://nekocchi-0417.github.io/hdb-monetisation-guide/`), and Zootopia Wedding Run (`https://nekocchi-0417.github.io/wedding_game/`). Media Monitor runs locally and has only a code link. Preserve the research projects’ in-progress status and prototype labels.
- [x] BookWith’s name and description are grounded in its README and deployed manifest. It is based on the open-source Flow reader (`https://github.com/pacexy/flow`), credited on the app card; do not imply it was built from scratch.
- [x] Checked the new page and homepage highlight at desktop, phone, and 320px widths; navigation, return links, keyboard skip-link focus, and the old-page redirect pass. The orange highlight retains 10.48:1 text contrast. Demo metadata / HTTP responses were checked; full external app workflows were not tested.

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

## Homepage information hierarchy

- [x] Replaced equal-weight bullet blocks with distinct Currently / Previously / Outside work sections, serif section labels, institution subheadings, and quieter supporting details.
- [x] Shortened repeated policy and education wording while preserving all requested affiliations, research topics, impact figures, qualifications, and the DotGrid page reference.
- [x] Retained the full orange-highlighted mission, all subpage links, and the legacy `#projects` fragment. Moved the email into the introduction and writing / Rednote into Outside work.
- [x] Reviewed the revised homepage at 320px, 390px, 768px, and 1280px: no horizontal overflow; section anchors, app navigation, and visible keyboard skip-link / email focus work. Local page, asset, and fragment references resolve, and all previous external destinations are retained.

## Warmth and small interactions

- [x] The owner approved adapting principles from https://www.rachelatwork.com/work: warmer language, one personal visual motif, restrained motion, visual project previews, and optional reading notes. Preserve the existing information hierarchy and concise homepage.
- [x] Added original code-native books/thread/idea illustration, a warmer contact invitation and footer, asterisk rotation and drawn navigation underlines, and gentle link feedback. Motion is triggered by interaction and respects reduced-motion preferences; no autoplay decorations or new JavaScript are needed.
- [x] Added four authentic app screenshots and two clearly described illustrations; retained in-progress labels, actual prototype / source URLs, and Flow attribution. BookWith currently opens the BookBuddy sign-in screen, so its directory entry flags the sign-in requirement.
- [x] Kept all nine reading notes verbatim inside native disclosures. Browser accessibility output preserves the book headings and exposes the expanded/collapsed controls; some other browser/screen-reader combinations may flatten headings inside summary, while named native disclosures remain available.
- [x] Reviewed homepage, apps, and reading layouts at 320px, 390px, 768px, and 1280px with no horizontal overflow. Checked the illustration’s reading link, mouse and keyboard disclosure toggling, a second book’s note at 320px, skip-link focus into the first app preview, visible preview invitation, all new app images, and all nine book covers. Local links, fragments, image attributes, SVG XML, and ARIA targets pass; fresh Vercel guidance and cached Uxcel review found no blocking issues.
