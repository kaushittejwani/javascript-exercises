let heading = (document.getElementById("heading").style.textAlign = "center");
let div = (document.getElementById("div").style.textAlign = "center");
let input = (document.getElementById("inputfield").style.width = "300px");
input = document.getElementById("inputfield").style.height = "40px";
let add = document.getElementById("add");
document.getElementById("title").style.width = "300px";
document.getElementById("title").style.height = "40px";

add.addEventListener("click", function (e) {
  
    
  
  let a = document.getElementById("title").value;

  e.preventDefault();
  let notes = document.getElementById("inputfield").value;
  if (notes == "" || a == "") {
    alert("please fill data");
    if (notes == "") {
      document.getElementById("title").value = "";
      alert("please fill description of note");
    } else {
      document.getElementById("inputfield").value = "";
      alert("please fill title of note");
    }
  } else {
    localStorage.setItem(a, notes);
    let b = document.createElement("h1");
    document.body.appendChild(b);
    b.innerHTML = notes;
    b.style.textAlign = "center";
    document.createElement("button");

    b.style.border = "2px solid black";
    b.style.width = "300px";
    b.style.height = "60px";

    b.style.marginLeft = "620px";
    b.style.paddingTop = "-10px";
    b.style.fontSize = "16px";
    b.style.overflow = "scroll";
    //localStorage.setItem(b)
    let button = document.createElement("button");
    document.body.appendChild(button);
    button.setAttribute("class", "button");
    document.getElementsByClassName("button")[0].style.marginLeft = "750px";
    document.getElementsByClassName("button")[0].style.height = "30px";
    document.getElementsByClassName("button")[0].innerHTML = "Delete";

    document.getElementById("inputfield").value = "";
    confirm("add new note");
    document.getElementById("title").value = "";
  
  }
});
let Delete = document.getElementsByClassName("button")[0];

Delete.addEventListener("click", function (e) {

  let key = prompt("which one item you want to delete");
  e.preventDefault();
  localStorage.removeItem(key);
  
});/*
function getvalue() {
  let key = document.getElementById("title").value;
  let value = document.getElementById("desc").value;

  localStorage.setItem(key, value);
  
}
function showvalue(){
  for(let i=0;i<localStorage.length;i++)
{
  document.getElementById("list").innerHTML += "<br>"+ localStorage.key(i) +" : " + localStorage.getItem(localStorage.key(i)) +"<br></br>"
}

}
function editvalue(){
  let edited=prompt("enter the title of todo you want to edit")
  let edit_desc=prompt(`enter the new description for title ${edited} `)
  localStorage.setItem(edited,edit_desc)
  document.getElementById("edit_list").innerHTML=`successfully edited ${edited} with description ${edit_desc}. `

}
function deletevalue(){
  let deletetodo=prompt("enter the title of todo you want to delete")
  let del= confirm(`Do you want to delete${deletetodo}.Once deleted cannot be retrieved` )
  localStorage.removeItem(deletetodo)
  document.getElementById("delete_list").innerHTML=`successfully deleted ${deletetodo}  `

}*/


