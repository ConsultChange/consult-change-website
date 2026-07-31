/* ─────────────────────────────────────────────────────────────
   Consult Change — pomiar treści

   Mierzy WYŁĄCZNIE zachowanie wobec treści, nie osoby:
     • generate_lead     — kliknięcie w adres e-mail
     • article_progress  — przewinięcie artykułu do 25/50/75/100%
     • article_read      — sygnał realnego przeczytania
                           (min. 50% treści i min. 45 s aktywnego czasu)

   Żadnych identyfikatorów, żadnych danych o użytkowniku.
   Zdarzenia trafiają do Google Analytics tylko wtedy, gdy
   użytkownik wyraził zgodę — inaczej gtag ich nie wysyła.
   ───────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  function ev(name, params) {
    if (typeof window.gtag === 'function') window.gtag('event', name, params || {});
  }

  /* ── 1. Kliknięcie w e-mail = jedyny sygnał zapytania na stronie ── */
  function initLeads() {
    var links = document.querySelectorAll('a[href^="mailto:"]');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function () {
        ev('generate_lead', { method: 'mailto', page_path: location.pathname });
      });
    }
  }

  /* ── 2. Czy artykuł jest czytany ── */
  function isArticlePage() {
    var p = location.pathname;
    return /(artykul-|case-study-)/.test(p) || !!document.getElementById('toc');
  }

  function initReading() {
    if (!isArticlePage()) return;

    var title = (document.title || location.pathname).split('—')[0].trim();
    var marks = [25, 50, 75, 100];
    var reached = {};
    var seconds = 0;
    var readSent = false;
    var ticking = false;

    function depth() {
      var scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return 100;
      var pct = (window.pageYOffset || document.documentElement.scrollTop) / scrollable * 100;
      return Math.max(0, Math.min(100, Math.round(pct)));
    }

    function maybeRead(d) {
      if (readSent) return;
      if (d >= 50 && seconds >= 45) {
        readSent = true;
        ev('article_read', {
          article: title,
          page_path: location.pathname,
          engaged_seconds: seconds
        });
      }
    }

    function check() {
      var d = depth();
      for (var i = 0; i < marks.length; i++) {
        var m = marks[i];
        if (d >= m && !reached[m]) {
          reached[m] = true;
          ev('article_progress', {
            percent_scrolled: m,
            article: title,
            page_path: location.pathname
          });
        }
      }
      maybeRead(d);
    }

    /* czas liczony tylko wtedy, gdy karta jest aktywna */
    var timer = setInterval(function () {
      if (document.visibilityState === 'visible') {
        seconds++;
        maybeRead(depth());
      }
      var allMarks = reached[25] && reached[50] && reached[75] && reached[100];
      if (readSent && allMarks) clearInterval(timer);
    }, 1000);

    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      var raf = window.requestAnimationFrame || function (cb) { setTimeout(cb, 60); };
      raf(function () { ticking = false; check(); });
    }, { passive: true });

    check();
  }

  function boot() {
    initLeads();
    initReading();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
