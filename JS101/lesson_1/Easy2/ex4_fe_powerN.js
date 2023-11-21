// Problem
// Using the multiply() function from the "Multiplying Two Numbers" problem, write a function that computes the power to the nth of its argument

// Input
// - Number
// - Number: power

// Output
// - Number

// Examples / Test Case
console.log(powerN(5, 2) === 25); // logs true
console.log(powerN(2, 2) === 4); // logs true
console.log(powerN(3, 4) === 81); // logs true

// Data Structures
// - Number

// Algorithm
// - Declare a function powerN(num, power)
// - Return the invokation of multiply(num, num)

// Code
function multiply(num1, num2) {
  return num1 * num2;
}

function powerN(num, power) {
  return multiply(num, 1) ** power;
}
