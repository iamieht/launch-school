// Problem
// Write a function that takes a year as input and returns the century.

// Input
// - a year: number

// Output
// - A century with the appropriate ending: String

// Rules
// - he return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

// Examples / Tes Cases
console.log(century(2000)); // "20th"
console.log(century(2001)); // "21st"
console.log(century(1965)); // "20th"
console.log(century(256)); // "3rd"
console.log(century(5)); // "1st"
console.log(century(10103)); // "102nd"
console.log(century(1052)); // "11th"
console.log(century(1127)); // "12th"
console.log(century(11201)); // "113th"

// Data Structures
// - Number
// - String

// Algorithm
// - Declare a function century with one parameter year
// - Declare a variable century = Math.ceil(year / 100)
// - Declare a helper function getCenturySufix(century)
//    - If century % 10 < 10:
//    - Cast the century Number to a String
//    - If String.endsWith('1') = 'st'
//    - If String.endsWith('2') = 'nd'
//    - If String.endsWith('3') = 'rd'
//    - else = 'th'
//    - If century > 10 and century < 21:
//      - return 'th'
//    - If century > 21
//      - String.endsWith('1')

function century(year) {
  let century = Math.ceil(year / 100);

  return ordinalSufix(century);
}

function ordinalSufix(century) {
  switch (true) {
    case century % 10 === 1 && century % 100 != 11:
      return century + "st";
    case century % 10 === 2 && century % 100 != 12:
      return century + "nd";
    case century % 10 === 3 && century % 100 != 13:
      return century + "rd";
    default:
      return century + "th";
  }
}
