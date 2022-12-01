/*document.getElementById('heading').style.fontSize="bold"
document.getElementById('heading').style.textAlign="center"
document.getElementById('inputfield').style.textAlign="center"
document.getElementById('inputfield').style.height="40px"
document.getElementById('inputfield').style.width="350px"

document.getElementById('inputfield').style.width="350px"

document.getElementsByClassName('div')[0].style.marginLeft="570px"

let button=document.getElementById('button')
 console.log(document.getElementById('inputfield').innerHTML);*/
let n =localStorage.getItem('note')
alert("u are note"+n)
let a =prompt("please enter any note");
if(a){
   localStorage.setItem('note',a);

}
 let c=confirm("u want to delete the note")
   if(c){
      localStorage.removeItem(a);
      alert("notes done succesfully")

   }
   
