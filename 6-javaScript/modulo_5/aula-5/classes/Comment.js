class Comment {
    constructor(authorComment, comment){
        this.authorComment = authorComment;
        this.comment = comment;
        this.createdAt = new Date()
    }
    addComment(comment){
        this.comment.push(comment);
    }
}

module.exports = Comment;