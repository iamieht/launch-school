// ## Problem (P)

// - Mental Model:
// I need a function that takes one argument of type integer that produces true if the number's absolute value is odd.

// - Input:
// - Number of type Number: positive, negative or zero

// - Output:
// - Boolean: true if it's odd, false otherwise

// - Explicit Rules:
// - Number can be positive, negative or zero
// - Assume that the argument is a valid integer value

// - Implicit Rules:

// ## Examples/Test Cases (E)
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

// ## Data Structures
// - Number (Input)
// - Boolean (Output)

// ## Algorithm
// - Declare a function isOdd with one parameter
// - Convert argument to an absolute value with Math.abs()
// - Create a conditional to check if absolute value % 2 is equal to 0
// - if is false: is odd / otherwise is true
// - return the appropriate Boolean value

// ## Code
function isOdd(num) {
  num = Math.abs(num);

  if (num % 2 === 0) {
    return false;
  }

  return true;
}

// Discussion
// In JavaScript, the remainder operator returns negative results if the number on the left is negative. For that reason, we need to call Math.abs() function and pass the number as the argument, to convert it to a positive value. Then, we can check whether dividing that number by 2 results in a remainder 1 or not.
