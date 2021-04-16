/*
POJOs
1. Label variables as either Primitive vs. Reference

* Boolean
yes) Primitive
no) Reference

* Null
yes) Primitive
no) Reference

* Array
yes) Primitive
no) Reference

* Undefined
yes) Primitive
no) Reference

* Number
yes) Primitive
no) Reference

* Object
yes) Primitive
no) Reference

* Function
yes) Primitive
no) Reference

* String
yes) Primitive
no) Reference
*/

// 2. Identify when to use . vs [] when accessing values of an object
let obj = {"one": 1, "two": 2};
let myKey = "one";
// console.log(obj[myKey]);
// console.log(obj.two);

// 3. Use the obj[key] !== undefined pattern to check if a given variable that contains a key exists in an object
let course = { bootcamp: 'App Academy', track: 'Bootcamp Prep' }

function doesKeyExist(obj, key) {
    return obj[key] !== undefined
}
// console.log(doesKeyExist(course, 'track'));
// console.log(doesKeyExist(course, 'name'));

// 4. Utilize Object.keys and Object.values in a function
function printKeys(object) {
    return Object.keys(object);
}

function printValues(object) {
    return Object.values(object);
}

// console.log(printKeys({dog: "Strelka", dog2: "Belka"}));
// console.log(printValues({ dog: "Strelka", dog2: "Belka" }));

// 5. Iterate through an object using a for in loop
let player = { name: "Lebron", skill: "Basketball" };

for (let key in player) {
    // console.log(key);
    // console.log(player[key])
}
// 6. Define a function that utilizes ...rest syntax to accept an arbitrary number of arguments
function restSum(...otherNums) {
    let sum = 0;
    otherNums.forEach(function (num) {
        sum += num;
    });
    return sum;
}
// console.log(restSum(1,2,3,4,5));
// 7. Use ...spread syntax for Object literals and Array literals
let numArray = [1, 2, 3];
let moreNums = [...numArray, 4, 5, 6]
// console.log(moreNums);

// 8. Destructure an array to reference specific elements
let arr = ['one', 'two', 'three']

let [first, second, third] = arr;
// console.log(first, second, third);

// 9. Destructure an object to reference specific values
let me = {
    name: "Javier",
    instruments: ['piano', 'synth', 'maracas'],
    siblings: {
        brothers: ['Israel'],
        sisters: ['Nayeli']
    }
}

let { instruments } = me;
// console.log(instruments);
// 10. Write a function that accepts an array as an argument and returns an object 
// representing the count of each character in the array
/*
input ['a', 'b', 'c', 'a']
result = {}
el = 'a'
*/
function charCount(inputArr) {
    let res = {};
    inputArr.forEach(function(el) {
        if (res[el] === undefined) {
            res[el] = 1;
        } else {
            res[el] += 1;
        }
    });
    return res;
}

/*
Same solution with .reduce
function charCountReduce(inputArr) {

    let res = inputArr.reduce(function(accum, el) {
        if (!(el in accum)) {
            accum[el] = 1;
        } else {
            accum[el] = accum[el] + 1;
        }
        return accum;
    }, {})
    return res;

}

*/

console.log(charCount([
    'p', 'n', 'e', 'u', 'm', 'o', 'n', 'o',
    'u', 'l', 't', 'r', 'a', 'm', 'i', 'c',
    'r', 'o', 's', 'c', 'o', 'p', 'i', 'c',
    's', 'i', 'l', 'i', 'c', 'o', 'v', 'o',
    'l', 'c', 'a', 'n', 'o', 'c', 'o', 'n',
    'i', 'o', 's', 'i', 's'
]));
