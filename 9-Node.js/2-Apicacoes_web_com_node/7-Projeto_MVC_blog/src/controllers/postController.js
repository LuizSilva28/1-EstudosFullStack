const postModel = require("../models/postModels.js");

const postController = {
	//GET
	index: (req, res) => {
		const posts = postModel.getAllPosts();

		res.render("index", { posts });
	},

	// GET // posts/:id
	show: (req, res) => {
		const id = req.params.id; // este .id é nome dado na rota "/post/:id" :id, se fosse :postID, então ficaria req.params.postID

		const post = postModel.getPostById(id);
		res.render("post", { post });
	},
};

module.exports = postController;
