// main.js
window.alert('prevent def!');

let slide = document.getElementById("volume-slider");

let num = document.getElementById("volume-number");

let aud = document.getElementById("horn-sound");

let vImg = document.getElementById("volume-image");

document.getElementById("honk-btn").addEventListener("click", function(event){
    aud.play();
    event.preventDefault();
});



num.addEventListener("input",function(event){
    slide.value = this.value;
    aud.volume = this.value;
    window.alert(this.value);
    event.preventDefault();
    if(this.value == 0){
        vImg.src = "./assets/media/icons/volume-level-0.svg";
    } else if(this.value < 34){
        vImg.src = "./assets/media/icons/volume-level-1.svg";
    } else if(this.value < 67){
        vImg.src = "./assets/media/icons/volume-level-2.svg";
    }else{
        vImg.src = "./assets/media/icons/volume-level-4.svg";
    }
});

slide.addEventListener("input",function(event){
    num.value = this.value;
    aud.volume = this.value;
    window.alert(this.value);
    event.preventDefault();
    if(this.value == 0){
        vImg.src = "./assets/media/icons/volume-level-0.svg";
    } else if(this.value < 34){
        vImg.src = "./assets/media/icons/volume-level-1.svg";
    } else if(this.value < 67){
        vImg.src = "./assets/media/icons/volume-level-2.svg";
    }else{
        vImg.src = "./assets/media/icons/volume-level-4.svg";
    }
});
// TODO
