const html = document.documentElement;
const themeToggleButton = document.querySelector('[data-theme-toggle]');
const savedTheme = localStorage.getItem('theme-preference');

function setTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme-preference', theme);
  if (themeToggleButton) {
    themeToggleButton.setAttribute('aria-pressed', String(theme === 'dark'));
    themeToggleButton.textContent = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
  }
}

if (savedTheme) {
  setTheme(savedTheme);
} else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(prefersDark ? 'dark' : 'light');
}

if (themeToggleButton) {
  themeToggleButton.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
