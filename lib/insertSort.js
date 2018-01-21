function insertSort(input) {
  for(var i = 0; i < input.length; i++) {
    var toSort = input[i];
    var prevIndex = i - 1;
    while (prevIndex >= 0 && input[prevIndex] > toSort) {
      input[prevIndex + 1] = input[prevIndex];
      prevIndex--;
    }
    input[prevIndex + 1] = toSort;
  }
  return input;
}

module.exports = insertSort;
