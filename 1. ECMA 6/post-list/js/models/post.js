class Post {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
    getData() {
        return `${this.title} ${this.description}`;
    }
}

export default Post;