// your code here
const hipsterfy = str => {
  let arr = str.split(' ');
  let temp = arr;
  let vowel = 'aeiouAEIOU';
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr[i].length - 1; j >= 0; j--) {
      if (vowel.includes(arr[i][j])) {
        let beg = arr[i].slice(0, j);
        let end = arr[i].slice(j + 1, arr[i].length)
        arr[i] = beg.concat(end);
        break;
      }
    }
  }
  return arr.join(' ');
}


console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'