let num = 5;

function myFunc() {
  console.log(num);
  num = 10;
}

myFunc();
console.log(num); // => 5

// The scope of the function logs the value 5 of num
// to the console, then updates the value of the num variable
// to 10 and then logs the value 10 to the console.