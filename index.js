//1. Використовуючи функцію if...else,
//напишіть код, який буде запитувати:
//"What is the official name of JavaScript?"
//Якщо користувач ввів "ECMAScript",
//то показувати через alert: "True!"
//у противному випадку показати:"Don't you know? ECMAScript!"

// variant1
// const text = 'ECMAScript';
// const answer = prompt('What is the official name of JavaScript?');
// if (answer === text) {
//     alert('True!');
// } else {
//     alert("Don't you know? ECMAScript!");
// }

// variant2
// const text = 'ECMAScript';
// const answer = prompt('What is the official name of JavaScript?');
// const message = answer === text ? ('True!') : ("Don't you know? ECMAScript!");
// alert(message);

//2. Напишіть програму, яка запитає у користувача через prompt "Enter the number of minutes to format"
//число (кількість хвилин) і виведе в консоль
//рядок у форматі годин і хвилин, тобто 70 має повернути у консоль "01:10"
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

// const answer = prompt("Enter the number of minutes to format");
// const minutes = String(answer % 60).padStart(2, "0");
// const hours = String(Math.floor(answer / 60)).padStart(2, "0");
// console.log(`${hours}:${minutes}`);

//3. Напишіть цикл, який виведе в консоль усі парні числа від max до min включно по зменшенню
// const max = 15;
// const min = 1;

// for (let i = max; i >= min; i -= 1) {
//     if (i % 2 === 0) {
//         console.log(`Число парне ${i}`);
//      }
// }

// 4.За допомогою циклу for знайдіть добуток (результат множення) усіх парних чисел у проміжку від min до max включно

// const max = 4;
// const min = 1;
// let result = 1;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 === 0) {
//     result *= i;
//   }
// }

// console.log(result);

// 5. Напишіть код, який буде запитувати логін за допомогою prompt "Hello, please enter your login!"
// і виводити результат у консоль браузера

//Якщо під час вводу login нажали клавішу Esc, то вивести у консоль рядок "Authorization has been canceled"
//Якщо користувач вводить "admin", то prompt запитує пароль (Please enter your password)
//Якщо користувач вводить щось відмінне від "admin", то вивести рядок "Goodbye!"

//Пароль перевіряти так:
//Якщо нажали клавішу Esc, то вивести у консоль рядок "Authorization has been canceled"
//Якщо користувач вводить "adminPassword", то вивести у консоль рядок "Hello!"
//Якщо користувач вводить щось відмінне від "adminPassword", то вивести рядок "Goodbye!"

// Вариант 1

// const answer = prompt('Hello, please enter your login!');
// let message = '';

// if (answer === null) {
//       message = 'Authorization has been canceled';
//       console.log(message);
// } else if (answer === 'admin') {
//       const password = prompt('Please enter your password');
//       if (password === null) {
//             message = 'Authorization has been canceled!';
//             console.log(message);
//       } else if (password !== 'adminPassword') {
//             message = 'Goodbye!';
//             console.log(message);
//       } else {
//             message = 'Hello my friend!';
//             console.log(message);
//       }
// } else {
//       message = 'Goodbye!';
//       console.log(message);
// }

// Вариант 2

// const answer = prompt('Hello, please enter your login!');
// let message = '';

// switch (answer) {
//   case null:
//     message = 'Authorization has been canceled';
//     break;

//   case 'admin':
//     const password = prompt('Please enter your password');
//     switch (password) {
//       case null:
//         message = 'Authorization has been canceled!';
//         break;

//       case 'adminPassword':
//         message = 'Hello my friend!';
//         break;

//       default:
//         message = 'Goodbye!';
//         break;
//     }

//     break;
//   default:
//     message = 'Goodbye!';
//     break;
// }

// console.log(message);

//6. При завантаженні сторінки користувачу у prompt пропонується ввести число 'Hello, enter please the number'.
// Введене число додається до значення змінної total.
//Операція введення числа продовжується до тих пір, поки користувач не натисне кнопку Cancel у prompt.
//Після того, як користувач припинив серію введень і натиснув кнопку Cancel, показати alert з рядком "The total sum of the entered numbers is [total]."


// let total = 0;
// let number
// while (number !== null) {
//     number = prompt('Hello, enter please the number');
//     total += Number(number);
// }
// alert(`The total sum of the entered numbers is ${total}.`)


//1. Напишіть скрипт, який для об'єкта user, послідовно:
//1 додасть властивість mood зі значенням 'happy'
//2 замінить значення властивості hobby на 'skydiving'
//3 замінить значення властивості premium на false
//4 використовуючи Object.keys() и for...of, виведе у консоль зміст об'єкта users у форматі:
//name: John
//"age: 20"
//"hobby: skydiving"
//"premium: false"
//"mood: happy"

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const userKeys = Object.keys(user);

// for (const key of userKeys) {
//     console.log(`${key}: ${user[key]}`);
// }




// console.log(user);

