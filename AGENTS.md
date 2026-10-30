# Zhang Yue personal website

## Current scope

**Current visual tone:** the owner found the first reference-inspired update “a little too cutesy.” Keep warmth in clear, conversational wording, serif type, the cream/rust palette, and thoughtful hierarchy. The greeting is text-only again. Do not restore doodles, irregular decorative shapes, rotating / tilting / lifting elements, playful wordplay, or pill-shaped preview labels. Keep the useful app previews and native reading disclosures with quiet colour / focus feedback.

The owner’s latest request removes the Side quests section and its navigation link. The homepage has two main parts:

1. Who Yue is, what she cares about, current research, and a brief track record (MOH, MND, and NUS valedictorian).
2. Outside work: exactly two short paragraphs. First, “I occasionally write and share AI safety ideas in Chinese on Rednote,” retaining the Substack / Rednote links. Then, “I also enjoy building open-sourced tools and visualising concepts and systems through visual design.” Link “building open-sourced tools” to `apps.html` and “visual design” to `design.html`. The earlier sewing / bouldering / reading sentence is removed at the owner’s request; preserve the existing reading page for direct links.
Keep the homepage concise. The web-app directory contains only Gradual Disempowerment Dashboard, AI Governance Ecosystem, and HDB Housing Monetisation Guide. The homepage links to it from Outside work; do not restore the removed banners or Side quests navigation without a new request. Do not reintroduce BookWith, the wedding game, Media Monitor, standalone writing, courses, timeline, research-question accordions, bookshelves, or further project lists unless requested. Writing on Substack and Chinese-language AI safety content on Rednote are linked naturally within a short sentence. The contact link is “Say hello at zhangyuexp@gmail.com” using mailto, replacing LinkedIn; a short “Thinking about similar questions?” invitation precedes it. Use “Rednote,” not 小红书, in the English UI.

The owner requested more white space, then stronger information hierarchy because the page still felt wordy and lumpy. Use clear section dividers and left-hand serif labels on desktop, stacked above their content on phone widths. Current affiliations are separate SPAR / Odyssean Institute H3 entries, styled like MND / MOH: organisation, Research fellow, and a short supporting research description. No bullets. Keep the gradual-disempowerment interest as a separate plain paragraph after both. Past institutions use the same H3 hierarchy, concise outcome and smaller supporting details. Keep the main text at 16px; supporting details are 15px and the DotGrid source note is 14px. Avoid restoring dense inline institution-and-description paragraphs. Contact sits directly below the introduction; writing and Rednote sit with Outside work.

In the introduction, both “retaining human agency as AI becomes more capable” and “making AI risks legible to the public and policymakers” are bold. The complete “I care about…” sentence has a pale orange highlight (`#f8dfc3`), wrapping naturally across lines, in its own paragraph after the identity sentence.

**Do not link to the previous UX portfolio.** `design.html` is now a new, focused visual-design page, not the old portfolio landing page. Older files (`about.html`, `skills.html`, and `projects/`) remain in the repository but are not part of the new visitor flow. Do not add links to them from current pages.

## Source and deployment

- Live site: https://nekocchi-0417.github.io/portfolio/
- GitHub Pages deploys `main` from the repository root. No build step or new deployment infrastructure is needed.
- `index.html` / `personal.css` / `personal.js`: homepage and its minimal year update.
- `design.html` / `design.css`: visual work across NUS HCI Lab identity/newsletters, Relive × Relove campaign/illustrations/posters, and Uncommon Minds identity/brand kit. The page shows ten verified images with full-size links plus the collaborative lab-film link.
- The visual-design page’s intro is “I like making ideas clearer through design.”
- `reading.html` / `reading.css`: nine books, including the seven original favourites from 2024–25 plus Skin in the Game and Abundance added by the owner. Native `details` / `summary` controls reveal the existing brief notes; titles and authors stay visible. Verified local covers remain stationary; “Notes” cues and plus / minus signs identify disclosures. Reuses `design.css` for base styling. Do not invent personal reactions to the books.
- `apps.html` / `apps.css`: only Gradual Disempowerment Dashboard, AI Governance Ecosystem, and HDB Housing Monetisation Guide, with verified prototype and source links and three authentic screenshots. BookWith, the wedding game, and Media Monitor are removed from current showcase content; leave their files, assets, and external repositories untouched. Reuses `design.css` for base styling and links back to `index.html#outside-work`. The homepage retains `#projects` on the tools / visual-design paragraph so older fragment links still reach the directory link.
- `visualising.html`: immediate redirect and fallback link to `apps.html`, preserving the previously published URL. Its canonical URL points to the apps page. `visualising.css` was removed.
- `assets/images/`: verified book-cover and visual-design assets, plus older assets used only by legacy pages.
- The owner asked to remove the profile photo; do not restore a portrait or its social-preview image without a new request. The later book-and-thread homepage illustration was also removed when the owner requested a less cutesy treatment; its unused SVG is deleted.
- `assets/fonts/`: self-hosted Merchant fonts.

Edit text directly in the HTML. Preserve native links, semantic headings, visible focus, 44px standalone link targets, and responsive layouts. Use a local static server for browser checks. Update this file whenever committing and pushing changes.

## Content integrity

Ground biographical and impact claims in the supplied résumé and application notes. Current research is ongoing: SPAR and Odyssean Institute. The owner’s latest edit restores Better Futures as background for personal gradual-disempowerment projects, not as a current affiliation entry. Past government roles are past. Do not publish private application material or imply research papers are already published.

