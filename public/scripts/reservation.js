const time = document.getElementById("time");
const people = document.getElementById("people");

function updatePeopleOptions() {
    const timeValue = time.value;

    // schedule はEJSからJavaScriptへ渡す
    const reserved = schedule[timeValue];

    // option を順番に見て disabled を切り替える
}

time.addEventListener("change", updatePeopleOptions);

updatePeopleOptions();