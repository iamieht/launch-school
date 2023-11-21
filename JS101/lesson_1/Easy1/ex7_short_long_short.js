// Problem
// Write a function that takes 2 string arguments, determines the length of the two strings and returns the result of concatenating the shorter string, the longer string and the shorter string once again.

// Input
// - String
// - String

// Output
// - String

// Explicit rules
// - Assume strings are of different lengths

// Implicit rules
// -

// Examples/Test Cases
console.log(shortLongShort("abc", "defgh")); // "abcdefghabc"
console.log(shortLongShort("abcde", "fgh")); // "fghabcdefgh"
console.log(shortLongShort("", "xyz")); // "xyz"

// Data Structures
// - String

// Algorithm
// - Declare a function shortestLongestStr that takes 2 string arguments:
//    - if (string1.length < string2.length) => return object {shortest: string1, longest: string2} and viceversa.
// - Declare a function shortLongShort that takes 2 string arguments
//  - Declare a variable shortest, longest = shortestLongestStr(string1, string2)
//  - return shortest + longest + shortest

function shortestLongestStr(str1, str2) {
  if (str1.length < str2.length) {
    return {
      shortest: str1,
      longest: str2,
    };
  } else {
    return {
      shortest: str2,
      longest: str1,
    };
  }
}

function shortLongShort(str1, str2) {
  const { shortest, longest } = shortestLongestStr(str1, str2);
  return shortest + longest + shortest;
}
