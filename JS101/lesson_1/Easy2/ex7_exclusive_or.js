// Problem
// write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise.

// Input
// - Any value

// Output
// - Boolean

// Rules
// - we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.
// - Only one of the arguments must be truthy (no both)

// Examples / Test Cases
console.log(xor(5, 0) === true); // true
console.log(xor(false, true) === true); // true
console.log(xor(1, 1) === false); // true
console.log(xor(true, true) === false); // true
// Data Structure
// - Any

// Algorithm
// - Declare a function xor(arg1, arg2)

// Code
function xor(value1, value2) {
  if ((value1 && !value2) || (value2 && !value1)) {
    return true;
  }
  return false;
}
