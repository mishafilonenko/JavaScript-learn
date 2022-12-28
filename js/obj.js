'use strict';


const newObj = {
   name: 'test',
   userName: 'Misha',
   pass: 1111,
   colors: {
      bg: 'red',
      fw: 'black'
   },
   makeTest: function () {
      console.log('TEST Done!');
   }
};

newObj.makeTest();
const {bg, fw} = newObj.colors; 
console.log(bg);


// delete newObj.userName;
// console.log(newObj);

let caunter = 0;
for (let key in newObj) {
   if (typeof(newObj[key]) === 'object') {
      for (let i in newObj[key]) {
         console.log(`Это вложеный обьект в обьект ключ которого ${i} с значением ${newObj[key][i]}`);    /* Перебирает все значения обьекта в том числе и вложенные */
         caunter++;
      }
   } else {
      console.log (`Свойство обьекта ${key} с значением ${newObj[key]}`);
      caunter++;
   }
}

console.log(caunter);


console.log(Object.keys(newObj).length); // Этот метод возвращает с обьекта ключи на первом уровне вложености + .lengt переводит их  в число number
