const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];

const giveaway = document.getElementById("giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDay();

const futureDate = new Date(tempYear, tempMonth, tempDay + 15, 10, 30, 0);

let date = futureDate.getDate();
let day = weekdays[futureDate.getDay()];
let month = months[futureDate.getMonth()];
let year = futureDate.getFullYear();
let hours = futureDate.getHours();
let minutes = futureDate.getMinutes();

giveaway.textContent = `${day}, ${date} ${month} ${year} ${hours}:${minutes}am`;

const futureTime = futureDate.getTime();

function getRemainingTime() {
    const today = new Date().getTime();
    const time = futureTime - today;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = Math.floor(time / oneDay);
    let hours = Math.floor((time % oneDay) / oneHour);
    let minutes = Math.floor((time % oneHour) / oneMinute);
    let seconds = Math.floor((time % oneMinute) / 1000);
    const values = [days, hours, minutes, seconds];

    function format(item) {
        if (item < 10) {
            return (item = `0${item}`);
        }
        return item;
    }

    items.forEach(function (item, index) {
        item.innerHTML = format(values[index]);
    });

    if (time < 0) {
        clearInterval(countdown, getRemainingTime);
        deadline.innerHTML = `<h4 class="expired">The offer is expired!</h4>`
    }
}

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();