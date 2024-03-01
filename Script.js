let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let printTime = document.getElementById('printTime');

setInterval(() => {
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    hourHandRotation = (30*hours) + (minutes/2);
    minuteHandRotation = 6*minutes;
    secondHandRotation = 6*seconds;

    hour.style.transform = `rotate(${hourHandRotation}deg)`;
    minute.style.transform = `rotate(${minuteHandRotation}deg)`;
    second.style.transform = `rotate(${secondHandRotation}deg)`;

    printTime.innerHTML = date;
}, 1000);

