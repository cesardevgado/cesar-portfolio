// Function calls
// title();
// smileySelector("1");
// smileySelector("2");
// smileySelector("3");
// smileySelector("4");

generateKittyGradient();
symbolGenerator("#symbol1", 1);
symbolGenerator("#symbol2", 2);
symbolGenerator("#symbol3", 3);
symbolGenerator("#symbol4", 4);
symbolGenerator("#symbol5", 6);
symbolGenerator("#symbol6", 1);
symbolGenerator("#symbol7", 2);
symbolGenerator("#symbol8", 3);
symbolGenerator("#symbol9", 4);
symbolGenerator("#symbol10", 6);

// function title() {
//   let randomNumber = Math.trunc(Math.random() * 2) + 1;
//   if (randomNumber === 1) {
//     document.getElementById("titlefloat").innerText = "BUILD A FRIEND";
//   } else {
//     document.getElementById("titlefloat").innerText = "BURY A FRIEND";
//   }
// }

function generateKittyGradient() {
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

  document.getElementById("myGradient").innerHTML =
    `<stop offset="15%" stop-color="` +
    newColor1 +
    `" /> <stop offset="40%" stop-color="` +
    newColor2 +
    `" /> <stop offset="90%" stop-color="white" stop-opacity="0.25" />`;
}

//

// RNG Between
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Figure selector and position

let figureLeft = Math.trunc(Math.random() * 300) + 1;
let figureTop = getRandomInt(250, 450);

function figureGenerator(figureID) {
  document.getElementById(figureID).src =
    `Elements/Figures/figure` + (Math.trunc(Math.random() * 4) + 1) + `.png`;
  document.getElementById(figureID).style.left = figureLeft + `px`;
  document.getElementById(figureID).style.top = figureTop + `px`;
}

figureGenerator("figure");
figureGenerator("figure2");

// //--------------------------------------------

// // Bubble shape and position generator
function bubbleFigureGenerator() {
  document.querySelector(".bubbles").style.top = figureTop - 300 + "px";
  document.querySelector(".bubble-text").style.top = figureTop - 130 + "px";
  if (figureLeft <= 200) {
    document.querySelector(".bubbles").style.transform = "scaleX(-1)";
    document.querySelector(".bubble-text").style.left = figureLeft + 68 + "px";
    document.querySelector(".bubbles").style.left = figureLeft - 110 + "px";
  } else if (figureLeft >= 200) {
    document.querySelector(".bubbles").style.left = figureLeft + 25 + "px";
    document.querySelector(".bubble-text").style.left = figureLeft + 203 + "px";
  }
}

bubbleFigureGenerator();

function bubbleFigureGenerator2() {
  document.querySelector(".bubbles2").style.top = figureTop - 300 + "px";
  document.querySelector(".bubble-text2").style.top = figureTop - 130 + "px";
  if (figureLeft <= 200) {
    document.querySelector(".bubbles2").style.transform = "scaleX(-1)";
    document.querySelector(".bubble-text2").style.left = figureLeft + 68 + "px";
    document.querySelector(".bubbles2").style.left = figureLeft - 110 + "px";
  } else if (figureLeft >= 200) {
    document.querySelector(".bubbles2").style.left = figureLeft + 25 + "px";
    document.querySelector(".bubble-text2").style.left =
      figureLeft + 203 + "px";
  }
}

bubbleFigureGenerator2();

// // Emoji generator for bubble
function emojiSelector(x) {
  let emojiStart = getRandomInt(127, 129);
  let emojiEnd = "";
  if (emojiStart === 127) {
    emojiEnd = getRandomInt(744, 999);
  } else if (emojiStart === 128) {
    emojiEnd = getRandomInt(000, 762);
  } else if (emojiStart === 129) {
    emojiEnd = getRandomInt(296, 510);
  }
  document.querySelector(x).innerHTML =
    `&#` + String(emojiStart) + String(emojiEnd);
  console.log(String(emojiStart) + String(emojiEnd));
}

// // // Emoji generator for smiley grid
// function smileySelector(x) {
//   let emojiStart = getRandomInt(128, 129);
//   let emojiEnd = "";
//   let smileyid = "smiley" + x;
//   let smileymarkid = "smileymark" + x;
//   let mark = Math.trunc(Math.random() * 2) + 1;
//   if (emojiStart === 128) {
//     emojiEnd = getRandomInt(512, 567);
//   } else if (emojiStart === 129) {
//     emojiEnd = getRandomInt(312, 327);
//   }
//   document.getElementById(smileyid).innerHTML =
//     `&#` + String(emojiStart) + String(emojiEnd);
//   console.log(String(emojiStart) + String(emojiEnd));
//   if (mark === 1) {
//     document.getElementById(smileymarkid).innerHTML = "&#10005";
//     document.getElementById(smileymarkid).style.color = "red";
//   } else {
//     document.getElementById(smileymarkid).innerHTML = "&#10003";
//     document.getElementById(smileymarkid).style.color = "green";
//   }
// }

emojiSelector(".bubble-text");
emojiSelector(".bubble-text2");

// emojiSelector("#emojiGrid-1");
// emojiSelector("#emojiGrid-2");
// emojiSelector("#emojiGrid-3");
// emojiSelector("#emojiGrid-4");
// emojiSelector("#emojiGrid-5");
// emojiSelector("#emojiGrid-6");
// emojiSelector("#emojiGrid-7");
// emojiSelector("#emojiGrid-8");

function bubbleKittyGenerator() {
  let randomNumber = Math.trunc(Math.random() * 4) + 1;
  let left = Math.trunc(Math.random() * 350) + 1;
  let top = Math.trunc(Math.random() * 600) + 1;
  if (randomNumber === 1) {
    document.querySelector(".bubbles3").style.top = top - 300 + "px";
    document.querySelector(".bubble-text3").style.top = top - 130 + "px";
    document.querySelector(".bubbles3").style.left = left + 68 + "px";
    document.querySelector(".bubble-text3").style.left = left + 250 + "px";
  } else {
    document.querySelector(".bubbles3").style.display = "none";
    document.querySelector(".bubble-text3").style.display = "none";
  }
}

bubbleKittyGenerator();

// Arrows and symbols generator, probability, rotation and position
function symbolGenerator(symbolNumber, x) {
  // Probability
  let randomNumber = Math.trunc(Math.random() * x) + 1;
  let randomNumber2 = Math.trunc(Math.random() * 2) + 1;
  //Angle selector
  const rotateAngles = [45, 90, 135, 180, 225, 270, 315];
  let rotateSelected =
    rotateAngles[Math.trunc(Math.random() * rotateAngles.length)];
  //Symbol rotator
  document.querySelector(
    symbolNumber
  ).style.transform = `rotate(${rotateSelected}deg)`;
  //Symbol position
  document.querySelector(symbolNumber).style.top =
    getRandomInt(100, 600) + "px";
  document.querySelector(symbolNumber).style.left =
    getRandomInt(100, 350) + "px";
  if (randomNumber === 1) {
    if (randomNumber2 === 1) {
      //Symbol selector
      document.querySelector(symbolNumber).innerHTML =
        `&#` + String(getRandomInt(8592, 8703));
    } else {
      document.querySelector(symbolNumber).innerHTML =
        `&#` + `101` + String(getRandomInt(36, 72));
    }
  }
}

// //Symbol selector
// document.querySelector("#symbols2x11").innerHTML =
//   `&#` + String(getRandomInt(9985, 10087));

// document.querySelector("#symbols2x12").innerHTML =
//   `&#` + String(getRandomInt(9985, 10087));
