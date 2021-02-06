// main.js
window.alert('dss!');

let slide = document.getElementById("volume-slider");

let num = document.getElementById("volume-number");

let aud = document.getElementById("horn-sound");


document.getElementById("honk-btn").addEventListener("click", function(event){
    aud.play();
    event.preventDefault();
});



num.addEventListener("input",function(event){
    slide.value = this.value;
    aud.volume = this.value;
    window.alert(this.value);
    event.preventDefault();
});

slide.addEventListener("input",function(event){
    num.value = this.value;
    aud.volume = this.value;
    window.alert(this.value);
    event.preventDefault();
});
// TODO
