// What is the difference between the following two code snippets?
let counter1 = 0;

while (counter1 > 0) {
  console.log("Woooot!");
  counter1 -= 1;
}

let counter2 = 0;

do {
  console.log("Woooot!");
  counter2 -= 1;
} while (counter2 > 0);

// Solution

// In the first code snippet, nothing will be logged into the console, as the while condition is falsy.

// In the second code snippet, the while condition is evaluated at the end of the code, so the first part of the code, after the do statement, will always be executed, so the string 'Woooot!' will be logged to the console.
