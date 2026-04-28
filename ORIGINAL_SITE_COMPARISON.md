# Original Site Comparison

Comparison target: `about.html` in this repo versus the original UXfolio portfolio at `https://uxfol.io/zhangyue`.

## Status

The local About page is very close in copy, section order, and image content, but it is not a perfect 1:1 replica yet.

## Confirmed matches

- Hero copy matches: `Hello! I am Zhang Yue`
- Subtitle matches: `I work at the intersection of service design, user research, and behavioural insights.`
- Main About copy matches, including the highlight question:
  - `How might we design not just for people, but with a deep understanding of them?`
- The hobbies/books section is present with the same visible text and the same two book-shelf images.
- The three major About sections are present:
  - `Visual Rebranding for Asia's leading Human-Computer Interaction Lab`
  - `Project Relive x Relove`
  - `Logo design for Uncommon Minds`
- The logo and newsletter images used in the HCI Lab section are present.
- The Uncommon Minds logo images are present.

## Known differences from the original

- Missing personal photo near the About section.
  - The original UXfolio page included a personal photo with the caption `Fell with grace right after this was taken 🤪`.
  - That specific image asset is still not recovered.
- Gallery behavior is simplified.
  - The original UXfolio page used carousel-style image groups for some About-page visuals.
  - The local site currently uses static CSS grids instead.
- Mobile behavior is intentionally different.
  - On the recreated site, project and related-project text stays visible on touch devices instead of depending on hover.
  - This is better for usability, but it is not identical to the original interaction model.

## Comparison notes

- This comparison is based on the local `about.html`, the project handoff notes in `AGENTS.md`, and previously captured reconstruction notes.
- The in-app browser did not reliably expose the original UXfolio page contents for direct DOM/screenshot comparison during this pass, so this file records the confirmed differences already surfaced during the rebuild.

## Recovered since the first pass

- Added the HCI Lab promo video embed: `https://www.youtube.com/embed/AmeNqvCSik0`
- Added the missing `Project Relive x Relove` visual gallery

## Next steps to reach a closer match

- Add the missing personal photo asset.
- Restore carousel behavior for the About-page image groups if exact UXfolio parity is important.
