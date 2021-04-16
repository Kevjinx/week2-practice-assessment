/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will takes
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/

const duplicateCharMinCount = (string, minCount) => {
  let result = [];
  let arr = string.split('').sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + minCount - 1] === arr[i]) {
      result.push(arr[i])
      i += minCount - 1
    }
  }
  for (let i = 0; i < result.length; i++) {
    const element = result[i];
    if (element === " ") {
      result.splice(i, 1)
      result.push(" ");

    }
  }

  console.log(result);
  return result;
}



duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
