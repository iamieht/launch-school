// Problem
// Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

// Input
// - String

// Output
// - String

// Rules
// - Empty strings are not considered
// - All duplicated characters from the input are collapsed into a single character in the output
// - Strings with one character returns the same character

// Examples / Test Cases
console.log(crunch("ddaaiillyy ddoouubbllee")); // "daily double"
console.log(crunch("4444abcabccba")); // "4abcabcba"
console.log(crunch("ggggggggggggggg")); // "g"
console.log(crunch("a")); // "a"
console.log(crunch("")); // ""

// Data Structures
// - String

// Algorithm
// - Declare a function crunch(str)
// - Convert the string into an array
// - Declare a set and push the elements of the array to the set. No duplicates will be allowed.
// - Join the elements of the set and return it.

// Code
function crunch(str) {
  if (str.length < 2) {
    return str;
  }

  let resultString = str[0];

  for (let idx = 0; idx < str.length; idx++) {
    if (str[idx] !== resultString[resultString.length - 1]) {
      resultString += str[idx];
    }
  }

  return resultString;
}
