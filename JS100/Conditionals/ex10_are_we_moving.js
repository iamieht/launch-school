//  Determine what the following code snippet logs.
let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);

// Solution:
//  Step 1 # isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);
//  Step 2 # isMoving = brakingForce < acceleration && (false || true);
//  Step 3 # isMoving = brakingForce < acceleration && true;
//  Step 4 # isMoving = 19 < 24 && true;
//  Step 5 # isMoving = true && true;
//  Step 6 # isMoving = true;

// Do we need the parentheses in the boolean expression or could we also have written the following?
// let isMoving = brakingForce < acceleration && speed > 0 || acceleration > 0;

// Solution: Yes, we do need the parentheses, because && has a higher operator precedence than ||, so:
// brakingForce < acceleration && speed > 0 || acceleration > 0
// is requivalent to:
// (brakingForce < acceleration && speed > 0) || acceleration > 0
