/**
 * Site-wide facts: identity, contact links and the home-page introduction.
 * Every page reads from here, so a change in one place updates the whole site.
 */

export const person = {
  name: 'Neda Taghizade Serajeh',
  shortName: 'Neda',
  /** Spelling used on published papers, shown next to them. */
  publishedAs: 'N. Taghizadeh Serajeh',
  role: 'Front-end developer and UI/UX designer',
  location: 'Bonn, Germany',
  email: 'nedath1378@gmail.com',
  url: 'https://neda.page',
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

/** What Neda is looking for, shown on the home page and used in search descriptions. */
export const lookingFor = {
  roles: 'Working student or internship',
  fields: 'front-end development or UI/UX design',
  places: ['Remote', 'Hybrid', 'Bonn', 'Cologne', 'Düsseldorf'],
  graduation: 'M.Sc. graduation in 2027',
};

/** Path of the downloadable CV. */
export const cvFile = {
  href: '/Neda_Taghizade_Serajeh_CV.pdf',
  label: 'CV (PDF)',
};

/**
 * The home-page statement. The last words are edited live in blue pencil:
 * `edits[0]` is the resting text, the others are written over it in turn.
 */
export const intro = {
  lead: 'I turn what people need into',
  /** The word in `lead` circled in blue pencil on load. */
  circled: 'people',
  edits: ['React code.', 'clear user stories.', 'tested screens.'],
  /** A short introduction right under the statement: the first impression. */
  story: [
    'I’m a frontend developer in Bonn and an M.Sc. Computer Science student at the University of Bonn. At ZB MED I build open-source React widgets that research apps use to show ontology data. Before that I worked on Digikala’s Seller Center in Tehran, and designed and built interfaces at AYOT.',
    'I enjoy work where design, code and people overlap: designing a screen and then building it, turning a client’s needs into user stories, or presenting research to a mixed audience. I studied Computer Engineering at Sharif University of Technology.',
  ],
  /** One line about art, linking to the Portfolio page. */
  art: {
    text: 'I also love making art by hand: relief panels, Persian calligraphy and dotwork drawings.',
    link: 'See my art portfolio',
    href: '/portfolio/',
  },
  /** Handwritten margin note beside the statement. */
  note: 'designs it, builds it, explains it',
  proofs: [
    '33 merged pull requests in terminology-service-suite, an open-source widget library with 11k+ npm downloads a year',
    'Migrated Digikala’s Seller Center pages from Twig to reusable React and TypeScript components',
    'Designed the DALL-E artist-commission platform in Figma, then built it in React with my colleagues',
    'Turned client requirements into user stories for ServiceNow projects at Serity, and became a ServiceNow Certified System Administrator',
  ],
};
