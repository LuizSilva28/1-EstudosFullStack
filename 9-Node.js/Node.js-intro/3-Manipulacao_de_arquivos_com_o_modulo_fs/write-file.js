const fs = require("node:fs");

const content = "Conteudo do novo arquivo assincrono";

fs.writeFile("./arquivo2.txt", content, "utf-8", (error) => {
	if (error) {
		console.log("Erro ao escrever o arquivo: ", error.message);
		return;
	}
	console.log("Conteudo criado com sucesso de forma assincrona.");
});
/*
try {
	fs.writeFileSync("./arquivo.txt", "Olá, mundo!", "utf-8");
	console.log("Arquivo criado com sucesso!");
} catch (error) {
	console.log("Erro ao escrever o aquivo: ", error.massage);
}
*/
