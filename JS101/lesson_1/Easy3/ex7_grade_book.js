// Problem
// Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

// Input
// - 3 Scores: Number

// Output
// - Letter associated with the average grade (A,B,C,F): String

// Rules
// - Numerical score letter grade list:
// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'

// Examples / Test Case
console.log(getGrade(95, 90, 93)); // "A"
console.log(getGrade(50, 50, 95)); // "D"
// Data Structure
// - Number
// - String

// Algorithm
// - Declare a function getGrade with 3 parameters
//  - Declare a variable avg = 3 parameters / 3
//  - If 90 <= score <= 100: 'A'
//       80 <= score < 90: 'B'
//       70 <= score < 80: 'C'
//       60 <= score < 70: 'D'
//       0 <= score < 60: 'F'
//  - Return the approrpiate letter

// Code
function getGrade(score1, score2, score3) {
  let avg = (score1 + score2 + score3) / 3;

  if (avg < 60) {
    return "F";
  } else if (avg < 70) {
    return "D";
  } else if (avg < 80) {
    return "C";
  } else if (avg < 90) {
    return "B";
  } else if (avg <= 100) {
    return "A";
  } else {
    return "Error: Something went wrong!";
  }
}
