const btn = document.querySelectorAll("button.reservation");
btn.forEach((button) => {
  button.addEventListener("click", () => {
    location.href = "/reservation?time=" + button.dataset.time;
  });
});

document.querySelector("button.debug-solve").addEventListener("click",()=>{
  localStorage.clear();
  location.reload();
})

document.getElementById("open").addEventListener("click",()=>{
  document.getElementById("howtouse").showModal();
})
document.getElementById("close").addEventListener("click",()=>{
  document.getElementById("howtouse").close();
})