const express = require("express");
const session = require("express-session");
const path = require("node:path");
const router = require("./routes");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.use(
	session({
		secret: "palavra-chave-secreta",
		resave: false,
		saveUninitialized: true,
		cookie: { secure: false },
	})
);

app.use(router);

app.listen(3000, () => {
	console.log(`Servidor rodando em http://localhost:3000`);
});
