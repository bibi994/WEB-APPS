const Post = require("./entities/Post.js");
var loremIpsum = require('lorem-ipsum')
const posts = [];


function createTitle() {
    const title = loremIpsum({
        count: 3,
        units: 'words'
    });

    return title;
}
function createIntro() {
    const intro = loremIpsum({
        count: 2,
        units: 'sentences'
    });
    return intro;
}


for (let i = 0; i < 10; i++) {
    posts.push(new Post(i, createTitle(), createIntro()));
}

module.exports = posts;