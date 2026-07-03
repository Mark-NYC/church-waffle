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

  // Church Waffle circle animation — fills the icons in one at a time
  // with a random health-status color (same green/yellow/red as the
  // obey.tools Church Circle tool), then clears and starts over.
  var waffleCells = document.querySelectorAll('.icon-grid .icon-cell');
  if (waffleCells.length) {
    var fillColors = ['bg-green', 'bg-yellow', 'bg-red'];
    var fillIndex = 0;

    function waffleStep() {
      if (fillIndex < waffleCells.length) {
        var color = fillColors[Math.floor(Math.random() * fillColors.length)];
        waffleCells[fillIndex].classList.add(color);
        fillIndex++;
        setTimeout(waffleStep, 1000);
      } else {
        setTimeout(function () {
          waffleCells.forEach(function (cell) {
            cell.classList.remove('bg-green', 'bg-yellow', 'bg-red');
          });
          fillIndex = 0;
          setTimeout(waffleStep, 1000);
        }, 1500);
      }
    }

    waffleStep();
  }
});
