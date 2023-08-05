// importing external dependencies
const express = require('express')
const bodyParser = require('body-parser')

// creating a new express application
const app = express()

// configuring the Express application
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// creating the database
const pseudoDatabase = ["abc", "def", "ghi", "jkl"]
const arrayToKeepSorted = [ -120, -250, -25, 0, 285, 150, 10 ]
const number=32


app.post('/', (req, res) => {
	//const newString = req.body.string // fetching the variables

	//pseudoDatabase.push(newString) // hit the database
	// do some calculation
	arrayToKeepSorted.push(number)
	console.log(arrayToKeepSorted)

	arrayToKeepSorted.sort(function(a, b){return a-b})
	console.log(arrayToKeepSorted)
	
	res.send(arrayToKeepSorted)
})

app.get('/', (req, res) => {
	arrayToKeepSorted.push(number)
	console.log(arrayToKeepSorted)
	insertionSort(arrayToKeepSorted)
	console.log(arrayToKeepSorted)
	res.send(arrayToKeepSorted)
})

app.put('/', (req, res) => {
	
	const index = req.body.index
	const newValue = req.body.newValue

	console.log(index, newValue)

	pseudoDatabase[index] = newValue

	res.send(pseudoDatabase)

})

app.delete('/',(req,res)=>{
	const indexVal=req.body.index

	console.log(indexVal)

	insertionSort(arrayToKeepSorted)
	console.log(arrayToKeepSorted)

	arrayToKeepSorted.splice(indexVal,1)
	console.log(arrayToKeepSorted)

	res.send(arrayToKeepSorted)
	
})

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})


function insertionSort(arr){
	let n=arr.length
	for(let i=1;i<n;i++){
		let numberToInsert=arr[i]
		let j=i-1
		while(j>=0&& arr[j]>numberToInsert){
			arr[j+1]=arr[j]
			j=j-1
		}
		arr[j+1]=numberToInsert
	}
	return arr
}

