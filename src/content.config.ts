import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Timeline entries. One markdown file per event in src/content/timeline/.
 * Add a file, push, and it appears on the timeline in date order.
 */
const timeline = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/timeline' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      /** Optional text to show instead of the date, e.g. "Coming soon". */
      dateLabel: z.string().optional(),
      tag: z.enum(['Meeting', 'Milestone', 'Launch', 'Team']).default('Milestone'),
      /** Planned but not happened yet: drawn with a dashed outline. */
      upcoming: z.boolean().default(false),
      /** Hide from the site without deleting the file. */
      draft: z.boolean().default(false),
      /** Tie-breaker for events on the same day: lower comes first. */
      order: z.number().default(0),
      /** Optional screenshot (path relative to the .md file). Add a dark variant and it follows the site theme. */
      image: z
        .object({
          light: image(),
          dark: image().optional(),
          alt: z.string(),
        })
        .optional(),
    }),
});

export const collections = { timeline };
