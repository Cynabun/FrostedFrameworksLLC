# Frosted Frameworks website

A static site for GitHub Pages: `index.html`, `about.html`, `works.html`, `contact.html`,
plus `css/style.css`, `js/main.js`, and `favicon.svg`.

## Before going live

1. **Fill in placeholders.** Search the files for `[` and `EDIT:` to find everything to replace:
   - `about.html`: your name and story; optionally a photo (instructions in the comment).
   - `works.html`: your real skill lists and project cards (delete cards you don't need yet).
   - `contact.html`: replace `hello@yourdomain.com` with your real email (it appears in the `data-email` attribute and the email link).
2. **Connect the contact form.** GitHub Pages can't process forms on its own, so the form uses Formspree:
   create a free form at https://formspree.io, copy its ID, and replace `YOUR_FORM_ID` in `contact.html`.
3. **Upload** everything in this folder to the root of your repo (keep the `css` and `js` folders).
4. **Custom domain.** If your domain is already set up in Settings → Pages, you're done.
   If not, add it there, which creates a `CNAME` file in the repo; don't delete that file on future uploads.

## Changing the look

Colors and fonts are defined at the top of `css/style.css` under `:root`.
