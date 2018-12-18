import * as ui from './ui.js';
import * as data from './data.js'

const init = () => {
    const dataHomePromise = data.fetchDataHome();
    dataHomePromise.then((shows) => {
        onSuccessHome(shows)
    })
    setupEventListeners();
}

const initSingle = () => {
    setupEventListeners();
    const id = fetchLocalStorage();

    data.fetchAll(id)
        .then((show) => {
            onSuccessSingle(show)
        })
}
const fetchLocalStorage = () => localStorage.getItem("id");

const setupEventListeners = () => {
    const $ul = $(".search-ul");
    $("input").on("click", function () {
        $ul.css("display", "block");
    })


    let typingInterval;
    $("input").on('keyup', function () {
        clearTimeout(typingInterval);
        typingInterval = setTimeout(onClickHandler, 500);
    });
    $("input").on('keydown', function () {
        clearTimeout(typingInterval);
    });

}

const onClickHandler = () => {
    const input = ui.collectInput();
    data.fetchData(input).then((show) => {
        onSuccessSearch(show);
    })




}
const onSuccessHome = (data) => {
    ui.displayHome(data);
    $(".card-movie").on('click', function () {
        localStorage.setItem("id", $(this).attr("data-id"));
        window.location.href = "./show.html";
    });
}

const onSuccessSearch = (data) => {
    ui.addToList(data);
    $(".search-li").on("click", function () {
        localStorage.setItem("id", $(this).attr("data-id"));
        window.location.href = "./show.html";
    })
}
const onSuccessSingle = (show) => {
    ui.displaySingle(show);
}

export { init, initSingle };