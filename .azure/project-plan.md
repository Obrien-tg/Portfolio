# Polaris

**Status**: Approved
**Created**: 2026-10-28
**Mode**: AUGMENT

## 1. Project Overview

Polaris is a rebuild of the existing Obrien TG portfolio as a statically generated Astro site. It will present verified personal positioning, work, services, and a contact route across five accessible pages: Home, About, Work, Services, and Contact.

The implementation will use TypeScript, Astro, and Tailwind CSS. Netlify Forms will provide the contact submission flow without introducing an application database or API. The site must be deployable to Netlify and must not invent project facts, client details, metrics, or links.

## 2. Goals & Scope

- Replace the current single-page HTML/CSS/vanilla JavaScript presentation with a maintainable Astro + Tailwind structure.
- Preserve only claims and project links that can be verified in the existing repository or in explicitly supplied source material.
- Provide five independently routable pages with shared navigation, metadata, focus states, and responsive layouts.
- Provide an accessible Netlify Forms contact form with clear success/error messaging and spam protection.
- Keep the visual language restrained and dark: Polaris-inspired night-sky neutrals, a small cool accent palette, strong hierarchy, and no decorative motion that harms readability.
- Include Netlify deployment configuration and documentation for a static build.

Out of scope: user accounts, an application backend, CMS, analytics, invented case-study content, unverified social links, and persistent application data.

## 3. User Experience & Pages

- **Home (`/`)**: concise verified positioning, primary calls to Work and Contact, portrait asset when appropriate, and a short proof-oriented introduction.
- **About (`/about/`)**: verified biography, current study/career context, working principles, and a transparent note where details are intentionally omitted.
- **Work (`/work/`)**: project cards built only from repository-verified projects and links; unavailable details use honest “details coming soon” treatment rather than fabricated outcomes.
- **Services (`/services/`)**: accessible descriptions of confirmed capabilities such as practical web builds and delivery/DevOps-oriented support, without unsupported guarantees.
- **Contact (`/contact/`)**: Netlify Forms form with name, email, project context, message, consent/help text, honeypot, and an accessible confirmation state.

Shared UX requirements: keyboard-complete navigation, visible focus indicators, semantic landmarks, skip link, sensible heading order, reduced-motion support, responsive mobile navigation, descriptive image alt text, and page-specific title/description metadata.

## 4. Technical Architecture

- Astro static output with file-based routes under `src/pages`.
- TypeScript for Astro components, utilities, and any small client-side interaction.
- Tailwind CSS with a small token layer for color, spacing, typography, borders, and focus treatment; avoid arbitrary one-off styling where a token is appropriate.
- Shared layout and primitives: `BaseLayout`, `Header`, `Footer`, `NavLink`, `SectionIntro`, `ButtonLink`, `ProjectCard`, `ServiceCard`, and form field components.
- Content kept in typed local data modules or Markdown/MDX only when it remains easy to audit; each project record includes an explicit source/link field and no unsupported metrics.
- Use the existing portrait only if its provenance and alt text remain appropriate; optimize it as a static asset.
- Netlify Forms uses a static HTML form declaration (`data-netlify="true"`, `name`, honeypot, and hidden form-name field) compatible with Astro output. No server runtime is required.
- Netlify readiness includes `netlify.toml` with the Astro build command/output directory, a README deployment section, and a successful production build check.

## 5. Services, Data & Integrations

**Frontend**: `polaris-frontend` — Astro + TypeScript + Tailwind CSS static site, five routes, shared accessible components, and Netlify deployment configuration.

**Backend**: None. Netlify Forms is a hosting-platform form integration, not an application API.

**Authentication**: None. This is a public portfolio and does not expose authenticated application features.

**Data Stores**: No datastore required. Form submissions are handled by Netlify Forms; the project does not add a database, queue, cache, or object-storage service.

**External links**: Keep only links that are present and verifiable in the current repository or supplied by the user. Do not retain placeholder URLs or infer profiles from names.

## 6. Design System & UI

**Component Library**: Tailwind CSS utility classes with small, semantic Astro components (no additional UI framework).

**Visual direction**: restrained dark Polaris/night-sky interface; near-black blue-gray surfaces, cool cyan/ice accent used sparingly, muted slate text, thin borders, and subtle radial atmosphere. Avoid neon-heavy gradients, excessive glassmorphism, and ornamental cards.

**Typography**: a highly legible sans-serif system with a distinct but restrained display treatment for headings; use local/system fallbacks so the site remains readable if remote fonts are unavailable.

**Layout**: centered content column with generous vertical rhythm, a compact sticky header, clear page introductions, grid layouts that collapse cleanly on small screens, and consistent max-width/container tokens.

**Accessibility**: WCAG-conscious contrast, `:focus-visible` rings, semantic HTML, labels and descriptions for all controls, error association via `aria-describedby`, reduced-motion media query, and no information conveyed by color alone.

**Content rules**: every claim, credential, project name, metric, testimonial, and outbound link must be traceable to repository content or user-provided verification. Use plain language and state uncertainty rather than filling gaps.

## 7. Implementation & Verification

1. Establish Astro project structure and Tailwind integration while preserving the existing repository as the source for content review.
2. Extract and type verified content; flag every unverified claim/link for removal or confirmation.
3. Build the shared layout, navigation, responsive menu, metadata, and accessible focus/reduced-motion behavior.
4. Implement Home, About, Work, Services, and Contact routes.
5. Add Netlify Forms markup, honeypot, validation messaging, and a no-JavaScript-friendly submission path.
6. Add `netlify.toml`, deployment documentation, and static asset optimization.
7. Run formatting/type checks, production build, link/route checks, and an accessibility pass at mobile and desktop widths.
8. Confirm the final output contains no placeholder project claims, dead links, secrets, or accidental legacy SPA-only navigation.

Acceptance criteria: all five routes build as static HTML; navigation works with keyboard and without client-side JavaScript; contact form is detected by Netlify; build output is publishable from the configured directory; only verified claims/links remain; and the dark design meets readable contrast and visible-focus requirements.
