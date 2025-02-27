const _ = require('lodash');

const items = [1, [2, [3, [4]]]];

// Flatten the array using lodash's flattenDeep function
const newItems = _.flattenDeep(items);

console.log(newItems); // Output: [1, 2, 3, 4]