/*------------functions and array
Сервісу гравірування прикрас потрібна функція, яка б автоматично
 рахувала ціну гравірування, залежно від кількості слів і ціни за слово.

Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає 
рядок, що складається зі слів, розділених лише пробілами (параметр message) та ціну 
гравірування одного слова (параметр pricePerWord).

Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх 
слів в рядку*/

// function calculateEngravingPrice(message, pricePerWord) {
  
//  const calculateTotalPrice = message.split(" ").length * pricePerWord;
//    return calculateTotalPrice
// }
//

//--------------------- написать скрипт которій : Подсчитать суммі всех четніх чисел

// 1/ заводим переменную

// const numbers = [2, 4, 5, 7, 10, 11, 12, 17, 22]
// let total = 0;

// перебираем массив
// for (let i = 0; i < numbers.length; i +=1){
//     console.log(numbers[i]);

// проверить елемент на четность
// if (numbers[i] % 2 === 0) {
//     console.log("четное!!");
// сплюсовать к тотал
// total += numbers[i];}
// }
// console.log(total);


/*-------------------- написать скрипт поиска логина. вівести сообщение если логина нет - 
пользователь не найден б если нашли то найден*/


// ---- через for
// const logins = ['joly', 'moly', 'poly', 'loly'];
// const loginToFind = 'poly';
// let message = '';

// for (let i = 0; i < logins.length; i += 1 ){
//     console.log(logins[i]);

//     if (logins[i] !== loginToFind){
//         message = 'not найден';
//     }
//     else { message = 'найден';}
   
// }
// console.log(message)


// ----через break
// const logins = ['joly', 'moly', 'poly', 'loly'];
// const loginToFind = 'poly';
// let message = '';

// for (let i = 0; i < logins.length; i += 1 ){
//     console.log(logins[i]);

//     if (logins[i] === loginToFind){
//         message = 'найден';
//         break;
//     }
//     message = 'не найден';
   
// }
// console.log(message)

// ----через include  возвращает тру или фалс
// const logins = ['joly', 'moly', 'poly', 'loly'];
// const loginToFind = 'poly';
// const message = logins.includes(loginToFind) ? 'найден' : 'не найден';
// console.log(message)

// ----через function findLogin(alllogins, loginToFind)*/
// const logins = ['joly', 'moly', 'poly', 'loly'];
// const findLogin = function (allLogins, loginToFind) {
 
//     for (const login of allLogins) {
//         if (login === loginToFind) {
//             return 'найден';
//         }
//     }
//     return 'not найден';
// };
// console.log(findLogin(logins, 'joly'));

// console.log(findLogin(logins, 'dddd'));


/*-------------------- написать скрипт поиска самого маленького числа в массиве 
// при условия что числа уникальніе (не повторяются)*/

// const numbers = [5, 16, 89, 32, 94, 3, 6, 10]; создаем массив
// let smallestNumber = numbers[0]; заводм переменную будто первое значение єто самое маленькое

// for (const number of numbers){ перебираем массив
//     if (number < smallestNumber) { сравниваем с первім число
//         smallestNumber = number; если да то єто и есть самое маленькое
//     }
// }
// console.log('smallest number', smallestNumber);


// // ----через function
// const findSmallNumber= function(numbers){
//     let smallestNumber = numbers[0];
//     for (const number of numbers){ 
//             if (number < smallestNumber) { 
//                 smallestNumber = number; 
//             }
//         }
// return smallestNumber;
// }

// console.log(findSmallNumber([1, 6, 7, 8, 10]));


/*-------------------- написать скрипт которій заменяет каждій массив в регистре на противоположній*/


// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters){
//     console.log(letter);


// invertedString += 
// letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase()
// }
// console.log(invertedString);






/*-------------------- делаем  slug в Url  из названи статьи
-нормализируем строку
- разбиваем по словам 
-сшиваем в строку с разделителями*/

// const title = "c";
// const slug = title.toLowerCase().split(' ').join('-');
// console.log(slug);


// // ----через function
// const slugify = function(string){
// const normalizedTittle = string.toLowerCase();
// const words = normalizedTittle.split(' ');
// const slug = words.join('-');

// return slug;

// };
// console.log(slugify('top 10 Benefits of React'));
// console.log(slugify('напиши функцию calculateTotalPrice которая'));

// ----або
// const slugify = function(string){
     
//     return string.toLowerCase().split(' ').join('-');
    
//     };
//     console.log(slugify('top 10 Benefits of React'));
//     console.log(slugify('напиши функцию calculateTotalPrice которая'));


/*-------------------- напиши функцию calculateTotalPrice которая 
принимкает массив цен и возвращает их сумму-----------------------------*/

// --------через массив

// const cart = [5, 6, 79, 34, 56, 10, 8, 7];
// let total = 0; 

// for (const value of cart)
//     {total += value;

//     }
// console.log(total);

// --------через функцию

// const calculateTotalPrice = function(items) {
//     console.log(items);
//     let total = 0;
//     for (const item of items) {
//     total += item;
//     }
//     return total;
// };
// console.log(calculateTotalPrice([1, 2, 3]));


/*-------------------- напиши функцию logItems(items)  для перебора и логирования массива
-----------------------------*/

//  const logItems = function(items){
//  for (const item of items) {
//     console.log(item);
    
//  }}
//  logItems([1, 2, 3, 4, 4])


// ------------Напиши функцію getExtremeElements(array), яка приймає один параметр 
// array - масив елементів довільної довжини. Функція повинна повертати масив з двох елементів 
// - першого і останнього елемента параметра array.

// function getExtremeElements(array) {
//     // Change code below this line
//     const firstElement = array.shift()
//     const lastElement = array.pop()
//     const total = [firstElement, lastElement]
    
//     console.log(total);
    
//     return total
     
// }


/*------------Задача: пошук найдовшого слова
Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.

Поради:

Використовуй метод split() для розбиття рядка на масив слів за роздільником пробілу (' ').
Ініціалізуй змінну longestWord першим словом з масиву.
Пройдись по масиву слів за допомогою циклу та порівняй довжину кожного слова з довжиною longestWord. Якщо знайдено слово, що довше, онови змінну longestWord.
Поверни longestWord.
function findLongestWord(string) {
  // Change code below this line
    let splited = string.split(' ') ON CONFLICT DO NOTHING;
    let longestWord = '';

    for (let word of splited) {
if (word.length > longestWord.length) {
    longestWord = word;
    
}
}
        


  // Change code above this line
return longestWord
}*/


/*------------Задача: порахувати середню оцінку*/
// function getAverage(scores) {
//   let sum = 0;

//   for (const score of scores) {
//     sum += score;
//   }

//   return sum / scores.length;
// }
// console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));


// function getGrade(score) {
//   if (score === 100) {
//     return "A++";
//   } else if (score >= 90) {
//     return "A";
//   } else if (score >= 80) {
//     return "B";
//   } else if (score >= 70) {
//     return "C";
//   } else if (score >= 60) {
//     return "D";
//   } else {
//     return "F";
//   }
// }
// console.log(getGrade([89]));
// console.log(getGrade([71]));
// console.log(getGrade([60]));
// console.log(getGrade([100]));


// function hasPassingGrade(score) {
//   return getGrade(score) !== "F";
// }
// console.log(hasPassingGrade([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));


// function studentMsg(totalScores, studentScore) {

//   let average = getAverage(totalScores);
//   let grade = getGrade(studentScore);

//   return `Class average: ${average}. Your grade: ${grade}. You ${
//     hasPassingGrade(studentScore) ? "passed" : "failed"
//   } the course.`;
// }
// console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));