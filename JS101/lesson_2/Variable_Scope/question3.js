let num = 5;

function myFunc() {
  let num = 10;
}

myFunc();
console.log(num); // => 5

// This logs 5 to the console. The variable num is declared and initialized to 5 on line 1. When the function is executed, however, another variable called num is declared and initialized within the scope of the function. The key thing here is that line 4 is the initialization of a new variable rather than the reassignment of the variable from line 1.