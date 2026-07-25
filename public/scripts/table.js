const btn = document.querySelectorAll("button");
btn.forEach((button) => {
  button.addEventListener("click", () => {
    time = button.closest("tr").querySelector("th").textContent;
    alert(time);
  });
});
