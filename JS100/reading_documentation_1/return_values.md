# Return Values

Consider the following code snippet:

```javascript
let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";

let words = tweet.split(" ");
let isValid = tweet.length < 140;
```

What will the following statements return?

```javascript
typeof tweet; // => 'string'
typeof words; // => 'object'
typeof isValid; // => 'boolean'
Array.isArray(words); // => true
```
