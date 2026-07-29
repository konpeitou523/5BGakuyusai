const time = document.getElementById("time");
const people = document.getElementById("people");
const name = document.getElementById("name");
function updatePeopleOptions() {
  const reserved = Number(schedule[time.value] ?? 0);

  for (const option of people.options) {
    // 初期選択肢は処理しない
    if (option.value === "") {
      continue;
    }

    const count = Number(option.value);

    if (reserved + count > maxpeople) {
      option.disabled = true;
      option.textContent = `${count}人 (人数超過)`;
    } else {
      option.disabled = false;
      option.textContent = `${count}人`;
    }
  }

  // 現在選択中の人数が無効なら初期値へ戻す
  const selectedOption = people.options[people.selectedIndex];

  if (
    selectedOption &&
    selectedOption.value !== "" &&
    selectedOption.disabled
  ) {
    people.value = "";
  }
}

time.addEventListener("change", updatePeopleOptions);

updatePeopleOptions();

document.querySelector(".backtotable").addEventListener("click", () => {
  const result = confirm(
    "予約状況ページに戻ります。よろしいですか？(入力は保存されません)",
  );
  if (result) {
    location.href = "/table";
  } else {
  }
});

const form = document.getElementById("reservationForm");
form.addEventListener("submit", (event) => {
  const namevalue = name.value;
  const timevalue = time.value;
  const peoplevalue = people.value;
  const message =
    `以下の内容で予約しますか？\n\n` +
    `代表者: ${namevalue}\n` +
    `開始時間: ${timevalue}\n` +
    `人数: ${peoplevalue}人`;

  if (!confirm(message)) {
    event.preventDefault();
  }
});
