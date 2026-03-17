const copyrightTarget = document.querySelector('[data-copyright]');
if (copyrightTarget) {
  copyrightTarget.textContent = `© ${new Date().getFullYear()} Alex Morgan. All rights reserved.`;
}

const sectionLinks = document.querySelectorAll('[data-link]');
const sections = [...sectionLinks]
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const setActive = (id) => {
  sectionLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  },
  { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 }
);

sections.forEach((section) => observer.observe(section));
