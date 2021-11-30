// const eqArrays = require("./eqArrays");

// const assertArraysEqual = function(array1, array2) {
//   if (eqArrays(array1, array2)) {
//     console.log(`✅  Assertion passed: ${array1} === ${array2}`);
//   } else {
//     console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
//   }
// };
// module.exports = assertArraysEqual;

const middle = function(array) {
  if (array.length === 1 || array.length === 2 ) {
    return [];
  } //
  if (array.length % 2 === 0 && array.length > 3) {
return [array[Math.ceil(array.length / 2) - 1], array[Math.ceil(array.length / 2)]];
} else {
    let middleIndex = (array.length - 1) / 2;  
    return [array[middleIndex]]
    
  }
}
//Math.ceil
//addd one to middle index 
//



console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

const myObject = {
  a: 6,     
  b: "abc", 
  c: true,  
  d: null,  
};