
arr=['Screenshot from 2022-08-28 19-22-26.png','Screenshot from 2022-10-29 20-31-37.png','sherry-christian-8Myh76_3M2U-unsplash.jpg']

const fetchimage=async()=>{
for(let i=0;i<arr.length;i++){

    let response= await fetch(arr[i]);
    let result = await response.blob();
    console.log(result)
    document.getElementById(`img${i}`).src=URL.createObjectURL(result);
    
}

}
fetchimage()
