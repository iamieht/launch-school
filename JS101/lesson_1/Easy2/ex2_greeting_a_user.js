// Problem
// Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.

// Input
// - String

// Output
// - String

// Examples / Test Case
// What is your name? Bob
// Hello Bob.

// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?

// Data Structures
// - String

// Algorithm
// - Declare a function greetingUser(question)
// - Declare a variable rSync = require('readline-sync')
// - Ask for the user name by declaring a name variable = rSync.question('What is your name? )
// - Log to the console 'Hello ${name}' if the user input is name or in uppercase if the user input is name! the string HELLO ${name}. WHY ARE WE SCREAMING?

// Code
function greetingUser() {
  let rSync = require("readline-sync");
  let name = rSync.question(`What is your name? `);

  if (name[name.length - 1] === "!") {
    name = name.slice(0, -1);
    console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
  } else {
    console.log(`Hello ${name}.`);
  }
}

greetingUser();
