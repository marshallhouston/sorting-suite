function bubbleSort(input) {
  var nums = input;

  return swapper(nums);
}

function swapper(array) {
  var nums = array;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      var now = nums[i];
      var next = nums[i + 1];
      nums[i + 1] = now;
      nums[i] = next;
      swapper(nums);
    } else {
      continue;
    }
  }
  return nums;
}

module.exports = bubbleSort;
