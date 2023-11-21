// Problem
// Write a function that returns the middle word of a sentence passed to it as an argument.

// Input
// - String

// Output
// - String

// Explicit rules
// - The input String will always contain at least two words
// - Words are any sequence of non-blank characters

// Implicit rules

// Examples / Test Cases
console.log(middleWord("last word") === "word"); // logs true
console.log(middleWord("Launch School is great!") === "is"); // logs true
console.log(middleWord("Launch School is super great!") === "is"); // logs true
console.log(middleWord("test") === "test"); // logs true
console.log(middleWord("") === ""); // logs true

//  Data Structures
// - String

// Algorithm
// - Declare a function penultimate(string)
// - Split the string into words and store it in an array
// - Return array[array.length - 2]

// Code
function middleWord(string) {
  let array = string.split(" ");

  if (array.length < 2) {
    return array[0];
  } else {
    return array[Math.floor(array.length / 2)];
  }
}
