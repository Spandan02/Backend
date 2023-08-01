/**
 * Sorts an array of numbers using the insertion sort algorithm.
 * @param {number[]} arr - The array of numbers to sort.
 * @returns {number[]} The sorted array.
 */
function insertionSort(arr) {
  let n = arr.length;

  // Iterate through the array
  for (let i = 1; i < n; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;

    // Move elements to the right until the correct position is found
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the number into the correct position
    arr[j + 1] = numberToInsert;
  }

  return arr;
}

let array=[23,87,76,54,1,99,763]
console.log(insertionSort(array))