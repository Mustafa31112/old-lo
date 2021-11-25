const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
for (let i = 0; i < sentence.length; i++)

 if (results[sentence[i]]) {
  results[sentence[i]].push(i)
  }

else results[sentence[i]] = [i] 


  return results;
};


const assertArraysEqual = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
    } else {
      console.log(`✅  Assertion passed: ${array1} === ${array2}`);
    }
 
   }

  };
  console.log(letterPositions("hellol"));