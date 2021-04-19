/* Bonus: Currying

    Write a `myCurry(func, numArgs)` method that returns a function that
    collects arguments until the number of arguments collected is equal
    to the original `numArgs` value and then invokes the curried function.

    The returned function collects arguments and returns the same function,
    until the number of arguments is equal to the original numArgs value.

    See examples below:

    const curriedFunc = myCurry(sumFunc, 4);

    curriedFunc(1); // returns a function
    curriedFunc(2); // returns a function
    curriedFunc(3); // returns a function
    curriedFunc(4); // doesn't return a sum until the nth function call ==> 10

*/

const myCurry = (cb, numArgs) => {
  let count = 0;
  let numArr = [];


  return func = (num) => {
    count++;
    numArr.push(num)
    if (count === numArgs) {
      return cb(...numArr)
    }
    if (count < numArgs) {
      return func
    }
  }

}

const sumFunc = (...nums) => nums.reduce((acc, el) => acc + el);
const addition = (num1, num2, num3) => num1 + num2 + num3;
const addiFunc = myCurry(addition, 3)
const curriedFunc = myCurry(sumFunc, 4);

console.log(curriedFunc(1)) // returns a function
console.log(curriedFunc(2)) // returns a function
console.log(curriedFunc(3)) // returns a function
console.log(curriedFunc(4)) // doesn't return a sum until the nth function call ==> 10


console.log(addiFunc(1)) // returns a function
console.log(addiFunc(2)) // returns a function
console.log(addiFunc(3)) // returns a function


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = myCurry;
} catch (e) {
    module.exports = null;
}
