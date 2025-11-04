/*
 * ✅ Завдання 1. Власна імплементація Array.includes()
 */
console.log("--- Завдання 1 ---");

function myIncludes(array, value) {
  for (let i = 0; i < array.length; i++) {
    // Якщо поточний елемент дорівнює "value" → повернути true
    if (array[i] === value) {
      return true;
    }
  }
  // Інакше (якщо цикл завершився і нічого не знайдено) → повернути false
  return false;
}

// Приклад використання:
console.log(`myIncludes([1, 2, 3], 2): ${myIncludes([1, 2, 3], 2)}`); // Очікується: true
console.log(`myIncludes([1, 2, 3], 5): ${myIncludes([1, 2, 3], 5)}`); // Очікується: false


/*
 * ✅ Завдання 2. Робота з об’єктом
 */
console.log("\n--- Завдання 2 ---");

// 1) Створіть об’єкт user
const user = {};

// 2) Додайте властивість name зі значенням "Іван"
user.name = "Іван";

// 3) Додайте властивість surname зі значенням "Сміт"
user.surname = "Сміт";
console.log("Додали name та surname:", user);

// 4) Змініть name на "Петро"
user.name = "Петро";
console.log("Змінили name на Петро:", user);

// 5) Видаліть властивість name
delete user.name;
console.log("Видалили name:", user);


/*
 * ✅ Завдання 3. Переписування if → switch
 *
 * Примітка: prompt() працює лише у браузері.
 * Щоб запустити цей код, відкрий відповідний index.html у браузері.
 */
console.log("\n--- Завдання 3 ---");

// let a = +prompt('a?', '');
// console.log(`Ви ввели: ${a}`);

// switch (a) {
//   case 0:
//     alert(0);
//     break;
//   case 1:
//     alert(1);
//     break;
//   case 2:
//   case 3:
//     alert('2,3');
//     break;
//   default:
//     alert('Інше значення');
// }
// (Закоментував, щоб не блокувати виконання іншого коду в консолі)
console.log("Рішення для Завдання 3 знаходиться у коментарях вище.");


/*
 * ✅ Завдання 4. Функція isEmpty(obj)
 */
console.log("\n--- Завдання 4 ---");

function isEmpty(obj) {
  // Цикл for...in перебирає ключі (властивості) об'єкта.
  // Якщо він зайде в цикл хоча б один раз - значить, властивість є.
  for (let key in obj) {
    // (hasOwnProperty - це додаткова перевірка, що властивість належить
    // саме об'єкту, а не його прототипу. Це гарна практика.)
    if (obj.hasOwnProperty(key)) {
      return false; // Властивість знайдено, об'єкт не порожній
    }
  }
  // Якщо цикл не почався, значить властивостей немає
  return true;
}

// Приклад роботи:
let schedule = {};
console.log(`schedule порожній? ${isEmpty(schedule)}`); // true

schedule["8:30"] = "Вставай";
console.log(`schedule порожній? ${isEmpty(schedule)}`); // false


/*
 * ✅ Завдання 5. Об’єднання двох масивів
 */
console.log("\n--- Завдання 5 ---");

function mergeArrays(arr1, arr2) {
  // Використовуємо spread-оператор (...), 
  // щоб "розпакувати" обидва масиви в один новий
  return [...arr1, ...arr2];

  // Альтернативний варіант:
  // return arr1.concat(arr2);
}

// Приклади використання:
console.log(mergeArrays([1, 2], [3, 4])); // [1, 2, 3, 4]
console.log(mergeArrays(['a', 'b'], ['c'])); // ['a', 'b', 'c']


/*
 * ✅ Завдання 6. Власна імплементація Array.join()
 */
console.log("\n--- Завдання 6 ---");

function myJoin(arr, separator = ",") {
  // separator = "," - це синтаксис "значення за замовчуванням".
  // Якщо separator не передано, він автоматично буде ",".

  let resultString = "";
  for (let i = 0; i < arr.length; i++) {
    resultString += arr[i];
    
    // Додаємо роздільник, але тільки якщо це НЕ останній елемент
    if (i < arr.length - 1) {
      resultString += separator;
    }
  }
  return resultString;
}

// Приклади використання:
console.log(`myJoin([1, 2, 3], "-"): "${myJoin([1, 2, 3], "-")}"`);
console.log(`myJoin(["Hello", "world"], " "): "${myJoin(["Hello", "world"], " ")}"`);
console.log(`myJoin(["a", "b", "c"]): "${myJoin(["a", "b", "c"])}"`);