 // get Elemets
 const sec =document.getElementById("sec");
 const min =document.getElementById("min");
 const hour =document.getElementById("hour");
 const day =document.getElementById("day");
 const type = document.querySelector(".typeof");
 const t1 = document.querySelector(".t-1");
 const t2 = document.querySelector(".t-2");
const stopwatch = document.getElementById("stoptimer");
const timer = document.getElementById("timer");
const status = document.getElementById("status");
 // add events
type.addEventListener("click",checkType);
status.addEventListener('click',stopWatchStart);
// functions

// switch between timer and stopwatch 
function checkType(e) { 
    let target = e.target;
    let type = target.innerText;
    if (type == "stopwatch") {
        timer.style.display="none";
        stopwatch.style.display="block";
        target.classList.add("typeselect1")
        t2.classList.remove("typeselect2")
    }else{
        stopwatch.style.display="none";
        timer.style.display="block";
        t1.classList.remove("typeselect1")
        t2.classList.add("typeselect2")
    }
}

// stopwatch 
 let statuse = "stop";
 let interval = null;
 let reset = "notset"
 let seconds = 0;
 let minut = 0;
 let hours = 0;
 let days = 0;
  // display numbers
 let displaySec = 0;
 let displayMin = 0;
 let displayHour = 0;
 let displayDay = 0;
  
  
function stopWatch() {
seconds++;
if (seconds/60 == 1) {
    seconds = 0;
    minut++;
    if (minut/60 == 1) {
        minut = 0;
        hours++;
        if (hours/24 == 1) {
            hours =0;
            days++;
        }
    }
};

    if (seconds < 10) {
        displaySec = "0" + seconds.toString();
    }else{
    displaySec = seconds;
    }
    if (minut < 10) {
        displayMin = "0" + minut.toString();
    }else{
    displayMin = minut;
    }
    if (hours < 10) {
        displayHour = "0" + hours.toString();
    }else{
    displayHour = hours;
    }
    if (days < 10) {
        displayDay = "0" + days.toString();
    }else{
    displayDay = days;
    }

    sec.innerText = displaySec;
    min.innerText = displayMin;
    hour.innerText = displayHour;
    day.innerText = displayDay;
}

// stop and restart button
function stopWatchStart() { 
    if (statuse == "stop") {
        interval = setInterval(stopWatch, 1000);
        status.innerText="stop";
        statuse = "start";
    }else{
        clearInterval(interval);
        status.innerText="start";
        statuse = "stop";
    }
  }
function restart() { 
    clearInterval(interval);
     seconds = 0;
     minut = 0;
     hours = 0;
     days = 0;
    sec.innerText = "00";
    min.innerText = "00";
    hour.innerText = "00";
    day.innerText = "00";
    status.innerText="start";
    resrt = "reset";
 }

 // start with keyboard
 document.addEventListener('keypress' , (event)=>{
 
    if (event.keyCode == 32) {
        stopWatchStart()
     }
     
 })


    //! timer App
// define variables
const tDays = document.getElementById("days");
const tHours = document.getElementById("hours");
const tMinute = document.getElementById("minute");
const tSeconds = document.getElementById("seconds");
const setdays = document.getElementById("setdays");
const sethours = document.getElementById("sethours");
const setminute = document.getElementById("setminute");
const setseconds = document.getElementById("setseconds");
const timerstart = document.getElementById("timerstart");
const timersetting = document.getElementById("timersetting");
const setvalue = document.querySelector(".setvalue");
const mess = document.getElementById("message");


// Events 
timersetting.addEventListener('click',displaySetvalue);
timerstart.addEventListener('click',runTimer);


// Set messages
let message = {
    finish:"ohh! finish",
    invalid:"Please enter valid number!",
    enter:"Please enter number."
};

// set value function
let timerSet = "notset"

