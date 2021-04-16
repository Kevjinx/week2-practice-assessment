let bigArray = ["apple", 14, 32, 100, { name: "party" }, ["pineapple"]];

let [fruit, num1, num2, num3, partyName, fruitArray] = bigArray;

console.log(fruit);
console.log(num1);
console.log(partyName);
console.log(fruitArray);

// Example:
// let [firstEl] = bigArray;
// console.log(firstEl) // prints "apple"