// Casual Pseudocode

// a function that takes an array of strings, and returns a string that is all those strings concatenated together

// Declare a function stringConcat that takes an array of strings as an argument
// Declare an iterator to loop over the collection
// Declare a variable output as an empty string that represents the concatenated string
// Iterate through the collection one by one.
//    -  concatenate to the output variable each item of the collection
// Return the output variable

// Formal Pseudocode
// START
//  SET stringConcat([arrayOfStrings])
//    SET iterator = 1
//    SET output = ''
//    WHILE iterator <= lenght og arrayOfStrings
//      output = output + value within arrayOfStrings collection at space "iterator"
//    PRINT output
// END

// Code
function stringConcat(arrayOfStrings) {
  let output = '';

  arrayOfStrings.forEach((element) => {
    output += element;
  });

  return output;
}

// Example
console.log(stringConcat(['a', 'b', 'cd', 'ef', 'g', 'hi']));
