# Integration hand-off

- Frontend: `services/web` equivalent is repository root; Astro static site.
- Build: `npm install`, `npm run build`; dev: `npm run dev`.
- API: none. Netlify Forms handles `POST /` form submissions.
- Form seam: `src/pages/contact.astro`; declaration includes `data-netlify`, `form-name`, and honeypot.
- Database: none; no migrations or seed data required.
- Routes: `/`, `/about/`, `/work/`, `/services/`, `/contact/`.
- Services: static frontend (Essential), Netlify Forms (Essential).
