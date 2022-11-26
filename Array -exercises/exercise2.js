//Write a JavaScript function to take the  elements from the user get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
const prompt = require("prompt-sync")({sigint:true});
var n1 =Number.parseInt(prompt("enter how many elements in ann array "))
var arr=[4,5,6,7,8,99,0];

for(var i=0;i<n1;i++){
  arr[i]=Number.parseInt(prompt());
}
var n =Number.parseInt(prompt("enter number of elements u want to print"))
console.log(arr.slice(0,n));

