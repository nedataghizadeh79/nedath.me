/** A public link that backs up a claim. The note tells the reader what is behind it. */
export interface Source {
  label: string;
  href: string;
  note: string;
}

/** One box in a case-study flow diagram. */
export interface DiagramStep {
  label: string;
  detail: string;
}

/** A decision in a case study, with an optional margin note in blue pencil. */
export interface Decision {
  title: string;
  body: string;
  note?: string;
}

export interface CaseStudy {
  context: string[];
  /** What I did myself. */
  myPart: string[];
  /** What the team or others did. Kept separate on purpose. */
  teamPart: string[];
  diagram?: { title: string; steps: DiagramStep[] };
  decisions: Decision[];
  outcome: string[];
  /** Facts still missing. Rendered as visible placeholders until filled in. */
  missing?: string[];
}

export type WorkType = 'Open source' | 'Product' | 'Research' | 'Side project' | 'Leadership';

export interface Project {
  slug: string;
  /** Catalogue number: reading, type and sequence. */
  code: string;
  title: string;
  org: string;
  /** Display years, e.g. "2025–" or "2022". */
  years: string;
  /** Sort key: the year the work started. */
  start: number;
  summary: string;
  type: WorkType;
  /** Position on the home page; omit to leave the project out of "Selected work". */
  featured?: number;
  sources: Source[];
  caseStudy?: CaseStudy;
}

const tssRepo = 'https://github.com/ts4nfdi/terminology-service-suite';

