function changeMyWords(words) {
  console.log(words);
  words = ['Hi', 'Goodbye'];
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords); // => ['Hello', 'Goodbye']
console.log(myWords); // => ['Hello', 'Goodbye']