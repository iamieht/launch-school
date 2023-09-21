# Argument Signatures

How many arguments does the Array.prototype.join() method expect? What happens if you call it with less or more arguments?

Solution:

One optional argument: separator
If called with no arguments, will use commas as the separator, if more than one argument is used, only the first one will be used and the rest will be ignored.

```javascript
let array = ["Bob", "Kevin", "Stuart"];

// separator argument omitted
array.join(); // 'Bob,Kevin,Stuart'

// single separator argument
array.join(", "); // 'Bob, Kevin, Stuart'

// excess argument passed in
array.join(" and ", "also"); // 'Bob and Kevin and Stuart'
```
