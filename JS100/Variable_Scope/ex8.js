// What's my value? (Part 8)
let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);

// Solution: 2
// This is another example of variable shadowing: The parameter a of myFunction shadows the variable a declared on line 1. The a we reference within the function body, on line 4, therefore refers to whatever argument is passed to the function, in our case the value of b, which is then logged.
