# Obrien TG portfolio

✦ A direction to build toward.

Personal page and portfolio for Obrien Takunda Gwanyanya.

**Live site:** https://obrien-tg.netlify.app

## Overview

This site presents:

- Personal positioning and career focus
- Featured GitHub case studies
- Services for hiring and freelance opportunities
- Contact-first conversion flow
- Social presence integration (`@Obrien_tg`)

## Tech Stack

- Astro + TypeScript
- Tailwind CSS
- Netlify Forms

## Project Structure

- `src/pages/`: Static Astro routes for the five portfolio pages
- `src/components/`: Shared navigation, layout, project, service, and content components
- `src/data.ts`: Typed, auditable project and service content
- `public/images/`: Static assets

## Local development

From the project root:

```bash
npm install
npm run dev
```

Astro prints the local URL (normally `http://localhost:4321`).

## Deployment

The site is hosted on Cloudflare (Workers static assets). `wrangler.jsonc` points at the generated `dist` folder, and `public/_headers` sets security headers and caching.

In the Cloudflare dashboard, create a Workers project from this GitHub repository with:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

The contact form posts to [Web3Forms](https://web3forms.com). Put your access key in `src/pages/contact/index.astro`; the build stops with a clear message if it is still the placeholder.

Run `npm run check` and `npm run build` before publishing.

## Routes

`/`, `/about/`, `/work/`, `/services/`, and `/contact/` are static, independently
routable pages with shared accessible layout and navigation.


## Quality checks

GitHub Actions runs `npm run check` and `npm run build` on every push (see `.github/workflows/ci.yml`).
