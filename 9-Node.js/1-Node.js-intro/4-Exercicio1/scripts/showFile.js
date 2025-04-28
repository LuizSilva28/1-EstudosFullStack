import fs from "node:fs";

export function readFile() {
	const fileName = "meuarquivo.txt";
	const existsFIle = fs.existsSync(`./files/${fileName}`);
	if (existsFIle) {
		fs.readFile(`./files/${fileName}`, "utf8", (error, data) => {
			if (error) {
				console.log("Erro ao ler o arquivo: ", error.message);
			}
			console.log(data);
		});
	}
}

/*
 export function showFile() {
  return new Promise((resolve, reject) => {
    fs.readFile("meuarquivo.txt", "utf-8", (error, text) => {
      if (error) {
        reject("Erro ao ler arquivo: ", error.message)
      } else {
        console.log(text)
        resolve()
      }
    })
  })
}
  */
