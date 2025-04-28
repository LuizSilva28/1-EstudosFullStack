// Crie uma aplicação de linha de comando usando Node.js para criar e gerenciar anotações rápidas pelo terminal. A aplicação deve possuir um menu de diferentes opções, permitindo criar anotações, listar todas os arquivos salvos, ler uma anotação específica e excluir uma anotação específica. Todas as anotações devem ser salvas em formato .txt dentro de uma pasta “notes” junto com o próprio script principal.

/*1- Função que recebe uma anotação e um título,  e salva ambos em um arquivo .txt, que deve ser criado para a anotação em questão, na pasta notes

    {utilizar o título recebido para nomear os arquivos .txt, usar a função que busca por uma anotação em especifico para checar se já existe uma anotação com o nome especificado}
*/
/*2- Função que busca pelos arquivos .txt criados e exibe o conteúdo dentro deles em ordem 

 { vou precisar buscar os arquivos através do PATH especificando o seu   formato .txt, armazena-los em uma variavel, após isso posso manipular a mesma com os métodos de array para exibilas em ordem }
*/

/*3- Função que busca por uma anotação especifica, recebendo o titulo da anotação

    { vou precisar buscar os arquivos através do PATH especificando o seu o titulo, armazena-lo em uma variavel para exibir 
*/

/*4- Função que exclui uma função especifica, recebendo o nome da anotação
 */

const fs = require("node:fs");
const path = require("node:path");
const readLine = require("node:readline");

const rl = readLine.createInterface({
	input: process.stdin,
	output: process.stdout,
});
menu();
run();

function menu() {
	rl.write("__________ MENU __________\n");
	rl.write("Create note: (1)\n");
	rl.write("Show notes: (2)\n");
	rl.write("Get note: (3)\n");
	rl.write("Delete notes: (4)\n");
}
async function run() {
	try {
		const option = new Promise((resolve, reject) => {
			rl.question("Escolha uma opção: ", (answer) => {
				if (isNaN(answer) || answer < 1 || answer > 4) {
					reject("Digite um numero de 1 á 4");
				}
				resolve(answer);
			});
		});

		const chosenOption = await option;
		switch (chosenOption) {
			case "1":
				try {
					const create = await createNotes();
					rl.write(create);
					const menu = await backMenu();
					rl.write(menu);
				} catch (error) {
					rl.write("Erro ao criar nota: ", error.message);
				}
				break;
			case "2":
				try {
					const search = await searchAllNotes();
					rl.write(search);

					
					rl.write(await backMenu());
				} catch (error) {
					rl.write("Erro ao ler nota: ", error.message);
				}

				break;
			case "3":
				try {
					const title = await new Promise((resolve) => {
						rl.question("Digite o titulo: ", (titleInserted) => {
							resolve(titleInserted);
						});
					});
					searchNotes(title);
					const menu = await backMenu();
					rl.write(menu);
				} catch (error) {
					rl.write("Erro ao criar nota: ", error.message);
				}
				break;
			case "4":
				try {
					const title = await new Promise((resolve) => {
						rl.question("Digite o titulo: ", (titleInserted) => {
							resolve(titleInserted);
						});
					});
					deleteNote(title);
					const menu = await backMenu();
					rl.write(menu);
				} catch (error) {
					rl.write(error.message);
				}

				break;
			default:
				rl.write("\n_______________\n");
				rl.write("\nErro ao executar tarefa\n");
				rl.write("\n_______________\n");
				menu();
				run();
		}
	} catch (error) {
		rl.write("\n_______________\n");
		rl.write("Digite um numero de 1 á 4");
		rl.write("\n_______________\n");
		menu();
		run();
	}
}

async function backMenu() {
	const option = await new Promise((resolve) => {
		rl.question("Voltar ao menu? (1)\nSair? (2)", (value) => {
			resolve(value);
		});
	});
	switch (option) {
		case "1":
			menu();
			run();
			break;
		case "2":
			process.exit(0);
		default:
			rl.write("Digite 1 ou 2, por favor!");
			backMenu();
			break;
	}
}

async function createNotes() {
	const title = await new Promise((resolve) => {
		rl.question("Digite o titulo: ", (titleInserted) => {
			resolve(titleInserted);
		});
	});

	const titleNode = await title;

	const formattedTitle = titleNode.replace(" ", "-");

	const notePath = path.resolve("notes", `${formattedTitle}.txt`);
	const existeNotePath = fs.existsSync(notePath);

	if (!existeNotePath) {
		const note = await new Promise((resolve) => {
			rl.question("Anotação: \n", (noteInserted) => {
				resolve(noteInserted);
			});
		});
		const contentNote = await note;
		const content = `${title}: \n${contentNote},\n\n`;
		fs.writeFile(notePath, content, "utf8", (err) => {
			if (err) {
				//console.log("Erro: ", err.message);
				process.stdout.write(`Erro: ${error.message}`);
				return;
			}
			//console.log("A anotação foi salva com sucesso!");
			rl.write(`Anotação salva com sucesso!`);
		});
	} else {
		rl.write("Já existe uma nota com este titulo!\n");
	}
}

async function searchAllNotes() {
	const absoluteNotePath = path.join(`${__dirname}`, "notes");
	const existeAbsoluteNotePath = fs.existsSync(absoluteNotePath);

	if (existeAbsoluteNotePath) {
		fs.readdir(absoluteNotePath, "utf8", (err, files) => {
			if (err) {
				console.log("Erro: ", err.message);
				return;
			}
			files.forEach((file) => {
				const fileName = path.basename(file, ".txt");
				searchNotes(fileName);
			});
		});
	}
}

async function searchNotes(...titlesOfNotes) {
	titlesOfNotes.forEach((titleNote) => {
		const absoluteNotePath = path.join(
			`${__dirname}`,
			`notes`,
			`${titleNote}.txt`
		);
		try {
			const existeAbsoluteNotePath = fs.existsSync(absoluteNotePath);

			if (!existeAbsoluteNotePath) {
				console.log("Anotação não foi encontrada");
			}
			const data = fs.readFileSync(absoluteNotePath, "utf8");
			console.log(data);
			console.log("__________\n");
		} catch (error) {
			console.log("Erro ao ler o arquivo: ", error);
		}
	});
}

//searchNotes("notes");

async function deleteNote(titleNote) {
	const absoluteNotePath = path.join(
		`${__dirname}`,
		"notes",
		`${titleNote}.txt`
	);
	const existeAbsoluteNotePath = fs.existsSync(absoluteNotePath);

	if (existeAbsoluteNotePath) {
		fs.unlink(absoluteNotePath, (err) => {
			if (err) {
				console.log("Erro ao exluir anotação: ", err.message);
				return;
			}

			console.log("Anotação excluida com sucesso!");
		});
	}
}

//deleteNote("notes");
