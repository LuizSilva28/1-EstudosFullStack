const express = require("express");
const path = require("node:path");
const router = require("./router");
const app = express();

// Config EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Config arquivos estaticos
app.use(express.static("public"));

// Config express para ler dados de formularios
app.use(express.urlencoded({ extended: true }));

app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
	console.log(`Servidor iniciado em http://localhost:${PORT}`)
);
