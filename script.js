function nightMode() {
    var element = document.body;
    element.classList.toggle("night-mode");
};

function timeForClock() {
    var clock = document.getElementById("clock");
    var time = new Date();
    var hour = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var meridian = "AM";

    if (hour > 12) {
        hour = hour - 12;
        meridian = "PM";
    }

    if (hour < 10) {
        hour = "0" + hour;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes < 10) { // a zero will precede single-digit minutes.
        minutes = "0" + minutes;
    }

    clock.innerText = hour + ':' + minutes + ':' + seconds + " " + meridian;
};

timeForClock();

// setInterval function executes a function (first parameter) for an interval of set milliseconds (second parameter)

setInterval(timeForClock, 1000);
