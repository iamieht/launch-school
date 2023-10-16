// Problem (Mental Model)
// Write a program to calculate the sum or product of multiple integers greater than 0, depending on the user input.

// Input
// - String: Multiple Integers greater than 0
// - String: Sum or Product

// Output
// - String: represents the sum or product between 1 and the inputed integers

// Explicit Rules
// - Accept multiple integers
// - Accept only integers grater than 0
// - The sum or the product must be decided by the user

// Implicit rules
// - Ask the user to input multiple integers, separated by space
// - Any number less than or equal to 0 must be throw an error
// - Any Float will be parse to Integer

// Examples / Test Cases
// sum: 1 2 3 4 5 => 1 3 6 10 15
// product: 1 2 3 4 5 6 => 1 2 6 24 120 720
// console.log(sum([1, 2, 3, 4, 5]));
// console.log(product([1, 2, 3, 4, 5, 6]));
// Data Structures
// - String: to represent the input/output values
// - Number: to compute the sum or product

// Algorithm
// - Define a function userInput(question) to capture the user input.
//    - Declare a variable rSync = require('readline-sync')
//    - Declare a variable value = rSync.question(question)
//    - return the value
// - Define a function sum(arrayOfNumbers)
//    - Declare a variable arrayTotalSum = []
//    - Create a foor loop to iterate over each element of the array
//    - Create a nested foor loop that starts with 1 all the way to the number that we are iterating over in the array
//    - Collect in the variable totalSum the sum of each iteration
//    - Push the elemennt into the arrayTotalSum
//    - At the end of the loop return the aray arrayTotalSum
// - Define a function product(arrayOfNumbers)
//    - Declare a variable arrayTotalProduct = []
//    - Create a foor loop to iterate over each element of the array
//    - Create a nested foor loop that starts with 1 until num in the array
//    - Multiply each value and store it in totalProduct
//    - Push totalProduct into arraytotalSum
//    - Return arraytotalSum
// - Define a main() function with no arguments
//    - Declare a variable value = userInput('Please enter a list of integers greater than 0, separated by space:'))
//    - Remove empty spaces from the String value.split(" ");
//    - Convert the String into an Array
//    - Declare a variable compute = userInput('Enter "s" to compute the sum, or "p" to compute the product.')
//    - If compute is "s" => invoke sum(array)
//      - Declare a variable totalSum = invoke sum(array)
//      - Loop over the array and check for 0 or negative values, if so, log an error
//      - if not log to the console the value of the array + value of the result
//      - console.log('The sum of the integers between 1 and ${arrayOfInts[idx]} is ${result[idx]}')
//    - If compute is "p" => invoke product(array)
//      - Declare a variable totalProduct = product(array)
//      - Loop over the array and check for 0 or negative values, if so, log an error
//      - if not log to the console the value of the array + value of the result
//      - console.log('The product of the integers between 1 and ${arrayOfInts[idx]} is ${result[idx]}')

// Code
function userInput(question) {
  let rSync = require("readline-sync");
  let value = rSync.question(question);

  return value;
}

function sum(arraOfNumbers) {
  let arrayTotalSum = [];

  for (let idx = 0; idx < arraOfNumbers.length; idx++) {
    let totalSum = 0;
    for (let num = 1; num <= arraOfNumbers[idx]; num++) {
      totalSum += num;
    }

    arrayTotalSum.push(totalSum);
  }

  return arrayTotalSum;
}

function product(arrayOfNumber) {
  let arrayTotalProduct = [];

  for (let idx = 0; idx < arrayOfNumber.length; idx++) {
    let totalProduct = 1;
    for (let num = 1; num <= arrayOfNumber[idx]; num++) {
      totalProduct *= num;
    }

    arrayTotalProduct.push(totalProduct);
  }

  return arrayTotalProduct;
}

function main() {
  let value = userInput(
    "Please enter a list of integers greater than 0, separated by space: "
  );
  value = value.split(" ");
  let arrayOfInts = Array.from(value);

  let compute = userInput(
    'Enter "s" to compute the sum, or "p" to compute the product. '
  );

  if (compute === "s") {
    let result = sum(arrayOfInts);
    for (let idx = 0; idx < arrayOfInts.length; idx++) {
      if (arrayOfInts[idx] <= 0) {
        console.log("Input Error: 0 or negative numbers not allowed");
        return;
      } else {
        console.log(
          `The sum of the integers between 1 and ${arrayOfInts[idx]} is ${result[idx]}`
        );
      }
    }
  } else if (compute === "p") {
    let result = product(arrayOfInts);
    for (let idx = 0; idx < arrayOfInts.length; idx++) {
      if (arrayOfInts[idx] <= 0) {
        console.log("Input Error: 0 or negative numbers not allowed");
        return;
      } else {
        console.log(
          `The product of the integers between 1 and ${arrayOfInts[idx]} is ${result[idx]}`
        );
      }
    }
  } else {
    console.log("Error: Invalid Input");
    return;
  }
}

main();
