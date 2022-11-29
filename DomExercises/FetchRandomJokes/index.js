const arr = [
  "Spotted on a Laundromat corkboard Please keep clothes on while doing laundry.",
  "I told my girlfriend she drew her eyebrows too high. She seemed surprised.",
  " How do you make a tissue dance? Put a little boogie in it.",
  "President Lincoln was approached by a woman after a political speech… If you were my husband I would poison your tea. Lincoln replied...if you are my wife I’ll gladly drink it.",
  "2.My grandfather has the heart of a lion and a lifetime ban at the zoo.",
  "Have you heard the joke about yoga. Nevermind its a bit of a stretch.",
  "Why should you never play poker at the zoo? Too many cheetahs",
  "What do you call a nose with no body? No body nose",
  "Never confide in a vacuum cleaner. They’re always collecting dirt",
  "Why does snoop Dogg use an umbrella? Fo-Drizzle.",
  "A roman walks into a cafe holds up 2 fingers and gets 5 coffees.",
  "Q: What time is it when the clock strikes 13? A: Time to get a new clock.",
  "What do you call a guy who’s really loud? Mike.",
  "3 unwritten rules of life . 1) 2) 3)",
  "Q:what does a cloud wear under his raincoat ? A:Thunderwear.",
  "Yo momma so dumb, she tried to surf the microwave",
  "Me: Would you like to be the sun in my life? Her: Awww... Yes!!! Me: Good then stay 92.96 million miles away from me",
  "Teacher: How much is a gram? Tyronne: Uhmm, depends on what you need",
  "Why are frogs always so happy? They eat whatever bugs them",
];
//const prompt= require('prompt-sync')({sigint:true})
document.getElementsByClassName("jokes")[0].style.background = "cyan";
document.getElementsByClassName("jokes")[0].style.color = "black";
document.getElementsByClassName("jokes")[0].style.width = "300px";
document.getElementsByClassName("jokes")[0].style.height = "150px";
document.getElementsByClassName("jokes")[0].style.margin = "auto";
document.getElementsByClassName("jokes")[0].style.padding = "auto";
document.getElementsByClassName("jokes")[0].style.alignItems = "center";
document.getElementsByClassName("jokes")[0].style.BorderBox = "3px solid black";

let a = Math.floor(Math.random() * 20);
if (a <= arr.length) {
  document.getElementsByClassName("jokes")[0].innerHTML = arr[a];
} else {
  document.write("u entered wrong number");
}
