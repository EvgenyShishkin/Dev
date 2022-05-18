

//  РАНДОМНО ЗАПОЛНИТЬ 2 МАССИВА И ЗАПУЛИТЬ В 1 ПО ВОЗРАСТАНИЮ

// const   firstArr = [],
//         secondArr = [],
//         finalArr = [];

// let i = 0,
//     j = 0;

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// for (let i=0;i<5;i++) {
//     firstArr.push(getRandomInt((i*10),(i*10+5))),
//     secondArr.push(getRandomInt((i*10),(i*10+5)));
// }

// while (i < firstArr.length || j < secondArr.length ) {
//     if (i>=firstArr.length) {
//     finalArr.push(secondArr[j++]);
//     } else if (j >= secondArr.length) {
//         finalArr.push(firstArr[i++])
//     } else if (secondArr[j] <= firstArr[i]) {
//         finalArr.push(secondArr[j++]);
//     } else {
//         finalArr.push(firstArr[i++]);
//     }
// }

// console.log(firstArr,secondArr,finalArr);

// Cycle lesson


// Подсчет ЗП ))


// let staf = +prompt("Сколько сотрудников получили ЗП?")

// const salaries = {};

// for (let i = 0; i < staf; i++) {
//     let name = prompt("Кто получил ЗП?");
//     let sum = +prompt(`Скольк ЗП получил ${name}?`);

//     salaries[name] = sum;
// }

// let fot = 0;
// for (let key in salaries) {
//    fot = fot + salaries[key]
// }

// alert(`ФОТ отдела = ${fot}`);

// Меню х2

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
  
//   function multiplyNumeric(menu) {
//     for (let key in menu) {
//         if (typeof(menu[key]) === "number") {
//             menu[key] *= 2;
//         }
//     }
//   }

//   multiplyNumeric(menu);
