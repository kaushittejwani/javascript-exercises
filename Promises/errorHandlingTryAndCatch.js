 async function harry() {
    setTimeout(() => {
      console.log("first settimeout called");
    }, 1000);
    setTimeout(() => {
      console.log("second timeout called");
    }, 2000);
    setTimeout(() => {
      console.log("third settimeout called ");
    }, 3000);
    let harry = await harry;
  }
  try{async function cherry() {
    setTimeout(() => {
      console.log("first settimeout called");
    }, 1000);
    setTimeout(() => {
      console.log("second timeout called");
    }, 2000);
    setTimeout(() => {
      console.log("third settimeout called ");
    }, 3000);
    let cherry = await cherry;
  }
}catch{
    console.log("error aa gya 2sri baar")
}
  try{async function gillerary() {
    setTimeout(() => {
      console.log("first settimeout called");
    }, 1000);
    setTimeout(() => {
      console.log("second timeout called");
    }, 2000);
    setTimeout(() => {
      console.log("third settimeout called ");
    }, 3000);
    let gillerary = await gillerary;
  }}catch{
     console.log("3sra error aa gya")
  }
  
  harry();
  gillerary();
  cherry();
//try and catch not worked in scheduld function like settimeout and setinterval