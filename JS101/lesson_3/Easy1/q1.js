let numbers = [1, 2, 3];
numbers[6] = 5;
console.log(numbers[4]); // undefined
console.log(numbers); // [ 1, 2, 3, <3 empty items>, 5 ]
