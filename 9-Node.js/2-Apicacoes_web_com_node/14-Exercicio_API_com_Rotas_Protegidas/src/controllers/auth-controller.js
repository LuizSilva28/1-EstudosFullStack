const users = require("../models/users");
const jwt = require("jsonwebtoken");

const secretKey = "chave-secrreta-jwt";

module.exports = {
	//POST /auth/register
	register: (req, res) => {
		const { name, email, password } = req.body;
		if (
			typeof name !== "string" ||
			typeof email !== "string" ||
			typeof password !== "string"
		) {
			return res.status(400).json({ message: "invalid fields!" });
		}
		const registeredUser = users.registerUser(name, email, password);
		if (!registeredUser) {
			return res.status(400).json({ message: "Email already in use!" });
		}

		//registeredUser.password = undefined;

		res.status(201).json(registeredUser);
	},

	//POST /auth/register
	login: (req, res) => {
		const { email, password } = req.body;

		if (typeof email !== "string" || typeof password !== "string") {
			return res.status(400).json({ message: "invalid fields!" });
		}

		const user = users.findByEmail(email);
		console.log(user);

		if (!user) return res.status(404).json({ message: "User not found!" });

		if (user.password !== password) {
			return res.status(404).json({ message: "Invalid credentials" });
		}
		const payload = { id: user.id, email: user.email };
		const token = jwt.sign(payload, secretKey, { expiresIn: "1d" });
		res.json({ token });
	},
};