export const projects: Project[] = [
  {
    slug: 'terminology-widgets',
    code: 'FE · OSS · 01',
    title: 'Terminology mapping and entity widgets',
    org: 'ZB MED',
    years: '2025–',
    start: 2025,
    summary:
      'Open-source React and TypeScript widgets that let research apps show ontology data, including cross-ontology mappings, without custom code.',
    type: 'Open source',
    featured: 1,
    sources: [
      {
        label: 'GitHub · 33 merged PRs',
        href: `${tssRepo}/pulls?q=is:pr+is:merged+author:nedataghizadeh79`,
        note: 'github.com: the list of my merged pull requests in the library',
      },
      {
        label: 'Storybook',
        href: 'https://terminology.services.base4nfdi.de/tss/comp/latest/',
        note: 'The library’s public Storybook, where every widget can be tried live',
      },
      {
        label: 'npm',
        href: 'https://www.npmjs.com/package/@ts4nfdi/terminology-service-suite',
        note: 'npmjs.com: the published package, about 11,000 downloads a year',
      },
    ],
    caseStudy: {
      context: [
        'The Terminology Service Suite (TS4NFDI) is an open-source library of interactive widgets. Research apps use it to search ontologies, show terms and their metadata, and link related terms, without writing that interface themselves.',
        'I joined the team at ZB MED in December 2025 as a front-end developer. The package had about 11,400 npm downloads between October 2025 and October 2026.',
      ],
      myPart: [
        'Built the terminology-mapping widgets from the first version to the full feature set: both mapping directions, filters and detail views.',
        'Built the EntityListWidget for browsing ontology classes, properties and individuals, with search and pagination.',
        'Split existing widgets into separate data and presentation layers.',
        'Fixed rendering, styling and type bugs, redesigned the Next.js demo and kept the Storybook docs current.',
        'Extending the plain JavaScript package so every widget also works without React (in progress).',
      ],
      teamPart: [
        'The library existed before I joined; its architecture, APIs and release process belong to the TS4NFDI team.',
        'Maintainers reviewed every pull request and set the priorities through issues.',
      ],
      diagram: {
        title: 'How one widget is layered after the split',
        steps: [
          { label: 'Data layer', detail: 'Fetches from the terminology APIs and returns typed data' },
          { label: 'Presentation', detail: 'Pure UI component: props in, interface out' },
          { label: 'Wrapped widget', detail: 'Adds the providers it needs, for drop-in React use' },
          { label: 'JS wrapper', detail: 'createWidget(props, container) for apps without React' },
        ],
      },
      decisions: [
        {
          title: 'Separate the data from the interface',
          body: 'Some apps already have the ontology data and only need the interface. Splitting each widget into a data layer and a presentation layer lets them reuse the UI without the built-in requests.',
          note: 'Done widget by widget, so each pull request stayed small enough to review.',
        },
        {
          title: 'Show mappings in both directions',
          body: 'A term can be mapped to other ontologies and others can be mapped to it. The mapping list shows either direction, or both, so researchers see the full picture in one place.',
          note: 'Filters and a detail view keep long mapping lists readable.',
        },
        {
          title: 'Make the library usable without React',
          body: 'Many research apps are not React apps. Plain JavaScript wrappers mount each widget into any page, which widens who can adopt the library.',
          note: 'Requested by the maintainers in an issue and reviewed by them, widget by widget.',
        },
      ],
      outcome: [
        '33 pull requests merged into the main branch between April and October 2026.',
        'The mapping and entity-list widgets are part of the published package and documented in its public Storybook.',
      ],
    },
  },
  {
    slug: 'seller-center-migration',
    code: 'FE · PRD · 02',
    title: 'Seller Center migration to React',
    org: 'Digikala',
    years: '2022–23',
    start: 2022,
    summary:
      'Helped move the seller panel of Iran’s largest online retailer from Twig templates to reusable React and TypeScript components.',
    type: 'Product',
    featured: 3,
    sources: [
      { label: 'digikala.com', href: 'https://www.digikala.com', note: 'digikala.com: the company’s public site. The Seller Center itself is private.' },
    ],
    caseStudy: {
      context: [
        'Digikala is Iran’s largest online retailer, with more than 40 million monthly users. The Seller Center is the panel its sellers use to manage their business on the platform.',
        'From November 2022 to May 2023 I worked on the Seller Center as a front-end developer in Tehran, during its move from server-rendered Twig templates to React.',
      ],
      myPart: [
        'Rewrote legacy seller-panel pages as reusable React and TypeScript components.',
        'Built new seller-panel features as part of the migration.',
      ],
      teamPart: [
        'The migration was a team effort; I was one of the developers on it.',
      ],
      diagram: {
        title: 'The migration, page by page',
        steps: [
          { label: 'Twig page', detail: 'Server-rendered template with page-specific scripts' },
          { label: 'Components', detail: 'The page split into reusable React and TypeScript parts' },
          { label: 'React page', detail: 'The same page rebuilt from shared components' },
          { label: 'New features', detail: 'Added on the new base, not on the old templates' },
        ],
      },
      decisions: [
        {
          title: 'Reusable components first',
          body: 'Legacy pages were rewritten as components that later pages could reuse, instead of one-off page code.',
        },
      ],
      outcome: ['Migrated seller-panel pages and new features shipped as React and TypeScript components.'],
      missing: [
        'Which pages or features you migrated or built',
        'Team size and how work was split',
        'One thing that was hard and how you solved it',
      ],
    },
  },
  {
    slug: 'dall-e-platform',
    code: 'UX · FE · 03',
    title: 'DALL-E artist-commission platform',
    org: 'AYOT',
    years: '2022',
    start: 2022,
    summary:
      'Designed the platform’s interface for desktop and mobile in Figma, then built it in React with my colleagues.',
    type: 'Product',
    featured: 2,
    sources: [
      {
        label: 'Figma file',
        href: 'https://www.figma.com/design/8JnjqL2Wbesk0zmCxn1AyT/Dall-E?node-id=0-1',
        note: 'figma.com: the design file for desktop and mobile',
      },
    ],
    caseStudy: {
      context: [
        'DALL-E was a platform for commissioning artwork, developed at AYOT in Tehran. I worked there from March to September 2022 as a software engineer intern and UI/UX designer.',
      ],
      myPart: [
        'Designed the user interface in Figma, for desktop and mobile.',
        'Built the interface in React together with my colleagues.',
      ],
      teamPart: ['The React build was shared with colleagues; product direction came from the team.'],
      diagram: {
        title: 'From design to build',
        steps: [
          { label: 'Figma screens', detail: 'Desktop and mobile layouts' },
          { label: 'Shared components', detail: 'Design decisions carried into React' },
          { label: 'React app', detail: 'Built with the team' },
        ],
      },
      decisions: [],
      outcome: ['A designed and implemented MVP interface for the platform.'],
      missing: [
        'Who the users were (artists, buyers) and their main task',
        'The key user flow you designed, e.g. placing a commission',
        'Two or three design decisions, and why you made them',
        'Which parts of the React build were yours',
      ],
    },
  },
  {
    slug: 'llms-in-hci-data-work',
    code: 'UX · RES · 04',
    title: 'LLMs in HCI data work',
    org: 'CHI 2024 workshop',
    years: '2024',
    start: 2024,
    summary:
      'First-author paper on whether GPT-3.5 and Llama 2 can extract experimental data from HCI studies, and where they go wrong.',
    type: 'Research',
    sources: [
      { label: 'arXiv paper', href: 'https://arxiv.org/abs/2403.18173', note: 'arxiv.org: the full paper, free to read' },
    ],
    caseStudy: {
      context: [
        'Literature reviews in Human-Computer Interaction take a long time, because experimental details are spread across many papers. The paper asks whether large language models can do part of that work, and how much they can be trusted.',
      ],
      myPart: [
        'First author of the paper.',
        'Read HCI papers closely to judge the models’ answers and find where they were quietly wrong.',
      ],
      teamPart: ['Co-authors: Iman Mohammadi, Vittorio Fuccella and Mattia De Rosa.'],
      decisions: [
        {
          title: 'Check the model against the papers',
          body: 'The value of the study is in the errors. Each extracted value was checked against the source paper, which shows where the models can help and where a person still has to look.',
          note: 'The same habit as usability testing: look at what really happens, not what should happen.',
        },
      ],
      outcome: [
        'Published at a CHI 2024 workshop as “LLMs in HCI Data Work: Bridging the Gap Between Information Retrieval and Responsible Research Practices”.',
      ],
    },
  },
  {
    slug: 'serity-requirements',
    code: 'PPL · PRD · 05',
    title: 'Requirements and client workshops',
    org: 'Serity',
    years: '2025',
    start: 2025,
    summary:
      'Turned client requirements into user stories and documentation for ServiceNow security and compliance projects, and helped run client IT workshops.',
    type: 'Product',
    featured: 4,
    sources: [{ label: 'serity.de', href: 'https://serity.de', note: 'serity.de: the consultancy’s public site' }],
  },
  {
    slug: 'student-association',
    code: 'PPL · LEAD · 06',
    title: 'CE student association and Shenasa',
    org: 'Sharif University of Technology',
    years: '2021–',
    start: 2021,
    summary:
      'Director of the Computer Engineering student association. Coordinated and presented at Shenasa, an event on AI, neuroscience and cognitive science.',
    type: 'Leadership',
    sources: [],
  },
  {
    slug: 'harfosokhan',
    code: 'RES · NLP · 07',
    title: 'HarfoSokhan dataset',
    org: 'EACL 2026 · Best Resource Paper',
    years: '2026',
    start: 2026,
    summary:
      'Co-author of a parallel dataset for moving between colloquial and formal Persian, which received the Best Resource Paper award.',
    type: 'Research',
    sources: [
      { label: 'ACL Anthology', href: 'https://aclanthology.org/2026.eacl-long.346/', note: 'aclanthology.org: the paper and its citation' },
    ],
  },
  {
    slug: 'hotel-booking',
    code: 'FE · SIDE · 08',
    title: 'Hotel booking app',
    org: 'Side project',
    years: '2024',
    start: 2024,
    summary: 'Hotel search by city and dates, with a Leaflet map, geolocation, React Router and the Context API.',
    type: 'Side project',
    sources: [
      { label: 'GitHub', href: 'https://github.com/nedataghizadeh79/booking_hotel', note: 'github.com: the source code' },
    ],
  },
  {
    slug: 'smart-home-ui',
    code: 'UX · FE · 09',
    title: 'Smart-home platform screens',
    org: 'AYOT',
    years: '2022',
    start: 2022,
    summary: 'Designed UI screens in Figma and implemented them in React for AYOT’s smart-home platform.',
    type: 'Product',
    sources: [],
  },
  {
    slug: 'informal-formal-converter',
    code: 'RES · NLP · 10',
    title: 'Persian informal-to-formal converter',
    org: 'Team course project',
    years: '2023',
    start: 2023,
    summary: 'Ranks Persian sentence variants with BERT and n-gram models to turn informal text into formal text.',
    type: 'Side project',
    sources: [
      {
        label: 'GitHub',
        href: 'https://github.com/nedataghizadeh79/Convert-informal-text-to-formal',
        note: 'github.com: the team’s code',
      },
    ],
  },
];

/** Projects that have their own case-study page. */
export const caseStudies = projects.filter((p) => p.caseStudy);

/** Home-page selection, in its own order. */
export const featured = projects
  .filter((p) => p.featured !== undefined)
  .sort((a, b) => a.featured! - b.featured!);
