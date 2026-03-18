# Obrien TG Personal Page

Personal page and portfolio for Obrien Takunda Gwanyanya.

## Overview

This site presents:

- Personal positioning and career focus
- Featured GitHub case studies
- Services for hiring and freelance opportunities
- Contact-first conversion flow
- Social presence integration (`@Obrien_tg`)

## Tech Stack

- HTML5
- Tailwind CSS (CDN)
- Vanilla JavaScript
- Font Awesome (CDN)

## Project Structure

- `index.html`: Main single-page app structure and content sections
- `JS/script.js`: Section routing, active navigation state, mobile menu behavior
- `CSS/style.css`: Legacy stylesheet retained for compatibility
- `CSS/skins/color-1.css`: Legacy skin variable file
- `Images/`: Static assets

## Local Run

From the project root:

```bash
busybox httpd -f -p 4173 -h .
```

Then open:

- `http://localhost:4173`

If port `4173` is already in use, the site may already be running.

## Editing Notes

- The page behaves like a lightweight SPA: only one `.section` is visible at a time.
- Navigation updates URL hash for deep links and browser back/forward support.
- Keep comments concise and focused on non-obvious behavior.

## Roadmap (Short)

- Add project detail pages for each featured case study
- Replace `mailto:` form flow with a service-backed endpoint
- Add richer social share metadata and OG image
