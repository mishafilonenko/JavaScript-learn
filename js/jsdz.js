'use strict';

// Консольное приложение практика ч1 - Задание не выполнено самостоятельно :(

let number0Films;

function start () {
   number0Films = prompt('Сколько фильмов вы уже посмотрели?', '');

   while (number0Films == '' || number0Films == null || isNaN(number0Films) ) {
      number0Films = prompt('Сколько фильмов вы уже посмотрели?', '');   
   }
}

start();



const personalMovieDB = {
   count: number0Films,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};


// const a = prompt('Какой последний фильм вы смотрели?', ''),
//       b = prompt('Какую оценку вы бы поставили фильму?', ''),
//       c = prompt('Какой последний фильм вы смотрели?', ''),
//       d = prompt('Какую оценку вы бы поставили фильму?', '');     Эту часть кода мы оптимизировали с помощью цикла фор

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;     

function remeberMyFilms () {
   for ( let i = 0; i < 2; i++) {

      const a = prompt('Какой последний фильм вы смотрели?', ''),
            b = prompt('Какую оценку вы бы поставили фильму?', '');
   
      if ( a != null && b != null && a != '' && b != '' && a.length < 50) {        // здесь мы прописали условие что - ответ на первый вопрос (a) не была нажата кнопка отменна (null),
            personalMovieDB.movies[a] = b;                                         // то же самое и для второго вопроса (b), а так же что что ответ на первый вопрос не пустой и второй
            console.log('Успешно');                                                // записывается пустая строка при нажатии кнопки ok без веденного ответа! а так же чо длина ответа на первый вопрос не длинее 50 символов
      } else {
         console.log('Не успешно. Ошибка');
         i--;
      }
   }
}

remeberMyFilms();


function detectPersonalLevel () {
   if (personalMovieDB.count < 10) {
      console.log('Просмотренно довольно мало фильмов'); 
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Вы класический зритель');
   } else if ( personalMovieDB.count >= 30) {
      console.log('Вы киноман :)');
   } else {
      console.log('Произошла ошибка');
   }
   
}

detectPersonalLevel();


function showMyDB () {
   if (personalMovieDB.privat === false) {
      console.log('done');
      console.log(personalMovieDB);
   } 
}

showMyDB();


function writeYourGenres () {

   for ( let i = 1; i <=3; i++) {

      let genres = prompt(`Ваш любимый жанр под номером ${i}`);
      while ( genres == '' || genres == null) {
         genres = prompt(`Ваш любимый жанр под номером ${i}`);
      }
      personalMovieDB.genres[i - 1] = genres;
   }

}


writeYourGenres();
