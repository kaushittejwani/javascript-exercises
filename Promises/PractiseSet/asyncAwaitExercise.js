async function loadscript(src){
return new Promise((resolve,reject)=>{
let script =document.createElement('script')
script.src=src
script.onload=(()=>{
   // alert("script load succesfully")
    resolve(src)
})
document.body.append(script)
});
}
const add= async()=>{
 let a = await loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js");
 console.log(a);
}
add();