# nedath.me

Personal website of Neda Taghizade Serajeh: frontend developer with a UI/UX and people side.

The site reads like an annotated manuscript with a working index. A **Read as** switch (Frontend · People · UI/UX) changes what each page emphasises for different readers, without hiding the rest.

## Stack

- [Astro](https://astro.build) with TypeScript (strict), fully static
- Plain CSS with cascade layers and design tokens (`src/styles/global.css`)
- Self-hosted fonts via Fontsource: Newsreader, Schibsted Grotesk, IBM Plex Mono
- No client framework, no cookies, no analytics

## Commands

| Command          | What it does                                             |
| ---------------- | -------------------------------------------------------- |
| `npm install`    | Install dependencies                                     |
| `npm run dev`    | Start the dev server at `localhost:4321`                 |
| `npm run build`  | Build the static site into `dist/`                       |
| `npm run render` | After a build: render the CV PDF and the share image     |
| `npm run preview`| Serve the built site locally                             |

`npm run render` uses headless Chrome. Set `CHROME_PATH` if Chrome is not in the default macOS location.

## Editing content

All content is typed data, so pages and the CV stay in sync:

- `src/data/site.ts`: name, contact links, the three readings and the home-page statements
- `src/data/work.ts`: projects, sources and case studies
- `src/data/profile.ts`: experience, education, publications, skills, languages

Case studies list missing facts in `missing`; they show as visible "To add before launch" notes until filled in.

After changing anything that appears on the CV, run `npm run build && npm run render` and commit the new PDF.

## Deploy

Deployed on Vercel (free Hobby plan) from the `main` branch. The custom domain `nedath.me` points to Vercel; `nedath.vercel.app` is the permanent fallback address.
