//Write a JavaScript function to extract a specified number of characters from a string
const prompt = require('prompt-sync')({sigint:true});

var str=prompt("Enter any string");
extractcharacters(str);
function extractcharacters(str){
    console.log(str.substring(0,4));
}