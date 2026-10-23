const root = document.documentElement;

/** The theme currently on screen, whether chosen or from the system. */
function currentTheme(): 'light' | 'dark' {
  const chosen = root.dataset.theme;
  if (chosen === 'light' || chosen === 'dark') return chosen;
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/** Label the toggle with what pressing it will do. */
function labelToggle(button: HTMLElement) {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  button.setAttribute('aria-label', `Switch to ${next} theme`);
}

document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((button) => {
  labelToggle(button);
  button.addEventListener('click', () => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch {}
    labelToggle(button);
  });
});
