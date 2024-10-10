// app.js
const express = require("express");
const checkListRouter = require("./src/routers/checklist");
require("./config/database.js"); //importa a config do mongoose fora de uma variavel, pois não usaremos ela para mais nada, então assim que iniciarmos o app.js a config devera ser importada

const app = express();
// Middleware para processar JSON no corpo das requisições
app.use(express.json());

// Usar as rotas de usuários
app.use("/checklist", checkListRouter);

// Iniciar o servidor
app.listen(3000, () => {
	console.log(`Servidor rodando na porta 3000`);
});
