'use strict';

// const arr = [11, 14, 4, 2, 3, 5, 6, 8, 9];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum (a , b) {            //Отсортирует числа по возростанию.
//    return a - b;
// }

// for (let i = 0; i < arr.length; i++) {   //Первый способ перебора массива
//    console.log(arr[i]);
// }

// for (let value of arr) {    //Второй способ перебора массива
//    console.log(value); 
// }

// arr.forEach(function (item, i, arr) {     // item - это тот элемент который мы перебираем (это 1, 3 , 5 и тд) {значение каждого элемента}
//    console.log(`${i}:  ${item}  это внутри массива ${arr}`);                                          // i - это номер по порядку.
// });                                       // arr - это сылка на тот массив который мы перебираем (тот же arr) 


// arr.forEach(function (call, calls) {
//    console.log(`${calls}: в нём содержится ${call}`);
// });




// const str = prompt("", "");
// const producs = str.split(", ");
// producs.sort();
// console.log(producs.join('; '));




// const test = {
//    a: 5,
//    b: 3,
//    c: 4
// };

// let num = test;
// num.a = 6;

// console.log(num);
// console.log(test);

// function copy (mainObj) {
//    let objCopy = {};

//    let key;
//    for (key in mainObj) {
//       objCopy[key] = mainObj[key];
//    }

//    return objCopy;
// }

// const numbers = {
//    a: 2,
//    b: 5,
//    c: {
//       x: 7,
//       y: 4
//    }
// };

// const newNumbers = copy(numbers);

// newNumbers.b = 10;

// console.log(newNumbers);
// console.log(numbers);


// const adds = {
//    ab: 10,
//    bc: 20
// };

// const test = {
//    ba: 20,
//    cb: 10,
//    cc: {
//       ca: 111,
//       cca: 121,
//    }
// };

// console.log(Object.assign(adds, test));







/////// DZ ////////


// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

// Пример:

// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'

const personalPlanPeter = {
   name: "Peter",
   age: "29",
   skills: {
       languages: ['ru', 'eng', 'fr', 'russ'],
       programmingLangs: {
           js: '20%',
           php: '10%',
       },
       exp: '1 month'
   },
   showAgeAndLangs: function (obj) {
      const {languages} = obj.skills;
      const {age} = obj;
      let str = `Мне ${age} и я владею языками: `;
      languages.forEach(function (lang) {
         str += `${lang.toUpperCase()} `; 
      });
      return str;
   }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));


// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

function showExperience (obj) {
   const {exp} = obj.skills;
   return exp;
}

console.log(showExperience(personalPlanPeter));



// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
// Пример:
// showProgrammingLangs(personalPlanPeter)  => "Язык js изучен на 20% Язык php изучен на 10%"
// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.
// P.S. Для переноса строки используется \n в конце строки.

function showProgrammingLangs (obj) {
   let str = '';
   const {programmingLangs} = obj.skills;
    for ( let key in programmingLangs) {
      str += `язык ${key} изучен на ${programmingLangs[key]}\n`;   // поскольку у тебя в итеррируемом объекте два элемента то эти элементы складываются (ответ на впорос почему ставится +=);
    }
    return str;
}

console.log(showProgrammingLangs(personalPlanPeter));
