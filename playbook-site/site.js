(function () {
  // "Book an intro" links open the 15-minute intro in a booking popup; the plain link is the fallback.
  (function (C, A, L) { var p = function (a, ar) { a.q.push(ar); }; var d = C.document; C.Cal = C.Cal || function () { var cal = C.Cal; var ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { var api = function () { p(api, arguments); }; var namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
  var NS = "breakpoint-15-minute-intro-call";
  var LINK = "masonkesner/breakpoint-15-minute-intro-call";
  Cal("init", NS, { origin: "https://app.cal.com" });
  Cal.config = Cal.config || {};
  Cal.config.forwardQueryParams = true;
  Cal.ns[NS]("ui", { hideEventTypeDetails: false, layout: "month_view" });
  document.addEventListener("click", function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
    var a = e.target.closest && e.target.closest('a[href*="cal.com/masonkesner/"]');
    if (!a || !window.Cal || !Cal.ns || !Cal.ns[NS]) return;
    e.preventDefault();
    var d = a.closest("details[open]"); if (d && !d.closest(".faq")) d.open = false;
    Cal.ns[NS]("modal", { calLink: LINK, config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" } });
  }, true);

  // Mobile menu closes after an in-page jump
  var menu = document.querySelector(".menu");
  menu.querySelectorAll('a[href^="#"]').forEach(function (a) { a.addEventListener("click", function () { menu.open = false; }); });

  // Button clicks go to HubSpot as virtual page views under /click/ (custom events need Enterprise).
  window._hsq = window._hsq || [];
  document.addEventListener("click", function (e) {
    var a = e.target.closest("a[data-track]");
    if (!a) return;
    _hsq.push(["setPath", "/click/" + a.dataset.track]);
    _hsq.push(["trackPageView"]);
    _hsq.push(["setPath", location.pathname]);
    var leaving = a.target !== "_blank" && a.getAttribute("href").charAt(0) !== "#" && !e.metaKey && !e.ctrlKey && !e.shiftKey;
    if (leaving && window._hsq.push !== Array.prototype.push) {
      e.preventDefault();
      setTimeout(function () { location.href = a.href; }, 200);
    }
  });
})();
