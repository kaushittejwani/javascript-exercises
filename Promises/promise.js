// call back hell with promise
setTimeout(()=>{
    const promise=new Promise((resolve,reject)=>{
        console.log("promise fired")
        resolve(22);
    });
     console.log("hello")
    console.log("settimeout fired")
    setTimeout(()=>{
        const promise=new Promise((resolve,reject)=>{
            console.log("promise fired")
            resolve();
        });

    },3000)
         console.log("hello")
        console.log("settimeout fired")
        setTimeout(()=>{
            const promise=new Promise((resolve,reject)=>{
                console.log("promise fired")
                resolve();
            });
        },5000)
             console.log("hello")
            console.log("settimeout fired")
            setTimeout(()=>{
                const promise=new Promise((resolve,reject)=>{
                    console.log("promise fired")
                    resolve();
                });
            },7000)
                 console.log("hello")
                console.log("settimeout fired")
                setTimeout(()=>{
                    const promise=new Promise((resolve,reject)=>{
                        console.log("promise fired")
                        resolve();
                    });
                },9000)
                   console.log("hello")
                    console.log("settimeout fired")
                    setTimeout(()=>{
                        const promise=new Promise((resolve,reject)=>{
                            console.log("promise fired")
                            resolve();
                        });
                    },11000)
                         console.log("hello")
                        console.log("settimeout fired")
console.log(promise)

 },3000);
 const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("hllu,lull")
        resolve(22)
    },15000)
   ;
});
 
