const assert = require('chai').assert
const bubbleSort = require('../lib/bubbleSort')

describe('bubbleSort functionality', function() {
  it('can sort an array of 3 numbers from least to greatest', function() {
    input = [3, 1, 2];
    assert.deepEqual(bubbleSort(input), [1, 2, 3]);
  })

  it('can sort 5 elements in an array', function(){
    input = [12, 15, 9, 35, 14];
    assert.deepEqual(bubbleSort(input), [9, 12, 14, 15, 35]);
  })

  it('can sort positive and negative numbers', function(){
    input = [-5, -2, 3, 1, -100, -25];
    assert.deepEqual(bubbleSort(input), [-100, -25, -5, -2, 1, 3]);
  })
})
