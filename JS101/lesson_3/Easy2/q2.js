function reverse(array) {
  return array.slice().reverse();
}

function sort(array) {
  return [...array].sort((num1, num2) => num2 - num1);
}

let numbers = [1, 2, 3, 4, 5];
let reversedArray = [];

numbers.forEach((number) => {
  reversedArray.unshift(number);
});

console.log(reverse(numbers));
console.log(sort(numbers));
console.log(reversedArray);
console.log(numbers);
