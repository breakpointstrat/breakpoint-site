// Spots left. Change these two numbers by hand, then push to main (live in about a minute).
// 0 shows the "full" copy. Founding at 0 also switches /pricing to list prices.
// Delete a line (or set it to null) to hide that number and keep the rest of the card.
var BP_SPOTS = {
  pilot: 3,
  founding: 25,
};

// Nothing below needs editing.
// Founding rates end at midnight, America/New_York, on March 1, 2027, or when founding hits 0.
// ?asof=YYYY-MM-DD previews another date.
(function (s) {
  var root = document.documentElement, cls = [];
  var asof = (location.search.match(/[?&]asof=(\d{4}-\d{2}-\d{2})/) || [])[1];
  var today = asof || new Intl.DateTimeFormat("en-CA", { timeZone: "America/New_York", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
  function valid(n) { return typeof n === "number" && n >= 0 && Math.floor(n) === n; }
  if (today >= "2027-03-01") cls.push("post-founding", "founding-closed");
  else if (s.founding === 0) cls.push("post-founding", "founding-full");
  else if (valid(s.founding)) {
    cls.push("has-founding");
    if (s.founding === 1) cls.push("founding-one");
    root.style.setProperty("--founding", '"' + s.founding + '"');
  }
  if (s.pilot === 0) cls.push("pilot-full");
  else if (valid(s.pilot)) {
    cls.push("has-pilot");
    if (s.pilot === 1) cls.push("pilot-one");
    root.style.setProperty("--pilot", '"' + s.pilot + '"');
  }
  root.className += " " + cls.join(" ");
})(BP_SPOTS);
