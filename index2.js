let monthElement = document.querySelector(".date h1");
let fullDateElement = document.querySelector(".date p");
let daysElement = document.querySelector(".days");
const monthInd = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), monthInd + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthInd, 1).getDay() - 1;

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

monthElement.innerText = months[monthInd];
fullDateElement.innerText = new Date().toDateString();

let days = "";

for (let i = firstDay; i > 0; i--) {
  days += `<div class="empty"></div>`;
}
for (let i = 1; i <= lastDay; i++) {
  if (i === new Date().getDate()) {
    days += `<div class="today">${i}</div>`;
  } else {
    days += `<div>${i}</div>`;
  }
}

daysElement.innerHTML = days;
