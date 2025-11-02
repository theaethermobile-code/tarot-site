// assets/site.js
document.addEventListener('DOMContentLoaded', async () => {
  // insertar header
  const headerHost = document.querySelector('[data-include="partials/header.html"]');
  if (headerHost){
    const r = await fetch('partials/header.html');
    headerHost.outerHTML = await r.text();
  }

  // insertar footer
  const footerHost = document.querySelector('[data-include="partials/footer.html"]');
  if (footerHost){
    const r = await fetch('partials/footer.html');
    footerHost.outerHTML = await r.text();
  }

  // después de insertar, resalta el enlace activo (pequeño delay por si el fetch tarda)
  setTimeout(() => {
    const nav = document.getElementById('site-nav');
    if (!nav) return;
    const here = location.pathname.split('/').pop() || 'index.html';
    [...nav.querySelectorAll('a')].forEach(a => {
      const target = a.getAttribute('href');
      if ((here === '' && target === './') || here === target) a.classList.add('active');
      if (here === 'index.html' && target === './') a.classList.add('active');
    });
  }, 50);
});

