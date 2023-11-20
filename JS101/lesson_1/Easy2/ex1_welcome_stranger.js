// Problem
// Create a function that takes 2 arguments, an array and an object. The array will contain 2 or more elements that, when combined with adjoining spaces, will produce a person's name. The object will contain two keys, "title" and "occupation", and the appropriate values. Your function should return a greeting that uses the person's full name, and mentions the person's title.

// Input
// - Array: 2 or more elements
// - Object: two keys, "title" and "occupation"

// Output
// - String

// Examples / Test Case
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

// Data Structures
// - Array[el1, el2, eln...]
// - Object: {title: value, occupation: value}
// - String

// Algorithm
// - Declare a function greetings(array, object)
// - Declare a person variable with the values of the array join by spaces
// - let person = array.join(" ");
// - Return the string `Hello, $[person]! Nice to have a ${object.title} ${object.occupation} around.`

// Code
function greetings(array, object) {
  let person = array.join(" ");

  return `Hello, ${person}! Nice to have a ${object.title} ${object.occupation} around.`;
}
