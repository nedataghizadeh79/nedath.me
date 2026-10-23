import type { Register } from './site';

/** One job or volunteer role. */
export interface Role {
  org: string;
  orgHref?: string;
  title: string;
  place: string;
  /** Display range, e.g. "Dec 2025 – now". */
  dates: string;
  roles: Register[];
  points: string[];
  /** Slug of the related project in work.ts, if any. */
  project?: string;
}

export const experience: Role[] = [
  {
    org: 'ZB MED – Information Centre for Life Sciences',
    orgHref: 'https://www.zbmed.de/en/',
    title: 'Front-end Developer (Student Research Assistant)',
    place: 'Bonn, Germany',
    dates: 'Dec 2025 – now',
    roles: ['frontend', 'design'],
    project: 'terminology-widgets',
    points: [
      'Developed the terminology-mapping widgets from first version to full feature set: both directions, filters, detail views.',
      'Built the EntityListWidget for browsing ontology classes, properties and individuals, with search and pagination.',
      'Restructured widgets into separate data and presentation layers, so apps that already have the data can reuse the UI.',
      'Fixed rendering, styling and type bugs, redesigned the Next.js demo and kept Storybook docs up to date.',
      'Extending the plain JavaScript package so every widget also works without React.',
    ],
  },
  {
    org: 'Serity',
    orgHref: 'https://serity.de',
    title: 'Junior Technical Consultant (Working Student)',
    place: 'Bonn, Germany',
    dates: 'Apr 2025 – Aug 2025',
    roles: ['people'],
    project: 'serity-requirements',
    points: [
      'Supported ServiceNow implementations in security operations and compliance for international enterprise clients.',
      'Turned client requirements into user stories and project documentation for the consultant team.',
      'Helped prepare and deliver IT workshops for clients.',
    ],
  },
  {
    org: 'Digikala',
    orgHref: 'https://www.digikala.com',
    title: 'Front-end Developer',
    place: 'Tehran, Iran',
    dates: 'Nov 2022 – May 2023',
    roles: ['frontend'],
    project: 'seller-center-migration',
    points: [
      'Worked on the Seller Center of Iran’s largest online retailer (40M+ monthly users).',
      'Helped migrate the seller panel from Twig to React, rewriting legacy pages as reusable React/TypeScript components.',
      'Built new seller-panel features as part of the migration.',
    ],
  },
  {
    org: 'AYOT',
    title: 'Software Engineer Intern and UI/UX Designer',
    place: 'Tehran, Iran',
    dates: 'Mar 2022 – Sep 2022',
    roles: ['design', 'frontend'],
    project: 'dall-e-platform',
    points: [
      'Designed UI screens in Figma and implemented them in React for AYOT’s smart-home platform.',
      'Designed the DALL-E artist-commission platform for desktop and mobile, and built it in React with my colleagues.',
    ],
  },
];

export const volunteering: Role[] = [
  {
    org: 'CE Student Association, Sharif University of Technology',
    title: 'Director',
    place: 'Tehran, Iran',
    dates: 'Nov 2021 –',
    roles: ['people'],
    points: ['Coordinator and presenter at Shenasa, a scientific event on AI, neuroscience and cognitive science.'],
  },
  {
    org: 'ICPC Asia Regional Contest, Tehran site',
    title: 'Staff',
    place: 'Tehran, Iran',
    dates: 'Dec 2019 – Jan 2020',
    roles: ['people'],
    points: ['Staff at the 43rd International Collegiate Programming Contest, 20th Asian Regional Contest in Iran.'],
  },
];

export interface Degree {
  school: string;
  href: string;
  degree: string;
  dates: string;
  grade: string;
}

export const education: Degree[] = [
  {
    school: 'University of Bonn',
    href: 'https://www.uni-bonn.de/en/home',
    degree: 'M.Sc. Computer Science',
    dates: 'Oct 2024 – expected Sep 2027',
    grade: '1.9 (German scale)',
  },
  {
    school: 'Sharif University of Technology',
    href: 'https://en.sharif.ir',
    degree: 'B.Sc. Computer Engineering',
    dates: 'Sep 2019 – Feb 2024',
    grade: '1.7 (German scale)',
  },
];

