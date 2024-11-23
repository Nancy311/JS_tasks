// ------------------------------------1. For Each перебор массива вместо цикла for of
// Поелементно перебирає масив.
// Викликає колбек-функцію для кожного елемента масиву.
// Нічого не повертає.


// const numbers = [5, 10, 15, 35, 60];

// numbers.forEach(function(number){
//     console.log('number', number);
// });

// console.log(numbers);

// ------------------------------------2. Map поєлементно перебирает массив
// Він викликає колбек-функцію для кожного елемента вихідного масиву, а результат її роботи записує
//  у новий масив, який і буде результатом виконання методу.

// const numbers = [5, 10, 15, 35, 60];
// const double = numbers.map(number =>{
//     console.log(number);

//     return number * 2;
// });
// console.log(double);

// ------------------------------------2.1

// const players = [
//     {name: 'Mango', online: false},
//     {name: 'Kiwi', online: true},
//     {name: 'Poly', online: false},
//     {name: 'Anna', online: true},
// ];


// const playersNames = players.map(player => {
// return player.name;
// });
// console.log(playersNames)

// const playersNames = players.map(player => player.name);
// console.log(playersNames)

// const playersNames = players.map(player => {
// return {...player,}
// });
// console.log(playersNames)


// ------------------------------------3.Filter Метод filter(callback) використовується для єдиної операції -
//  фільтрації масиву, тобто, коли необхідно вибрати більше одного елемента з колекції за певним критерієм.
//  Не змінює оригінальний масив.
//  Поелементо перебирає оригінальний масив.
//  Повертає новий масив.
//  Додає у масив, що повертається, елементи, які задовольняють умови колбек-функції.
//  Якщо колбек повернув true, елемент додається у масив, що повертається.
//  Якщо колбек повернув false, елемент не додається у масив, що повертається.
//  Якщо жоден елемент не задовольнив умову, повертає порожній масив.


// const numbers = [5, 10, 15, 35, 60];
// const filteredNumbers = numbers.filter(number => {
//     console.log(number);
//     return number > 20;
// });
// console.log(filteredNumbers);

// --------------
// const numbers = [5, 10, 15, 35, 60];
// const filteredNumbers = numbers.filter(number => number > 20);
// console.log(filteredNumbers);

// --------------

// const players = [
//     {name: 'Mango', online: false, id: 'player-1'},
//     {name: 'Kiwi', online: true, id: 'player-2'},
//     {name: 'Poly', online: false, id: 'player-3'},
//     {name: 'Anna', online: true, id: 'player-4'},
// ];

// хотим получить только тех кто онлайн
// const onlinePlayers = players.filter(player => player.online);
// console.log(onlinePlayers);


// ------------------------------------4.find Проверяет равенство тру или фалс
// дозволяє знайти і повернути перший відповідний елемент, 
// після чого перебирання масиву припиняється. Тобто він шукає до першого збігу.

// const numbers = [5, 10, 15, 35, 60];
// const filteredNumbers = numbers.find(number => number === 10);
// console.log(filteredNumbers);

// ----------------

// const players = [
//     {name: 'Mango', online: false, id: 'player-1'},
//     {name: 'Kiwi', online: true, id: 'player-2'},
//     {name: 'Poly', online: false, id: 'player-3'},
//     {name: 'Anna', online: true, id: 'player-4'},
// ];

// const findPlayer = players.find(player => player.id === 'player-3');
// console.log(findPlayer);



// ------------------------------------5.Метод every()​
// Перевіряє, чи проходять всі елементи масиву тест колбек-функції. Повертає true або false.

// const players = [
//     {name: 'Mango', online: false, id: 'player-1'},
//     {name: 'Kiwi', online: true, id: 'player-2'},
//     {name: 'Poly', online: false, id: 'player-3'},
//     {name: 'Anna', online: true, id: 'player-4'},
// ];

// const findPlayer = players.every(player => player.online);
// console.log(findPlayer);

// ------------------------------------6.Метод every()​Метод some()​

// Перевіряє, чи проходить хоча б один елемент масиву тест колбек-функції. Повертає true або false.

// const somePlayer = players.some(player => player.online);
// console.log(somePlayer);



