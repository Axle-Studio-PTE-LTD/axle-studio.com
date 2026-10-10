// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Deployed to GitHub Pages on the custom domain (see public/CNAME).
  // `site` drives the canonical URL and the social-image URL.
  // No `base` is needed because the site is served from the domain root.
  site: 'https://axle-studio.com',
});
