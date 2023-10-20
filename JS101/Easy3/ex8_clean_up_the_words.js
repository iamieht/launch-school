// Problem
// write a function that returns the input string with all of the non-alphabetic characters replaced by spaces.

// Input
// - String with different alphabetic and non-alphabetic characters

// Output
// - String with non-alphabetic characters replaced by spaces

// Rules
// - If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

// Examples / Test Cases
console.log(cleanUp("---what's my +*& line?")); // " what s my line "
console.log(cleanUp("---What's my +*& line?")); // " What s my line "
// Data Structures
// - String
// - Array

// Algorithm
// - Declare a function cleanUp with one parameter
// - Declare variable alphabeticChars = 'abcdefghijklmnopqrstuvwxyz'
// - convert input string into lowercase
// - Declare a arrStr = []
// - Iterate over each element of the string and push to arrStr only those that exist in alphabeticChars. The ones that are not in alphabeticChars replace with an empty space as long as the previous element of the arrStr is not a space.
// - Return the elements of the array join("")

// Code
function cleanUp(str) {
  const ALPHABETICCHARS =
    "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
  let arrayStr = [];

  for (let idx = 0; idx < str.length; idx++) {
    if (ALPHABETICCHARS.includes(str[idx])) {
      arrayStr.push(str[idx]);
    } else {
      if (arrayStr[arrayStr.length - 1] !== " ") {
        arrayStr.push(" ");
      }
    }
  }

  return arrayStr.join("");
}
