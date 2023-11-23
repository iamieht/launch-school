const READLINE = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

function calculateLoan(loanAmount, monthlyInterestRate, loanDurationInMonths) {
  let monthlyPayment =
  Number(loanAmount) *
  (monthlyInterestRate /
    (1 - Math.pow(1 + monthlyInterestRate, -Number(loanDurationInMonths))));

  return monthlyPayment;
}

prompt('Welcome to the Loan Calculator!');

// Ask user for loan amount and validate input
prompt('What is the loan amount?');
let loanAmount = READLINE.question();

while (invalidNumber(loanAmount)) {
  prompt("Hmmm... that doesn't look like a valid number.");
  loanAmount = READLINE.question();
}

// Ask the user for the loan term (months) and validate input
prompt('What is the loan term in months?');
let loanDurationInMonths = READLINE.question();

while (invalidNumber(loanDurationInMonths)) {
  prompt("Hmmm... that doesn't look like a valid number.");
  loanDurationInMonths = READLINE.question();
}

// Ask the user for the Annual Percentage Rate (APR) in percentage
prompt('What is the Interest Rate (In %)?');
let annualInterestRate = READLINE.question();

while (invalidNumber(annualInterestRate)) {
  prompt("Hmmm... that doesn't look like a valid number.");
  annualInterestRate = READLINE.question();
}

// Do the loan calculation
let monthlyInterestRate = Number(annualInterestRate) / 100 / 12;

let monthlyPayment = calculateLoan(loanAmount,
  monthlyInterestRate, loanDurationInMonths);

let totalPayments = monthlyPayment * loanDurationInMonths;
let totalInterest = (monthlyPayment * loanDurationInMonths) - loanAmount;

// Display the results: Montlhy Payment / Total Payments / Total Interest
console.log(`Payment Every Month: $${monthlyPayment.toFixed(2)}`);
console.log(
  `Total of ${loanDurationInMonths} Payments: ${totalPayments.toFixed(2)}`
);
console.log(`Total Interest: ${totalInterest.toFixed(2)}`);

// TODO
// - Validate inputs
// - 0% interest rate
// - Move calculation to a function [X]