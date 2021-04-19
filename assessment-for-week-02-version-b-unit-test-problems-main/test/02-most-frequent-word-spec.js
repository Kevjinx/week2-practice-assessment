const assert = require('assert');
const mostFrequentWord = require('../problems/02-most-frequent-word.js')

describe('mostFrequentWord()', function() {
    it('should return the most frequent Word in a sentence string', function() {

        assert.strictEqual(mostFrequentWord("I would like a venti coffee and a scone"), "a")
        assert.strictEqual(mostFrequentWord("Can I have a sandwich with tomatoes and lettuce and bacon"), "and")

    });

    it('In the event of a tie it should return any of the most frequent words', function() {
        const sentence = "How much wood could a wood chuck chuck";

        const result = mostFrequentWord(sentence);

        assert.equal(result === 'wood' || result === 'chuck', true);
    });


});