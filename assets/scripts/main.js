// main.js
window.alert('divide by 100');

let slide = document.getElementById("volume-slider");

let num = document.getElementById("volume-number");

let aud = document.getElementById("horn-sound");

let vImg = document.getElementById("volume-image");

document.getElementById("honk-btn").addEventListener("click", function(event){
    aud.play();
    event.preventDefault();
});



num.addEventListener("input",function(event){
    let val = this.value;
    aud.volume = val/100;
    //window.alert(this.value);
    event.preventDefault();
    if(this.value == 0){
        vImg.src = "./assets/media/icons/volume-level-0.svg";
    } else if(this.value < 34.0){
        vImg.src = "./assets/media/icons/volume-level-1.svg";
    } else if(this.value < 67.0){
        vImg.src = "./assets/media/icons/volume-level-2.svg";
    }else{
        vImg.src = "./assets/media/icons/volume-level-4.svg";
    }
});

slide.addEventListener("input",function(event){
    let val = this.value;
    num.value = val;
    aud.volume = val/100;
    //window.alert(this.value);
    event.preventDefault();
    if(val == 0){
        vImg.src = "./assets/media/icons/volume-level-0.svg";
    } else if(val < 34.0){
        vImg.src = "./assets/media/icons/volume-level-1.svg";
    } else if(val < 67.0){
        vImg.src = "./assets/media/icons/volume-level-2.svg";
    }else{
        vImg.src = "./assets/media/icons/volume-level-4.svg";
    }
});
// TODO
