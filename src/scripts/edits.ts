/**
 * The live blue-pencil edit on the home page: strike the current words,
 * write the next ones above in handwriting, then settle and repeat.
 * Pauses off-screen, when the tab is hidden, on request, and never runs
 * with reduced motion. Screen readers get the full sentence instead.
 */

const STRIKE = 450;
const WRITE = 750;
const HOLD = 1700;
const REST = 1500;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export function startEdits() {
  const edit = document.querySelector<HTMLElement>('.edit[data-edits]');
  const old = edit?.querySelector<HTMLElement>('.old');
  const hand = edit?.querySelector<HTMLElement>('.hand');
  const pause = document.querySelector<HTMLButtonElement>('[data-pause]');
  if (!edit || !old || !hand) return;

  // Start only once, even if the script is evaluated again.
  if (edit.dataset.running) return;
  edit.dataset.running = 'true';

  const words: string[] = JSON.parse(edit.dataset.edits ?? '[]');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || words.length < 2) {
    pause?.remove();
    return;
  }

  let paused = false;
  let visible = true;

  new IntersectionObserver(([entry]) => (visible = entry.isIntersecting)).observe(edit);
  pause?.addEventListener('click', () => {
    paused = !paused;
    pause.setAttribute('aria-pressed', String(paused));
    pause.textContent = paused ? 'Play edits' : 'Pause edits';
  });

  /** Wait until the edit may run: on screen, tab visible, not paused. */
  async function canRun() {
    while (paused || !visible || document.hidden) await sleep(300);
  }

  async function loop() {
    await sleep(REST);
    for (;;) {
      await canRun();
      // The next words follow whatever is on screen now, so the edit never repeats itself.
      const next = words[(words.indexOf(old!.textContent ?? '') + 1) % words.length];
      hand!.textContent = next;
      edit!.classList.add('is-striking');
      await sleep(STRIKE);
      edit!.classList.add('is-writing');
      await sleep(WRITE + HOLD);
      old!.textContent = next;
      edit!.classList.remove('is-striking', 'is-writing');
      await sleep(REST);
    }
  }

  loop();
}
