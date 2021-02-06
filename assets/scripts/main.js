// main.js
window.alert('Aaud sdf!');

let slide = document.getElementById("volume-slider");
let slideVal = slide.getAttribute("value");

let num = document.getElementById("volume-number");
let numVal = num.getAttribute("value");

let aud = document.getElementById("horn-sound");

numVal = slideVal;
slideVal = numVal;

aud.volume = numVal / 100;

document.getElementById("honk-btn").addEventListener("click", function(event){
    aud.play();
    event.preventDefault();
});
// TODO
