let seconds = 0;
let minutes = 0;
let hours = 0;

let timersON = false;
let intervalID;


document.querySelector('.start-timer').addEventListener('click', ()=>{
    if(!timersON){
       intervalID = setInterval(()=> {
        if(seconds <  60){
            seconds++
            document.querySelector('.seconds').innerHTML = seconds
        }if(seconds >= 60){
            seconds = 0
            document.querySelector('.seconds').innerHTML = seconds
            minutes++
            document.querySelector('.minutes').innerHTML = minutes
        }if (minutes >= 60){
            minutes = 0
            document.querySelector('.minutes').innerHTML = minutes
            hours++
            document.querySelector('.hours').innerHTML = hours
        };
        }, 1000); 
    } 
    timersON = true;
});

document.querySelector('.stop-timer').addEventListener('click', () => {
    if(timersON){
        clearInterval(intervalID);
        seconds = seconds;
        minutes = minutes;
        hours  = hours;
        timersON = false;
    }
});