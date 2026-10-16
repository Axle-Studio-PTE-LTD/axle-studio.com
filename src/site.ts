/** Site-wide details. Edit these; the page reads everything from here. */
export const site = {
  name: 'Axle Studios',
  legalName: 'Axle Studios Pte Ltd',
  /** ACRA UEN, shown in the footer once set. */
  uen: '',
  location: 'Singapore',
  description:
    'Axle Studios Pte Ltd is a Singapore software company. Our first product, Abang SG, compares repair and home service companies so you can find the right one for the job.',
  /** Contact address. Leave empty to hide the email button. */
  email: 'admin@axle-studios.com',
  /** WhatsApp number in international format without "+", e.g. '6591234567'. Leave empty to hide. */
  whatsapp: '',
  year: new Date().getFullYear(),
};

export const abang = {
  name: 'Abang SG',
  url: 'https://abang.sg',
  /** Flip to true when abang.sg is live; the button then links to it. */
  live: true,
};

export const founders = [
  {
    name: 'David',
    role: 'Founder',
    focus: 'Business direction, finance, growth and sales.',
    /** Optional personal site, shown as a link on the card. */
    url: 'https://tandavid.com',
  },
  {
    name: 'Long Ju',
    role: 'Co-founder',
    focus: 'Engineering, product and search.',
  },
  {
    name: 'Andy',
    role: 'Co-founder',
    focus: 'Marketing, brand awareness and customer growth.',
  },
];
