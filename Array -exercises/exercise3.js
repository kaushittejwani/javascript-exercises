// Write a simple JavaScript program to join all elements of the following array into a string.
const prompt=require("prompt-sync")({sigint:true});
var arr=[];
var n=Number.parseInt(prompt("enter no elements store in array "));
for(var i=0;i<n;i++){
    arr[i]=prompt("enter " +[i]+" element ");
}
console.log(arr.toString())
