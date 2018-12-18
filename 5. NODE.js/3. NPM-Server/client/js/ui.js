const print = (posts) => {
    for (let i = 0; i < posts.length; i++) {
        const $article = $("<div class='article'>")
        const $h2 = $("<h2>").text(posts[i].title);
        const $p = $("<p>").text(posts[i].intro);
        $article.append($h2);
        $article.append($p);
        $("main").append($article);

    }
}

export { print };