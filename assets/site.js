// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mobilePanel = document.getElementById('mobilePanel');
navToggle.addEventListener('click', () => {
  const isOpen = mobilePanel.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});
mobilePanel.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobilePanel.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Current date in utility bar
document.getElementById('today-date').textContent =
  new Date().toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' });
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Scroll reveal
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReduced && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
}
