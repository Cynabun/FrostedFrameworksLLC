# Frosted Frameworks website

The static site for https://frostedframeworks.com, hosted on GitHub Pages.

- Pages: `index.html`, `about.html`, `works.html`, `contact.html`, and `404.html`
  (shown for any missing address; it uses `/`-rooted links so it works at any depth).
- `css/style.css` and `js/main.js` are shared by every page.
- `images/logo.svg` is the logo and favicon: edit this one file to change the logo everywhere.
- `images/social-card.png` (1200×630) is the preview image shown when the site is shared.
- `CNAME` holds the custom domain. Don't delete it, or GitHub Pages will drop the domain.

## Adding a project to the Works page

Copy an `<article class="project">` block in `works.html`. Put the image in `images/works/`:
16:9, about 1200px wide, saved as WebP keeps the page fast. The full-size originals
(`images/Promo*`) aren't used by the site.

## Still to do

- `about.html`: optionally replace the "FF" circle with a photo (instructions in the comment).

## Contact form

The form posts to Formspree (form `mkjorzdd`), which emails submissions to the account owner.
GitHub Pages can't process forms itself. Manage the form and see submissions at https://formspree.io.

## Hosting setup

- GitHub repo **Settings → Pages**: deploy from a branch, `/ (root)` folder, custom domain `frostedframeworks.com`, **Enforce HTTPS** on.
- Cloudflare DNS for `frostedframeworks.com`, all set to **DNS only** (grey cloud):
  - `A` records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  - `AAAA` records for `@`: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
  - `CNAME` record `www` → `cynabun.github.io`

## Changing the look

Colors and fonts are defined at the top of `css/style.css` under `:root`.
If the brand or services change, also update the social preview tags (`og:` lines) in each page's `<head>`
and regenerate `images/social-card.png`.