// 2. Є об'єкт, в якому зберігаються зарплати команди. Напишіть функцію getTotalSalary, яка буде повертати загальну суму зарплат. Якщо об'єкт пустий, то функція має повернути 0

//  const salaries = {
//   mango: 100,
//   poly: 160,
//   ajax: 1470,
//  };

// let total = 0;

// const sallaryValue = Object.values(salaries);

// for (const key of sallaryValue) {
//     total += key
// }

// console.log(total)




//3. Напишіть фукцію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і рядок з назвою каменю.
//Функція обчислює і повертає загальну вартість каменів з таким іменем

// const stones = [
//   { name: "emerald", price: 1300, quantity: 4 },
//   { name: "diamond", price: 2700, quantity: 6 },
//   { name: "sapphire", price: 400, quantity: 7 },
//   { name: "rubble", price: 150, quantity: 100 },
// ];

// const calcTotalPrice = (stones, stonesName) => {
//     let totalPrice = 0;
//     for (const stone of stones) {
//         if (stone.name === stonesName) {
//            totalPrice += stone.price * stone.quantity;
//         } 
//     }
//     return totalPrice;
// }

// console.log(calcTotalPrice(stones, 'emerald'));
// console.log(calcTotalPrice(stones, 'rubble'));








// 4. Створіть об'єкт calculator з трьома методами
// read(a, b) - приймає два аргумента та зберігає їх як властивості об'єкта під ключами prop1 та prop2
// sum() перевіряє чи присутні  властивості prop1/prop2 та повертає їх суму, в противному випадку повертає null
// mult() перевіряє чи присутні  властивості prop1/prop2 та повертає їх добуток, в противному випадку повертає null
// Не забудьте, що математичні оператори працюють коректно тільки з числовими значеннями

// const calculator = {
//     read(a, b) {
//         this.prop1 = a,
//         this.prop2 = b
//   },
//     sum() {

//         if (!Number(this.prop1) || !Number(this.prop2)) {
//             return null;
//         }

//     return this.prop1&&this.prop2?Number(this.prop1) + Number(this.prop2):null;
      
//   },
//     mult() {
      
//         return this.prop1&&this.prop2?this.prop1 * this.prop2:null
//   },
// };

// console.log(calculator.read(22,"2"));

// console.log(calculator)

// console.log(calculator.sum());


//6. Напишіть функцію updateObject, яка приймає об'єкт та перелік ключів
//і повертає новий об'єкт без вказаних властивостей
//Очікуваний результат ({ a: 1, b: 2, c: 3 }, 'b', 'c') => {a: 1}


// const updateObject = (object, ...keys) => {
//     const newObject = {...object};
//     keys.forEach(key => {
//         delete newObject[key]
//    }
//    );
//    return  newObject;
// }

// console.log(updateObject({ a: 1, b: 2, c: 3 }, 'c'));

// 7. Напишіть функцію changeObject, яка приймає як параметр об'єкт
// та повертає масив, в якому кожен елемент це масив, 
// який складається з двох елементів [key, value]
// Очікуваний результат 
// console.log(changeObject({ a: 1, b: 2, c: 3 })) // [["a", 1], ["b", 2], ["c", 3]]

// const user = {
//   name: 'John',
//   surName: 'Stones',
//   age: 20,
//   hobby: 'tenis',
//   haveCar: true,
//   merried: false,
// }

// const changeObject = (user) => {
//    return Object.entries(user);
// }

// console.log(changeObject(user));

/// 8. Напиши скрипт керування особистим кабінетом інтернет банку.
//Є об'єкт account, в якому необхідно реалізувати методи для роботи з балансом та історією трансакцій
//Типів трансакцій усього два. Можна поповнити рахунок або списати з нього гроші.
//
// const TYPES_TRANSACTION = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// }
//Кожна трансакція має мати властивості: id, type, amount.

// {
//   const account = {
//     //поточний баланс рахунку
//     balance: 0,

//     //Історія трансакцій
//     transactions: [],

//     //Метод приймає суму та тип трансакції і створює та додає у transactions об'єкт трансакції за зразком {id, type, amount}
//     createTransaction(type, amount) {
//       return {
//         id,
//         type,
//         amount,
//       }
//     },

//     //Метод відповідає за додавання суми до балансу.
//     //Приймає суму трансакції.
//     //Викликає createTransaction для створення об'єкта трансакції після чого додає його в історію трансакцій
//     deposit(amount) {},

//     //Метод відповідає за списання коштів з балансу.
//     //Приймає суму трансакції, викликає createTransaction для створення об'єкту трансакції
//     //післе чого додає його в історію трансакцій
//     //Якщо amount більше ніж поточний баланс, виводимо повідомлення про те, що недостатньо коштів на рахунку
//     withdraw(amount) {},

//     //Метод повертає поточний баланс
//     getBalance() {},

//     //Метод шукає та повертає об'єкт трансакції по id
//     getTransactionDetails(id) {},

//     //Метод повертає загальну суму трансакції певного типу із всієї історії трансакцій
//     getTotalSumByType(type) {},
//   }
// }
