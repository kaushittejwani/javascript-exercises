

/*async function imageApi(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(true)
        }, 2000);
    })
}*/
const dispatch=async(id)=>{
    let response=await fetch('https://jsonplaceholder.typicode.com/posts')
    setTimeout(() => {
         document.getElementsByClassName('images')[0].innerHTML=id
    }, 2000);
   // await imageApi();
    let result= await response.json();
    //let a= JSON.stringify(result);
    console.log(result);
   // console.log(a)
   // document.getElementsByClassName('images')[0].innerHTML=`<h1>${response}</h1><h2>${response}<h2>`
    

}
const display=async()=>{
   for(let i=0;i<;i++){

   }
}

dispatch();

