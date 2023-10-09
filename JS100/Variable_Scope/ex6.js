// What's my value? (Part 6)
let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

// Solution: false
// The variable b declared on line 2 and the variable b declared on line 5 in the body of the if statement have the same name, but they are two different variables. Important to note is that the b that we reference on line 8 refers to the variable declared on line 2. This is because the scope of b declared on line 5 is the body of the if statement, and it is not accessible in any outer scope.
