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



const eqArrays = function (a, b) {
  if (a.length !== b.length) {
    return false 
  }
  for (let i = 0; i < a.length; i++) {
   if (a[i] !== b[i]) {
     return false
   }

  }
return true;
}
// console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true

// console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false


// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true

// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]))// => false


// const eqArrays = require("./eqArrays");

const assertArraysEqual = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
    } else {
      console.log(`✅  Assertion passed: ${array1} === ${array2}`);
    }
 
   }
// if (eqArrays(array1, array2)) {
  //   console.log(`✅  Assertion passed: ${array1} === ${array2}`);
  // } else {
  //   console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
  // }
};

module.exports = assertArraysEqual;

assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true

assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false


assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true

assertArraysEqual(["1", "2", "3"], ["1", "2", 3])// => false