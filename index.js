document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const h3Animation = document.querySelector("h3");
        h3Animation.style.transform = "translateX(0)";
        h3Animation.style.opacity = 1;
    }, 1000);
    document.addEventListener("keydown", function (event) {
        playBeat(event.key);
        pressedAnimation(event.key);
    });
    var drumCount = document.querySelectorAll(".percussion").length;
    for (var i = 0; i < drumCount; i++) {
        document.querySelectorAll(".percussion")[i].addEventListener("click", function () {
            var btnHTML = this.innerHTML;
            playBeat(btnHTML);
            pressedAnimation(btnHTML);
        });
    };
})


function playBeat(key, volume) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break; 
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "z":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "x":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "c":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "j":
            var tambourine = new Audio("sounds/tambourine-2bars.mp3");
            tambourine.play();
            break;
        case "k":
            var maracas = new Audio("sounds/maracas.wav");
            maracas.play();
            break;
        case "l":
            var vibraslap = new Audio("sounds/vibraslap.mp3");
            vibraslap.play();
            break;
        default:
            console.log(key);
            break;
    };
};

function pressedAnimation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}