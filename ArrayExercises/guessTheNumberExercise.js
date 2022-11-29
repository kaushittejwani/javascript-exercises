 const prompt=require("prompt-sync")({sigint:true})
 var a = Math.floor(Math.random() * 100);

 for(var i=1;i<=100;i++){
 var b=Number.parseInt(prompt("enter any no"));

 if(b==a){
    console.log("guess was correct ")
    console.log("b =",b,"equals to a =",a)
    break;
 }
 if(b<a){
    console.log("input is less than the original number");
    console.log("guess again")
 }
 else{
   console.log(" input is greater than original no");
   console.log("guess again")
 }
}
