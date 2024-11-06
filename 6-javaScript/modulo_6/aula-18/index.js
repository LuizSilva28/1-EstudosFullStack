async function calculationIMC(weight, height) {
	if (typeof weight !== "number" || typeof height !== "number") {
		return Promise.reject("Ambos os valores devem ser numeros!");
	}
	return weight / height ** 2;
}

async function callIMCCalculation(weight, height) {
	try {
        console.log("Testando se a primise é assicrona");

		const result = await calculationIMC(weight, height);
		if (result < 18.5) console.log("magreza");
		else if (result <= 25) console.log("normal");
		else if (result <= 30) console.log("sobrepeso");
		else if (result <= 40) console.log("obesidade");
		else if (result > 40) console.log("obesidade grave");
		console.log("1: ", result);
	} catch (error) {
		console.log(`A promise foi rejeitada. Motivo: ${error}`);
	}

	
}

callIMCCalculation(80, 1.82);
		
