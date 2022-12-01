

/*async function  hackerman(){
    return new Promise((resolve,request)=>{
         setTimeout(() => {
             console.log("Initianlizing Hack Program .....")
         },1000);
         setTimeout(()=>{
            console.log("Hacking ashish user name")
         },3000)
         setTimeout(()=>{
            console.log("username found ashish17....")
         },6000)
         setTimeout(()=>{
            console.log("connecting to facebook")
         },8000)
         resolve(true)

    }
    )
    
}*/
/*const hacking=async()=>{
  const a =await hackerman();
  console.log(a);
}
hacking();*/
document.body.style.background="black"
const  message=[
   "Initianlizing Hack Program .....",
   "Hacking ashish user name...",
   "connect to server 1...",
   "connecting established....",
   "please wait... ",
   "please wait 2 sec...",
   "username found ashish17.... ",
   "Hacking....",
   "please wait 2 sec....",
   "Hacked succesfully...."
   
]
const sleep= async(seconds)=>{
   return new Promise((resolve,reject)=>{
      setTimeout(() => {
         resolve(true)
      },seconds*1000);
   })
}
const showhack= async (message)=>{
    await sleep(2);
    document.getElementById('div').innerHTML=message;
    document.getElementById('div').style.color="yellow"
    console.log(message)
}
const display=async()=>{
   for(let i=0;i<message.length;i++){
   await showhack(message[i]);
   }
}
display();
