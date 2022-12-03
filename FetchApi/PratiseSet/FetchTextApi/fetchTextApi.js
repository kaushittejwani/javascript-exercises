async function textdata(){
    let response=await fetch("https://dummyjson.com/products");
    let result= await response.text();
    console.log(result)
    document.getElementById('text').innerHTML=result
}
textdata();