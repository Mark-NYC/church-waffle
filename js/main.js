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

  // Rotating green label pill over the Church Waffle circle — cycles
  // through all 12 practices, 1 second each, then loops. Order matches
  // the .icon-grid cells in index.html (4 columns x 3 rows).
  var waffleTooltip = document.getElementById('waffle-tooltip');
  if (waffleTooltip) {
    var practices = [
      'Believe the Gospel', 'Repent', 'Be Baptized', 'Receive the Spirit',
      'Word', 'Love', "Lord's Supper", 'Pray',
      'Signs and Wonders', 'Give', 'Worship', 'Make Disciples'
    ];
    var current = 0;

    function showWafflePractice(index) {
      var row = Math.floor(index / 4);
      var col = index % 4;
      waffleTooltip.classList.remove('visible');
      setTimeout(function () {
        waffleTooltip.textContent = practices[index];
        waffleTooltip.style.left = ((col + 0.5) / 4 * 100) + '%';
        waffleTooltip.style.top = ((row + 0.5) / 3 * 100) + '%';
        waffleTooltip.classList.add('visible');
      }, 150);
    }

    showWafflePractice(current);
    setInterval(function () {
      current = (current + 1) % practices.length;
      showWafflePractice(current);
    }, 1000);
  }
});
