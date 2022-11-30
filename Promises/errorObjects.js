try{
    harry
}catch(error){
    console.log(error.message)
    console.log(error.name)
    console.log(error.stack)
}
//program
//const prompt=require('prompt-sync')({signint:true})
var age=prompt("enter age")
if(age<18){
    try{
throw new Error("u cannot drive")

throw new ReferenceError("u cannot drive u are age is less than 18")


    }catch(error){
    console.log(error.message)
    console.log(error.name)
    console.log(error.stack)
    }
}
else{
    console.log("u can drive")
}

