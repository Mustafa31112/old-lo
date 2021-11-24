// const assertArraysEqual = function(arrayOne, arrayTwo) {
//   console.log(eqArrays(arrayOne, arrayTwo) === true ? "✅" : "🛑");
// };

// // Compare each element of the two arrays in order
// // Determine if true or false
// // If all true, return true
// // If at least one is false, return false
// const eqArrays = function(arrayOne, arrayTwo) {
//   if (arrayOne.length !== arrayTwo.length) {
//     return false;
//   }
  
//   for (let i = 0; i < arrayOne.length; i++) {
//     if (arrayOne[i] !== arrayTwo[i]) {
//       return false;
//     }
//   }
//   return true;
// };

const eqArrays = require("./eqArrays");

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;