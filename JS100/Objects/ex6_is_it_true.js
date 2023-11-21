// why "It's true!" is never output.
let obj = {
  num: 42,
  "property name": "string value",
  true: false,
  fun: function () {
    console.log("Harr Harr!");
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}

// All object keys are of type string, so in line 12, the strict equality operator compares a string with the boolean value true, which will always return false, so the line 13 is never executed.
