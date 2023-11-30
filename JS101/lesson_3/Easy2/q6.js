let nestedNames = ['Fred', 'Wilma', ['Barney', 'Betty'], ['Bambam', 'Pebbles']];
let names = [].concat(...nestedNames);

let newFlintstones = nestedNames.flat();
console.log(names);
console.log(newFlintstones);
