class Movie {
    constructor(title, genre, movieDuration) {
        this.title = title;
        this.genre = genre;
        this.movieDuration = movieDuration;
    }
    getData() {
        return `${this.title}, ${this.movieDuration}min, ${this.genre.getData()}`;
    }
}
export default Movie;