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
async function cherry() {
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
async function gillerary() {
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
}
harry();
gillerary();
cherry();
