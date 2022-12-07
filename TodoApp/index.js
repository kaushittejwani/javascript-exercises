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
  let notes = document.getElementById("inputfield").value;

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
    document.getElementById("inputfield").value = "";
    document.getElementById("title").value = "";
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
    data.style.textAlign = "center";
    //data.style.border="3px solid black"
    data.style.background = "white";
    data.style.color = "black";
    data.style.width = "300px";
    data.style.marginLeft = "650px";
    data.style.height = "40px";

    taskobj.forEach((items, index) => {
      html += `<table id="t">
    
      <tr id=table-row>
      <th scope="row" style="marginLeft:30px"; >${index + 1}</th>
           <td>${items}</td>
          <button type="button" class="text-primary" onclick="edittask(${index})">
            <i class="fa fa-edit"></i>Edit
          </button>
        </td>
        <td>
          <button type="button" class="text-danger" onclick="Deletetask(${index})">
            <i class="fa fa-trash"></i>delete
          </button>
        </td>
      </tr>
      </table>
     
    `;
    });
    data.innerHTML = html;

}
function edittask(index) {
  let saveitem = document.getElementById("saveitem");
  saveitem = index;
  let webstak = localStorage.getItem("notes");
  taskobj = JSON.parse(webstak);
  let a = (document.getElementById("inputfield").value = taskobj[index]);
  let button = (document.getElementById("add").style.display = "none");
  let savebutton = (document.getElementById("save").style.display = "block");
  save(index)
}
function save(index){
let save = document.getElementById("save");
save.addEventListener("click",function(){
  let webstak = localStorage.getItem("notes");
  taskobj = JSON.parse(webstak);
  let saveindex = document.getElementById("saveitem");
  console.log(saveindex);
  //let a = document.getElementById("inputfield").value;
  let notes=document.getElementById('inputfield');
  saveindex.value=index;

  taskobj[saveindex.value] = notes.value
  localStorage.setItem("notes", JSON.stringify(taskobj));

  document.getElementById("add").style.display = "block";
  document.getElementById("save").style.display = "none";
  document.getElementById("inputfield").value = "";
  showtask();
  Delete(index)
  
});
}
function Deletetask(index){
  let webstak = localStorage.getItem("notes");
  taskobj = JSON.parse(webstak);
  taskobj.splice(index,1);
  localStorage.setItem('notes',JSON.stringify(taskobj))
  showtask();
}

let Delete = document.getElementById('deleteall');
Delete.addEventListener('click',function(){

let webstak = localStorage.getItem("notes");
taskobj = JSON.parse(webstak);
if(webstak==0){
   taskobj=[]
}
else{
    taskobj=JSON.parse(webstak);
    taskobj=[]
}
  localStorage.setItem('notes',JSON.stringify(taskobj))
  showtask();
});
