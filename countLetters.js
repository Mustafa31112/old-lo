const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    }else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
    }
  };

  // const countLetters = function(stringtoCount,) {
  //   const objectResult = {};
  //   for (constit of stringtoCount) {
  //     if  (item !== " ") {
  //       if (objectResult(item) === undefined) {
  //         objectResult(item) = 1;
  //       }else {
  //         objectResult(item) += 1;
  //       }
  //     }
  //   } return objectResult;
  // };assertEqual(countLetters('LHL'), {});
  // const arg = process.argv[2];
  // console.log(countLetters(arg));

  const countLetters = function(inputString) {
    // Declare an empty object
    const countResults = {};
  
    // Loop through the string
    for (let i = 0; i < inputString.length; i++) {
      if (countResults[inputString[i]]) {
        countResults[inputString[i]] += 1;
      } else {
        if (inputString[i] !== " ") {
          countResults[inputString[i]] = 1;
        }
      }
    }
    return countResults;
  };
  
  console.log(countLetters("L H L"));
  console.log(countLetters("lighthouse in the house"));
  console.log(countLetters("   "));
  
  console.log(assertEqual((countLetters("LHL"))["L"], 2));
  console.log(assertEqual((countLetters("LHL"))["H"], 1));