// Problem
// Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number. If the argument is a negative number, return it as-is.

// Input
// - Number (negative or positive integer)

// Output
// - Number (negative or positive integer)

// Rules
// - If the argument is a positive number, return the negative of that number
// - If the argument is a negative number, return it as-is.

// Examples / Test Cases
console.log(negative(5)); // -5
console.log(negative(-3)); // -3
console.log(negative(0)); // -0

// Data Structure
// - Number

// Algorithm
// - Declare function negative(num)
// - CHeck if the num is negative, return as-is
// - If number is positive, return negative

// Code
function negative(num) {
  return num < 0 ? num : num * -1;
}

// How to differentiate between 0 and -0?
console.log(Object.is(0, -0));
