// ## Problem (P)
// Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

// - Mental Model:
// Create a program that asks the user to input two values, the length and the width of a room in meters and output the area of the room in square meters and square feet.

// - Input:
// - String: length in meters
// - String: width in meters.

// - Output:
// - String: area of the room in meters and square feet.

// - Explicit Rules:
// - The input will be in meters
// - The output in square meters and feet
// - To capture user input use method readlineSync.prompt
// - 1 square meter = 10.7639 square feet
// - Area = lentgh * width

// - Implicit Rules:
// - Area should be rounded to 2 decimal places
// - Input will be of type String, so must be converted to Number

// ## Examples/Test Cases (E)
// Enter the length of the room in meters:
// 10
// Enter the width of the room in meters:
// 7
// The area of the room is 70.00 square meters (753.47 square feet).

// ## Data Structures
// - String: input/output values
// - Number: calculate the area

// ## Algorithm
// 1- Define a function userInput(value) to capture the user input with the method readlineSync.prompt. Should have one parameter that represents what I want from the user. i.e length / width.
// 2- Within the function declare a variable to store the input of the value I want from the user
// 3- Define a function calculateArea(length, width)
// 4- Return the area by using the area formula = length * width
// 5- Define a function metersTwoFeet(meters) to convert meters to feet.
// 6- Declare a variable within the metersTwoFeet function to reprsent the feet
// 7- Calculate the feet using the formula meter * 10.7639 and round to two decimals
// 8- Define a main function with no parameters that will call all the other functions as follows:
//    9- Declare/Initialize a variable length that will store the return value of the function userInput(length)
//    10- Declare/Initialize a variable width that will store the return value of the function userInput(width)
//    11- Calculate the area in meters by declaring/initialize a variable areaInMeters that stores the return value of the function call calculateArea(length, width)
//    12- Declare/initialize a variable lenghtInFeet that stores the input length converted to feet by calling the function metersTwoFeet
//    13- Declare/initialize a variable widthInFeet that stoers the input width converted to feet
//    14- Calculate the area in feet by declaring a variable areaInFeet that stores the return value of the function calculateArea(lengthInFeet, widthInFeet)
//    15- Log to the console the string: The area of the room is ${areaInMeters} (${areaInFeet} square feet).

// ## Code

function userInput(question) {
  let rlSync = require("readline-sync");
  let value = Number(rlSync.question(question));

  return value;
}

function calculateArea(length, width) {
  return (length * width).toFixed(2);
}

function squareMetersToSquareFeet(squareMeters) {
  const SQRMETERS_TO_FEET = 10.7639;

  return (squareMeters * SQRMETERS_TO_FEET).toFixed(2);
}

function main() {
  let length = userInput("Enter the length of the room in meters: ");
  let width = userInput("Enter the width of the room in meters: ");

  let areaInMeters = calculateArea(length, width);
  let areaInFeet = squareMetersToSquareFeet(areaInMeters);

  console.log(
    `The area of the room is ${areaInMeters} square meters (${areaInFeet} square feet)`
  );
}

main();
