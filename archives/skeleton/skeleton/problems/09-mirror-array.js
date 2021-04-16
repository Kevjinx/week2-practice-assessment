/***********************************************************************
Write a function `mirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples:

Examples:


***********************************************************************/

function mirrorArray(array) {
  // your code here...
  let reverse = [];
  for (let i = array.length -1 ; i >= 0; i--) {
    const el = array[i];
    reverse.push(el);
  }
  return array.concat(reverse);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = mirrorArray;
