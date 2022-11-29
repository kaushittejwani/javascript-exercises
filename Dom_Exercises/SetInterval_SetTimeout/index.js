alert("hello");
//settimeout
var a = setTimeout(() => {
  alert("welcome to the page");
}, 3000);
const addition = (a, b) => {
  console.log("yes i am running");
  console.log(a + b);
};
//set timeout take arguments
setTimeout(addition, 3000, 1, 4);
clearTimeout(a);
//settime interval

setInterval(() => {
  alert("simeInterval alert");
}, 10000);

var arr = [10, 20, 30, 20, 50];
for (let i = 0; i < arr.length; i++)
  setTimeout(() => {
    {
      console.log(`the index is ${i} and element is ${arr[i]} `);
    }
  }, 1000);
