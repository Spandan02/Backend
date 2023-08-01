/**
 * Sorts an array of numbers using the merge sort algorithm.
 * @param {number[]} arr - The array of numbers to sort.
 * @returns {number[]} The sorted array.
 */
function mergeSort(arr) {
  // Base case: if the array has less than 2 elements, return it
  if (arr.length < 2) {
    return arr;
  }

  // Split the array into two halves
  const middleElement = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, middleElement);
  const rightArray = arr.slice(middleElement);

  // Recursively sort the left and right halves
  const sortedLeftArray = mergeSort(leftArray);
  const sortedRightArray = mergeSort(rightArray);

  // Merge the sorted left and right halves
  return mergeArray(sortedLeftArray, sortedRightArray);
}


const input_array=[76,56,546,4523,68,-78,35,678,324]
console.log(mergeSort(input_array))