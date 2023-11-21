// Problem
// Build a program that logs when the user will retire and how many more years the user has to work until retirement.

// Input
// - String

// Output
// - String

// Rules
// -

// Examples / Test Cases
// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

// Data Structure
// - String

// Algorithm
// - Create a userInput(question) function
//    - Declare a variable rSync = require('readline-sync')
//    - Capture user's age = parseInt(rSync.question('What is your age? '))
//    - Capture user's retirement = parseInt(rSync.question('At what age would you like to retire?'))
// - Create a function getCurrentYear()
//    - Declare a variable dateNow = Date.now();
//    - Declare a variable currentYear = dateNow.getFullYear()
//    - return currentYear
// - Log to the console:
//    - Calculate retirementYear = ${getCurrentYear} + ${retirement}
//    - console.log(`It's ${getCurrentYear}. You will retire in ${retirementYear}.`)
//    - console.log(`You only have ${retirementYear - currentYear} to go!)

// Code
function userInput(question) {
  let rSync = require("readline-sync");
  let value = rSync.question(question);

  return value;
}

function getCurrentYear() {
  return new Date().getFullYear();
}

function main() {
  let age = parseInt(userInput("What is your age? "));
  let retirement = parseInt(
    userInput("At what age would you like to retire? ")
  );
  let retirementYear = getCurrentYear() + retirement - age;

  console.log(`It's ${getCurrentYear()}. You will retire in ${retirementYear}`);
  console.log(`You have only ${retirement - age} years of work to go!`);
}

main();
