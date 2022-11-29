let button = document.getElementById("button");
/*button.addEventListener('click',function(e){
    console.log(e.target)
    console.log(e)
    alert("hello this event 1  fired");
})
button.addEventListener('click',function(event){
    alert(" this is event 2 fired")
})*/
//one another way to add a event listener
var event1 = function (e) {
  alert("event1 fired");
  console.log(e.type, e.clientX, e.clientY);
};
var event2 = function (e) {
  alert("event2 fired");
};
button.addEventListener("click", event1);
button.addEventListener("click", event2);

let a = prompt("enter which event you have to remove 1 or 2");
if (a == "1") {
  button.removeEventListener("click", event1);
} else if (a == "2") {
  button.removeEventListener("click", event2);
}
