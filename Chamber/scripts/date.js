const yearOutput = document.querySelector('#year');
const date = new Date();
const year = date.getFullYear();
yearOutput.innerText = year;

//create today's date for nav header
//en-US uses month-day-year order
//en-UK uses day-month-year order
const today = document.querySelector("#today");
const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};
today.textContent = date.toLocaleDateString("en-UK", options);

//Banner
let banner = document.getElementById("banner");
let dayOfWeek = date.getDay();
if (dayOfWeek == 1 || dayOfWeek == 2) {
    banner.style.display = "block";
} else {
    banner.style.display = "none";
}

//create last-updated date for footer
//look at code for formatting date from https://bobbyhadz.com/blog/javascript-format-date-mm-dd-yyyy-hh-mm-ss
const lastUpdate = document.querySelector("#lastUpdate");
lastUpdate.innerHTML = date.toLocaleDateString("en-UK", options);
