// Problem (Mental Model)
// Write a program to calculate the sum or product of an integer greater than 0, depending on the user input.

// Input
// - String: Integer greater than 0
// - String: Sum or Product

// Output
// - String: represents the sum or product between 1 and the inputed integer

// Explicit Rules
// - Accept only integers grater than 0
// - The sum or the product must be decided by the user

// Implicit rules
// - Any number less than or equal to 0 must be throw an error
// - Any Float will be parse to Integer

// Examples / Test Cases
// sum: 5 => 15
// product: 6 => 720

// Data Structures
// - String: to represent the input/output values
// - Number: to compute the sum or product

// Algorithm
// - Define a function userInput(question) to capture the user input.
//    - Declare a variable rSync = require('readline-sync')
//    - Declare a variable value = rSync.question(question)
//    - return the value
// - Define a function sum(num)
//    - Declare a variable totalSum = 0
//    - Create a foor loop that starts with 1 all the way to the number used as an argument to the function
//    - Collect in the variable totalSum the sum of each iteration
//    - At the end of the loop return the value of totalSum
// - Define a function product(num)
//    - Declare a variable totalProduct = 1
//    - Create a foor loop that starts with 1 until num provided as an argument
//    - Multiply each value and store it in totalProduct
//    - Return the value of totalProduct
// - Define a main() function with no arguments
//    - Declare a variable number = parseInt(userInput('Please enter and integer greater than 0:'))
//    - If number is <= 0 I will throw an user input error
//    - Declare a variable compute = userInput('Enter "s" to compute the sum, or "p" to compute the product.')
//    - If compute is "s" => invoke sum(number)
//      - Declare a variable totalSum = invoke sum(number)
//      - console.log('The sum of the integers between 1 and ${number} is ${totalSum}')
//    - If compute is "p" => invoke product(number)
//      - Declare a variable totalProduct = product(number)
//      - console.log('The product of the integers between 1 and ${number} is ${totalProduct}')

// Code
function userInput(question) {
  let rSync = require("readline-sync");
  let value = rSync.question(question);

  return value;
}

function sum(number) {
  let totalSum = 0;

  for (let num = 1; num <= number; num++) {
    totalSum += num;
  }

  return totalSum;
}

function product(number) {
  let totalProduct = 1;

  for (let num = 1; num <= number; num++) {
    totalProduct *= num;
  }

  return totalProduct;
}

function main() {
  let number = parseInt(userInput("Please enter an integer greater than 0: "));

  if (number <= 0) {
    console.log("Error: Invalid Input");
    return;
  }

  let compute = userInput(
    'Enter "s" to compute the sum, or "p" to compute the product. '
  );

  if (compute === "s") {
    let totalSum = sum(number);
    console.log(
      `The sum of the integers between 1 and ${number} is ${totalSum}`
    );
  } else if (compute === "p") {
    let totalProduct = product(number);
    console.log(
      `The product of the integers between 1 and ${number} is ${totalProduct}`
    );
  } else {
    console.log("Error: Invalid Input");
    return;
  }
}

main();
