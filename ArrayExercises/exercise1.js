//Write a JavaScript function to check whether an `input` is an array or not.
const prompt=require("prompt-sync")({sigint:true});
var num=prompt("enter any input");
if(num.includes("[") && num.includes("]"))
{  
 console.log(true);
    console.log (num,"is an array")

    //console.log("["+num.toString().join(",")+"]")
}
else{
    console.log(false)
    console.log(num,"is not an array");
}