//write a program to check whether a given string  is blank or not
const prompt = require('prompt-sync')({sigint:true});
var str=prompt("enter any input");
if(str.length==0){
    console.log("string is blank")
}
else{
    console.log("'",str,"'");
}



