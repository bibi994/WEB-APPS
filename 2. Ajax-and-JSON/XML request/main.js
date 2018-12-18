const inputValue = document.querySelector("#input").value;

const button = document.querySelector("#button");
button.addEventListener("click", function () {

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", "./bit.xml", true);
    xmlhttp.send();

    xmlhttp.onload = function () {
        var xmlDoc = xmlhttp.responseXML;
        var from = xmlDoc.querySelector("city").textContent;
        var print = document.querySelector("#print");
        print.textContent = from;
    }
});