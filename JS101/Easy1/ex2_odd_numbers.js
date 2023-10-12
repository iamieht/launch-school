// ## Problem (P)

// - Mental Model:
// Log all odd numbers from 1 to 99 (inclusive) to the console in a separate line

// - Input:
// - a number range from 1 to 99

// - Output:
// - Odd numbers from 1 to 99

// - Explicit Rules:
// - Numbers log to the console must be odd and in a separate line

// - Implicit Rules:
// - Even numbers must no be log

// ## Examples/Test Cases (E)
oddNumbers(99);
// 1
// 3
// 5
// 7 ...

// ## Data Structures
// - Number

// ## Algorithm
// - Create a function oddNumbers with one parameter representing the last number of the number range
// - Define a variable count with an initial value of 1, to hold the first number of value that will be use in the while condition
// - Create a while Loop that loops over the range number from 1 to last number
// - In each iteration log the value of count and increase it by 2, as every other number counting from 1 is going to be odd

// ## Code
function oddNumbers(num) {
  let count = 1;

  while (count <= num) {
    console.log(count);
    count += 2;
  }
}

// ## Further Exploration

let oddNumbersArrow = (num) => {
  for (let count = 1; count <= num; count += 2) {
    console.log(count);
  }
};

// TestCase
oddNumbersArrow(100);
