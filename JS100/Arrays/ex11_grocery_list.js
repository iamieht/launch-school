// Write code that removes the items from 'groceryList' one by one, until it is empty.
let groceryList = [
  "paprika",
  "tofu",
  "garlic",
  "quinoa",
  "carrots",
  "broccoli",
  "hummus",
];

// code.
let groceryListTemp = Array.from(groceryList);
groceryListTemp.forEach((element) => console.log(groceryList.shift()));

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

console.log(groceryList); // []
