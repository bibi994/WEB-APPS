import Post from './models/post.js'

const storage = {
    listOfPosts: []
}
const API_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";


const fetchData = (onSuccess, onError) => {

    var request = new XMLHttpRequest();
    request.open('GET', API_ENDPOINT, true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            // Success!
            var data = JSON.parse(request.responseText);
            createInstance(data);
            onSuccess();
        } else {
            // We reached our target server, but it returned an error
            onError("Error");
        }
    };

    request.onerror = function () {
        // There was a connection error of some sort
    };

    request.send();

}
const addPost = (post) => storage.listOfPosts.push(post);


const createInstance = (data) => {
    for (let i = 0; i < data.length; i++) {
        const instance = new Post(data[i].title, data[i].body);
        addPost(instance);
    }
}
const getPost = (index) => storage.listOfPosts[index];

const getAllPosts = () => storage.listOfPosts;


export {
    fetchData,
    getPost,
    getAllPosts
};