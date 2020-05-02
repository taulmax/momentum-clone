const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("span");
const greetingForm = document.querySelector(".js-form");

function showClock() {
    clockContainer.classList.remove("clock");
}

function handleClock() {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
        showClock();
    } else {
        greetingForm.addEventListener("submit", showClock);
    }
}

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockTitle.innerText =
        `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
    handleClock();
}

init();