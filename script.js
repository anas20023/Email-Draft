let a = getElementsById("th");
function showDiv() {
  if (a !=" ") {
    document.getElementById("alert").style.display = "block";
    document.getElementById("others").style.display = "none";
  }
}