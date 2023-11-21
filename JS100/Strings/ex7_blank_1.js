// Write a function that checks whether a string is empty or not
function isBlank(str) {
  return str.length === 0;
}

// Examples
console.log(isBlank("mars")); // false
console.log(isBlank("  ")); // false
console.log(isBlank("")); // true
