// in javascript there is 4 loops foreach ,Array.from,forin,forof;

//for each loop
var arr=[1,4,6,8,9,6,7];
arr.forEach((Element)=>{
    console.log(Element);
})

//Array.from
var newarray=Array.from(arr);
console.log(newarray);

//forin loop gives the index value of the array element
 for (var key in arr) {
      console.log(key)
        
    }

//forof loop gives the element of the arr
 for (var ele of arr) {
      console.log(ele)
 }
 