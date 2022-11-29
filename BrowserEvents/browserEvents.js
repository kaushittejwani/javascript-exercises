let button = document.getElementById('button')
button.onclick=()=>{
    alert('javascript will overwrite your code')
}
let container=document.getElementById('container')
container.onmouseenter=()=>{
    alert('u enter in div container')
}
container.onmouseleave=()=>{
    alert('u leaves the container')
}