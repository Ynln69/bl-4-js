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