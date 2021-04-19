const assert = require("assert");

const pushCreator = require("../problems/05-push-creator.js");

describe("pushCreator()", function() {
  it("should return a function", function() {
    const addToArray = pushCreator([2]);
    assert.equal(addToArray instanceof Function, true);
    
  });

  it("the returned function should return the original array with the new elements pushed in", function() {
    
    const addToArray = pushCreator(['hello']);
    assert.deepEqual(addToArray('world'), ['hello', 'world']);

    const addToArray2 = pushCreator([]);
    assert.deepEqual(addToArray2({'hello': 'world'}), [{ 'hello': 'world' }]); 
    assert.deepEqual(addToArray2({'another': 'object' }), [{ 'hello': 'world' }, {'another': 'object'}])
    
    const addToArray3 = pushCreator(['48 65 6c 6c 6f']);
    assert.deepEqual(addToArray3('77 6f 72 6c 64'), ['48 65 6c 6c 6f', '77 6f 72 6c 64']);

    const addToArray4 = pushCreator([2]);
    assert.deepEqual(addToArray4(5), [2, 5]);
    assert.deepEqual(addToArray4(12), [2, 5, 12]);
    assert.deepEqual(addToArray4(31), [2, 5, 12, 31]);
  });
});