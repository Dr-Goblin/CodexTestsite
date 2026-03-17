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

const canvas = document.querySelector('#fx-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  const particles = [];
  const particleCount = 56;

  const setup = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles.length = 0;

    for (let i = 0; i < particleCount; i += 1) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 2 + 0.7,
      });
    }
  };

  const draw = () => {
    if (!ctx) {
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) {
        p.vx *= -1;
      }
      if (p.y < 0 || p.y > canvas.height) {
        p.vy *= -1;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(114, 242, 255, 0.45)';
      ctx.fill();
    });

    requestAnimationFrame(draw);
  };

  setup();
  draw();
  window.addEventListener('resize', setup);
}
