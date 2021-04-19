/***********************************************************************

Write a function  `uniqueKeys` that accepts two objects and returns an array of
keys that are present in the first object but not in both objects.

Examples:

const cat = { legs: 4, favoriteFood: 'catnip', cuteness: 100, sound: 'meow'};
const human = { legs: 4, favoriteFood: 'sushi', money: 0};
uniqueKeys(cat, human); // ['cuteness', 'sound']

const guitar = { strings: 4, volume: 11, color: 'blue' };
const drums = { volume: 8, color: 'red' };
uniqueKeys(guitar, drums); // ['strings']
***********************************************************************/

const uniqueKeys = (obj1, obj2) => {
    // Your code here
  const key1Arr = Object.keys(obj1);
  const key2Arr = Object.keys(obj2);

  return key1Arr.filter(el => {
    if (!key2Arr.includes(el)) {
      return el;
    }
  })



}


const cat = { legs: 4, favoriteFood: 'catnip', cuteness: 100, sound: 'meow'};
const human = { legs: 4, favoriteFood: 'sushi', money: 0};
console.log(uniqueKeys(cat, human)); // ['cuteness', 'sound']

const guitar = { strings: 4, volume: 11, color: 'blue' };
const drums = { volume: 8, color: 'red' };
console.log(uniqueKeys(guitar, drums)); // ['strings']


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = uniqueKeys;