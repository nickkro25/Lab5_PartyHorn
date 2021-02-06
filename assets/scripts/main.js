// main.js
//window.alert('party');

let slide = document.getElementById("volume-slider");

let num = document.getElementById("volume-number");

let aud = document.getElementById("horn-sound");

let vImg = document.getElementById("volume-image");

let sImg = document.getElementById("sound-image");


document.getElementById("honk-btn").addEventListener("click", function(event){
    aud.play();
    event.preventDefault();
});



num.addEventListener("input",function(event){
    let val = this.value;
    aud.volume = val/100;
    slide.value = val;
    //window.alert(this.value);
    event.preventDefault();
    if(this.value == 0){
        vImg.src = "./assets/media/icons/volume-level-0.svg";
        document.getElementById("honk-btn").disabled = true;
    } else if(this.value < 34.0){
        document.getElementById("honk-btn").disabled = false;
        vImg.src = "./assets/media/icons/volume-level-1.svg";
    } else if(this.value < 67.0){
        vImg.src = "./assets/media/icons/volume-level-2.svg";
    }else{
        vImg.src = "./assets/media/icons/volume-level-3.svg";
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
        document.getElementById("honk-btn").disabled = true;
    } else if(val < 34.0){
        vImg.src = "./assets/media/icons/volume-level-1.svg";
        document.getElementById("honk-btn").disabled = false;
    } else if(val < 67.0){
        vImg.src = "./assets/media/icons/volume-level-2.svg";
    }else{
        vImg.src = "./assets/media/icons/volume-level-3.svg";
    }
});

document.getElementById("radio-air-horn").addEventListener("change", function(event){
    sImg.src = "./assets/media/images/air-horn.svg";
    aud.src = "./assets/media/audio/air-horn.mp3";
});

document.getElementById("radio-car-horn").addEventListener("change", function(event){
    sImg.src = "./assets/media/images/car.svg";
    aud.src = "./assets/media/audio/car-horn.mp3";
});

document.getElementById("radio-party-horn").addEventListener("change", function(event){
    sImg.src = "./assets/media/images/party-horn.svg";
    aud.src = "./assets/media/audio/party-horn.mp3";
});


// TODO
