import { registers, type Register } from '../data/site';

const root = document.documentElement;
const ids = registers.map((r) => r.id);

/** Reflect the current reading on every switch button. */
function syncButtons(current: Register) {
  document.querySelectorAll<HTMLButtonElement>('[data-register]').forEach((b) => {
    b.setAttribute('aria-pressed', String(b.dataset.register === current));
  });
}

/**
 * Change the reading: update <html data-read>, the URL and storage,
 * and announce it. Content visibility follows from CSS.
 */
function setRegister(next: Register) {
  const apply = () => {
    root.dataset.read = next;
    syncButtons(next);
  };
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce && 'startViewTransition' in document) document.startViewTransition(apply);
  else apply();

  try { localStorage.setItem('read', next); } catch {}
  const url = new URL(location.href);
  url.searchParams.set('read', next);
  history.replaceState(null, '', url);

  const label = registers.find((r) => r.id === next)?.long ?? next;
  const status = document.getElementById('read-status');
  if (status) status.textContent = `Showing the ${label} reading.`;
}

const initial = root.dataset.read as Register;
syncButtons(ids.includes(initial) ? initial : 'frontend');

document.addEventListener('click', (event) => {
  const button = (event.target as Element).closest<HTMLButtonElement>('[data-register]');
  const next = button?.dataset.register as Register | undefined;
  if (next && ids.includes(next) && next !== root.dataset.read) setRegister(next);
});
