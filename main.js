var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');

var breakMinutes = document.getElementById('breakMinutes');
var breakSeconds = document.getElementById('breakSeconds');

var startTimer;

start.addEventListener('click', function() {
    if (startTimer === undefined) {
        startTimer = setInterval(timer,1000);
        
    }
})

reset.addEventListener('click', function() {
    minutes.innerText = 25;
    seconds.innerText = "00";
    
    breakMinutes.innerText = 5;
    breakSeconds.innerText = "00";
    
})

stop.addEventListener('click', function() {
    stopInterval()
    startTimer = undefined;
    
})

function timer() {
    if (seconds.innerText != 0) {
        seconds.innerText--;
        
    } else if (minutes.innerText != 0 && seconds.innerText == 0) {
        seconds.innerText = 59;
        seconds. innerText--;
        
    }
    
    if (minutes.innerText == 0 && seconds.innerText == 0) {
        if (breakSeconds.innerText != 0) {
            breakSeconds.innerText--;
            
        } else if (breakMinutes.innerText != 0 && breakSeconds.innerText == 0) {
            breakSeconds.innerText = 59;
            breakMinutes.innerText--
            
        }
    }
}