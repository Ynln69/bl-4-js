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
