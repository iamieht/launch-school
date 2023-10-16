// Problem
// Create a funtion that returns true if a year is a leap year, false otherwise

// Input
// - Year: Number

// Output
// - Boolean

// Explicit rules
// - If year is evenly divisible by 4 and 400 is a leap year
// - If a year is evenly divisible by 100: Not a leap year
// - If a year is evenly divisible by 100 and 400: leap year
// - Rule valid for any year greater than 0.

// Implicit rules
//

// Examples / Test Cases
console.log(isLeapYear(2016)); // true
console.log(isLeapYear(2015)); // false
console.log(isLeapYear(2100)); // false
console.log(isLeapYear(2400)); // true
console.log(isLeapYear(240000)); // true
console.log(isLeapYear(240001)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(1752)); // true
console.log(isLeapYear(1700)); // false
console.log(isLeapYear(1)); // false
console.log(isLeapYear(100)); // false
console.log(isLeapYear(400)); // true
// Data Structures
// - Number
// - Boolean

// Algorithm
// - Declare a function isLeapYear(year)
// - Create an if condition to check:
//    - Year is evenly divisible by 100 and 400: => return true
//    - Year is evenly divisible by 4 and 100: => return false
//    - Year is evenly divisible by 100: => return false
//    - Year is evenly divisible by 4: => return true

// Code
function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}
