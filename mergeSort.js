function mergeSort(arr){
	if(arr.length<2){
		return arr
	}
	const middleElement=Math.floor(arr.length/2)
	const leftArray=arr.slice(0,middleElement)
	const rightArray=arr.slice(middleElement)
	return mergeArray(mergeSort(leftArray),mergeSort(rightArray))
}

function mergeArray(arrayLeft, arrayRight) {
	let array = []
	while (arrayLeft.length && arrayRight.length) {
		 if (arrayLeft[0] < arrayRight[0]) {
				array.push(arrayLeft.shift())
		 } else {
				array.push(arrayRight.shift())
		 }
	}
	return [ ...array, ...arrayLeft, ...arrayRight ]
}


const input_array=[76,56,546,4523,68,-78,35,678,324]
console.log(mergeSort(input_array))
