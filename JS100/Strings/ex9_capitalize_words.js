// Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.
function capitalize(str) {
  let wordsArray = str.split(" ");
  let capitalizeArray = [];

  wordsArray.forEach((element) => {
    capitalizeArray.push(element[0].toUpperCase() + element.slice(1));
  });

  return capitalizeArray.join(" ");
}

// Example
let words = "launch school tech & talk";
console.log(capitalize(words));
