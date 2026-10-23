/**
 * Faceted filtering for the Work index.
 * One value per facet at a time; facets combine with AND.
 * Selection is kept in the URL (?type=…) so a filtered view can be shared.
 */

type Selection = Record<string, string | null>;

const paramFor: Record<string, string> = { type: 'type' };

export function applyFilters() {
  const rows = [...document.querySelectorAll<HTMLElement>('[data-results] > .row')];
  const buttons = [...document.querySelectorAll<HTMLButtonElement>('[data-facet]')];
  const status = document.querySelector<HTMLElement>('[data-status]');
  const empty = document.querySelector<HTMLElement>('[data-empty]');
  const clearButtons = [...document.querySelectorAll<HTMLButtonElement>('[data-clear]')];
  if (!rows.length) return;

  const params = new URL(location.href).searchParams;
  const selection: Selection = { type: params.get('type') };

  /** True when a row matches every active facet. */
  const matches = (row: HTMLElement) =>
    Object.entries(selection).every(([key, value]) => {
      if (!value) return true;
      return (row.dataset[key] ?? '') === value;
    });

  function render() {
    let shown = 0;
    rows.forEach((row) => {
      const visible = matches(row);
      row.hidden = !visible;
      if (visible) shown++;
    });
    buttons.forEach((b) => {
      b.setAttribute('aria-pressed', String(selection[b.dataset.facet!] === b.dataset.value));
    });
    const active = Object.values(selection).some(Boolean);
    clearButtons.forEach((b) => (b.hidden = !active && !b.closest('[data-empty]')));
    if (empty) empty.hidden = shown > 0;
    if (status) status.textContent = active ? `Showing ${shown} of ${rows.length} entries` : `Showing all ${rows.length} entries`;

    const url = new URL(location.href);
    for (const [key, value] of Object.entries(selection)) {
      if (value) url.searchParams.set(paramFor[key], value);
      else url.searchParams.delete(paramFor[key]);
    }
    history.replaceState(null, '', url);
  }

  buttons.forEach((b) =>
    b.addEventListener('click', () => {
      const key = b.dataset.facet!;
      selection[key] = selection[key] === b.dataset.value ? null : b.dataset.value!;
      render();
    }),
  );
  clearButtons.forEach((b) =>
    b.addEventListener('click', () => {
      Object.keys(selection).forEach((k) => (selection[k] = null));
      render();
    }),
  );

  render();
}
