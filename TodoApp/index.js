showtask();
let heading = (document.getElementById("heading").style.textAlign = "center");
let div = (document.getElementById("div").style.textAlign = "center");
let input = (document.getElementById("inputfield").style.width = "300px");
input = document.getElementById("inputfield").style.height = "40px";
let add = document.getElementById("add");
document.getElementById("title").style.width = "300px";
document.getElementById("title").style.height = "40px";

add.addEventListener("click", function (e) {
  e.preventDefault();
var notes = document.getElementById("inputfield").value;

  let a = document.getElementById("title").value;
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
    let webstak = localStorage.getItem("notes");
    if (!webstak) {
      taskobj = [];
    } else {
      taskobj = JSON.parse(webstak);
    }
    taskobj.push(notes);
    localStorage.setItem("notes", JSON.stringify(taskobj));
    showtask();
  }
  
});
function showtask() {
  let webstak = localStorage.getItem("notes");
  if (!webstak) {
    taskobj = [];
  } else {
    taskobj = JSON.parse(webstak);
  }
  let html = "";
  let data = document.getElementById("divcontainer");
  data.style.textAlign="center";
  data.style.border="3px solid black"
  data.style.background="white"
  data.style.color="black";
  data.style.width="300px"
  data.style.marginLeft="650px"
  data.style.height="40px"
  
  taskobj.forEach((items, index) =>{
    html += `
  
    <tr style="paddingLeft:5px";>
    <th scope="row" style="marginLeft:30px"; >${index+1}</th>
         <td>${items}</td>
        <button type="button" class="text-primary" onClick="edittask(${index})">
          <i class="fa fa-edit"></i>Edit
        </button>
      </td>
      <td>
        <button type="button" class="text-danger">
          <i class="fa fa-trash"></i>delete
        </button>
      </td>
    </tr>
   
  `;
   
  });
  data.innerHTML = html;
}
function edittask(index){
  let webstak = localStorage.getItem("notes");
  taskobj=JSON.parse(webstak);
  notes.value=taskobj[index]
  
}
