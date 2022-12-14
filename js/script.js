'use strict';

// Консольное приложение практика ч1 - Задание не выполнено самостоятельно :(

const number0Films = prompt('Сколько фильмов вы уже посмотрели?', '');


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

if (personalMovieDB.count < 10) {
   console.log('Просмотренно довольно мало фильмов'); 
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
   console.log('Вы класический зритель');
} else if ( personalMovieDB.count >= 30) {
   console.log('Вы киноман :)');
} else {
   console.log('Произошла ошибка');
}

console.log(personalMovieDB);

// переписать эти циклы ещё 2 способами

// let i = 0;

// while ( i < 2) {
//    const a = prompt('Какой последний фильм вы смотрели?', ''),
//          b = prompt('Какую оценку вы бы поставили фильму?', '');
//       i++;
//    if ( a != null && b != null && a != '' && b != '' && a.length < 50) {        
//          personalMovieDB.movies[a] = b;                                         
//          console.log('Успешно');                                                
//    } else {
//       console.log('Не успешно. Ошибка');
//       i--;
//    }  

// }

// console.log(personalMovieDB);


// let j = 0;

// do {
//    const a = prompt('Какой последний фильм вы смотрели?', ''),
//          b = prompt('Какую оценку вы бы поставили фильму?', '');
//          j++;

//          if ( a != null && b != null && a != '' && b != '' && a.length < 50) {       
//             personalMovieDB.movies[a] = b;                                         
//             console.log('Успешно');                                                
//       } else {
//          console.log('Не успешно. Ошибка');
//          i--;
//       }   
// } while ( j < 2);

// console.log(personalMovieDB);








let num = 20;

function showFirstMesaage (text) {
   console.log(text);
   num = 10;
}

showFirstMesaage('10'+'1000');
console.log(num);

function calc(a,b) {
   return (a + b);
}

console.log(calc(4,3));

function ret() {
   let num = 'test Misha';
   return num;
}

const test = ret();
console.log(test);


function calcs (a, b, c, d) {
   return (a + b - (c + d));
}

console.log(calcs(10, 10, 5, 10));

const logger = function () {
   console.log('Hello');
};

logger();

const calcTwo = (a, b, c , d) => a + b - (c + d);

console.log(calcTwo(10, 10, 5, 10));




//First Task
const userName = 'антон';

function sayHello (name) {
   console.log(`Привет ${name}`);
}

sayHello(userName);

//-----------------//

//Twotask
let numMass = [];

function returnNeighboringNumbers(num) {
   return [num - 1, num, num + 1];
}
returnNeighboringNumbers(5);


numMass = returnNeighboringNumbers(5);
console.log(numMass);








const arr = [3, 5, 8, 16, 20, 23, 50];
let result = [];

for (let i = 0; i < arr.length; i++) {
   

}



console.log(result);
console.log(arr);

/* Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
Для определения типа данных используйте typeof();
Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ] */

//  let data = [ 10, 20, 'Shopping', 40, 'Homework' ];

 for ( let i = 0; i <= data.length; i++) {
   if (typeof (data[i]) === 'number') {
      data[i] = data[i] * 2;
   } else if (typeof (data[i]) === 'string') {
      data [i] = `${data[i]} - done`;
   }
 }

 console.log(data);


 /* Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ] */



const datas = [5, 10, 'Shopping', 20, 'Homework'];
const results = [];


    for (let i = 1; i <= datas.length; i++) {
        results[i - 1] = datas[datas.length - i]
    }

console.log(results);



const userHelloName = 'Hello Misha!';

console.log(userHelloName.slice(0,5));  // Выведет слово Hello




