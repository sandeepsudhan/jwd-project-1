function nightMode() {
    var element = document.body;
    element.classList.toggle("night-mode");
};

function timeForClock() {
    var clock = document.getElementById("clock");
    var time = new Date();
    var hour = time.getHours();
    var minutes = time.getMinutes();
    clock.innerText = hour + ':' + minutes;
};

timeForClock();   
