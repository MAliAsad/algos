// Binary search time complexity Big O(log n)

const array = [1, 9, 4, 6, 12, 16, 19, 13];

const sortedArray = array.sort((a, b) => a - b);

function binarySearch(array, targetValue) {
  const index = Math.ceil((array.length - 1) / 2);
  if (index === 1) return false;

  let value = array[index];
  if (value === targetValue) return true;
  else if (value > targetValue)
    return binarySearch(array.slice(0, index), targetValue);
  else if (value < targetValue)
    return binarySearch(array.slice(index, array.length), targetValue);
}

console.log(binarySearch(sortedArray, 16));
