// Problem
// Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

// Input
// - Number

// Output
// - String of 1's and 0's

// Rules
// - The out must begin with a 1
// - The length of the string should match the given integer (input)

// Examples / Test Cases
console.log(stringy(6)); // "101010"
console.log(stringy(9)); // "101010101"
console.log(stringy(4)); // "1010"
console.log(stringy(7)); // "1010101"

// Data Structures
// - Number
// - String

// Algorithm
// - Declare the function stringy(num)
// - Declare a variablle resultString = ''
// - Iterate given integer number of times
// - Concatenate in a resultString either a 1 or a zero (starting with zero)
// - return resultString

// Code
function stringy(num) {
  let resultString = "";
  let count = 0;

  while (count < num) {
    if (resultString.endsWith("1")) {
      resultString += "0";
    } else {
      resultString += "1";
    }

    count += 1;
  }

  return resultString;
}
