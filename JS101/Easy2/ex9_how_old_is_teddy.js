// Problem
// Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 120 (inclusive).

// Input
// - no input

// Output
// - String

// Rules
// - Generate a random number between 20 and 120 (inclusive)

// Examples / Test Case
// Teddy is 69 years old!
// console.log(generateNumber(20, 120));
// console.log(generateNumber(120, 20));
// console.log(generateNumber());
// Data Structures
// - Number
// - String

// Algorithm
// - Declare a function generateNumber(min, max)
// - Declare a variable randomNum that uses Math.random() * max - min + 1 = random number between 0 and 101 and then we add 20, so the min value will be 20 and the max 120.
// - Return the string `Teddy is ${randomNum} years old!

// Code
function generateNumber(min = 0, max = 0) {
  // check the input
  if (min > max) {
    let temp = min;
    min = max;
    max = temp;
  }

  let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNum;
}

console.log(`Teddy is ${generateNumber(20, 120)} years old!`);
