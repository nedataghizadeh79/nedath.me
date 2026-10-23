/**
 * Renders the downloadable CV (PDF) and the social preview image (PNG)
 * from the built site, using headless Chrome.
 *
 * Usage: npm run build && npm run render
 * Set CHROME_PATH if Chrome is not in the default macOS location.
 */
import { spawn, execFileSync } from 'node:child_process';
import { setTimeout as wait } from 'node:timers/promises';

const chrome = process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const port = 4329;
const base = `http://localhost:${port}`;

const server = spawn('npx', ['astro', 'preview', '--port', String(port)], { stdio: 'ignore' });

/** Wait until the preview server answers. */
async function ready() {
  for (let i = 0; i < 50; i++) {
    try {
      if ((await fetch(base)).ok) return;
    } catch {}
    await wait(200);
  }
  throw new Error('Preview server did not start');
}

/** Run headless Chrome with the given extra flags against one URL. */
function chromeRun(flags, url) {
  execFileSync(chrome, ['--headless', '--disable-gpu', '--hide-scrollbars', '--run-all-compositor-stages-before-draw', '--virtual-time-budget=4000', ...flags, url], { stdio: 'ignore' });
}

try {
  await ready();
  chromeRun(['--no-pdf-header-footer', '--print-to-pdf=public/Neda_Taghizade_Serajeh_CV.pdf'], `${base}/cv/`);
  chromeRun(['--window-size=1200,630', '--screenshot=public/og.png'], `${base}/og/`);
  console.log('Rendered public/Neda_Taghizade_Serajeh_CV.pdf and public/og.png');
} finally {
  server.kill();
}
