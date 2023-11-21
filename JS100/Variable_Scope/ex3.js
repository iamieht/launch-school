// What's my value? (Part 3)
if (true) {
  let myValue = 20;
}

console.log(myValue);

// Solution
// ReferenceError: myValue is not defined
// Variables declared with let are block scoped. This means that when we declare the variable myValue within a block on line 2, that variable is not accessible outside of the block on line 5, and a ReferenceError is raised.
