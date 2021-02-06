// main.js
window.alert('Added prevent default!');
let slide = document.getElementById("volume-slider");
let slideVal = slide.getAttribute("value");
let aud = document.getElementById("horn-sound");
aud.volume = 1.0;
document.getElementById("honk-btn").addEventListener("click", function(event){
    aud.play();
    event.preventDefault();
});
// TODO
