import { createFile } from "./scripts/createFile.js";

import { readFile } from "./scripts/showFile.js";

import { updateFile } from "./scripts/updateFile.js";
import { deleteFile } from "./scripts/deleteFile.js";

createFile("Conteúdo inicial di arquivo. \nCriado com o modulo fs do Node.js");
/*
readFile();

updateFile("Conteúdo modificado!");

readFile();

deleteFile();*/

/*
    async function start() {
  await createFile("Conteúdo inicial do arquivo\nCriado com o módulo fs do Node.js")
  await showFile()
  console.log("--------------")
  await updateFile("Conteúdo modificado...")
  await showFile()
  console.log("--------------")
  await deleteFile()
}

start()
*/