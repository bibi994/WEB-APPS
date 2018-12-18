
const button = document.querySelector("#button");
button.addEventListener("click", function () {

    var request = new XMLHttpRequest();

    request.open("GET", "https://dog.ceo/api/breeds/image/random", true);
    request.send();

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {

            var data = JSON.parse(request.responseText);
            var from = data.message;
            var img = document.createElement("img");
            img.src = from;
            document.querySelector('.container').appendChild(img);
        } else {

        }
    };

});