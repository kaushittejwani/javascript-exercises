async function loadscript(src){
    return new Promise((resolve,reject)=>{
         var script=document.createElement("script");
         script.src=src;
         script.onload=()=>{
             resolve(src);
         }
         document.body.append(script);
    });
}
 loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js').then((value)=>{
    console.log(value)
 })

