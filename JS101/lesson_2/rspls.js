// Rock-paper-scissors-lizard-Spock
const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'spock', 'paper', 'lizard', 'scissors'];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function choiceToName(choice) {
  if (choice === 'r') {
    return 'rock';
  } else if (choice === 'sp') {
    return 'spock';
  } else if (choice === 'p') {
    return 'paper';
  } else if (choice === 'l') {
    return 'lizard';
  } else if (choice === 's') {
    return 'scissors';
  }
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}. Computer chose ${computerChoice}`);

  if (
    (choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'rock' && computerChoice === 'lizard') ||
    (choice === 'scissors' && computerChoice === 'paper') ||
    (choice === 'scissors' && computerChoice === 'lizard') ||
    (choice === 'paper' && computerChoice === 'rock') ||
    (choice === 'paper' && computerChoice === 'spock') ||
    (choice === 'lizard' && computerChoice === 'spock') ||
    (choice === 'lizard' && computerChoice === 'paper') ||
    (choice === 'spock' && computerChoice === 'rock') ||
    (choice === 'spock' && computerChoice === 'scissors')
  ) {
    prompt('You won!');
  } else if (
    (choice === 'scissors' && computerChoice === 'rock') ||
    (choice === 'scissors' && computerChoice === 'spock') ||
    (choice === 'paper' && computerChoice === 'scissors') ||
    (choice === 'paper' && computerChoice === 'lizard') ||
    (choice === 'rock' && computerChoice === 'paper') ||
    (choice === 'rock' && computerChoice === 'spock') ||
    (choice === 'lizard' && computerChoice === 'rock') ||
    (choice === 'lizard' && computerChoice === 'scissors') ||
    (choice === 'spock' && computerChoice === 'paper') ||
    (choice === 'spock' && computerChoice === 'lizard')
  ) {
    prompt('Computer won!');
  } else {
    prompt("It's a tie!");
  }

  // let diff = (Number(computerChoice) - Number(choice)) % 5;
  // if (diff < 0) {
  //   diff += 5;
  // }

  // console.log(`diff: ${diff}`);

  // if (diff === 1 || diff === 2) {
  //   prompt('Computer wins!');
  // } else if (diff === 3 || diff === 4) {
  //   prompt('You win!');
  // } else {
  //   prompt("It's a tie!");
  // }
}

while (true) {
  prompt(`Choose one: [r]ock, [sp]ock, [p]aper, [l]izard, [s]cissors`);
  let choice = readline.question();

  while (!['r', 'sp', 'p', 'l', 's'].includes(choice)) {
    prompt('Must choose r, sp, p, l or s');
    choice = readline.question();
  }

  choice = choiceToName(choice);

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt('Would you like to play again? (y/n)');
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt("Please enter 'y' or 'n'");
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}
