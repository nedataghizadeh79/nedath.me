/**
 * Album lightbox on a native <dialog>: the browser handles focus,
 * Escape and the backdrop. Arrow keys and the buttons step through frames.
 */
export function startViewer() {
  const dialog = document.querySelector<HTMLDialogElement>('[data-viewer]');
  const images = [...document.querySelectorAll<HTMLImageElement>('[data-viewer-img]')];
  const label = document.querySelector<HTMLElement>('[data-viewer-label]');
  if (!dialog || !images.length) return;

  let current = 0;

  /** Show one photo and label it, e.g. "Photo 02 of 4". */
  function show(index: number) {
    current = (index + images.length) % images.length;
    images.forEach((img, i) => (img.hidden = i !== current));
    if (label) label.textContent = `Photo ${String(current + 1).padStart(2, '0')} of ${images.length}`;
  }

  document.querySelectorAll<HTMLButtonElement>('[data-frame]').forEach((button) =>
    button.addEventListener('click', () => {
      show(Number(button.dataset.frame));
      dialog.showModal();
    }),
  );
  dialog.querySelectorAll<HTMLButtonElement>('[data-step]').forEach((button) =>
    button.addEventListener('click', () => show(current + Number(button.dataset.step))),
  );
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') show(current + 1);
    if (event.key === 'ArrowLeft') show(current - 1);
  });
  // A click on the backdrop (outside the panel) closes the viewer.
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
}
