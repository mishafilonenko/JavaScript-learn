const number0Films = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
   count: number0Films,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

let i = 0;
while ( i < 2 ) {
   const a = prompt('Какой последний фильм вы смотрели?', ''),
         b = prompt('Какую оценку вы бы поставили фильму?', '');
      i++;
   if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('Ура всё верно');
   } else {
      i--;
      console.log('Произошла ошибка');
   }
}

console.log(personalMovieDB);