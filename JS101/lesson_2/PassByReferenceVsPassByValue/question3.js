function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
  return word;
}

let myWord = 'Hello';
let myOtherWord = changeMyWord(myWord); // => 'Hello'
console.log(myWord); // => 'Hello'
console.log(myOtherWord); // => 'HELLO'