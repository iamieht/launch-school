// Problem
// Write a function that returns the UTF-16 value of a string passed in as an argument.

// Input
// - String

// Output
// - Number

// Implicit rules
// - The UTF-16 string value is the sum of the UTF-16 values of every char in the string.

// Examples / Test Cases
console.log(utf16Value("Four score")); // 984
console.log(utf16Value("Launch School")); // 1251
console.log(utf16Value("a")); // 97
console.log(utf16Value("")); // 0

// Data Structures
// - String
// - Number

// Algorithm
// - Define a function utf16Value(str)
// - Declare a variable sum = 0
// - Iterate over each element of the string and invoke the method string.charCodeAt() to get the utf-16 value of the char
// - Add the value to sum
// - Return sum

// Code
function utf16Value(str) {
  let sum = 0;

  for (let idx = 0; idx < str.length; idx++) {
    sum += str.charCodeAt(idx);
  }

  return sum;
}
