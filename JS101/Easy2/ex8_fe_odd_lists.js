// Problem
// Write a function that returns an Array the 2nd, 4th, 6th, and so on elements of an array.

// Input
// - Array

// Output
// - Array

// Rules
// - The values in the returned list should be those values that are in the 2nd, 4th, 6th, and so on elements of the argument Array.

// Examples / Test Cases
console.log(evendities([2, 3, 4, 5, 6])); // logs [3, 5]
console.log(evendities([1, 2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evendities(["abc", "def"])); // logs ['def']
console.log(evendities([123])); // logs []
console.log(evendities([])); // logs []

// Algorithm
// - Declare a function evendities(array)
// - Declare a evensArray = []
// - Loop over the array starting from 1 and incrementing by 2 and pushin each of those elements into evensArray
// - Return evensArray

// Code
function evendities(array) {
  let evensArray = [];
  let idx = 1;

  while (idx < array.length) {
    evensArray.push(array[idx]);
    idx += 2;
  }

  return evensArray;
}
