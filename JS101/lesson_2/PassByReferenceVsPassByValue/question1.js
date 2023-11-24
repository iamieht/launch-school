function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
}

let myWord = 'Hello';
changeMyWord(myWord); // => 'Hello'
console.log(myWord); // => 'Hello'