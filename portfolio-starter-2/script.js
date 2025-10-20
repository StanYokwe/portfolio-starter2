// Mobile nav toggle (a11y-friendly)
const toggle = document.querySelector('.nav-toggle');
const links = document.getElementById('nav-links');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    links.classList.toggle('show');
  });

  // Close menu when a link is activated
  links.addEventListener('click', e => {
    if (e.target.closest('a')) {
      links.classList.remove('show');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Move focus to <main> when skip link is used
document.querySelector('.skip-link')?.addEventListener('click', () => {
  setTimeout(() => document.getElementById('main')?.focus(), 0);
});

// Footer year
document.getElementById('year')?.append(new Date().getFullYear());

