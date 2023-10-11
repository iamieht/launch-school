// Write a function that checks whether or not a particular destination is included within destinations, without using the built-in method Array.prototype.includes().
let destinations = [
  "Prague",
  "London",
  "Sydney",
  "Belfast",
  "Rome",
  "Aruba",
  "Paris",
  "Bora Bora",
  "Barcelona",
  "Rio de Janeiro",
  "Marrakesh",
  "New York City",
];

// Code

function contains(str, array) {
  for (let idx = 0; idx < array.length; idx++) {
    if (str === array[idx]) {
      return true;
    }
  }

  return false;
}

// Example
console.log(contains("Barcelona", destinations)); // true
console.log(contains("Nashville", destinations)); // false
