var milliseconds = 0;
var seconds = 0;
var minutes = 0;
var strMilliseconds;
var strSeconds;
var strMinutes;
var interval;
var running = true;

function count(){
    milliseconds++;
    if(milliseconds == 100){
        seconds++;
        milliseconds = 0;
    }
    if(seconds == 60){
        minutes++;
        seconds = 0;
    }
    strMilliseconds = String(milliseconds);
    strSeconds = String(seconds);
    if(minutes==0){
        strMinutes = "";
    } else{ 
        strMinutes = String(minutes) + ":";
    }
    if(milliseconds<10){
        strMilliseconds = "0" + strMilliseconds;
    }
    if(seconds<10 && minutes>0){
        strSeconds = "0" + strSeconds;
    }
    document.getElementById("timer").innerHTML = strMinutes + strSeconds + ":" + strMilliseconds;
}

function start(){
    if (running) {
        interval = setInterval(count, 10); 
    }
    running = false;
}

function stop(){
    interval = clearInterval(interval);
    running = true;
}

function restart(){
    document.getElementById("timer").innerHTML = "0:00"
    if(running==false){
        stop();
    }
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
}

window.onkeydown = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;

    if(key == 20) {
        start();
    }
}