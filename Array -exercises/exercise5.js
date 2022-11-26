//Write a JavaScript program to sort the items of an array
const prompt = require("prompt-sync")({ sigint: true });
var n = Number.parseInt(prompt("enter no of element store in an array"));

var number = new Array(5);
for (var i = 0; i < number.length; i++) {
  number[i] = Number.parseInt(prompt());
}
for (var i = 0; i <= number.length; i++) {
  for (var j = 0; j <= number.length; j++) {
    
    if (number[j] > number[j + 1]) {
     
      var temp = number[j]; //temp=10
      number[j] = number[j + 1]; // number [j]=6
      number[j + 1] = temp; //number[j+1]=10
    }
  }
}
for (let value of number) {
  console.log(value);
}
//console.log(number.sort())
