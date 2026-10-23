/**
 * Site-wide facts: identity, contact links and the three readings.
 * Every page reads from here, so a change in one place updates the whole site.
 */

/** A reading of the site, tuned for one kind of reader. */
export type Register = 'frontend' | 'people' | 'design';

/** Label and short description for each reading, in switch order. */
export const registers: { id: Register; label: string; long: string }[] = [
  { id: 'frontend', label: 'Frontend', long: 'frontend development' },
  { id: 'people', label: 'People', long: 'people and communication' },
  { id: 'design', label: 'UI/UX', long: 'UI and UX design' },
];

/** The reading shown when the visitor has not chosen one. */
export const defaultRegister: Register = 'frontend';

export const person = {
  name: 'Neda Taghizade Serajeh',
  shortName: 'Neda',
  /** Spelling used on published papers, shown next to them. */
  publishedAs: 'N. Taghizadeh Serajeh',
  role: 'Frontend developer',
  location: 'Bonn, Germany',
  email: 'nedath1378@gmail.com',
  url: 'https://nedath.me',
};

/** One public profile link. */
export interface Profile {
  label: string;
  href: string;
  /** Short handle or detail shown next to the label. */
  detail: string;
}

export const profiles: Profile[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/neda-taghizadeh-serajeh/', detail: 'neda-taghizadeh-serajeh' },
  { label: 'GitHub', href: 'https://github.com/nedataghizadeh79', detail: 'nedataghizadeh79' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=wXJ6XPEAAAAJ&hl=en', detail: '2 publications' },
];

/** Path of the downloadable CV (built by `npm run render`). */
export const cvFile = {
  href: '/Neda_Taghizade_Serajeh_CV.pdf',
  label: 'CV (PDF)',
};

/** The opening statement and three proofs for each reading. */
export const abstract: Record<Register, { statement: string; proofs: string[] }> = {
  frontend: {
    statement:
      'I build React and TypeScript interfaces, from an open-source widget library for research apps to the seller panel of Iran’s largest online retailer.',
    proofs: [
      '33 merged pull requests in terminology-service-suite, a widget library with 11k+ npm downloads a year',
      'Migrated Digikala’s Seller Center pages from Twig to reusable React and TypeScript components',
      'Separated data from presentation across the library’s widgets, so apps that already have the data can reuse the UI',
    ],
  },
  people: {
    statement:
      'I turn what clients and colleagues need into clear user stories, workshops and events that people can act on.',
    proofs: [
      'Turned client requirements into user stories and helped deliver IT workshops at Serity',
      'Directed the Computer Engineering student association at Sharif University of Technology',
      'Coordinated and presented at Shenasa, an event on AI, neuroscience and cognitive science',
    ],
  },
  design: {
    statement:
      'I design in Figma and build what I design, so the screen people use is the one that was tested.',
    proofs: [
      'Designed the DALL-E artist-commission platform for desktop and mobile, then built it in React with my colleagues',
      'Designed and implemented smart-home screens at AYOT',
      'First author of a CHI 2024 workshop paper on LLMs in HCI research',
    ],
  },
};
