document.addEventListener('DOMContentLoaded', function () {
  // Wire up every [data-link="key"] element to js/links.js, and open
  // external (obey.tools / podcast) links in a new tab automatically.
  document.querySelectorAll('[data-link]').forEach(function (el) {
    var key = el.getAttribute('data-link');
    var url = window.CW_LINKS && window.CW_LINKS[key];
    if (!url) return;
    el.setAttribute('href', url);
    if (/^https?:\/\//.test(url)) {
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener');
    }
  });

  // Mobile nav toggle.
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Footer copyright year.
  var yearEl = document.getElementById('cw-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
