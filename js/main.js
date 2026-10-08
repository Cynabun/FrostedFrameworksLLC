// Frosted Frameworks — small site behaviours
(() => {
  // Mobile menu toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Close' : 'Menu';
    });
  }

  // Keep the footer year current
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // Contact form: send to Formspree without leaving the page
  const form = document.getElementById('order-form');
  if (!form) return;
  const status = form.querySelector('.form-status');
  const button = form.querySelector('button[type="submit"]');
  const email = form.dataset.email;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    button.disabled = true;
    button.textContent = 'Sending…';
    status.className = 'form-status';
    status.textContent = '';
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error('Request failed');
      form.reset();
      status.textContent = 'Request sent. Thanks! You’ll hear back soon.';
      status.classList.add('success');
      button.textContent = 'Sent';
    } catch (err) {
      status.textContent = `Your request didn’t send. Try again, or email ${email} directly.`;
      status.classList.add('error');
      button.disabled = false;
      button.textContent = 'Send request';
    }
  });
})();
