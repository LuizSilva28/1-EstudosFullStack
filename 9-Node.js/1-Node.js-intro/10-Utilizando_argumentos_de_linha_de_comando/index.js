const args = process.argv;

const nameArtguments = [];

process.argv.slice(2).forEach((arg, index, array) => {
	if (arg.startsWith("--")) {
		const argName = arg.slice(2);
		const argValue = array[index + 1];
		nameArtguments[argName] = argValue;
	}
});

console.log("Argumentos Informados: ");
console.log(nameArtguments);
