// What's my value? (Part 10)
const a = {
  firstName: "John",
  lastName: "Doe",
};

function myFunction() {
  a.firstName = "Jane";
}

myFunction();

console.log(a);

// Solution: { firstName: 'Jane', lastName: 'Doe' }
// The fact that const variables cannot be re-assigned does not mean that the value they hold is immutable. As we see in the example above, objects that are assigned to const variables can be mutated.
