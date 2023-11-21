// Problem
// Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.

// Input
// - noun: String
// - verb: String
// - adjective: String
// - adverb: String

// Output
// - 3 Strings

// Rules

// Examples / Test Cases
// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// // console output
// Do you walk your blue dog quickly? That's hilarious!
// The blue dog walks quickly over the lazy dog.
// The dog quickly walks up blue Joe's turtle.

// Algorithm
// - Declare a function userInput(question)
//    - Declare a variable rSync = require('readline-sync')
//    - Declare a variable value = rSync.question(question)
// - Declare a madlibs function
//    - Declare a noun variable and invoke userInput('Enter a noun: ')
//    - Declare a verb variable and invoke userInput('Enter a verb: ')
//    - Declare an adjective variable and invoke userInput('Enter and adjective: ')
//    - Declare an adverb variable and invoke userInput('Enter an adverb: ')
//    - Log to the console 3 sentences:
//        - console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilariouos!`)
//        - console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.`)
//        - console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`)

// Code
function userInput(question) {
  let rSync = require("readline-sync");
  let value = rSync.question(question);

  return value;
}

function madlibs() {
  let noun = userInput("Enter a noun: ");
  let verb = userInput("Enter a verb: ");
  let adjective = userInput("Enter and adjective: ");
  let adverb = userInput("Enter an adverb: ");

  console.log(
    `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilariouos!`
  );
  console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.`);
  console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);
}

madlibs();
