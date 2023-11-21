// Problem
// Implement a function repeat that repeats an input string a given number of times

// Input: String
// Output: String

// Explicit rules: cannot use the pre-defined string method repeat()

// Data Structures: String

// Algorithm
// 1. Declare a function repeat with two arguments, a number and a string
// 2. Declare a variable newString
// 2. Loop a given number of times and concatenate in each iteration the string passed as an argument into the variable newString
// 3. Return the newString

// Code
function repeat(num, string) {
  let newString = "";

  for (let count = 1; count <= num; count++) {
    newString += string;
  }

  return newString;
}
// Example
console.log(repeat(3, "ha")); // 'hahaha'
