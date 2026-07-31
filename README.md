# Portfolio Site

A simple, sleek personal site: hero intro, project showcase, music (Spotify embed), résumé/experience timeline, and contact section. Plain HTML/CSS/JS — no build step, no dependencies. Warm cream/nature color palette (with a matching dark mode), centered layout, Fraunces + Inter type.

## Structure

```
index.html              Page content (all sections)
assets/css/style.css    Styles, theme tokens, layout, animations
assets/js/main.js       Theme toggle, mobile nav, scroll reveal, active-nav highlighting
assets/resume/resume.pdf  Placeholder résumé served by the "Download Résumé" buttons
```

## Customize

- **Name, bio, socials:** edit the hero section in `index.html` (search for `Louis T.`).
- **Projects:** duplicate a `.project-card` block in the `#projects` section; swap title, description, tags, and links. Each card's thumbnail color comes from `.thumb-1` … `.thumb-4` in `style.css` — add more if you add more cards.
- **Music:** the `#music` section embeds a Spotify artist profile via iframe — swap the `src` URL in `index.html` for a different artist/playlist/track embed.
- **Résumé content:** edit the `#resume` section (summary, skills list, experience/education timeline items).
- **Résumé file:** replace `assets/resume/resume.pdf` with your real exported PDF (same filename, or update the `href` in both "Download Résumé" links).
- **Accent color:** change `--accent` (and `--accent-soft`) in `assets/css/style.css` — light and dark themes each have their own values.
- **Contact email/links:** update the `mailto:` and social `href`s in the `#contact` section.

## Run locally

No build step needed — just serve the folder:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy

Static, so it works as-is on GitHub Pages, Netlify, Vercel, or Cloudflare Pages — point them at this folder, no build command required.
