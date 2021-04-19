/***********************************************************************
Write a function, `catchZs` that takes in an arbitrary number of words,
and return the total amount of times that the character "z" either starts
or ends a word.

Examples:

catchZs("fizz", "buzz"); // 2
catchZs("time", "to", "go", "to", "the", "zoo"); // 1
catchZs("Zip", "Zap", "Zop"); // 3
catchZs("pizza"); // 0
catchZs("Zzzzzz"); // 2
***********************************************************************/

// Your code here
const catchZs = (...strArr) => {
  let count = 0;

  strArr.forEach(word => {
    word = word.toLowerCase();
    if (word[0] === 'z') {
      count++;
    }
    if (word.endsWith('z')) {
      count++
    }
  });


  console.log(count);
  return count;
}



catchZs("fizz", "buzz"); // 2
catchZs("time", "to", "go", "to", "the", "zoo"); // 1
catchZs("Zip", "Zap", "Zop"); // 3
catchZs("pizza"); // 0
catchZs("Zzzzzz"); // 2
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = catchZs;
} catch(e) {
    module.exports = null;
}