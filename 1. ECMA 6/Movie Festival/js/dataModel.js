import Genre from './models/Genre.js';
import Movie from './models/Movie.js';
const storage = {
    movies: []
}

const createMovie = ({ title, selectedGenre, duration }) => {

    const genre = new Genre(selectedGenre);

    return new Movie(title, genre, duration);
}

const addMovieToList = movie => storage.movies.push(movie);


export {
    createMovie,
    addMovieToList
}