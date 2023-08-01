// Function: bubbleSort
// Parameters: arr (an array of elements to be sorted)
// Return: The sorted array using the Bubble Sort algorithm
function bubbleSort(arr) {
	// A variable to keep track of whether any swaps were made during a pass
	let isSwapped;

	// The main loop of Bubble Sort
	// Continue looping until no swaps are made during a pass
	do {
		isSwapped = false;

		// Inner loop to compare adjacent elements and perform swaps if needed
		for (let i = 0; i < arr.length - 1; i++) {
			// If the current element is greater than the next element, swap them
			if (arr[i] > arr[i + 1]) {
				let temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				isSwapped = true; // Set the flag to true, indicating a swap occurred
			}
		}
	} while (isSwapped); // Continue the outer loop if a swap occurred during the inner loop

	// Return the sorted array
	return arr;
}

// Example usage:
let array = [37, 85, 73, 87, 6, 96, 95, 784, 34, 75, 63, 74];
console.log(bubbleSort(array));
