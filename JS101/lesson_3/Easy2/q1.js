// Given a string, return a new string that replaces
// every occurrence of the word "important" with "urgent":

let advice =
  'Few things in life are as important, really important, as house training your pet dinosaur.';

let newAdvice = advice.replaceAll('important', 'urgent');

console.log(advice);
console.log(newAdvice);
