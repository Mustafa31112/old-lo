const assertEqual = require('./assertEqual');

const head = function(array) {
  return array.shift(1);
}
module.exports = head
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
//   }else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
//   }
// };
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");