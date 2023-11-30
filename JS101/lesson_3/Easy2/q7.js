let flintstones = {
  Fred: 0,
  Wilma: 1,
  Barney: 2,
  Betty: 3,
  Bambam: 4,
  Pebbles: 5,
};

let barney = [];
for (const [key, value] of Object.entries(flintstones)) {
  if (key === 'Barney') {
    barney.push(key, value);
  }
}
let barney2 = [];
if (Object.hasOwn(flintstones, 'Barney')) {
  barney2.push('Barney', flintstones.Barney);
}
console.log(barney);
console.log(barney2);

console.log(
  Object.entries(flintstones)
    .filter((pair) => pair[0] === 'Barney')
    .shift()
);
