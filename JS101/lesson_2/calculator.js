// Welcome
console.log('Welcome to Calculator!');
const READLINE = require('readline-sync');

// Ask the user for the first number
let firstNumber = Number(READLINE.question('Introduce first number: '));

// Ask the user for the second number
let secondNumber = Number(READLINE.question('Introduce second number: '));

// Ask the user for an operation to perform
let operation = READLINE.question(
  'Introduce arithmetic operation\n1) Add 2) Subtract 3) Multiply 4) Divide: '
);

// Perform the operation on the two numbers and Print the result to the terminal
switch (operation) {
  case '1':
    console.log(firstNumber + secondNumber);
    break;
  case '2':
    console.log(firstNumber - secondNumber);
    break;
  case '3':
    console.log(firstNumber * secondNumber);
    break;
  case '4':
    console.log(firstNumber / secondNumber);
    break;
  default:
    console.log('Invalid input!');
}
