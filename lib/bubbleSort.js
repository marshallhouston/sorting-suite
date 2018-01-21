function bubbleSort(input) {
  return swapper(input);
}

function swapper(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      var now = array[i];
      var next = array[i + 1];
      array[i + 1] = now;
      array[i] = next;
      swapper(array);
    } else {
      continue;
    }
  }
  return array;
}

module.exports = bubbleSort;
