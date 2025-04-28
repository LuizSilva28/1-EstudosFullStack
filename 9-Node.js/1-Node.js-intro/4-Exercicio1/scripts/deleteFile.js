import fs from "node:fs";

export function deleteFile() {
	const fileName = "meuarquivo.csv";
	const existsFIle = fs.existsSync(`./files/${fileName}`);
	if (existsFIle) {
		fs.unlink(`./files/${fileName}`, (error) => {
            
			if (error) {
				console.log(
					"Falha ao tentar excluir o aquivo: ",
					error.message
				);
				return;
			}
			console.log("Arquivo excluido com seucesso!");
		});
	}
}
/*
    export function deleteFile() {
  return new Promise((resolve, reject) => {
    fs.unlink("meuarquivo.txt", (error) => {
      if (error) {
        console.log("Erro ao excluir o arquivo: ", error.message)
        resolve()
      } else {
        console.log("Arquivo excluído com sucesso!")
        resolve()
      }
    })
  })
}
*/