// -----------------1. Виведи на екран загальну кільксть яблук та винограду. Різницю яблук та винограду

// const apples = 12;
// const grapes = 15;
// const total = apples + grapes;

// console.log(total)

// const diff = grapes - apples;
// console.log(diff)


//---------------- 2. Округлення
// const value = 27.3;
// console.log(Math.round(value))

// Math.ceil округлить до гори 
// Math.floor округлить до низу
// Math.round округлить по правилам математики


//---------------- 3.Контактенація (складання)
// const a = 27 + " " + "Years"; 
//  console.log(a)


//---------------- 4.message
// Оголоси змінну message і запиши в неї повідомлення про покупку, рядок
// у форматі: "You picked <назва товару>, price per item is <ціна товару> credits".
//  Де <назва товару> і <ціна товару> — це значення змінних productName і pricePerItem.
//   Використовуй синтаксис шаблонних рядків.


// const productName = "books";
// const pricePerItem = 50;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

// console.log(message);


//---------------- 5.Замінити масу тіла на числоб індекс маси тіла  і розрахувати (ділиме вагу на зріст в квадраті)
// let weight = '88,3';
// let height = '1.75';
// weight = Number(weight.replace(',','.')); //Виконує метод реплейс та приводить до числа
// height = Number(height)

// const bmi = weight/Math.pow(height, 2); //прриводимо до другоі степені. Або так: (weight/height**2) 
// console.log(Math.round(bmi));


//---------------- 6. If
// const result = 5>6 ? 'bigger' : 'less';
// console.log(result)


//---------------- 7.Switch цей метод дуже швидкий у виконанні. 

// const a = 'name';
// switch(a){
//     case 'name':
//     console.log('one');
//     break;
//     case 'age':
//     console.log('two');
//     break;
//     case 'city':
//     console.log('three');
//     break;
//     default:
// console.log('default');
// }

// область видимості: (var)
// 1 Глобальна
// 2 Блочна
// 3 Фунеціональна