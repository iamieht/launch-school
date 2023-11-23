let num = 5;

function myFunc() {
  num = 10;
}

myFunc();
console.log(num); // => 10

// Why?
// The function body has access to the global scope,
// so the variable num can be modified within the function.