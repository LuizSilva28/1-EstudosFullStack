const users = require("../models/users");

module.exports = {
	dashboard: (req, res) => {
		if (!req.session.authenticated) {
			console.log("Tentativa de acessar o dashboard bloqueada");
			return res.redirect("/");
		}
		console.log(req.session.authenticated);
		console.log(req.session.currentUser.username);
		res.render("dashboard", {
			user: req.session.currentUser,
		});
	},
	users: (req, res) => {
		res.render("users", { users });
	},
};
