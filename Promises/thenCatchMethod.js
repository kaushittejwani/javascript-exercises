const promise=new Promise((resolve,reject)=>{

     setTimeout(() => {
        console.log("this is settimeout function2 runs")

         setTimeout(()=>{
           console.log("this is settimeoout function1 runs")
         },5000)
     },5000);
     reject(new Error("this is an error"));
}).then(()=>{
    console.log("successfully runes")
}).catch((error)=>{
    console.log(error)
})


const promise1=new Promise((resolve,reject)=>{
    setTimeout(() => {
       console.log("this is settimeout function3 runs")

        setTimeout(()=>{
          console.log("this is settimeoout function4 runs")
        },5000)
    },5000);
    resolve('successfully run');
}).then(()=>{
   console.log("successfully runes")
}).catch((error)=>{
   console.log(error)
})
const promise2=new Promise((resolve,reject)=>{
    setTimeout(() => {
       console.log("this is settimeout function3 runs")
        var roll_no=[1,3,4]
         resolve(roll_no);

        setTimeout(()=>{
          console.log("this is settimeoout function4 runs")
        },5000)
    },5000);

}).then((roll_no)=>{
   console.log(roll_no)
}).catch((error)=>{
   console.log(error)
})