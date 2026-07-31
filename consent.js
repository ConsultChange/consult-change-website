/* ─────────────────────────────────────────────────────────────
   Consult Change — baner zgody na cookies (Google Consent Mode v2)

   Domyślny stan zgody ("denied") ustawiany jest INLINE w <head>
   każdej strony, przed załadowaniem gtag.js — dzięki temu żadne
   pliki cookie nie powstają przed decyzją użytkownika.
   Ten plik obsługuje wyłącznie interfejs banera i aktualizację zgody.

   Decyzja zapisywana jest w localStorage pod kluczem 'cc-consent'
   ('granted' albo 'denied'). Wyczyszczenie danych witryny w
   przeglądarce ponownie wyświetli baner.

   Dwujęzyczność korzysta z istniejącego mechanizmu strony:
   klasy .lang-pl / .lang-en są przełączane przez regułę CSS
   opartą na atrybucie html[lang].
   ───────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var KEY = 'cc-consent';

  function read() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function write(value) {
    try { localStorage.setItem(KEY, value); } catch (e) {}
  }

  /* Decyzja już podjęta — baner się nie pokazuje. */
  var stored = read();
  if (stored === 'granted' || stored === 'denied') return;

  var CSS = [
    '#cc-consent{position:fixed;left:0;right:0;bottom:0;z-index:9999;',
    'background:rgba(15,23,42,.97);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);',
    'border-top:3px solid transparent;',
    'border-image:linear-gradient(90deg,#C985F0,#BFE6F2,#F4C362) 1;',
    'font-family:"DM Sans",system-ui,-apple-system,sans-serif;',
    'transform:translateY(115%);transition:transform .35s cubic-bezier(.16,1,.3,1)}',
    '#cc-consent.cc-in{transform:translateY(0)}',
    '#cc-inner{max-width:1120px;margin:0 auto;padding:18px 24px;display:flex;',
    'gap:22px;align-items:center;justify-content:space-between;flex-wrap:wrap}',
    '#cc-text{flex:1 1 400px;margin:0;font-size:13.5px;line-height:1.6;color:#cbd5e1}',
    '#cc-text strong{color:#fff;font-weight:600}',
    '#cc-text .cc-link{color:#F4C362;text-decoration:underline;text-underline-offset:2px}',
    '#cc-text .cc-link:hover{color:#fff}',
    '#cc-btns{display:flex;gap:10px;flex:0 0 auto}',
    '.cc-btn{font-family:"Plus Jakarta Sans",system-ui,sans-serif;font-size:13px;',
    'font-weight:700;line-height:1;border-radius:9999px;padding:12px 22px;cursor:pointer;',
    'border:1px solid transparent;transition:opacity .18s ease,background .18s ease;white-space:nowrap}',
    '.cc-btn:hover{opacity:.87}',
    '.cc-btn:focus-visible{outline:2px solid #F4C362;outline-offset:2px}',
    '#cc-accept{background:#F4C362;color:#0F172A}',
    '#cc-deny{background:transparent;color:#e2e8f0;border-color:rgba(255,255,255,.32)}',
    '#cc-deny:hover{background:rgba(255,255,255,.06)}',
    '@media(max-width:640px){#cc-inner{padding:16px 18px;gap:14px}',
    '#cc-text{font-size:13px;flex:1 1 100%}#cc-btns{width:100%}.cc-btn{flex:1;padding:13px 12px}}',
    '@media(prefers-reduced-motion:reduce){#cc-consent{transition:none}}'
  ].join('');

  var MARKUP =
    '<div id="cc-inner">' +
      '<p id="cc-text">' +
        '<span class="lang-pl"><strong>Cookies analityczne.</strong> Korzystamy z Google Analytics, ' +
        'aby sprawdzać, które treści są dla Was przydatne. Do momentu Twojej zgody nie zapisujemy ' +
        'żadnych plików analitycznych. Decyzję możesz zmienić, czyszcząc dane tej witryny w przeglądarce. ' +
        '<a href="polityka-prywatnosci.html" class="cc-link">Polityka prywatności</a></span>' +
        '<span class="lang-en"><strong>Analytics cookies.</strong> We use Google Analytics to see which ' +
        'content is useful to you. No analytics cookies are stored until you agree. You can change your ' +
        'choice by clearing this site\u2019s data in your browser. ' +
        '<a href="polityka-prywatnosci.html" class="cc-link">Privacy policy</a></span>' +
      '</p>' +
      '<div id="cc-btns">' +
        '<button type="button" class="cc-btn" id="cc-deny">' +
          '<span class="lang-pl">Tylko niezbędne</span><span class="lang-en">Essential only</span>' +
        '</button>' +
        '<button type="button" class="cc-btn" id="cc-accept">' +
          '<span class="lang-pl">Akceptuję</span><span class="lang-en">Accept</span>' +
        '</button>' +
      '</div>' +
    '</div>';

  function decide(granted) {
    write(granted ? 'granted' : 'denied');

    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: granted ? 'granted' : 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied'
      });
    }

    var bar = document.getElementById('cc-consent');
    if (!bar) return;
    bar.classList.remove('cc-in');
    setTimeout(function () {
      if (bar && bar.parentNode) bar.parentNode.removeChild(bar);
    }, 400);
  }

  function mount() {
    if (document.getElementById('cc-consent')) return;

    var style = document.createElement('style');
    style.setAttribute('data-cc', 'consent');
    style.appendChild(document.createTextNode(CSS));
    document.head.appendChild(style);

    var bar = document.createElement('div');
    bar.id = 'cc-consent';
    bar.setAttribute('role', 'region');
    bar.setAttribute('aria-label', 'Cookies');
    bar.innerHTML = MARKUP;
    document.body.appendChild(bar);

    document.getElementById('cc-accept').addEventListener('click', function () { decide(true); });
    document.getElementById('cc-deny').addEventListener('click', function () { decide(false); });

    /* dwie klatki, żeby przejście CSS zadziałało po wstawieniu do DOM */
    if (window.requestAnimationFrame) {
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { bar.classList.add('cc-in'); });
      });
    } else {
      setTimeout(function () { bar.classList.add('cc-in'); }, 30);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
