//this use setInterval
setInterval( async function(){
     var url="https://jsonplaceholder.typicode.com/users"
    console.log( await fetch(url))

},3000)