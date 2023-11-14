// // Основы:

// // 1) Создайте переменные для хранения числа, строки и булева значения. Выведите их значения в консоль.
// let num = 1
// let str = 'str'
// let bool = true
// console.log(num, str, bool);

// Типы данных и преобразование:

// // 2) Преобразуйте строку в число и наоборот. Выведите результат в консоль.
// let str = '1'
// let num = 2
// let strToNum = +str
// let NumToStr = num.toString()
// console.log(strToNum, NumToStr);

// // Массивы:

// // 3) Создайте массив чисел. Используя цикл, выведите каждый элемент массива в консоль.
// let mas = [1,2,3,4,5]
// for(let i=1; i<mas.length+1; i++){
//     console.log(i);
// }

// // Объекты:

// // 4) Создайте объект, представляющий информацию о человеке (имя, возраст, город и т.д.). Выведите значения свойств в консоль.

// let person = {
//     name: 'Emir',
//     age: 19,
//     city: 'Biskek',
//     country: 'Kyrgyzstan'
// }
// console.log(person);

// // Условные операторы:

// // 5) Напишите программу, которая проверяет, является ли число четным или нечетным, и выводит соответствующее сообщение.

// function isItEven(num){
//     if(num %2===0){
//         console.log('Четное');
//     }else if(num%2===1){
//         console.log('Нечетное');
//     }
//     else{
//         console.log('error');
//     }
// }
// isItEven(2)

// // Циклы:

// // 6) Используя цикл, выведите числа от 1 до 10 в консоль.
// for(let i = 1; i<=10; i++){
//     console.log(i);
// }

// // Функции:

// // 7) Создайте функции 3 типов (arrow, declaration, expression). Все три функции должны выводить в консоль - Hello World!

// function helloWorld(){
//     console.log('HELLO WORLD!1');
// }
// let helloWOrld = function(){
//     console.log('HELLO WORLD!2');
// }
// let helloWORld = () =>{
//     console.log('HELLO WORLD!3');
// }
// helloWorld()
// helloWOrld()
// helloWORld()

// // Промисы:

// // 8) Создайте два промиса - 1. Отрабатывает успешно 2. Отрабатывает с ошибкой
// let successfulPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Промис успешно выполнен!");
//     }, 1000);
//   });
  
//   let errorPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("Промис завершился с ошибкой!"));
//     }, 1000);
//   });
  
//   successfulPromise
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
  
//   errorPromise
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.error(error.message);
//     });

// // Дополонительно: (скорее всего все успеют приступить)

// // 1) Напишите функцию, которая принимает массив чисел и возвращает среднее арифметическое значение.

// function calculateAverage(numbers) {
//     let sum = numbers.reduce((acc, num) => acc + num, 0);
//     let average = sum / numbers.length;
//     return average;
// }
// let numbersArray = [1, 2, 3, 4, 5];
// let result = calculateAverage(numbersArray);
// console.log(result);

// // 2) Напишите функцию, которая принимает массив строк и возвращает новый массив строк, где каждый элемент в верхнем регистре.
// function upperCase(strMas){
//     let newMas = []
//      strMas.forEach((element) => {
//         newMas.push(element.toUpperCase())
//     })
//     return newMas
// }
// let mas = ['str','smewogja']
// const resultArray = upperCase(mas);
// console.log(resultArray)

// // 3) Напишите функцию, которая принимает массив объектов с полями "имя" и "возраст" и возвращает новый массив объектов с полями "имя" и "возраст", отсортированный по возрастанию возраста.

// let mas = [obj1 = {
//     name: 'Emir',
//     age: 19
// }, obj2 = {
//     name: 'Baysal',
//     age: 18
// },obj3 = {
//     name: 'Arsen',
//     age: 17
// }]
// function sortByAge(a, b){
//     return a.age - b.age
// }
// let sortedMas = mas.sort(sortByAge)
// console.log(sortedMas);

// // 4) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только уникальные числа.
// function getUniqueNumbers(numbers) {
//     const uniqueNumbers = [];
//     for (const number of numbers) {
//       if (!uniqueNumbers.includes(number)) {
//         uniqueNumbers.push(number);
//       }
//     }
//     return uniqueNumbers;
//   }

// let mas = [1, 2, 3, 4, 2, 5, 6, 1, 7];
// let uniqueNumbersMas = getUniqueNumbers(mas);

// console.log(uniqueNumbersMas);

