


//Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8
const prompt=require('prompt-sync')({sigint:true});
var n=Number.parseInt(prompt());
function insertdasches(n) {
    
 
    var str=n.toString();
    var output="";
    for(var i=0;i<str.length;i++){
        var currentelement=str[i];
        var nextelement=str[i+1];
        if(currentelement%2==0 && nextelement%2==0){
            output+=currentelement+"-"
        }
        else{
            output=currentelement
        }
         
        }
        
        return output
        
}
const result= insertdasches(n);
        console.log(result);

