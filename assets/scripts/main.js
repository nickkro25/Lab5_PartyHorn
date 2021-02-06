// main.js
window.alert('ddsfas!');

let slide = document.getElementById("volume-slider");

let num = document.getElementById("volume-number");

let aud = document.getElementById("horn-sound");


document.getElementById("honk-btn").addEventListener("click", function(event){
    aud.play();
    event.preventDefault();
});

num.addEventListener("input",function(event){
    slide.setAttribute("value", num.getAttribute("value"));
    event.preventDefault();
});

slide.addEventListener("input",function(event){
    num.setAttribute("value", slide.getAttribute("value"));
    event.preventDefault();
});
// TODO
