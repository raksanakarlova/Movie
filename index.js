'use strict';

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы посмотрели в этом году?', '');
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы посмотрели в этом году?', '');
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilms() {
	for(let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', ''),
			b = prompt('На сколько вы оцените этот фильм?', '');

		if(a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}
	}
}
rememberMyFilms();

function detectedPersonalLevel() {
	if(personalMovieDB.count < 10) {
		alert('Просмотрено довольно мало фильмов');
	} else if(personalMovieDB.count >= 10 || personalMovieDB.count < 30) {
		alert('Вы классический зритель');
	} else if(personalMovieDB.count > 30){
		alert('Вы киноман');
	} else {
		alert('Произошла ошибка');
	}
}

detectedPersonalLevel();

function showMyDB() {
	if(!personalMovieDB.privat) {
		console.log(personalMovieDB);
	}
}

showMyDB();

function writeYourGenres() {
	for(let i = 1; i <= 3; i++) {
		const a = prompt(`Ваш любимый жанр по номеру ${i}`, '');
		if(a != null || a != '' || a.length < 50) {
			personalMovieDB.genres.push(a);
		} else {
			console.log('Ошибочка емае');
			i--;
		}
	}
}

writeYourGenres();

console.log(personalMovieDB);