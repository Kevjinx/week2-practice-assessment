/***********************************************************************
Write a function using fat arrow syntax, `averageCost` that takes in an array of item
objects, and returns the average cost of all items rounded to the nearest cent with
a dollar sign in front. If no price is given for an item, the cost is one dollar.

Hint: Look up `toFixed()` on MDN

Examples:

const items1 = [
    {item: "tennis ball", cost: 3.32, color: "yellow"},
    {item: "mug", cost: 2.50, size: "medium"},
    {item: "candle", cost: 4.75, scent: "vanilla"},
    {item: "teddy bear", cost: 6.00, color: "brown"}
];

const items2 = [
    {item: "burger", cost: 2.75},
    {item: "fries", size: "small"},  // Default $1
    {item: "soda", flavor: "fanta"}  // Default $1
]

averageCost(items1) // '$4.14'
averageCost(items2) // '$1.58'


***********************************************************************/

const averageCost = (arr) => {
    // Your code here
  let costArr = [];
  arr.forEach(obj => {
    if (obj.cost === undefined) {
      obj.cost = 1;
    }
    costArr.push(obj.cost);
  });
  const sum = costArr.reduce((acc, el) => {
    return acc + el;
  })
  const avg = sum / costArr.length
  const avgCost = '$' + avg.toFixed(2);
  console.log(avgCost);
  return avgCost;

}



const items1 = [
  {item: "tennis ball", cost: 3.32, color: "yellow"},
  {item: "mug", cost: 2.50, size: "medium"},
  {item: "candle", cost: 4.75, scent: "vanilla"},
  {item: "teddy bear", cost: 6.00, color: "brown"}
];

const items2 = [
  {item: "burger", cost: 2.75},
  {item: "fries", size: "small"},  // Default $1
  {item: "soda", flavor: "fanta"}  // Default $1
]

averageCost(items1) // '$4.14'
averageCost(items2) // '$1.58'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = averageCost;
} catch(e) {
    module.exports = null;
}