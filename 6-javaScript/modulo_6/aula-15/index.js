// REJEITANDO PROMISES EM FUNÇÕES ASYNC

async function asyncSum(a, b) {
	if (typeof a !== "number" || typeof b !== "number") {
		return Promise.reject("arguments for some must be of type number");
	}
	return a + b;
}

function asyncSubtract(a, b) {
	if (typeof a !== "number" || typeof b !== "number") {
		return Promise.reject("arguments for subtraction must be of type number");
	}
	return a - b;
}

const sumResult = asyncSum(59, null);
const subtractResult = asyncSubtract(50, 33);

Promise.all([sumResult, subtractResult])
	.then((results) => {
		console.log(results);
	})
	.catch((error) => {
		console.log(error);
	});
