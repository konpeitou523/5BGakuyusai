const debug = document.querySelector("button");
debug.addEventListener("click", () => {
  localStorage.clear();
  location.href = "/table";
});
