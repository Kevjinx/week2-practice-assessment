const assert = require('assert');

const averageCost = require('../problems/03-average-cost.js');

describe('averageCost()', function() {
  it('should return the average cost of a given set of items', function() {

    const items1 = [
      {item: "tennis ball", cost: 3.32, color: "yellow"},
      {item: "mug", cost: 2.50, size: "medium"},
      {item: "candle", cost: 4.75, scent: "vanilla"},
      {item: "teddy bear", cost: 6.00, color: "brown"}
    ];

    assert.deepStrictEqual(averageCost(items1), "$4.14")

  });

  it('should use default cost of $1 if no cost is given', function() {

    const items2 = [
      {item: "burger", cost: 2.75},
      {item: "fries", size: "small"},
      {item: "soda", flavor: "fanta"}
    ]
    assert.deepStrictEqual(averageCost(items2), "$1.58");

  });

});