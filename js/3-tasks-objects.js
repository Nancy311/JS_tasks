/*----------------1. This method   метод обьекта*/
// const playlist = {
//     name: 'My playlist',
//     rating: 5,
//     tracks: ['sun', 'gun', 'fun'],
//     trackCount: 3,
//     changeName(newName) {
//         //  console.log(this); 
//          this.name = newName;
//     },
//     addTrack(track) {
//         this.tracks.push(track);
     
//     },
//     updateRating (newRating){
// this.rating = newRating;
//     },
//    getTrackCount () {
//         return this.tracks.length;
//             },
// };

// playlist.changeName('Emmy');
// console.log(playlist);

// playlist.addTrack('Super New Track');
// console.log(playlist);

// playlist.updateRating(4);
// console.log(playlist);

/*----------------2. For of   перебор массива обьекта*/

// keys перебрать свойства (консоль вернеть как табличку свойство и значения)
// values перебрать значеня свойств (консоль вернет только значения)

// const feedback = {
// good: 3,
// neutral: 10,
// bad: 5,

// };
// let totalFeedback = 0;

// const keys = Object.keys(feedback);
// console.log(keys);

// for (const key of keys){
//     console.log(key);
//     console.log(feedback[key]);

//     totalFeedback += feedback[key];
// }
// console.log(totalFeedback);


// ------------
// const values = Object.values(feedback);

// for (const value of values){
 
//     totalFeedback += value;
// }
// console.log(totalFeedback);




/*----------------3.массив обьектов*/

// const friends = [
//     {name: 'Mango', online: false},
//     {name: 'Kiwi', online: true},
//     {name: 'Poly', online: false},
//     {name: 'Anna', online: true},
// ];


// ----------------3.1 Ищем друга по функции
// const findFriendByName = function(allFriends, name){
    
// for (const friend of allFriends){
//     console.log(friend);
//     if(friend.name === name){
//         return 'find';
//     }
//     }
// }

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'PHarry'));


// ----------------3.2 Ищем имена друзей
// const getAllNames = function(allFriends){
//     const names = [];
// for (const friend of allFriends){
// names.push(friend.name);
// }

// return names;

// }
//     console.log(getAllNames(friends));

// ----------------3.3 Ищем имена друзей которіе онлайн

// const getOnlineFriends = function(allFriends);
// const onlineFriends = [];
// for (const friend of allFriends){
//     if(friend.online){ onlineFriends.push(friend);}
//    return onlineFriends;
//     }
//     console.log(getOnlineFriends(friends));

// ----------------3.4 Создать два массива онлайн и офлайн, если тру в первій если нет во второй

// const getFriendsByOnlineStatus = function(allFriends){
// const friendByStatus = {
//     online: [],
//     offline: [],
// };
// for (const friend of allFriends){
//     if(friend.online){ friendByStatus.online.push(friend);
//         continue;
//     }

//         friendByStatus.offline.push(friend);
//     }

// return friendByStatus;
// }
// console.log(getFriendByStatus(friends));



// ---------------4 Узнать кол-во свойств в обьекте

// const x ={
//     a: 1,
//     b: 2,
//     c: 20,
//     d: 100,
// };


// console.log(Object.keys(x).length);


 // ---------------------5 Spread

//  old method
// const numbers =[1, 2, 3, 4].concat([5, 6, 7], [8, 9, 10]);

// console.log(numbers)

//  new method
// const numbers =[...[1, 2, 3], ...[4, 5, 6]];/* возьми массив 1б 2б 3 и распили его в новій массив */ 

// console.log(numbers)



 // ---------------------5.1 Sпоиск самой маленькой и большой температурі


// const temps = [18, 45, 34, 56, 32, 1, 37];

// console.log(Math.min(...temps));
// console.log(Math.max(...temps));



 // ---------------------5.2 Сшиваем несколько массивов в один

//  const lastWeekTemps = [1, 2, 3];
//  const currentTemps = [4, 5, 6];
//  const nextWeekTemps = [7, 8, 9];

//  const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps]
//  console.log(allTemps);


 // ---------------------5.3 Assign - значение которое ниже по коду перебивает верхнее
//  const a = {x: 1, y: 4 };
//  const b = {x: 0, z: 5 };

// const c = {};

// Object.assign(c, a, b);

// console.log(c) 
//  будет х = 0 распилення це копіювання масиву




// ----------------6. Деструктуризация

// const playlist = {
//         name: 'My playlist',
//         rating: 5,
//         tracks: ['sun', 'gun', 'fun'],
//         trackCount: 3,
//         changeName(newName) {
//             //  console.log(this); 
//              this.name = newName;
//         },

//     }


//     const {rating, name, tracks} = playlist; 
    // Чтоб каждій раз не писать плейлист.рейтинг, плейлист.імя

    // console.log(rating)





// // ---------------5 Работаем с коллекцией товаров в корзине

// const cart = {
//     items: [], 
//     getItems(){
// return this.items;
//     },
//     add(product){
 
//         for (const item of this.items) {
         
//            if(item.name === product.name){
//          item.quantity += 1;
//          return;
//            }
//         }
//         const newProduct = {...product, quantity: 1,};
//         this.items.push(newProduct);
//     },

//     remove(productName) {
//         const { items } = this;
//         for (let i = 0; i < items.length; i += 1){
//            const { name } = items[i];
            
//             if (productName === name){
//                 console.log("find", productName);
//                 console.log("index", i);
//                 items.splice(i, 1);
//             }

//         }



//     },

//     clear(){
//         this.items = [];
//     },

//     countTotalPrice() {
//        const { items } = this;
//        let total = 0;
// for (const { price, quantity } of items) {
//     total += price * quantity;
// }
// return total;
//     },
//     increseQuantity(productName){},
//     decreseQuantity(productName){},
// };

// console.log(cart.getItems());


// cart.add({name: 'apple', price: 50});
// cart.add({name: 'lemon', price: 55});
// cart.add({name: 'pear', price: 60});
// cart.add({name: 'plum', price: 70});
// cart.add({name: 'lemon', price: 55});
// console.table(cart.getItems());

// console.log(cart.countTotalPrice());

// cart.remove('apple');
// console.table(cart.getItems());

// cart.clear();
// console.table(cart.getItems());


