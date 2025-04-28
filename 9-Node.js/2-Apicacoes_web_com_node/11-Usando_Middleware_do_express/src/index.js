const express = require("express");
const middlewareC = require("./middleware/middleware-c");
const uploadMiddlewares = require("./middleware/upload-middleware");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.render("index");
});

app.post("/upload", uploadMiddlewares.single("image"), (req, res) => {
	console.log(req.file, req.body);
	res.json({ message: "Arquivo salvo com sucesso!" });
});

/*
	app.use(middlewareC);
	app.use(function (req, res, next) {
		console.log("Executando o middleware A");
		req.middlewareA = "OK!";
		next();
	});

	unction middlewareB(req, res, next) {
		console.log("Executando o middleware B");
		req.middlewareB = "OK!";
		next();
	}

	app.get("/testeA", (req, res) => {
		console.log({ a: req.middlewareA, b: req.middlewareB });
		throw new Error("Algo de muito errado");

		res.end();
	});
	app.get("/testeB", middlewareC, middlewareB, (req, res) => 	{
		console.log({ a: req.middlewareA, b: req.middlewareB });
		res.end();
	});

	app.use(function (err, req, res, next) {
		if (err) {
			console.log(err.message);
			res.status(400);
			res.json({ message: err.message });
		} else {
			next();
		}
	});
*/
const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Servidor iniciado em http://localhost:${PORT}`);
});
