// const assertEqual = function(actual, expected) {
//   console.log(assertEqual)
//  };
//  assertEqual("Lighthouse Labs", "Bootcamp");
//  assertEqual(1, 1);
 
//  const name = 'Alice';
//  console.log(`Hello, ${name}!`);

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
console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true

console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false


console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true

console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]))// => false
