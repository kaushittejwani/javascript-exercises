setInterval(()=>{
    async function api(){

        let response =await fetch("https://api.wheretheiss.at/v1/satellites/25544")
        let result = await response.json();
        console.log(result);
        const {longitude,latitude}=result;
        document.getElementById('longitude').textContent=longitude;
        document.getElementById('latitude').textContent=latitude;
        }
    
    api();  
},1000)
