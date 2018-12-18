import Post from './entities/Post.js';

const postsEntities = [];

const fetchPosts = (onSuccess) => {
    fetch("http://127.0.0.1:3000/")
        .then((response) => {
            return response.json();
        })
        .then((posts) => {
            for (let i = 0; i < posts.length; i++) {
                postsEntities.push(new Post(posts[i].id, posts[i].title, posts[i].intro));
            }
            onSuccess(postsEntities);
        });
}

export { fetchPosts };
