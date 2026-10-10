import type { APIRoute } from 'astro';
import { withBase } from '../lib/paths';

// Built to dist/robots.txt. The sitemap URL comes from `site` in astro.config,
// so it follows the domain (and `base`) without a hand-edited file in public/.
export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL(withBase('sitemap-index.xml'), site);
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemapURL.href}\n`);
};
