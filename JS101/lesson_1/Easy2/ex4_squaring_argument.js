// Problem
// Using the multiply() function from the "Multiplying Two Numbers" problem, write a function that computes the square of its argument

// Input
// - Number

// Output
// - Number

// Examples / Test Case
console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

// Data Structures
// - Number

// Algorithm
// - Declare a function square(num)
// - Return the invokation of multiply(num, num)

// Code
function multiply(num1, num2) {
  return num1 * num2;
}

function square(num) {
  return multiply(num, num);
}
