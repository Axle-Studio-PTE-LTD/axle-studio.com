/**
 * Base-path helpers. The site is served from the domain root today, so these
 * resolve to plain absolute paths. If it is ever deployed under a sub-path,
 * set `base` in astro.config and every link built here follows automatically.
 */
const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** Home page URL, with the base prefix and a trailing slash. */
export const home = `${base}/`;

/** URL for a file in `public/`, e.g. withBase('favicon.svg'). */
export const withBase = (path: string) => `${base}/${path.replace(/^\/+/, '')}`;