// ------------------------------------7 Метод reduce(callback, initialValue) використовується
//  для послідовної обробки кожного елемента масиву із збереженням проміжного результату, як акумулятор. 
// Трохи складніший за інші методи для засвоєння, але результат вартий того.


// const numbers = [5, 10, 15, 35, 60];
// const total = numbers.reduce((acc, number) => acc + number, 0);
// console.log(total);

// ------------------
// const salary = {
//     mango: 100,
//     poly: 50,
//     ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce(
//     (total, value) => total + value, 
//     0,
// );
// console.log(totalSalary);

//------------------------
// const cart = [
// {name: 'apple', quantity: 50},
// {name: 'lemon', quantity: 55},
// {name: 'pear', quantity: 60},
// {name: 'plum', quantity: 70},
// {name: 'lemon', quantity: 55},
// ];

// console.log(cart);
// const totalQuantity = cart.reduce(
//     (total, {quantity}) => total + quantity, /*{quantity} - деструктуризація*/
//     0,
// );
// console.log(totalQuantity);



//------------------------
// const tweets = [
// {name: 'apple', quantity: 50, tags: ['js', 'node']},
// {name: 'lemon', quantity: 55, tags: ['html', 'css']},
// {name: 'pear', quantity: 60, tags: ['css', 'node']},
// {name: 'plum', quantity: 70, tags: ['js', 'html']},
// {name: 'lemon', quantity: 55, tags: ['react', 'css']},
// ];

// console.log(tweets);

// const allTags = tweets.reduce(
//     (tags, tweet) => {
//         tags.push(...tweet.tags); 
//         return [...tags, ...tweet.tags];
//     }, []
// );
// console.log(allTags);



// ------------------------------------8. Масив об'єктів​

// Під час роботи з масивом об'єктів виконується редукування за значенням певної властивості. 
// Наприклад, у нас є масив студентів з балами за тест. Необхідно отримати середній бал.


// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];


// Назва акумулятора може бути довільною, це просто параметр функції
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;

// ------------------------------------9.
// Метод sort() сортує елементи масиву, але на відміну від інших методів перебирання, він сортує вихідний масив.
// За замовчуванням сортує за зростанням.

// const scores = [61, 19, 74, 35, 92, 56];
// scores.sort();
// console.log(scores); // [19, 35, 56, 61, 74, 92]

// const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];
// students.sort();
// console.log(students); // [ 'Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля' ]

// const letters = ["b", "B", "a", "A", "c", "C"];
// letters.sort();
// console.log(letters); // ['A', 'B', 'C', 'a', 'b', 'c']

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort();

// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// Для зазначення свого порядку сортування методу sort(compareFunction) потрібно передати 
// колбек-функцію з двома параметрами. Це функція порівняння (compare function), порядок сортування залежить від її результату. 
// Метод sort() буде викликати її для двох довільних елементів.


// ----------по убіванию

// const scores = [61, 19, 74, 35, 92, 56];
// scores.sort((current, next) => {return next - current;});

// console.log(scores);


// ----------кастомна сортировка сложніх типів

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const sortedByBestPlayer = [...students].sort((prevScore, nextScore) => {
//     return nextScore.score - prevScore.score;

// });
// console.log(sortedByBestPlayer);

//------------------------Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку,
 //рейтинг книг яких більший за значення змінної MIN_BOOK_RATING.
//  const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     {
//       title: "The Dreams in the Witch House",
//       author: "Howard Lovecraft",
//       rating: 8.67,
//     },
//   ];
//   const MIN_BOOK_RATING = 8;
//   // Change code below this line
  
//   const names = books.filter(book => book.rating > MIN_BOOK_RATING).map(book => book.author).sort();


// ------------Доповни функцію getNamesSortedByFriendCount(users) таким чином, щоб вона повертала масив
//  імен користувачів, відсортований за зростанням кількості їхніх друзів (властивість friends).
//   const users =
// [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//       isActive: true,
//       balance: 3951,
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//       isActive: false,
//       balance: 1498,
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female"
//     }
//   ];


  // ------------Доповни функцію getNamesSortedByFriendCount(users) таким чином, щоб вона повертала масив
//  імен користувачів, відсортований за зростанням кількості їхніх друзів (властивість friends).

//   const getNamesSortedByFriendCount = users => {
//     return [...users].sort((a, b) => a.friends.length - b.friends.length)
//   .map((user)=>user.name);
 
//   };

