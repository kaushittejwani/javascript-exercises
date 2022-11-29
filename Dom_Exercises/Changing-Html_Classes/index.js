// this will show a classlist
var a = div.classList;
console.log(a);

document.getElementsByClassName("yellow-container")[0].style.background =
  "yellow";
document.getElementsByClassName("yellow-container")[0].style.color = "black";
document.getElementsByClassName("yellow-container")[0].style.border =
  "3px solid black";
document.getElementsByClassName("yellow-container")[0].style.paddingLeft =
  "10px";

div.classList.add("red");
document.getElementsByClassName("red")[0].style.background = "red";
document.getElementsByClassName("red")[0].style.color = "white";
document.getElementsByClassName("red")[0].style.border = "3px solid black";
document.getElementsByClassName("red")[0].style.paddingLeft = "10px";

button.addEventListener("click", myFunction);

function myFunction() {
  div.className = "yellow-container";
}
console.log(div.classList.contains("red"));
console.log(div.classList.contains("yellow-container"));
