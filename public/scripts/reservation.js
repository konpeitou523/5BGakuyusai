const time = document.getElementById("time");
const people = document.getElementById("people");
// import { maxpeople,timeschedule } from "../config/settings.js";
function updatePeopleOptions() {
  const timeValue = time.value;
  const reserved = Number(schedule[time.value]);

  for (const option of people.options) {
    const count = Number(option.value);
    if (reserved + count > maxpeople) {
      option.disabled = true;
      option.textContent = `${count}人 (人数超過)`;
    } else {
      option.disabled = false;
      option.textContent = `${count}人`;
    }
  }
}

time.addEventListener("change", updatePeopleOptions);

updatePeopleOptions();

document.querySelector(".backtotable").addEventListener("click",()=>{
    location.href="/table"
})
