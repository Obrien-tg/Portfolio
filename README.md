# Polaris — Obrien TG portfolio

Personal page and portfolio for Obrien Takunda Gwanyanya.

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

The included `netlify.toml` configures Netlify to run `npm run build` and publish
the generated `dist` directory. Connect the repository in Netlify and deploy;
the contact form is detected automatically through Netlify Forms.

Run `npm run check` and `npm run build` before publishing.

If port `4173` is already in use, the site may already be running.

## Routes

`/`, `/about/`, `/work/`, `/services/`, and `/contact/` are static, independently
routable pages with shared accessible layout and navigation.
