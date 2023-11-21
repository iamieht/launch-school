const READLINE = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt('Welcome to Calculator!');
let state = true;
while (state) {
  prompt('What is the first number?');
  let firstNumber = READLINE.question();

  while (invalidNumber(firstNumber)) {
    prompt("Hmmm... that doesn't look like a valid number.");
    firstNumber = READLINE.question();
  }

  // Ask the user for the second number
  prompt('What is the second number?');
  let secondNumber = READLINE.question();

  while (invalidNumber(secondNumber)) {
    prompt("Hmmm... that doesn't look like a valid number.");
    secondNumber = READLINE.question();
  }

  // Ask the user for an operation to perform
  prompt(
    'What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide'
  );
  let operation = READLINE.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3 or 4.');
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

  prompt(`The result is ${output}.`);

  prompt('Would you like to perform another calculation?\n1) Yes 2) No');
  let answer = READLINE.question();

  if (answer === '1') {
    state = true;
  } else {
    state = false;
  }
}
