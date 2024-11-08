/*async function asyncSum(a, b) {
	return a + b;
}

function asyncSubtract(a, b) {
	return a - b;
}

const sumResult = asyncSum(59, 33);
const subtractResult = asyncSubtract(50, 33);
Promise.all([sumResult, subtractResult])
	.then((results) => {
		console.log(results);
	})
	.catch((error) => {
		console.log(error);
	});

*/




const numbers = [4, 9, 5, 13, 77];

async function asyncSquare(x) {
	return x * x;
	
}

Promise.all(numbers.map((number) => asyncSquare(number))).then((squares) => {
	console.log(squares);
});

