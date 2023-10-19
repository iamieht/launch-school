// Problem
// Write a function that takes a positive integer, n, as an argument and logs a right triangle whose sides each have n stars.

// Input
// - Positive Integer (Number)

// Output
// - String

// Rules
// - The hypotenuse of the triangle should have one end at the lower-left of the triangle, and the other end at the upper-right.

// Examples / Test Cases
triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********

// Data Structures
// Number and String

// Algorithm
// Declare a function triangle with one parameter (n)
// Declare a variable space initialize with an empty string
// Declare a variable star initialize with "*"
// Iterate n times and with each iteration:
//   - log idx times stars
//   - log n - idx spaces

// Code
function triangle(n) {
  let space = " ";
  let star = "*";
  let idx = 1;

  while (idx <= n) {
    console.log(`${space.repeat(n - idx)} ${star.repeat(idx)}`);
    idx += 1;
  }
}
