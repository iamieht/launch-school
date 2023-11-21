// Problem:
// Implement a function cite that takes two string arguments: the author of the quote and what they said. It then logs the quote to the console

cite("Brendan Eich", "Always bet on JavaScript.");
// logs:
// Brendan Eich said: "Always bet on JavaScript."

function cite(author, said) {
  console.log(`${author} said: "${said}"`);
}
