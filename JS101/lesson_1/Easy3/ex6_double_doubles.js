// Problem
// Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; otherwise, return the double number as-is.

// Input
// - Integer

// - Output
// - Integer

// Rules
// - The function returns the number provided multiplies by two unless is a double number
// - Double number: is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers
// - I have to convert the numbers to Strings to be able to determine if they are double numbers

// Examples / Test Cases
console.log(twice(37)); // 74
console.log(twice(44)); // 44
console.log(twice(334433)); // 668866
console.log(twice(444)); // 888
console.log(twice(107)); // 214
console.log(twice(103103)); // 103103
console.log(twice(3333)); // 3333
console.log(twice(7676)); // 7676

// Data Structures
// - Number
// - String

// Algorithm
// - Declare a function isDoubleNumber(number)
//    - Convert the number to a String.
//    - CHeck if the length of the string is even:
//      - If not, then return false
//      - if yes, determined the middle character: string.length / 2
//      - Compare half of the string with the other half. string[0, middleChar] === string[middleChar, string.length - 1]
//      - If they are the same return true, else return false
// - Declare a function twice(number)
//    - If isDoubleNumber(number) then return number, else return number * 2

// Code
function isDoubleNumber(number) {
  let numToStr = String(number);

  if (numToStr.length % 2 === 0) {
    let middleChar = numToStr.length / 2;
    return numToStr.slice(0, middleChar) === numToStr.slice(middleChar)
      ? true
      : false;
  } else {
    return false;
  }
}

function twice(number) {
  if (isDoubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
}
