// Casual Pseudocode

// a function that takes two arrays of numbers and returns the result of merging the arrays. The elements of the first array should become the elements at the even indexes of the returned array, while the elements of the second array should become the elements at the odd indexes.

// Declare a function merge that takes two array of numbers as arguments
//  - Declare a result array
//  - Declare an iterator with value 0
//  - Iterate over the first collection
//    - push to the result array the value at the space iterator of the first collection
//    - push to the result array the value at the space iterator of the second collection
//  - return the result array

// Formal Pseudocode
// START
// SET merge(array1, array2)
//  SET iterator = 0
//  SET resultArray
//  WHILE iterator <= length first array
//    resultArray.push(array1[iterator])
//    resultArray.push(array2[iterator])
//  PRINT resultArray

// Code
function merge(array1, array2) {
  let resultArray = [];

  for (let idx = 0; idx < array1.length; idx++) {
    resultArray.push(array1[idx]);
    resultArray.push(array2[idx]);
  }

  return resultArray;
}

// Example
console.log(merge([1, 2, 3], [4, 5, 6])); // => [1, 4, 2, 5, 3, 6]
