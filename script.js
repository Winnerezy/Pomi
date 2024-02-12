const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const hourInput = document.getElementById("hourInput");
const minuteInput = document.getElementById("minuteInput");
const secondInput = document.getElementById("secondInput");
const enter = document.getElementById("enter");
let interval;

//input the values for the timer
enter.addEventListener('click', () => {
    let hourEL = Number(hourInput.value);
    let minuteEL = Number(minuteInput.value);
    let secondEL = Number(secondInput.value);
    hourInput.value = "";
    minuteInput.value = "";
    secondInput.value = "";


startBtn.addEventListener('click', () => {
    interval = setInterval(update, 1000)
})

stopBtn.addEventListener('click', () => {
    clearInterval(interval)
})

resetBtn.addEventListener('click', () => {
    hourEL = 0;
    minuteEL = 0;
    secondEL = 0;
    updateTime();

})

function update() {
    secondEL--;
    if (secondEL < 0) {
        secondEL = 59;
        minuteEL--;
        if (minuteEL < 0) {
            minuteEL = 59;
            hourEL--;
            if (hourEL < 0) {
                reset();
            }
        }
    }
    updateTime();
}

function updateTime() {
    hour.innerHTML = padZero(hourEL);
    minute.innerHTML = padZero(minuteEL);
    second.innerHTML = padZero(secondEL);
}



function padZero(value) {
    return value < 10 ? "0" + value : value;
}


updateTime();
})