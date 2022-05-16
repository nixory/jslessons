"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const theLastUserFilm = prompt('Один из последних просмотренных фильмов?', ''),
      userLastFilmMark = +prompt('На сколько оцените его?', "");
      

personalMovieDB.movies[theLastUserFilm] = userLastFilmMark;


console.log(personalMovieDB);