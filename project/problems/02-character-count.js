/*
    Character count:
    Write a function that takes in a string and returns an object that stores each character's count
    with characters as keys and the number of occurrences as values.

    console.log(characterCount('mississippi')); // prints {m: 1, i: 4, s: 4, p: 2}
    console.log(characterCount('cat')); // prints {c: 1, a: 1, t: 1}
    console.log(characterCount('What time is it?')); // prints {W: 1, h: 1, a: 1, t: 3, ' ': 3, i: 3, m: 1, e: 1, s: 1, '?': 1}

*/

 characterCount = (string) => {

  //loop through sorted arr, condition if same el increment private count for that el, if different el reset private count for new el and add previous el and its private count to obj
  //different approach: create new unique char array to populate obj first and then loop through the string arr
  let obj = {};
  const arr = string.split('');
  const uniqueChar = [...new Set(arr)];

  uniqueChar.forEach(char => {
    obj[char] = 0;
  });

  arr.forEach(char => {
    obj[char]++
  });

  return obj
}


console.log(characterCount('mississippi')); // prints {m: 1, i: 4, s: 4, p: 2}
console.log(characterCount('cat')); // prints {c: 1, a: 1, t: 1}
console.log(characterCount('What time is it?')); // prints {W: 1, h: 1, a: 1, t: 3, ' ': 3, i: 3, m: 1, e: 1, s: 1, '?': 1}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = characterCount;
} catch (e) {
    module.exports = null;
}