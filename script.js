const copyrightTarget = document.querySelector('[data-copyright]');
if (copyrightTarget) {
  copyrightTarget.textContent = `© ${new Date().getFullYear()} Alex Morgan. All rights reserved.`;
}

const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#site-nav');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}
