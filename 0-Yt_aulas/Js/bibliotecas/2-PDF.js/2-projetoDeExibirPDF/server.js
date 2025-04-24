const express = require("express");
const path = require("node:path");

const app = express();

// const options = {
// 	extensions: [".js"],
// 	setHeaders: function (res, path, stat) {
// 		res.set("Content-Type", "application/javascript");
// 	},
// };
// const pdfs = {
// 	extensions: [".pdf"],
// 	setHeaders: function (res, path, stat) {
// 		res.set("Content-Type", "application/pdf");
// 	},
// };
// const styles = {
// 	extensions: [".css"],
// 	setHeaders: function (res, path, stat) {
// 		res.set("Content-Type", "text/css");
// 	},
// };

// app.use(express.static("public", options));
// app.use(express.static("public", pdfs));
// app.use(express.static("public", styles));
app.use(express.static("public"));


app.get("/", (req, res) => {
	// res.setHeader("Content-Type", "application/pdf");
	res.sendFile(path.join(__dirname,"index.html"));
});
const PORT = 8080;
app.listen(PORT, () => {
	console.log(`Servidor rodando na port http://localhost:${PORT}`);
});
