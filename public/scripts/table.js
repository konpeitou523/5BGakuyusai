document.getElementById("gomypage").style.display="none";
const reservationToken=localStorage.getItem("reservationToken");
document.getElementById("mypagebutton").addEventListener("click",()=>{
  location.href = `/mypage?token=${reservationToken}`;
})
if (reservationToken) {
  document.getElementById("gomypage").style.display="block";
}

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
document.getElementById("close1").addEventListener("click",()=>{
  document.getElementById("howtouse").close();
  window.scrollTo(0, 0);
})
document.getElementById("close2").addEventListener("click",()=>{
  document.getElementById("howtouse").close();
  window.scrollTo(0, 0);
})