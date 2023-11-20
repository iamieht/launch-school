// Problem
// Write a function that takes a non-empty string argument and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

// Input
// - Non-empty String

// Output
// - String

// Rules
// - If the string has an odd length, you should return exactly one character.
// - If the string has an even length, you should return exactly two characters.

// Example / Test Cases
console.log(centerOf("I Love JavaScript")); // "a"
console.log(centerOf("Launch School")); // " "
console.log(centerOf("Launch")); // "un"
console.log(centerOf("Launchschool")); // "hs"
console.log(centerOf("x")); // "x"

// Algorithm
// - Declare a function centerOf(string)
// - Calculate the length of the string
// - If the length % 2 === 1 (odd) => return string.slice(string.length / 2)
// - If the length % 2 === 0 (even) => return string.slice(string.length / 2, string.length / 2 + 1)

// Code
function centerOf(string) {
  lengthStr = string.length;
  strMiddleIdx = lengthStr / 2;

  if (lengthStr % 2 === 0) {
    return string.slice(strMiddleIdx - 1, strMiddleIdx + 1);
  } else {
    return string.slice(strMiddleIdx, strMiddleIdx + 1);
  }
}
