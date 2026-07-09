
function generateGradient() {
  var hexValues = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];

  function populate(a) {
    for (var i = 0; i < 6; i++) {
      var x = Math.round(Math.random() * 14);
      var y = hexValues[x];
      a += y;
    }
    return a;
  }

  var newColor1 = populate("#");
  var newColor2 = populate("#");
  var newColor3 = populate("#");
  var newColor4 = populate("#");

  document.getElementById("myGradient1").innerHTML =
    `<stop offset="15%" stop-color="` +
    newColor1 +
    `" /> <stop offset="40%" stop-color="` +
    newColor2 +
    `" /> <stop offset="90%" stop-color="white" stop-opacity="0.25" />`;

}

generateGradient();
