const assert = require('chai').assert
const insertSort = require('../lib/insertSort')

describe('insertSort', function() {
  context('with a collection of three numbers', function() {
    it('sorts from least to greatest', function() {
      input = [3, 1, 2]
      assert.deepEqual(insertSort(input), [1, 2, 3])
    })
  })
  context('with a collection of five numbers', function() {
    it('sorts from least to greatest', function() {
      input = [10, 15, 3, 2, 12]
      assert.deepEqual(insertSort(input), [2, 3, 10, 12, 15])
    })
  })
  context('with positive and negative numbers', function() {
    it('sorts from least to greatest', function() {
      input = [5, -5, 4, -12, -2]
      assert.deepEqual(insertSort(input), [-12, -5, -2, 4, 5])
    })
  })
})
