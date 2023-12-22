// time complexity Big O(n log n)

function mergeSort(array) {
  if (array.length <= 1) return array;
  const mid = Math.floor(array.length / 2);

  return merge(
    mergeSort(array.slice(0, mid)),
    mergeSort(array.slice(mid, array.length))
  );
}

function merge(leftArray, rightArray) {
  let leftIndex = 0,
    rightIndex = 0,
    sortedArray = [];
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      sortedArray.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      sortedArray.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }

  if (leftIndex < rightIndex) sortedArray.push(leftArray.pop());
  else if (leftIndex > rightIndex) sortedArray.push(rightArray.pop());

  return sortedArray;
}

console.log("Sorted array: ", mergeSort([9, 3, 4, 6, 2, 8, 1, 6]));
