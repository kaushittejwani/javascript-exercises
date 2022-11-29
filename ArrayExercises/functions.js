//to string function used to covert a array into string
 var arr=[1,2,4,54,65]
 console.log(arr.toString())
 var name=['h','a','r','r','y'];
 console.log(name.toString())
 console.log(name.join(""))
 console.log(name)

 //shift unshift push and pull element in front of the array;

 var a=arr.shift();
 console.log(a)
 console.log(arr);
 
 var b=arr.unshift(3);
 console.log(b)
 console.log(arr)

 //pop ans push are used to in insert and delete element from back
   var Push=arr.push(4);
   console.log(Push);
   console.log(arr);

   var POP=arr.pop();
   console.log(POP);
   console.log(arr);

   //delete function
var DELETE=delete arr[0];
console.log(DELETE);
console.log(arr)

//sort function is used to sort the array alphabatically
  var arr=['d','f','e','a','g','h','e','s']
  console.log(arr.sort());
  var number=[7,4,7,3,63,2,9,0];
  console.log(number.sort());

  //concat function is used to concat 2 or more array,
  var  arr=[1,8,5,7,90,87];
  var arr1=[5,7,8,9,9,20];
  var arr2=['x','y','z'];
  console.log(arr.concat(arr1,arr2));

  //reverse function is used to reverse the array

  console.log(arr.reverse());
  // output  [87,90,7,5,8,1]

  //splice function is used to delete items from array and modifies tha arrayvar arr=[1,4,65,78,8,75,4,3]
  console.log(arr.splice(2,2,5,7,8));
  console.log(arr)

  //slice function used to slice a part of a arr
var arr=[1,4,65,78,8,75,4,3]
  console.log(arr.slice(2,6));
  console.log(arr)


  //the end


  