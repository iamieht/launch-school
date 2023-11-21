// - Mental Model:
// Create a program that asks the user the following:
// 1- Input type: Meters or Feet
// 2- To input the length and the width of a room
// The program will log the area of the room in the original input type (meter or feet) and in parenthesis the conversion to the other unit

// Input
// 1- Typeof unit: meters or feet
// 2- Length and Width

// Output
// 1- String with the area of the room
// 2- Original unit type (meter or feet) and in parenthesis the secondary unit after conversion

// Explicit rules
// - To capture user input use method readlineSync.prompt
// - 1 square meter = 10.7639 square feet
// - Area = lentgh * width

// Implicit Rules:
// - Area should be rounded to 2 decimal places
// - Input will be of type String, so must be converted to Number

// ## Examples/Test Cases (E)
// Enter the unit of measurement you will like to use? Meters (1) / Feet (2):
// Enter the length of the room in meters/feet:
// 10
// Enter the width of the room in meters/feet:
// 7
// The area of the room is 70.00 square meters (753.47 square feet).

// ## Data Structures
// - String: input/output values
// - Number: calculate the area

// ## Algorithm
// 1- Define a function userInput(question) to capture the user input with the method readlineSync.prompt. Should have one parameter that represents the question to the user.
// 2- Define a main function with no parameters that will call all the other functions:
// 3- Ask for the input of unit of measurement
// 4- Create either a variable for meters or a variable for feet and ask for tghe length/width in the respective unit.
// 5- Define a helper function calculateArea(length, width);
// 6- Return the area by using the area formula = length * width
// 7- Declare a variable area and invoke the calculateArea to get the area value.
// 8- Define a function squareMetersTwoFeet(meters) to do the area conversion.

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

// Code

function userInput(question) {
  let rSync = require("readline-sync");
  let answer = Number(rSync.question(question));

  return answer;
}

function calculateArea(length, width) {
  return (length * width).toFixed(2);
}

function squareMetersToSquareFeet(squareMeters) {
  const SQRMETERS_TO_FEET = 10.7639;

  return (squareMeters * SQRMETERS_TO_FEET).toFixed(2);
}

function squareFeetToSquareMeter(squareFeet) {
  const SQRFEET_TO_METERS = 0.09290304;

  return (squareFeet * SQRFEET_TO_METERS).toFixed(2);
}

function main() {
  let length = 0;
  let width = 0;

  let unit = userInput(
    "Enter the unit of measurement you will like to use? Meters (1) / Feet (2): "
  );

  // Depends on the previous choice, the question will ask for meters or feet

  if (unit === 1) {
    length = userInput("Enter the length of the room in meters: ");
    width = userInput("Enter the width of the room in meters: ");
  } else if (unit === 2) {
    length = userInput("Enter the length of the room in feet: ");
    width = userInput("Enter the width of the room in feet: ");
  } else {
    console.log("Error: Invalid input");
  }

  let area = calculateArea(length, width);

  if (unit === 1) {
    let areaInSquareFeet = squareMetersToSquareFeet(area);
    console.log(
      `The area of the room is ${area} square meters (${areaInSquareFeet} square feet).`
    );
  } else if (unit === 2) {
    let areaInSquareMeters = squareFeetToSquareMeter(area);
    console.log(
      `The area of the room is ${area} square feet (${areaInSquareMeters} square meters).`
    );
  }
}

main();
