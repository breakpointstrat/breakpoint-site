(function () {
  // Monthly / annual toggle (pricing)
  var cards = document.getElementById("tier-cards");
  document.querySelectorAll(".toggle button").forEach(function (b) {
    b.addEventListener("click", function () {
      document.querySelectorAll(".toggle button").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
      cards.classList.toggle("annual", b.dataset.period === "annual");
    });
  });

  // After the founding window, the structured data carries the list prices.
  var ld = document.getElementById("ld-product");
  if (ld && document.documentElement.classList.contains("post-founding")) {
    var data = JSON.parse(ld.textContent);
    data.offers[1].price = "9950";
    data.offers[2].priceSpecification.price = "1495";
    data.offers[3].priceSpecification.price = "3495";
    [1, 2, 3].forEach(function (i) { delete data.offers[i].priceValidUntil; });
    ld.textContent = JSON.stringify(data);
  }

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
