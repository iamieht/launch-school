// Write three different ways to remove all of the elements
// from the following array:
let numbers = [1, 2, 3, 4];

// 1st way
let length = numbers.length;
for (let idx = 0; idx < length; idx++) {
  numbers.pop();
}

console.log(numbers);

// 2nd way
numbers = [1, 2, 3, 4];
numbers.splice(0, numbers.length);
console.log(numbers);

// 3rd way
numbers = [1, 2, 3, 4];
numbers.length = 0;
console.log(numbers);
