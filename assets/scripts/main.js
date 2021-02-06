// main.js
//window.alert('Welcome to my home page!');
let slide = document.getElementById("volume-slider");
let slideVal = slide.getAttribute("value");
let aud = document.getElementById("horn-sound");
aud.volume = 1.0;
document.addEventListener("honk-btn").addEventListener("click", aud.play());
// TODO
