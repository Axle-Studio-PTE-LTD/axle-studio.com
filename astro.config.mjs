// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Deployed to GitHub Pages on the custom domain (see public/CNAME).
  // `site` drives the canonical URL, the social-image URL, the sitemap and robots.txt.
  // No `base` is needed because the site is served from the domain root.
  site: 'https://axle-studio.com',

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
