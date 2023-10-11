// Write some code that iterates through the sub-arrays and logs each vocabulary word to the console.
let vocabulary = [
  ["happy", "cheerful", "merry", "glad"],
  ["tired", "sleepy", "fatigued", "drained"],
  ["excited", "eager", "enthused", "animated"],
];

// Expected output:
// happy
// cheerful
// merry
// etc...

for (let i = 0; i < vocabulary.length; i++) {
  for (let j = 0; j < vocabulary[i].length; j++) {
    console.log(vocabulary[i][j]);
  }
}
