let num = 5;

function myFunc() {
  console.log(num);
  let num = 10;
}

myFunc();
console.log(num); // => ReferenceError: Cannot access 'num' before initialization