export interface Publication {
  title: string;
  venue: string;
  authors: string;
  href: string;
  award?: string;
}

export const publications: Publication[] = [
  {
    title: 'HarfoSokhan: A Comprehensive Parallel Dataset for Transitions between Persian Colloquial and Formal Variations',
    venue: 'EACL 2026',
    authors: 'H. Jahad Sarvestani, V. Ramezanian, S. Saadat, N. Taghizadeh Serajeh, et al.',
    href: 'https://aclanthology.org/2026.eacl-long.346/',
    award: 'Best Resource Paper',
  },
  {
    title: 'LLMs in HCI Data Work: Bridging the Gap Between Information Retrieval and Responsible Research Practices',
    venue: 'CHI 2024 workshop',
    authors: 'N. Taghizadeh Serajeh, I. Mohammadi, V. Fuccella, M. De Rosa',
    href: 'https://arxiv.org/abs/2403.18173',
  },
];

/** A skill and where it was used, so every claim points to evidence. */
export interface Skill {
  name: string;
  roles: Register[];
  /** Where it was used, in a few words. */
  evidence: string;
}

export const skills: Skill[] = [
  { name: 'React', roles: ['frontend'], evidence: 'ZB MED widgets, Digikala Seller Center, AYOT' },
  { name: 'TypeScript', roles: ['frontend'], evidence: 'ZB MED widgets, Digikala Seller Center' },
  { name: 'JavaScript, HTML, CSS', roles: ['frontend'], evidence: 'Every project; plain JS package at ZB MED' },
  { name: 'Storybook', roles: ['frontend'], evidence: 'Widget docs and shareable stories at ZB MED' },
  { name: 'Elastic UI', roles: ['frontend', 'design'], evidence: 'Component library behind the ZB MED widgets' },
  { name: 'Next.js', roles: ['frontend'], evidence: 'Redesigned the library’s demo app' },
  { name: 'REST APIs', roles: ['frontend'], evidence: 'Terminology and mapping APIs in the widgets' },
  { name: 'Figma', roles: ['design'], evidence: 'DALL-E platform, AYOT smart-home screens' },
  { name: 'User stories and requirements', roles: ['people', 'design'], evidence: 'Client work at Serity' },
  { name: 'Workshops and presenting', roles: ['people'], evidence: 'Serity client workshops, Shenasa' },
  { name: 'ServiceNow', roles: ['people'], evidence: 'Certified System Administrator; Serity projects' },
  { name: 'Python', roles: ['frontend'], evidence: 'NLP course projects and research' },
  { name: 'Git and code review', roles: ['frontend', 'people'], evidence: 'Branches and reviewed pull requests at ZB MED' },
];

/** Skills exactly as grouped on the CV. */
export const cvSkills = [
  { group: 'Languages', items: 'TypeScript, JavaScript, HTML, CSS, Python' },
  { group: 'Front-end', items: 'React, Elastic UI, Storybook, Vitest, Figma' },
  { group: 'Other', items: 'Git, REST APIs, FastAPI, ServiceNow' },
];

export const certificates = [
  { name: 'ServiceNow Certified System Administrator', issuer: 'ServiceNow', date: 'Apr 2025' },
  { name: 'IELTS Academic 7.5 (C1)', issuer: 'IELTS', date: 'Feb 2024' },
];

export const languages = [
  { name: 'Persian', level: 'Native' },
  { name: 'English', level: 'C1 (IELTS 7.5)' },
  { name: 'German', level: 'B1 (self-assessed)' },
];

/** One short line about life outside work, shown at the end of About. */
export const outsideWork =
  'Outside work I make relief panels, dotwork portraits and modern Persian calligraphy. It’s where my eye for composition comes from. I also snowboard and play board games.';
