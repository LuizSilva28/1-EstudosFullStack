import fs from "node:fs";

export function updateFile(content) {
	const fileName = "meuarquivo.txt";
	const existsFIle = fs.existsSync(`./files/${fileName}`);
	//const path = "./files/";

	if (existsFIle) {
		fs.appendFile(`./files/${fileName}`, content, "utf-8", (error) => {
			if (error) {
				console.log("Erro ao atualizar o conteúdo do arquivo: ", error.message);
			}
			console.log("Arquivo modificado com sucesso ");
		});
	}
}

/*

export function updateFile(newText) {
  return new Promise((resolve, reject) => {
    fs.writeFile("meuarquivo.txt", newText, (error) => {
      if (error) {
        reject("Erro ao modificar arquivo: ", error.message)
      } else {
        resolve()
      }
    })
  })
}
*/

