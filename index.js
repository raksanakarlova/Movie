'use strict';

const numberOfFilms = prompt('Сколько фильмов вы посмотрели в этом году?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
	b = prompt('На сколько вы оцените этот фильм?', ''),
	c = prompt('Один из последних просмотренных фильмов?', ''),
	d = prompt('На сколько вы оцените этот фильм?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);