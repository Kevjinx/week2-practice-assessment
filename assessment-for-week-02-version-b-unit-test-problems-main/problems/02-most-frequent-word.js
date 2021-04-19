/***********************************************************************
Write a function, 'mostFrequentWord'. It will take a string
as an argument and return the word that appears most often. In case of a
tie, you may return any of the words. The string will always have at least
one word. You do not have to consider punctuation.

Examples:

mostFrequentWord("I would like a venti coffee and a scone") // "a"
mostFrequentWord("Can I have a sandwich with tomatoes and lettuce and bacon") // "and"
mostFrequentWord("How much wood could a wood chuck chuck") // "wood" OR "chuck"
***********************************************************************/

const mostFrequentWord = (string) => {
    // Your code here
  let obj = {};
  const strArr = string.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    const word = strArr[i];
    if (obj[word] === undefined) {
      obj[word] = 1;
    } else {
      obj[word]++
    }
  }
  let max = 0;
  let longest = '';
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      longest = key;
    }
  }
  return longest




}

console.log(mostFrequentWord("I would like a venti coffee and a scone")) // "a"
console.log(mostFrequentWord("Can I have a sandwich with tomatoes and lettuce and bacon")) // "and"
console.log(mostFrequentWord("How much wood could a wood chuck chuck")) // "wood" OR "chuck"



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = mostFrequentWord;