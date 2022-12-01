let a =fetch("https://jsonplaceholder.typicode.com/posts")
a.then((response)=>{
    console.log(response.status);
    console.log(response.ok)
     return response.json();
}).then((response)=>{
    console.log(response);
 })
/*const api= async ()=>{
 let a =  await fetch("https://jsonplaceholder.typicode.com/posts")
 let b = await a.json();
 console.log(b);
}
api()*/