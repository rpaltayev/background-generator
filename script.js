var _ = require('lodash');
console.log(_);
var array = [1,2,3,4,5,66,32];
console.log('answer:', _.without(array, 66));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomize = document.querySelector(".button");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";"
}

function setRamdom() {
    var random = getRandomColor();
    var random2 = getRandomColor();
    body.style.background = "linear-gradient(to right, " + random + ", " + random2 + ")";
    css.textContent = body.style.background + ";"
    color1.setAttribute("value", random);
    color2.setAttribute("value", random2);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

randomize.addEventListener("click", setRamdom)

