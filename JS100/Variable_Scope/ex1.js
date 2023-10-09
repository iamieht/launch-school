// What's my value? (Part 1)

console.log(greeting);

var greeting = "Hello world!";

// Solution
// undefined

// All variables in JavaScript declared with var are hoisted, meaning they are virtually moved to the beginning of the scope. This means that our code snippet above behaves like the following one:
// var greeting;
// console.log(greeting);
// greeting = 'Hello world!'
