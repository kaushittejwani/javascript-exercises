 //Write a JavaScript function to split a string and convert it into an array of words.
const prompt = require('prompt-sync')({sigint:true});

 var str=prompt("Enter the String");
 splitintoarray(str);
 
  function splitintoarray(str){
    console.log(str.split(" "))
  }
