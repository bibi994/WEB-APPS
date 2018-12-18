const displayList = (post) => {
    const $ulElement = $(".posts");
    const $li = $("<li>");
    $li.text(post.getData());
    $ulElement.append($li);
}
const displayAllPosts = (posts) => {
    const $ulElement = $(".posts");
    for (let i = 0; i < posts.length; i++) {
        const $li = $("<li>");
        $li.text(posts[i].getData());
        $ulElement.append($li);
    }
}
export {
    displayList,
    displayAllPosts
};