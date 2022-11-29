



setInterval(function(){
    let date=new Date()
    let m=date.getMinutes()
    let h=date.getHours();
    let s=date.getSeconds();
    let day=date.getDate();
    let am_pm="AM"
    if(h>=12){
    am_pm="PM"
    }
    /*let time=h+":"+m+":"+s+":"+am_pm;
    document.getElementById('clock').innerHTML=time;*/

 
    

    var h1=document.getElementById('date');
    h1.innerHTML=date.getDate()+":";
    var h2=document.getElementById('hours');
    h2.innerHTML=date.getHours()+":";
    var h3=document.getElementById('minutes');
    h3.innerHTML=date.getMinutes()+":";
    var h4=document.getElementById('sec');
    h4.innerHTML=date.getSeconds();
    },1000)

