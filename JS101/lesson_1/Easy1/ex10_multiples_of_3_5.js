// Problem
// Write a function that computes the sum of all numbers between 1 and the input number (inclusive) that are multiples of 3 and 5.

// Input
// - Number

// Output
// - Number

// Explicit rules
// - Number passed is an integer greater than 1

// Implicit rules
// - A multiple is a number that is evenly divisible by another number

// Examples / Test Cases
console.log(multisum(3)); // 3
console.log(multisum(5)); // 8
console.log(multisum(10)); // 33
console.log(multisum(20)); // 98
console.log(multisum(1000)); // 234168

// Data Structures
// - Number

// Algorithm
// - Declare a function multisum(number)
// - Declare a variable sum = 0;
// - Iterate over the range 1 to number
// - if the number is multiple of 3 or 5 add it to sum
// - Return sum

// Code
function multisum(number) {
  let sum = 0;

  for (let num = 1; num <= number; num++) {
    if (num % 3 === 0 || num % 5 === 0) {
      sum += num;
    }
  }

  return sum;
}
