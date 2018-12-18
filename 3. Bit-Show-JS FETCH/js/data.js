import Show from './entities/Show.js';
import Season from './entities/Season.js';
import Person from './entities/Person.js';
let END_POINT = "http://api.tvmaze.com/shows";

const fetchDataHome = () => {
    const fetchHome = fetch(END_POINT)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const shows = []
            data.sort(function (a, b) {
                return b.rating.average - a.rating.average;
            })
            for (let i = 0; i < 50; i++) {
                const name = data[i].name;
                const img = data[i].image.medium;
                const info = data[i].summary;
                const id = data[i].id;
                const show = createShow(id, name, img, info);
                shows.push(show);
            }
            return shows

        });
    return fetchHome;
}

const fetchData = (inputValue) => {
    const newEndPoint = 'http://api.tvmaze.com/search/shows?q=' + inputValue;
    const fetchData = fetch(newEndPoint)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const movies = []
            for (let i = 0; i < data.length; i++) {
                if (data[i].show.image == null) {
                    continue;
                }
                const name = data[i].show.name;
                const img = data[i].show.image.medium;
                const info = data[i].show.summary;
                const id = data[i].show.id;
                const show = createShow(id, name, img, info);
                movies.push(show);
            }
            return movies;
        });
    return fetchData
}


const fetchAll = (id, onSuccess) => {
    END_POINT += `/${id}?embed[]=seasons&embed[]=cast`;
    const fetchAll = fetch(END_POINT)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const name = data.name;
            const image = data.image.original;
            const info = data.summary;
            const seasons = data._embedded.seasons;
            const cast = data._embedded.cast;

            const show = createShow(id, name, image, info);

            const ourSeasons = seasons.map(function (season) {
                return createSeason(season.premiereDate, season.endDate);
            })
            for (let i = 0; i < ourSeasons.length; i++) {
                addSeasonToShow(ourSeasons[i], show);
            }
            for (let i = 0; i < cast.length; i++) {
                const person = createPerson(cast[i].person.name);
                addPersonToShow(show, person);
            }
            return show;
        });
    return fetchAll
}


const createShow = (id, name, image, info) => new Show(id, name, image, info);
const createSeason = (premiereDate, endDate) => new Season(premiereDate, endDate);
const addSeasonToShow = (newSeason, show) => show.seasons.push(newSeason);
const createPerson = (name) => new Person(name);
const addPersonToShow = (show, person) => show.cast.push(person);

export {
    fetchDataHome,
    fetchData,
    fetchAll
}