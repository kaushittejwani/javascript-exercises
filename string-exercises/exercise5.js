//Write a JavaScript function to convert a string in abbreviated form

const prompt = require("prompt-sync")({sigint:true});
count =0;
var str=prompt("enter any string");
var len=str.length;
aberivatedform(str);
 function aberivatedform(str){
    for(var i=1;i<len-1;i++){
        count++
    }
    console.log(str[0]+count+str[len-1])
}