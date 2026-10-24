import type { APIRoute } from 'astro';
import { caseStudies } from '../data/work';

/** Every public page, in order of importance. The preview-image page and 404 stay out. */
const paths = [
  '/',
  '/work/',
  ...caseStudies.map((p) => `/work/${p.slug}/`),
  '/about/',
  '/cv/',
  '/portfolio/',
  '/album/',
  '/colophon/',
];

export const GET: APIRoute = ({ site }) => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = paths
    .map((path) => `  <url><loc>${new URL(path, site).href}</loc><lastmod>${lastmod}</lastmod></url>`)
    .join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
