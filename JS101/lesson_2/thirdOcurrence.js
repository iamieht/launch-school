// Casual Pseudocde
// a function that determines the index of the 3rd occurrence of a given character in a string. For instance, if the given character is 'x' and the string is 'axbxcdxex', the function should return 6 (the index of the 3rd 'x'). If the given character does not occur at least 3 times, return null.

// Declare a function thirdOcurrence with two parameters (char, string)
//  - Declare an iterator with value 0
//  - Declare a variable count with value 0
//  - Iterate over each element of the string
//    - Compare the value of char against the value of the space at iterator
//    - If the value of char is equal to the value of the space at iterator, increment count by 1
//    - If count is equal 3, return the value of the iterator
//    - If count is not equal 3, return null

// Formal Pseudocode

// START
// SET thirdOcurrence(char, string)
//  SET iterator = 0
//  SET count = 0
//  WHILE iterator <= length of string
//    IF char === string[iterator]
//      count = count + 1
//    IF count === 3
//      return iterator
//  PRINT null

// Code
function thirdOccurrence(char, string) {
  let count = 0;

  for (let idx = 0; idx < string.length; idx++) {
    if (char === string[idx]) {
      count += 1;

      if (count === 3) {
        return idx;
      }
    }
  }

  return null;
}
// Example
console.log(thirdOccurrence('x', 'axbxcdxex')); // => 6
console.log(thirdOccurrence('a', 'axbxcdxex')); // => null
