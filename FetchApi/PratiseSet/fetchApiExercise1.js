async function getApi(){
    let response= await fetch("https://jsonplaceholder.typicode.com/posts");
    let result= await response.json();
    console.log(result);

}
getApi();