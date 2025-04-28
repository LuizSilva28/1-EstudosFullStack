import { error } from "node:console";
import fs from "node:fs";

export function createFile(content) {
	const fileName = "meuarquivo.txt";

	fs.writeFile(`./files/${fileName}`, content, "utf-8", (error) => {
		if (error) {
			console.log("Erro ao tentar criar o arquivo: ", error);
		}
		console.log("Arquivo criado com sucesso!");
	});
}

/*export function createFile(text) {
  return new Promise((resolve, reject) => {
    fs.writeFile("meuarquivo.txt", text, (error) => {
      if (error) {
        reject("Erro ao escrever arquivo: ", error.message)
      } else {
        resolve()
      }
    })
  })
}*/