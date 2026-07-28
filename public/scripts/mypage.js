const debug = document.getElementById("debug");
debug.addEventListener("click", () => {
  localStorage.clear();
  location.href = "/table";
});
document.getElementById("backtotable").addEventListener("click",()=>{
    location.href="/table"
})
