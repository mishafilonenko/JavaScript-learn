'use strict';

// Консольное приложение практика ч1 - Задание не выполнено самостоятельно :(

// const number0Films = prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//    count: number0Films,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false
// };

// const a = prompt('Какой последний фильм вы смотрели?', ''),
//       b = prompt('Какую оценку вы бы поставили фильму?', ''),
//       c = prompt('Какой последний фильм вы смотрели?', ''),
//       d = prompt('Какую оценку вы бы поставили фильму?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;       

// console.log(personalMovieDB);


// вывести значения с масива

const userName = ['Алексей', 'Михаил', 'Аркадий', 'Евгений', 'Артём']; //lenght (длина масива 5, так как у нас в масиве 5 значений.)

console.log(userName.length);

let i = 0;

while (i < userName.length) {
   console.log(userName[i]);
   i++;
}



// const usersName = {
//    nameUser: {
//       nameOne: 'Misha',
//       nameTwo: 'Alex',
//       nameThree: 'Sergei',
//       nameFo: 'Max'
//    }
// };

// let j = 0;

// console.log(usersName.nameUser);

// while ( j < nameUser.length) {
//    console.log(usersName.nameUser);
//    j++;
// }


/* Есть массив Друзей:

var friends = [" Алексей", " Вячеслав", " Григорий", " Настя", " Николай", " Павел", " Любовь", " Егор", " Лэйла"];

С помощью цикла while нужно вывести на экран всех друзей, начиная с Григория и заканчивая Любовью. При условии, что мы видим массив и знаем, как в нём расположены его элементы. */


const friends = [" Алексей", " Вячеслав", " Григорий", " Настя", " Николай", " Павел", " Любовь", " Егор", " Лэйла"];
let k = 2;

while ( k < 7) {
   console.log (friends[k]);
   k++;
}
