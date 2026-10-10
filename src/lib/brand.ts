/**
 * Axle Studios brand geometry.
 *
 * Everything here was measured from `brand/brand.jpeg` (1600 × 800) and is
 * expressed in that file's pixel units, translated so the mark's bounding
 * box starts at (0, 0). The mark is two filleted polygons; the wordmark is a
 * set of filled letterforms. Keeping the geometry in one module lets the
 * components, favicon and social image all draw the same shapes.
 */

export const MARK = {
  w: 342,
  h: 264.3,
  /** Left leg: 27-unit apex, 52-unit shoulder, 81-unit heel, sharp outer foot. */
  left:
    'M155.1 12.4A27 27 0 0 1 201.6 14.3L223.6 55.5A52 52 0 0 1 221.8 107.6L153.6 216.3A81 81 0 0 1 85 254.2L0 254.2Z',
  /** Right leg: folds under the left leg (3-unit seam), 57-unit shoulder and heel, sharp outer foot. */
  right:
    'M208 135.2L242.5 135.2A57 57 0 0 1 293.6 166.9L342 264.3L269.7 264.3A57 57 0 0 1 221.6 237.9L182.3 176.2Z',
  /** Lean of the legs, in degrees from the horizontal. */
  leanDeg: 57.3,
} as const;

/** Construction geometry for the blueprint illustration. Lines are x = a + b·y. */
export const CONSTRUCTION = {
  lines: [
    { a: 163.04, b: -0.6412 }, // left leg, outer edge
    { a: 289.41, b: -0.6279 }, // left leg, inner edge
    { a: 193.98, b: 0.5347 }, // left leg, top cut
    { a: 70.28, b: 0.636 }, // right leg, inner edge
    { a: 210.7, b: 0.4965 }, // right leg, outer edge
  ],
  horizontals: [135.2, 254.2, 264.3],
  fillets: [
    { cx: 177.8, cy: 27, r: 27 },
    { cx: 177.8, cy: 80, r: 52 },
    { cx: 85, cy: 173.2, r: 81 },
    { cx: 242.5, cy: 192.2, r: 57 },
    { cx: 269.7, cy: 207.3, r: 57 },
  ],
  foot: { x: 0, y: 254.2 },
} as const;

/**
 * "AXLE" as filled letterforms. Cap height 105, stems 15, arms 12,
 * diagonals 14. The A has no crossbar and a truncated apex, the L a
 * small inner fillet, the E a shortened middle arm, as in the brand file.
 */
export const LETTERS = [
  'M0 105L60.4 0H78.6L139 105H122.85L69.5 12.2L16.15 105Z',
  'M210 0H229.3L329 105H309.7Z',
  'M309.7 0H329L229.3 105H210Z',
  'M436 0H451V81.5A12 12 0 0 0 463 93.5H531V105H436Z',
  'M635 0H743.5V12H650V45H733.5V57H650V93H743.5V105H635Z',
].join('');

export const WORD = {
  w: 745,
  h: 105,
  /** Secondary line, justified to the width of "AXLE". */
  sub: { text: 'STUDIOS PTE LTD', x: 2, y: 177, length: 743, size: 35 },
} as const;

/** Full lockup layout (mark + wordmark) in mark units, matching brand.jpeg. */
export const LOCKUP = {
  w: 1145,
  h: 264.3,
  wordX: 399.25,
  /** Wordmark top when the secondary line is present. */
  wordY: 59.65,
  /** Wordmark top when it is centred on the mark (no secondary line). */
  wordYCompact: 79.65,
} as const;
