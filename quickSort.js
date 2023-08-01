/**
 * Sorts an array of numbers using the quick sort algorithm.
 * @param {number[]} arr - The array of numbers to sort.
 * @returns {number[]} The sorted array.
 */
function quickSort(arr) {
  // Base case: if the array has less than 2 elements, return it
  if (arr.length < 2) {
    return arr;
  }

  // Choose a pivot element
  let pivotElement = arr[arr.length - 1];

  // Create two empty arrays to hold the left and right partitions
  let leftArray = [];
  let rightArray = [];

  // Iterate through the array and add elements to the left or right partition
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivotElement) {
      leftArray.push(arr[i]);
    } else {
      rightArray.push(arr[i]);
    }
  }

  // Recursively sort the left and right partitions
  let sortedLeftArray = quickSort(leftArray);
  let sortedRightArray = quickSort(rightArray);

  // Combine the sorted left and right partitions with the pivot element
  return [...sortedLeftArray, pivotElement,...sortedRightArray];
}

const array=[73,589,67,267,-768,74,65]
console.log(quickSort(array))