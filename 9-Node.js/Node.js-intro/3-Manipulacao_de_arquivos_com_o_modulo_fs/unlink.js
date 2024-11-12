const { error } = require("node:console");
const fs = require("node:fs");

fs.unlink("arqivo3.txt", (erro) => {
	if (error) {
		console.log("Erro ao excluir o arquivo: ", error.message);
		return;
	}
	console.log("Arquivo excluido com sucesso!");
});
