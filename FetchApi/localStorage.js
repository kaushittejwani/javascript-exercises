localStorage.setItem('name','kaushit')
console.log(localStorage.getItem('name'))
console.log(localStorage.key('name'))

var key=prompt("enter any key");
var value=prompt('enter any value');
localStorage.setItem(key,value);
console.log(localStorage.getItem('name'))
console.log(localStorage.key(2))
console.log(localStorage.length)
console.log(localStorage.clear());




