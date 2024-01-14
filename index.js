'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели в этом году?', '');


const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

if(personalMovieDB.count < 10) {
	alert('Просмотрено довольно мало фильмов');
} else if(personalMovieDB.count >= 10 || personalMovieDB.count < 30) {
	alert('Вы классический зритель');
} else if(personalMovieDB.count > 30){
	alert('Вы киноман');
} else {
	alert('Произошла ошибка');
}

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

console.log(personalMovieDB);