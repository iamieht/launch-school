const READLINE = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

prompt('Welcome to the Loan Calculator!');

// Ask user for loan amount
prompt('What is the loan amount?');
let loanAmount = READLINE.question();

// Ask the user for the loan term (months)
prompt('What is the loan term in months?');
let loanDurationInMonths = READLINE.question();

// Ask the user for the Annual Percentage Rate (APR) in percentage
prompt('What is the Interest Rate (In %)?');
let annualInterestRate = READLINE.question();

// Do the loan calculation
let monthlyInterestRate = Number(annualInterestRate) / 100 / 12;

let monthlyPayment =
  Number(loanAmount) *
  (monthlyInterestRate /
    (1 - Math.pow(1 + monthlyInterestRate, -Number(loanDurationInMonths))));

let totalPayments = monthlyPayment * loanDurationInMonths;
let totalInterest = (monthlyPayment * loanDurationInMonths) - loanAmount;

// Display the results: Montlhy Payment / Total Payments / Total Interest
console.log(`Payment Every Month: $${monthlyPayment.toFixed(2)}`);
console.log(
  `Total of ${loanDurationInMonths} Payments: ${totalPayments.toFixed(2)}`
);
console.log(`Total Interest: ${totalInterest.toFixed(2)}`);
