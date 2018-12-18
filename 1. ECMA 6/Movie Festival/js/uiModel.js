var $title = $("#title");
var $duration = $("#movieDuration");
var $selectedGenre = $("#dropDown");

const collectInputs = () => ({
    title: $title.val(),
    duration: $duration.val(),
    selectedGenre: $selectedGenre.val()
});

const createList = movie => {
    const $moviesOverview = $("#addedMovie");
    const li = $("<li>");
    li.text(movie.getData());
    $moviesOverview.append(li);
}

const resetInputs = () => {
    $title.val("");
    $duration.val("");
    $selectedGenre.val("");
}

export {
    collectInputs,
    createList,
    resetInputs
}