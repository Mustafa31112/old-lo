const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    }else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
    }
  };

  const tail = function(arr) {
    const newArr = [...arr];
    if (newArr.length === 1){
      return newArr;
    } else {
      newArr.shift();
      return newArr
    }
  };

  module.exports = tail;
  const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!