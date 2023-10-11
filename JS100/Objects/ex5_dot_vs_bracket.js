let ocean = {};
let prefix = "Indian";

ocean.prefix = "Pacific";

console.log(ocean); // { prefix: 'Pacific' }

let ocean2 = {};
let prefix2 = "Indian";

ocean2[prefix2] = "Pacific";

console.log(ocean2); // { Indian: 'Pacific' }
