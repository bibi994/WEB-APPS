import * as data from './dataModel.js';
import * as ui from './uiModel.js';

const init = () => setupEventHandlers();

const setupEventHandlers = () => {
    const createMovieButton = $("#submitButton");
    createMovieButton.on("click", createMovieHandler);
}

const createMovieHandler = () => {
    const movieObj = ui.collectInputs();
    console.log(movieObj);
    const movie1 = data.createMovie(movieObj);
    data.addMovieToList(movie1);
    ui.createList(movie1);
    ui.resetInputs();

}

export {
    init
}