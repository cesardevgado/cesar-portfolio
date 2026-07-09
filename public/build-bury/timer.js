const pages = [
  "1x4.html",
  "2x1text.html",
  "2x2.html",
  "2x4.html",
  "figure1.html",
  "figure2.html",
  "textleft.html",
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function loadAndCheck() {
  let pagetoload = pages[Math.trunc(Math.random() * pages.length)];
  let refreshtime = getRandomInt(10000, 40000);
  setTimeout(function () {
    window.location.href = pagetoload;
  }, refreshtime);
}

loadAndCheck();
