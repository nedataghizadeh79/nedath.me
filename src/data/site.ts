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
  /** Brand logo; profiles with a logo are shown prominently in the header and on home. */
  icon?: 'linkedin' | 'github';
}

export const profiles: Profile[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/neda-taghizadeh-serajeh/', detail: 'neda-taghizadeh-serajeh', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/nedataghizadeh79', detail: 'nedataghizadeh79', icon: 'github' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=wXJ6XPEAAAAJ&hl=en', detail: '2 publications' },
];

/** What Neda is looking for, shown on the home page and used in search descriptions. */
export const lookingFor = {
  roles: 'Working student and internship positions in:',
  /** The fields Neda can work in, each with the strength behind it. */
  fields: [
    { name: 'Software and front-end development', detail: 'React, TypeScript and open-source web libraries' },
    { name: 'UI/UX design', detail: 'Figma design and prototyping, built through to working interfaces' },
    { name: 'HR and technical recruiting', detail: 'A technical background combined with strong communication skills' },
  ],
  places: ['Remote', 'Hybrid', 'Bonn', 'Cologne', 'Düsseldorf'],
  graduation: 'Expected Graduation: Dec. 2027',
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
  /** The first line of the introduction; the first name is set large and the family name small. */
  greeting: {
    before: 'Hi, I’m',
    name: 'Neda',
    family: 'Taghizadeh Serajeh',
    after: '. My name is long, but my commits are short.',
  },
  /** A short introduction right under the statement: the first impression. */
  story: [
    'I care about the small things: a clear screen, tidy code, a good conversation with the people I work with. I’m curious, I ask a lot of questions, and I’m happiest when something I helped build makes someone’s day a little easier.',
  ],
  /** A paragraph about life away from the screen, linking to the Portfolio page. */
  art: {
    text: 'Away from the screen, you’ll find me lost in my latest DIY project, on a snowboard, at a board game table, learning Deutsch articles or watching a movie I’ll soon insist you have to see.',
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
    'Worked as HR Assistant at AYOT, a very good experience thanks to my technical background and strong communication skills',
  ],
};
