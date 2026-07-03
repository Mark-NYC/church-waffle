# Church Waffle

The marketing site for [churchwaffle.com](https://churchwaffle.com) — a simple tool for
assessing whether a group or church is actually practicing the commands of Jesus, not
just meeting together. It's a companion site to [obey.tools](https://obey.tools) and
shares its visual style (plain HTML/CSS, no build step, no framework).

## Pages

| File | Purpose |
|---|---|
| `index.html` | Homepage — the pitch, the 12 practices, and the main CTAs |
| `resources.html` | Downloads: PDF, quick reference guide, translations, related tools |
| `diagnostic.html` | Landing page for the obey.tools diagnostic |
| `two-church-model.html` | Landing page for the Two Church Model podcast episode |
| `404.html` | Not-found page |

## Editing links (do this first)

**Every external link on the site lives in one file: [`js/links.js`](js/links.js).**
Open it, find the key you want to change, and replace the URL. You don't need to touch
any HTML file — every button tagged `data-link="key"` picks up the URL automatically.

```js
window.CW_LINKS = {
  diagnostic: "https://obey.tools/church-waffle",   // <-- the "Take the Diagnostic" button everywhere on the site
  pdf: "...",                                        // <-- "Download the PDF" button
  quickReference: "...",                             // <-- "Quick Reference Guide" button
  podcast: "...",                                    // <-- Two Church Model episode link
  ...
};
```

### Updating the diagnostic URL

Change the `diagnostic` value in `js/links.js`. This single line controls the primary
CTA in the header, hero, footer, and every "Take the Diagnostic" button site-wide.

### Updating the podcast URL

Change the `podcast` value in `js/links.js`. This controls the "Listen to the Episode"
button on the Two Church Model page. If your podcast host gives you an embed snippet
(Spotify, Apple Podcasts, etc.), you can also paste that directly into
`two-church-model.html` in place of the placeholder button — look for the HTML comment
that says `PLACEHOLDER EMBED`.

### Placeholder URLs that still need real links

Everything in `js/links.js` marked `// PLACEHOLDER` is a stand-in and needs a real URL
before launch:

- `diagnostic` — the obey.tools diagnostic tool
- `pdf` — the Church Waffle PDF
- `quickReference` — the quick reference guide PDF
- `translationEs`, `translationFr`, `translationPt` — translated PDFs
- `healthAssessment` — an optional guided digital assessment
- `podcast` — the Two Church Model episode

`obeyTools`, `commandsOfChrist`, and `threeCircles` are already real, live links to the
obey.tools site and don't need to change.

## Editing text content

All page copy is plain HTML — open the relevant `.html` file in any text editor and
change the text between tags. There's no templating or build step. Headings, cards,
and sections are laid out with simple, repeated markup patterns you can copy and
paste to add more (e.g. duplicate a `.card` block in `resources.html` to add another
resource).

## Editing styles

All styling lives in [`css/style.css`](css/style.css), organized into labeled sections
(Design tokens, Buttons, Nav, Hero, Cards, Footer, etc.). Colors, spacing, and border
radius are defined once at the top as CSS variables (`:root { --cw-accent: ...; }`) —
change a variable there to re-theme the whole site.

## Running locally

No build tools or dependencies required. From this folder, run any static file server, e.g.:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

or, if you have Node:

```bash
npx serve .
```

## Deploying with GitHub Pages

1. Push this repo to GitHub (already the case if you're reading this from the repo).
2. In the repo's **Settings → Pages**, set the source branch to the branch you want to
   deploy (e.g. `main`) and the folder to `/ (root)`.
3. The `CNAME` file in this repo already points to `churchwaffle.com` — in your DNS
   provider, add the A/ALIAS/CNAME records GitHub Pages requires for that domain
   (see [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).
4. Push to the deploy branch — GitHub Pages rebuilds automatically, no CI config needed.

## SEO notes

- Each page has its own `<title>`, meta description, canonical tag, Open Graph tags,
  and Twitter card tags — edit these directly in the `<head>` of each HTML file.
- `robots.txt` and `sitemap.xml` are at the repo root and reference `churchwaffle.com`.
  Update both if the domain ever changes.
- `assets/og-image.png` is the social-share preview image used by all pages. Swap it
  out for a branded version whenever you have one — same filename, same dimensions
  (1200×630) works everywhere without further changes.
