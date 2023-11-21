// Mental Model
// Create a tip calculator that prompts for a bill amount and a tip rate. The program must calculate the tip and log the tip and the total amount of the bill to the console. No input validation is required.

// Input
// - String: Bill amount
// - String: Tip rate (%)

// Output
// - Tip amount
// - Bill amount

// Explicit rules
// - Bill amount includes tip amount

// Implicit rules
// - Tip rate represents percentage
// - All input is of type String, so must be converted to Number
// - Amounts represented with 2 decimal points.

// Examples/Test Cases
// Bill: 200 / Tip percentage: 15 => Tip is $30.00 / The total is $230.00
// tipCalculator(200, 15);
// Data Structure
// - String: Input
// - String: Output
// - Number: Computation

// Algorithm
// - Define a function tipCalculator with two parameters: bill and tipRate
// - Declare a variable tipAmount with initial value 0
// - Declare a variable totalAmount with initial value 0
// - Compute the tipAmount = bill * (tipRate / 100)
// - Compute the totalAmount = bill + tipAmount
// - Log to the console via console.log(`The tip is ${tipAmount}
//                                      The total is ${totalAmount}`)
// - Define a function userInput(question) to capture the values of bill and tipRate
// - Declare a variable rSync = require('readline-sync')
// - Declare a variable value to store the user input using the method rSync.question(question)
// - Convert the input to a Number and return the value
// - Declare a function main() with no parameters:
//   - Ask for the bill amount: let bill = userInput('What is the bill? ')
//   - Ask for the tip percentage: let tipRate = userInput('What is the tip percentage? ')
//   - Invoke the function tipCalcualtor(bill, tipRate)

// Code
function tipCalculator(bill, tipRate) {
  let tipAmount = bill * (tipRate / 100);
  let totalAmount = bill + tipAmount;

  console.log(
    `The tip is $${tipAmount.toFixed(2)}\nThe total is $${totalAmount.toFixed(
      2
    )}`
  );
}

function userInput(question) {
  let rSync = require("readline-sync");
  let value = Number(rSync.question(question));

  return value;
}

function main() {
  let bill = userInput("What is the bill? ");
  let tipRate = userInput("What is the tip percentage? ");

  tipCalculator(bill, tipRate);
}

main();
