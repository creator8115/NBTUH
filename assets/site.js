// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mobilePanel = document.getElementById('mobilePanel');
if (navToggle && mobilePanel) {
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
}

// Current date in utility bar
const todayDateEl = document.getElementById('today-date');
if (todayDateEl) {
  todayDateEl.textContent = new Date().toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' });
}
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Content gate (soft gate: email unlocks the rest of the article)
const gateContainer = document.querySelector('.gate-container');
if (gateContainer) {
  const GATE_KEY = 'ntuhUnlocked';
  if (localStorage.getItem(GATE_KEY) !== 'true') {
    gateContainer.classList.add('is-gated');
  }
  const gateForm = document.getElementById('gateForm');
  if (gateForm) {
    const gateButton = gateForm.querySelector('.btn-primary');
    const gateStatus = gateForm.parentElement.querySelector('.gate-status');
    const gateButtonDefaultText = gateButton.textContent;

    gateForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      gateButton.disabled = true;
      gateButton.textContent = 'Unlocking...';
      if (gateStatus) { gateStatus.textContent = ''; gateStatus.className = 'gate-status'; }

      try {
        const response = await fetch(gateForm.action, {
          method: 'POST',
          body: new FormData(gateForm),
          headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
          localStorage.setItem(GATE_KEY, 'true');
          gateContainer.classList.remove('is-gated');
        } else {
          throw new Error('Gate submission failed');
        }
      } catch (err) {
        gateButton.disabled = false;
        gateButton.textContent = gateButtonDefaultText;
        if (gateStatus) {
          gateStatus.textContent = 'Something went wrong. Please try again or email us directly.';
          gateStatus.classList.add('error');
        }
      }
    });
  }
}

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

// Hero mark: subtle mouse parallax
const heroSection = document.querySelector('.hero');
const heroParallax = document.querySelector('.hero-parallax');
if (heroSection && heroParallax && !prefersReduced) {
  const maxShift = 10;
  heroSection.addEventListener('mousemove', (event) => {
    const rect = heroSection.getBoundingClientRect();
    const xRatio = (event.clientX - rect.left) / rect.width - 0.5;
    const yRatio = (event.clientY - rect.top) / rect.height - 0.5;
    heroParallax.style.transform = `translate(${xRatio * maxShift * 2}px, ${yRatio * maxShift}px)`;
  });
  heroSection.addEventListener('mouseleave', () => {
    heroParallax.style.transform = 'translate(0, 0)';
  });
}