function displaySetvalue() {

    if (timerSet == "notset") {
        setvalue.style.display="flex";
        timersetting.innerText="ok";
        timerSet = "set";

    }else{

            if ( setseconds.value && setseconds.value <= 60 && setseconds.value >= 0) {
                mess.innerText = "";
                if (setseconds.value < 10) {
                    
                    tSeconds.innerText = "0" + setseconds.value.toString();

                }else{
                    tSeconds.innerText = setseconds.value;
                }
            }else{
                if (setseconds.value > 60 || setseconds.value < 0) {
                    
                    mess.innerText = message.invalid+"\n(max second:60)";
                }
            }
            
            if (setminute.value && setminute.value <= 60 && setminute.value >= 0) {
                if (setminute.value < 10) {
                    
                    tMinute.innerText = "0"+setminute.value.toString();
                }else{
                    tMinute.innerText = setminute.value;
                }
                mess.innerText = "";
            }else{
                if (setminute.value < 0 || setminute.value > 60) { 
                    mess.innerText = message.invalid+"\n(max minute:60)";
                }
            }
            if (sethours.value && sethours.value <=24 && sethours.value >= 0 ) {
                mess.innerText ="";
                if (sethours.value < 10) {
                    
                    tHours.innerText = "0"+ sethours.value.toString();
                }else{
                    
                    tHours.innerText = sethours.value;
                }
            }else{
                if (sethours.value > 24 || sethours.value < 0) {
                    
                    mess.innerText = message.invalid+"\n(max Hours:24)";
                }
            }
            
            if (setdays.value && setdays.value < 10 && setdays.value >= 0 ) {
                mess.innerText = "";
                if (setdays.value < 10) {
                    
                    tDays.innerText = "0"+setdays.value.toString();                
                }else{
                    tDays.innerText = setdays.value.toString();                
                    
                }
            }else{
                
                if (setdays.value > 10 || setdays.value < 0) {
                    
                    mess.innerText = message.invalid+"\n(max Days:10)";
                }
           }

        timerSet = "notset"
        timersetting.innerText="setting";
        setvalue.style.display="none";
        
    }
    
}

// reducer function
function startTimer() { 

    if ( tSeconds.innerText >= 0 ) {
        mess.innerText = "";
        if (tSeconds.innerText == 0) {
            if (tMinute.innerText >= 0) {
                if (tMinute.innerText == 0) {
                    if (tHours.innerText >= 0) {
                        if (tHours.innerText == 0) {
                            if (tDays.innerText >= 0 ) {
                                if (tDays.innerText == 0) {
                                    mess.innerText = message.finish;
                                    clearInterval(timerIntval);
                                    timerStatus = "stoped"
                                    timerstart.innerText = "start";
                                    return;
                                }else{
                                    tDays.innerText--;
                                    tHours.innerText = 24;
                                }
                            }
                        }else{
                            tHours.innerText--;
                            tMinute.innerText = 60;
                        }
                    }
                }else{
                    tSeconds.innerText = 60;
                    tMinute.innerText--;
                }
            }
        }else{

            tSeconds.innerText--;

        }
    }
    if (tSeconds.innerText < 10 && !tSeconds.innerText.includes("0")) {
        tSeconds.innerText = "0"+tSeconds.innerText;

    }else{
        if (tSeconds.innerText == 0) {
            tSeconds.innerText = "00";
        }
    }
    if (tMinute.innerText < 10 && !tMinute.innerText.includes("0")) {
        tMinute.innerText = "0"+tMinute.innerText;

    }else{
        if (tMinute.innerText == 0) {
            tMinute.innerText = "00";
        }
    }
    if (tHours.innerText < 10 && !tHours.innerText.includes("0")) {
        tHours.innerText = "0"+tHours.innerText;
    }else{
        if (tHours.innerText == 0) {
            tHours.innerText = "00";
        }
    }
    if (tDays.innerText < 10 && !tDays.innerText.includes("0")) {
        tDays.innerText = "0"+tDays.innerText;
    }else{
        if (tDays.innerText == 0 ) {
            tDays.innerText = "00";
        }
    }

    if (setseconds.value == 0 && setminute.value == 0 && sethours.value == 0 && setdays.value == 0) {
        //console.log(message.invalid);
        mess.innerText = message.invalid; 
    }
}
// run timer function
let timerStatus = "stoped";
let timerIntval;

function runTimer() {
    switch (timerStatus) {
        case "stoped":
            timerIntval = window.setInterval(startTimer , 1000);
            timerStatus = "started";
            timerstart.innerText = "stop";
            break;
            case "started":
                clearInterval(timerIntval);
                timerStatus = "stoped"
                timerstart.innerText = "start";
                break;
            }
 }