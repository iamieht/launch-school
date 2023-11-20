// ## Problem (P)

// - Mental Model:
// Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

// - Input: Number
// - Output: All even Numbers from 1 to the input number

// - Explicit Rules:
// - Only log to the console, even numbers

// - Implicit Rules:
// - Odd numbers must be excluded

// ## Examples/Test Cases (E)
evenNumbers(99);
// 2,
// 4,
// 6,
// 8 ...

// ## Data Structures
// - Number

// ## Algorithm
// 1- Define a function evenNumbers with one parameter that'll represent the last number
// 2- Create a for loop that starts from 2 until input provided
// 3- Increase the loop counter in 2, as every number starting from 2 and incremented in 2 will be an even number
// 4. console.log every value of the variable count

// ## Code
function evenNumbers(num) {
  for (let count = 0; count <= num; count += 2) {
    console.log(count);
  }
}
