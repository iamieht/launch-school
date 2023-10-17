// Problem
// Write a function that returns the next to last word in the String passed to it as an argument.

// Input
// - String

// Output
// - String

// Explicit rules
// - The input String will always contain at least two words
// - Words are any sequence of non-blank characters

// Implicit rules

// Examples / Test Cases
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

//  Data Structures
// - String

// Algorithm
// - Declare a function penultimate(string)
// - Split the string into words and store it in an array
// - Return array[array.length - 2]

// Code
function penultimate(string) {
  let array = string.split(" ");

  return array[array.length - 2];
}
