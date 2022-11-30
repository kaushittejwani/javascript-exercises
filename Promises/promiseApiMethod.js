const p1=new Promise((resolve,reject)=>{
    setTimeout(() => {
          console.log("this is p1 promise resolved")
    },1000);
    resolve(1);
})
const p2=new Promise((resolve,reject)=>{
    setTimeout(() => {
          console.log("this is p2 promise resolved")
    },2000);
    reject(new Error('error was occur'));
})
const p3=new Promise((resolve,reject)=>{
    setTimeout(() => {
          console.log("this is p3 promise resolved")
    },3000);
    resolve(1);
})
const p4=new Promise((resolve,reject)=>{
    setTimeout(() => {
          console.log("this is p4 promise resolved")
    },4000);
    resolve(1);
})
const p5=new Promise((resolve,reject)=>{
    setTimeout(() => {
          console.log("this is p5 promise resolved")
    },5000);
    resolve(1);
})
const promise=Promise.all([p1,p2,p3,p4,p5]).then((value)=>{
    console.log(value)
})
const promise1=Promise.allSettled([p1,p2,p3,p4,p5]).then((value)=>{
    console.log(value)
})
const promise2=Promise.race([p1,p2,p3,p4,p5]).then((value)=>{
    console.log(value)
})
const promise3=Promise.any([p1,p2,p3,p4,p5]).then((value)=>{
    console.log(value)
})
const promise4=Promise.resolve([p1,p2,p3,p4,p5]).then((value)=>{
    console.log(value)
})
const promise5=Promise.reject([p1,p2,p3,p4,p5]).then((value)=>{
    console.log(value)
})
