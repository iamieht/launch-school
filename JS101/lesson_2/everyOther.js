// Casual Pseudocode

// a method that takes an array of integers, and returns a new array with every other element from the original array, starting with the first element.

// Declare a function everyOther that takes an array of integers as an argument
//  - Declare an iterator that starts with the value 1
//  - Declare an output array
//  - Iterate over the integer collection
//    - Add the value of the element of the collection at space iterator to the output array
//    - Increment the iterator by 2
//  - Return the output array

// Formal Pseducode
// START
// SET everyOther(arrayOfIntegers)
//  SET iterator = 1
//  SET output = []
//  WHILE iterator <= length arrayOfIntegers
//    outputArray = arrayOfIntegers[iterator]
//    iterator = iterator + 2
//  PRINT outputArray

// Code
function everyOther(arrayOfIntegers) {
  let outputArray = [];
  let iterator = 0;

  while (iterator <= arrayOfIntegers.length) {
    outputArray.push(arrayOfIntegers[iterator]);
    iterator += 2;
  }

  return outputArray;
}

// Example
console.log(everyOther([1, 4, 7, 2, 5])); // => [1,7,5]
