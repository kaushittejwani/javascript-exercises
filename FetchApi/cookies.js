 let a =document.cookies="name=kaushit"
 console.log(a);
 var key=prompt("enter  any key");
 var value=prompt("enter any  value")
  console.log(document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
