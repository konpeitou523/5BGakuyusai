const btn = document.querySelectorAll("button.reservation");
btn.forEach((button) => {
  button.addEventListener("click", () => {
    location.href = "/reservation?time=" + button.dataset.time;
  });
});
