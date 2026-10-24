/**
 * Search-engine data: the facts search engines read about Neda, as
 * schema.org structured data (JSON-LD). Everything here must stay true
 * and match the visible page.
 */
import { person, profiles } from './site';
import { education } from './profile';

/** Spellings people search for, including the one on published papers. */
export const alternateNames = ['Neda Taghizadeh Serajeh', 'Neda Taghizadeh', 'N. Taghizadeh Serajeh'];

/** Default description for pages that do not bring their own. */
export const defaultDescription =
  'Front-end developer and UI/UX designer in Bonn: React and TypeScript at ZB MED, ServiceNow Certified System Administrator, M.Sc. at the University of Bonn.';

/** One step in a breadcrumb trail. */
export interface Crumb {
  name: string;
  path: string;
}

/** The Person entity, shared by every page through its @id. */
export function personSchema(site: URL, image: string) {
  const bonn = education.find((e) => e.school === 'University of Bonn')!;
  const sharif = education.find((e) => e.school === 'Sharif University of Technology')!;
  return {
    '@type': 'Person',
    '@id': new URL('/#person', site).href,
    name: person.name,
    alternateName: alternateNames,
    givenName: 'Neda',
    familyName: 'Taghizade Serajeh',
    jobTitle: ['Front-end Developer', 'UI/UX Designer'],
    description: defaultDescription,
    url: site.href,
    image,
    email: `mailto:${person.email}`,
    address: { '@type': 'PostalAddress', addressLocality: 'Bonn', addressCountry: 'DE' },
    worksFor: {
      '@type': 'Organization',
      name: 'ZB MED – Information Centre for Life Sciences',
      url: 'https://www.zbmed.de/en/',
    },
    affiliation: { '@type': 'CollegeOrUniversity', name: bonn.school, url: bonn.href },
    alumniOf: { '@type': 'CollegeOrUniversity', name: sharif.school, url: sharif.href },
    knowsAbout: [
      'Front-end development',
      'React',
      'TypeScript',
      'JavaScript',
      'UI design',
      'UX design',
      'Figma',
      'Storybook',
      'Web accessibility',
      'ServiceNow',
      'Human-computer interaction',
    ],
    knowsLanguage: ['fa', 'en', 'de'],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: 'ServiceNow Certified System Administrator',
      credentialCategory: 'certification',
      recognizedBy: { '@type': 'Organization', name: 'ServiceNow' },
    },
    sameAs: profiles.map((p) => p.href),
  };
}

/** The website entity. */
export function websiteSchema(site: URL) {
  return {
    '@type': 'WebSite',
    '@id': new URL('/#website', site).href,
    url: site.href,
    name: person.name,
    alternateName: 'neda.page',
    inLanguage: 'en',
    publisher: { '@id': new URL('/#person', site).href },
  };
}

/** A breadcrumb trail, always starting at Home. */
export function breadcrumbSchema(site: URL, crumbs: Crumb[]) {
  const trail = [{ name: 'Home', path: '/' }, ...crumbs];
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: new URL(c.path, site).href,
    })),
  };
}
