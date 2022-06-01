"use strict";

 let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};



personalMovieDB.remeberMyFilms =  function () {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = +prompt("На сколько оцените его?", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}

personalMovieDB.remeberMyFilms();

personalMovieDB.detectPersonalLevel = function () {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log('Произошла ошибка');
  }

}

personalMovieDB.detectPersonalLevel();


personalMovieDB.showMyDB = function (hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

personalMovieDB.showMyDB(personalMovieDB.privat);


personalMovieDB.toggleVisibleDB = function() {
  if (personalMovieDB.privat) {

  }
  else{
    personalMovieDB.privat = true;
  }
}
personalMovieDB.toggleVisibleDB();
personalMovieDB.writeYourGenres = function () {
  for(let i=1;i<=3;i++){
    const c = prompt(`Ваш любимый жанр под номером ${i}`);
    personalMovieDB.genres[i-1] = c;
  }
}
personalMovieDB.writeYourGenres();