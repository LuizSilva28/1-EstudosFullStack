const path = require("node:path");

const dir = "src";
const file = "arquivo.js";

const fullPath = path.join( dir, file);
console.log("_______________");
console.log(fullPath);
console.log("_______________");

//const relativePath = path.join(".", dir, file);
//console.log(relativePath);

const relativePath = "../arquivos/relatorio.pdf";
const absolutePath = path.resolve( relativePath);
console.log(absolutePath);
console.log("_______________");

const fileName = path.basename(relativePath);
console.log(fileName);
console.log("_______________");

const ext = path.extname(absolutePath);
console.log(ext);
