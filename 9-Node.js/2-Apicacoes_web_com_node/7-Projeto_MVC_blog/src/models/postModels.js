let posts = [
	{
		id: "1",
		title: "Teste1",
		content: "Lore ipsum...",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		id: "2",
		title: "Teste2",
		content: "Lore ipsum...",
		createdAt: new Date(),
		updatedAt: new Date(),
	},
];

// POst { id, title, content, createAt, updatadAt }

const postModel = {
	getAllPosts() {
		return posts;
	},

	getPostById(id) {
		return posts.find((post) => post.id === id);
	},

	createPost(title, content) {
		const post = {
			id: Date.now().toString(),
			title: title,
			content: content,
			createdAt: new Date(),
			updatedAt: new Date(),
		};
		return post;
	},

	savePost(post) {
		posts.unshift(post);
	},

	updatePost(id, updatePost) {
		const index = posts.findIndex((post) => post.id === id);
		posts[index] = {
			...posts[index],
			...updatePost,
			updatedAt: new Date(),
		};
	},

	deletePost(id) {
		console.log(id);
		posts = posts.filter(post => post.id !== id);
	},
};

module.exports = postModel;
