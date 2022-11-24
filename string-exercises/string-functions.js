//escape sequence \

var name="harry\"";
console.log(name.length);

//includes,startWith and endWith method

const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);


console.log(sentence.includes(word))
 console.log(sentence.startsWith('The'));
 console.log(sentence.startsWith("fox"));
 console.log(sentence.endsWith("dog."));
 console.log(sentence.endsWith("cat"));

 // uppercase and lowercase functions

 var  a= 'kaushit'
 var b="KAUSHIT"
 console.log(a.toLocaleUpperCase())
 console.log(b.toLocaleLowerCase())
 console.log(a.toLowerCase())
 console.log(b.toUpperCase());

 //slice function
  var a ="please give me Rs 20,000";
  console.log(a.slice("please give me Rs ".length))
   var amount = console.log(a.slice(18,24));
   console.log(a.slice(18,20));

   // change the amount data type from string to number int by using parseInt()

  var amount1 =Number.parseInt(a.slice(18));
  console.log(amount1)
  console.log( typeof(amount1))

  



