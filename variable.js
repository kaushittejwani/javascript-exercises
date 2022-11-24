//1.create a variable of string type and try to hold a string value into it



var name="kaushit";
console.log(name);
console.log(name)
var b=8;
console.log(name+b);
 
//js is dynamically typed language so we can store different type of value in differnt data type

// 2.use type of operator to find the data type of last question variable

console.log(typeof(name+b))//data type is Number

//3 .create a constant object and can you change it to hold a number later?

  const items = {
    id:"1",
    name:"kaushit tejwani",
    phoneNo:"xxxxxx8862"
  }

 // items="kaushit"
 // console.log(items[name])
  //it gives an syntax error 

//try to add a new key in object
items['salary']='2,00,000'
console.log(items)

//add succesfully

//5 .create a word meaning dictionary  to 3 words
  const dict={
    yakka:"hard work",
    appericiate:"recognize the full worth of",
    gingerly:"with great care or caution"
  }
  console.log(dict.yakka)
  console.log(dict.appericiate)
  console.log(dict.gingerly)
  console.log(dict['yakka'])
  console.log(dict['appericiate'])
  console.log(dict['gingerly'])





 
