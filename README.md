# Zhang Yue’s personal website

A concise personal homepage with separate reading-list, visual-design, and web-app pages.

- `index.html`: introduction, separate current fellowships, track record, writing / Rednote links, and a Side quests showcase of three tools.
- `personal.css`: homepage styling.
- `personal.js`: copyright-year update.
- `design.html` and `design.css`: a visual-design gallery covering identity, newsletters, and campaign work.
- `reading.html` and `reading.css`: nine books with covers and short notes; shares the design page’s base styling.
- `apps.html` and `apps.css`: Gradual Disempowerment Dashboard, AI Governance Ecosystem, and HDB Housing Monetisation Guide, with prototype and GitHub links; shares the design page’s base styling.
- `visualising.html`: redirects older visualisation-project links to the Web apps page.
- `assets/`: local images and fonts.

No build step is needed. To preview from the repository root:

```sh
python3 -m http.server 8000
```

Visit `http://localhost:8000/`. GitHub Pages publishes the root of `main` to [the website](https://nekocchi-0417.github.io/portfolio/).

The current site intentionally has no links to the previous UX portfolio. Keep it concise when editing.
