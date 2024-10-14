const Post = require('./Post.js')

class Author {
	constructor(name) {
		this.name = name;
		this.post = [];
	}

	createPost(authorPost, post) {
		const newPost = new Post(authorPost, post);
		this.post.push(newPost);
		return newPost;
	}
}

module.exports = Author;