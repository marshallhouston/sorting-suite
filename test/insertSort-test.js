const assert = require('chai').assert
const insertSort = require('../lib/insertSort')

describe('insertSort', function() {
  context('with a collection of three numbers', function() {
    it('sorts from least to greatest', function() {
      input = [3, 1, 2]
      assert.deepEqual(insertSort(input), [1, 2, 3])
    })
  })
})
