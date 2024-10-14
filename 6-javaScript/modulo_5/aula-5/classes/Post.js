const Comment = require('./Comment.js')
class Post {
    constructor(authorPost, post ){
        this.author = authorPost;
        this.post = post;
        this.comment = [];
        this.createdAt = new Date()
    }
    addComment (authorComment, comment){
        const newComment = new Comment(authorComment, comment);
        
        this.comment.push(newComment);
    }
}

module.exports = Post;