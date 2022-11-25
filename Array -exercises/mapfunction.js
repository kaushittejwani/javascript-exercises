//map function

var arr=[1,4,5,6,7,7,7]
var arr1=arr.map((index,value,arr)=>{
    console.log(value,index,arr)
    return index, value,arr
  

})
/*output 0 1 [1,4,5,6,7,7,7]
         1 4 [1,4,5,6,7,7,7]
         2 5 [1,4,5,6,7,7,7]
         3 6 [1,4,5,6,7,7,7]
         4 7 [1,4,5,6,7,7,7]
         5 7 [1,4,5,6,7,7,7]
         6 7 [1,4,5,6,7,7,7]
        */

//filter function
 var arr2 =arr.filter((value)=>{
    return value<5;
})
console.log(arr2)

//reduce function
 var arr3=arr.reduce((a,b)=>{
    return a+b 
})
console.log(arr3)





//filter function return an array








//reduce function return an array