The homepage describes Yue as from Singapore and now based in Berkeley. Current work is split by affiliation: SPAR — Research fellow, studying institutional models for international AI coordination; Odyssean Institute — Research fellow, studying how experts judge AI risks and ways to improve citizen deliberation. The résumé / application extracts corroborate SPAR’s coordination focus and Odyssean’s expert/citizen risk-reasoning focus; the citizen-deliberation wording is the owner’s already-approved description. Keep the gradual-disempowerment work separate, with “personal projects” linked to https://nekocchi-0417.github.io/gd-observatory/, described as building on the Better Futures fellowship with the European Network for AI Safety; do not imply a completed study. MND wording is “Conducted policy research for national housing and retirement policies. Piloted LLM-assisted scenario planning research workflows.” MOH wording is “Conducted citizen-centric research and co-design for Healthier SG (Singapore’s national preventive health programme, with over 1 million residents enrolled).” Its programme link is https://www.healthiersg.gov.sg/about/what-is-healthier-sg/. NUS Faculty of Arts and Social Sciences valedictorian (approximately 2,000-student cohort), Psychology with Sociology minor, Honours with Highest Distinction. Keep the removed hobby sentence and Kobo-versus-Kindle joke out of the current homepage.

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

## Tone calibration

- [x] Removed the homepage book/thread illustration, rotating asterisk, and hand-drawn navigation underline. Kept the original static asterisk, standard link feedback, warm contact invitation, and restrained thank-you footer.
- [x] Replaced playful app copy and labels with direct descriptions and “Open prototype” / “Open app” / “Play” / “View code.” Retained real screenshots, project status, Flow attribution, and destination URLs. The two illustrative tool diagrams now use crisp geometry and pale neutral backgrounds.
- [x] Reduced preview corner rounding and removed zoom / slide effects. Reading covers have no decorative blobs, tilts, lift, or shadows; native notes and visible keyboard focus remain.
- [x] Checked the pared-back homepage and diagrams at desktop size, all three updated pages at 390px and 320px without overflow, and a note opened by keyboard with visible focus and a stationary cover. Source checks preserve all external destinations, nine note texts, local references, and ARIA IDs.

## Latest research copy and programme link

- [x] Linked Healthier SG to the owner’s requested official programme explainer, verified to load successfully.
- [x] Applied the owner’s exact MND wording, including “LLM-assisted” and “research workflows.”
- [x] Removed bullet markers and indentation from both current-research lines while keeping their text intact.
- [x] The subsequent MOH copy is “Citizen-centric research and co-design for Healthier SG.” The owner asked to remove “Led”; retain the new official Healthier SG programme link from the preceding request.
- [x] Moved the visual design / apps sentence to the end of Outside work and revised it to “I also enjoy visualising concepts and systems through visual design and small web apps.” Both subpage links and the `#projects` fragment are preserved.
- [x] Latest MOH edit: “Conducted citizen-centric research and co-design for Healthier SG (Singapore’s national preventive health programme, with over 1 million residents enrolled).” The programme description is an inline supporting parenthetical; the DotGrid link / “(Pg 19)” and both MND sentences stay unchanged.

## Side quests banners

- [x] Added a homepage Side quests section and navigation link, with three horizontal app banners and an All web apps link. The directory still contains all six apps, and its home links return to Side quests.
- [x] Used existing verified previews and destinations; preserved both AI projects’ in-progress labels, BookWith’s sign-in requirement, Flow credit, and public source links. Kept plain corners, quiet colour panels, and no decorative motion.
- [x] Checked desktop and phone layouts, all three preview images, the Side quests anchor, the directory / return path, and keyboard focus on the first prototype action. No horizontal overflow at 320px or 390px. Source review passed local references, semantic headings, ARIA labels, image attributes, and AA contrast on the new backgrounds.


## October 29 content update

- [x] Updated the orange-highlighted mission to retaining human agency and making AI risks legible to the public and policymakers; both clauses remain bold.
- [x] Replaced Outside work with the two requested paragraphs, linking “building open-sourced tools” to the three-tool directory and “visual design” to its page. The earlier hobby sentence was removed; existing subpages/assets remain intact.
- [x] Split SPAR and Odyssean into separate linked H3 entries with Research fellow labels and organisation-specific topics, following the MND / MOH layout.
- [x] Restricted both current app lists to GD Dashboard, AI Governance Ecosystem, and HDB Housing Monetisation Guide; replaced the homepage BookWith banner with the existing HDB screenshot and prototype/source links.
- [x] Verified desktop and phone rendering of the mission and fellowship entries, followed the tools phrase to the three-card directory, checked the return to Side quests, and confirmed all three banner images load without horizontal overflow at 320px. Source review passed copy, project membership/order, preserved links, ARIA references and contrast. Removed unused styles for the excluded app entries.

## Side quests removal

- [x] Removed the homepage Side quests section, its navigation link, and unused banner styles at the owner’s request.
- [x] Kept the three-tool directory linked from “building open-sourced tools” in Outside work; both directory return links now point to Outside work.
- [x] Checked the simplified page ending at desktop and phone widths with no horizontal overflow; local link, fragment and ARIA checks passed.

## Personal research wording

- [x] Kept the separate SPAR and Odyssean entries as requested, and updated the final Currently paragraph to: “Also studying AI-driven gradual disempowerment through personal projects, building on my Better Futures fellowship with the European Network for AI Safety.”

- [x] Linked “personal projects” in the final Currently paragraph directly to the owner’s Gradual Disempowerment Dashboard, preserving the rest of the sentence.
