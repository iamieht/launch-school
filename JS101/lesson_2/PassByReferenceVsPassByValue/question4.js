function changeMyWords(words) {
  console.log(words);
  words[0] = 'Hi';
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords); // => ['Hello', 'Goodbye']
console.log(myWords); // => ['Hi', 'Goodbye']