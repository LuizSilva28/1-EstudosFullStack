function calculationIMC(weight, height) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof weight || typeof height !== "number") {
				reject("Ambos os valores devem ser numeros!");
			} else if (typeof weight || typeof height === "number") {
				const IMC = weight / (height ** 2);
				resolve(IMC);
			}
		}, 1000 * 2);
	});
}

function callIMCCalculation(weight, height) {
	const result = calculationIMC(weight, height);

	console.log(result);
	result
		.then((result) => {
			if (result < 18.5) {
				console.log("magreza");
			} else if (result >= 18.5 && result <= 24.9) {
				console.log("normal");
			} else if (result >= 25 && result <= 29.9) {
				console.log("sobrepeso");
			} else if (result >= 30 && result <= 39.9) {
				console.log("obesidade");
			} else if (result >= 40) {
				console.log("obesidade grave");
			}
		})
		.catch((err) => {
			console.log(`A promise foi rejeitada. Motivo: ${err}`);
		});

	console.log("Testando se a primise é assicrona");
	setTimeout(() => {
		console.log(result);
	}, 1000 * 3);
}

callIMCCalculation(80, "1.82");
