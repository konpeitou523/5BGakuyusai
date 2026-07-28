const debug = document.getElementById("debug");
debug.addEventListener("click", () => {
  localStorage.clear();
  location.href = "/table";
});
document.getElementById("backtotable").addEventListener("click",()=>{
    location.href="/table"
})
document.getElementById("cancelform").addEventListener("submit",(event)=>{
    if (!confirm("予約をキャンセルします。本当によろしいですか？(この操作は取り消せません)")) {
    event.preventDefault();
  }else{
    localStorage.clear();
  }
})