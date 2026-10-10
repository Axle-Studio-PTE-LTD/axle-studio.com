# Axle Studios — website

Single-page "under construction" site for Axle Studios Pte Ltd, built with [Astro](https://astro.build) as a fully static page.

## Commands

| Command        | Action                                        |
| :------------- | :-------------------------------------------- |
| `bun install`  | Install dependencies                          |
| `bun dev`      | Start the dev server at `localhost:4321`      |
| `bun build`    | Build the production site to `./dist/`        |
| `bun preview`  | Preview the production build locally          |

## Where things live

- `src/site.ts` — company details shown on the page (name, location, contact email). The contact button only appears once `email` is set.
- `src/pages/index.astro` — the page content and copy.
- `src/styles/global.css` — design tokens (light and dark via `light-dark()`), layout and typography.
- `src/lib/brand.ts` — the brand geometry: logo mark paths, "AXLE" letterforms and lockup layout, all traced from `brand/brand.jpeg`.
- `src/components/` — `Lockup` (mark + wordmark), `Mark`, `MarkPaths` (shared gradients), `Blueprint` (hero illustration) and `ThemeToggle`.
- `public/` — favicons, Apple touch icon and the social preview image (`og.png`), all generated from the same mark geometry.

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site with Bun and publishes `dist/` to GitHub Pages (Settings → Pages → Source must be "GitHub Actions"). The workflow can also be run by hand from the Actions tab.

The site is served on the custom domain `axle-studio.com`: `public/CNAME` holds the domain and `astro.config.mjs` sets `site` to `https://axle-studio.com`, which drives the canonical and social-image URLs. Links to files in `public/` go through `withBase()` from `src/lib/paths.ts`, so if the site ever has to live under a sub-path, setting `base` in the config is the only change needed.

## Notes

- The page follows the visitor's system colour scheme; the toggle in the header pins a choice in `localStorage`.
- Type is [Jost](https://fonts.google.com/specimen/Jost), loaded from Google Fonts, chosen to match the geometric secondary line of the lockup.
- All motion is disabled automatically for visitors who prefer reduced motion.
