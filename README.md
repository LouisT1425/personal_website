# Portfolio Site

A simple, sleek personal site: hero intro, project showcase, a two-column CV-style résumé, music (Spotify embed), and contact section. Bilingual (French default, English toggle). Plain HTML/CSS/JS — no build step, no dependencies. Warm cream color palette (with a matching dark mode), Fraunces + Inter type.

## Structure

```
index.html              Page content + data-i18n keys (all sections)
assets/css/style.css    Styles, theme tokens, layout, animations
assets/js/main.js       Translations dict, language toggle, theme toggle, mobile nav, scroll reveal
assets/resume/resume.pdf  Placeholder résumé served by the "Download" buttons
```

## Bilingual content (FR/EN)

All visible text is driven by `data-i18n="key"` attributes in `index.html`, resolved against the `translations` object at the top of `assets/js/main.js` (a `fr` and an `en` dict, keyed the same way). The `EN`/`FR` button in the header (next to the dark-mode toggle) swaps the whole page and persists the choice in `localStorage`.

To edit copy: change the string in **both** `translations.fr[key]` and `translations.en[key]` — the HTML itself only holds the default (French) text shown before JS runs, so it must also be kept in sync if you touch it there.

## Customize

- **Name, bio, socials:** hero section in `index.html` + matching `hero.*` keys in `main.js`.
- **Projects:** `ATMOSFER` is real; the other three cards are placeholders (`[Nom du projet]` / `project2/3/4.*` keys) — swap title, description, tags, and links, in both language dicts.
- **Résumé:** two-column layout — `.resume-aside` (about + skills) on the left, `.resume-main` (experience/education timeline) on the right. Bracketed placeholders (`[Nom de l'entreprise]`, etc.) mark what to fill in; corresponding keys are `resume.*`, `job1.*`, `edu1.*`.
- **Résumé file:** replace `assets/resume/resume.pdf` with your real exported PDF.
- **Music:** the `#music` section embeds a Spotify artist profile via iframe — swap the `src` URL for a different artist/playlist/track.
- **Accent color:** `--accent` / `--accent-soft` in `assets/css/style.css` (separate light/dark values).
- **Contact:** update the `mailto:` and social `href`s in the `#contact` section.

## Run locally

No build step needed — just serve the folder:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy

Static, so it works as-is on GitHub Pages, Netlify, Vercel, or Cloudflare Pages — point them at this folder, no build command required.
