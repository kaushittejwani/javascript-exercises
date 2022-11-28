const first=document.getElementById('h1')
let a =first.getAttribute('class');
console.log(a)

//has attribute has check the attribute in html tag

const div =document.getElementById('divcontainer')
let b=div.hasAttribute('class')
console.log(b)

//set attribute has set the new attribute in html tag
 const New =document.getElementsByTagName('span')[0];
 let c=New.setAttribute("class" ,"new")
 //console.log(c)
 console.log(div.setAttribute("class"," new clr upd"))

 //remove attribute has used to remove the attribute in html element
 const div1 =document.getElementById('divcontainer')
 let b1=div.removeAttribute('class')
 console.log(b1)
// element.attribute has show all the attributes in html tag
const div2 =document.getElementById('divcontainer')
let b2=div.attributes
console.log(div2.dataset.game)