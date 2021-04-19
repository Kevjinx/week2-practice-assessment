const assert = require('assert');
const uniqueKeys = require('../problems/01-unique-keys.js');

describe('uniqueKeys()', function(){
    it('should return an array', function(){
        assert.strictEqual(Array.isArray(uniqueKeys({}, {})), true);
    });

    it('the array should contain the values present in the first object but not the second', function(){
        const cat = { legs: 4, favoriteFood: 'catnip', cuteness: 100, sound: 'meow'};
        const human = { legs: 4, favoriteFood: 'sushi', money: 0};
        const test1 = uniqueKeys(cat, human);

        const guitar = { strings: 6, color: 'blue', volume: 11 };
        const drums = { volume: 8, color: 'red'};
        const test2 = uniqueKeys(guitar, drums);

        assert.strictEqual(test1.includes('cuteness'), true);
        assert.strictEqual(test1.includes('sound'), true);
        assert.strictEqual(test1.length, 2);

        assert.strictEqual(test2.includes('strings'), true);
        assert.strictEqual(test2.length, 1);
    });

})