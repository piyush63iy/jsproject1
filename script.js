const daysE1 = document.getElementById("days");
const hoursE1 = document.getElementById("hours");
const minsE1 = document.getElementById("mins");
const secondsE1 = document.getElementById("seconds");
const newYears ="1 jan 2023";
function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalseconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const mins = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;
    daysE1.innerHTML = days;
    hoursE1.innerHTML = formatetime(hours);
    minsE1.innerHTML = formatetime(mins);
    secondsE1.innerHTML = formatetime(seconds);
}
function formatetime(time){
    return time < 10 ? (`0${time}`) : time;
}
countdown();
setInterval(countdown, 1000);