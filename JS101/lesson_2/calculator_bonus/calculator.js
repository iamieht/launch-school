const READLINE = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt(MESSAGES['welcome']);
let state = true;
while (state) {
  prompt('What is the first number?');
  let firstNumber = READLINE.question();

  while (invalidNumber(firstNumber)) {
    prompt(MESSAGES['invalidNumber']);
    firstNumber = READLINE.question();
  }

  // Ask the user for the second number
  prompt('What is the second number?');
  let secondNumber = READLINE.question();

  while (invalidNumber(secondNumber)) {
    prompt(MESSAGES['invalidNumber']);
    secondNumber = READLINE.question();
  }

  // Ask the user for an operation to perform
  prompt(MESSAGES['operation']);
  let operation = READLINE.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES['invalidOPeration']);
    operation = READLINE.question();
  }

  // Perform the operations and display the result
  let output;
  switch (operation) {
    case '1':
      output = Number(firstNumber) + Number(secondNumber);
      break;
    case '2':
      output = Number(firstNumber) - Number(secondNumber);
      break;
    case '3':
      output = Number(firstNumber) * Number(secondNumber);
      break;
    case '4':
      output = Number(firstNumber) / Number(secondNumber);
      break;
  }

  prompt(`${MESSAGES['result']} ${output}.`);

  prompt(MESSAGES['playAgain']);
  let answer = READLINE.question();

  if (answer === '1') {
    state = true;
  } else {
    state = false;
  }
}
