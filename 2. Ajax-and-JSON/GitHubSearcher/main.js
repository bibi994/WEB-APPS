
const $input = $("search");
const $imageDiv = $(".images");
const $button = $("#button");

$button.on("click", searchGit);

function searchGit(){ 

    let input = $input.val();

    var request = $.ajax({
        url: "https://api.github.com/search/users?q=" + input
    });

    request.done(function (data) {
        for (let i = 0; i < data.items.length; i++) {

            $img = $("<img>");
            $img.attr("src", data.items[i].avatar_url);
            $imageDiv.append($img);
        }


    })
};