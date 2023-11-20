// Problem
// Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power.

// Explicit rules
// - Assume Positive integers
// - Do not worry about validating the input.
// - If you want to see what the exact value is, you can use JavaScript's BigInt type by appending an n to end of the number

// Implicit rules

// Input
// - String

// Output
// - Number

// Examples / Test Cases
// ==> Enter the first number:
// 23
// ==> Enter the second number:
// 17
// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 1.4105003956066297e+23

// Data Structure
// - String
// - Number

// Algorithm
// - Declare a function arithmeticInt()
// - Declare a variable rSync = require('readline-sync)
// - Ask for the first number: Let num1 = partseInt(rSync.question('Enter the first number'))
// - Ask for the second number: let num2 =  partseInt(rSync.question('Enter the second number'))
// - log to the console '${num1} + {num2} = ${num1 + num2}
// - log to the console '${num1} - {num2} = ${num1 - num2}
// - log to the console '${num1} * {num2} = ${num1 * num2}
// - log to the console '${num1} / {num2} = ${num1 / num2}
// - log to the console '${num1} % {num2} = ${num1 % num2}
// - log to the console '${num1} ** {num2} = ${num1n ** num2n}

// Code
function arithmeticInt() {
  let rSync = require("readline-sync");
  let num1 = parseInt(rSync.question("Enter the first number: "));
  let num2 = parseInt(rSync.question("Enter the second number: "));

  console.log(`${num1} + ${num2} = ${num1 + num2}`);
  console.log(`${num1} - ${num2} = ${num1 - num2}`);
  console.log(`${num1} * ${num2} = ${num1 * num2}`);
  console.log(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
  console.log(`${num1} % ${num2} = ${num1 % num2}`);
  console.log(`${num1} ** ${num2} = ${num1 ** num2}`);
}

arithmeticInt();
