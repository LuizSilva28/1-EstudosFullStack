const express = require("express");
const path = require("node:path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

let emails = [];

app.get("/", (req, res) => {
	res.render("register");
});

app.get("/content", (req, res) => {
	res.render("index");
});

app.get("/members", (req, res) => {
	res.render("membersArea", { emails: emails });
});

app.post("/members/delete", (req, res) => {
	const { email } = req.body;

	emails = emails.filter((item) => item !== email);

	res.redirect("/members");
});

app.post("/register", (req, res) => {
	const email = req.body.email;
	emails.push(email);
	res.redirect("/content");
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Servidor funcionando em http://localhost:${PORT}`);
});
