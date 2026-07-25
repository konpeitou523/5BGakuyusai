const btn = document.querySelectorAll("button");
btn.forEach((button) => {
  button.addEventListener("click", () => {
    location.href = "/reservation?time=" + button.dataset.time;
  });
});
