// Problem
// Write a function that will take a short line of text, and write it to the console log within a box.

// Input
// - String

// Output
// - a String in the shape of a box with the original input inside.

// Example / Test Cases
logInBox("To boldly go where no one has gone before.");
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+
logInBox("");
// +--+
// |  |
// |  |
// |  |
// +--+

// Data Structures
// - String

// Algorithm
// - Declare a function logInBox(str)
// - log to the console `+--+` The number of hyphens are the lenght of the orignal string + 2
// - log to the console `|` + ` ` times the string length + `|`
// - log to the console `| string. |``
// - - log to the console `|` + ` ` times the string length + `|`
// - log to the console `+--+` The number of hyphens are the lenght of the orignal string + 2

// Code
function logInBox(str) {
  let lengthStr = str.length;
  let hyphen = "-".repeat(lengthStr);
  let space = " ".repeat(lengthStr);

  console.log(`+-${hyphen}-+`);
  console.log(`| ${space} |`);
  console.log(`| ${str} |`);
  console.log(`| ${space} |`);
  console.log(`+-${hyphen}-+`);
}
