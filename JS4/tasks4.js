/*
 * ✅ Завдання 1: Унікальні значення
 */
console.log("--- Завдання 1 ---");

function unicFn(initialArray) {
  // Найпростіший спосіб отримати унікальні значення в сучасному JS -
  // 1. Створити Set з масиву (Set автоматично зберігає лише унікальні значення)
  const uniqueSet = new Set(initialArray);
  
  // 2. Перетворити Set назад у масив
  const uniqueArray = Array.from(uniqueSet); // або [...uniqueSet]
  
  console.log(uniqueArray);
}

// 🔹 Приклади викликів:
unicFn([2, 3, 1, 3, 3, 7]); // => [2, 3, 1, 7]
unicFn(["a", "b", "a", "c"]); // => ["a", "b", "c"]


/*
 * ✅ Завдання 2: Перевірка на парні числа
 */
console.log("\n--- Завдання 2 ---");

function isEvenArray(initialArray) {
  // Метод .every() перевіряє, чи *всі* елементи масиву
  // задовольняють умову.
  const allEven = initialArray.every(number => number % 2 === 0);
  
  // Використовуємо тернарний оператор для виведення "YES" або "NO"
  console.log(allEven ? "YES" : "NO");
}

// 🔹 Приклади викликів:
isEvenArray([1, 2, 3, 9]); // => "NO"
isEvenArray([2, 4, 6]); // => "YES"


/*
 * ✅ Завдання 3: Фільтрація стрічок
 */
console.log("\n--- Завдання 3 ---");

function filterArray(initialArray) {
  // Фільтруємо масив, залишаючи тільки елементи з типом 'string'
  // Додаткова перевірка `item` (або `item.length > 0`) 
  // потрібна, щоб відфільтрувати порожні стрічки, як у прикладі.
  const stringsArray = initialArray.filter(item => typeof item === 'string' && item);
  
  console.log(stringsArray);
}

// 🔹 Приклади викликів:
filterArray([2, "string", 3, "", "test"]); // => ["string", "test"]
filterArray(["hi", null, 5, "bye"]); // => ["hi", "bye"]


/*
 * ✅ Завдання 4: Пошук по об'єкту
 */
console.log("\n--- Завдання 4 ---");

function findUser(initialObject) {
  const resultNames = [];
  
  // Object.entries() перетворює об'єкт на масив пар [ключ, значення]
  // Наприклад: ['Max', { age: 23, city: "London" }]
  for (const [name, userData] of Object.entries(initialObject)) {
    // Перевіряємо обидві умови
    if (userData.city === "London" && userData.age > 18) {
      resultNames.push(name);
    }
  }
  
  console.log(resultNames);
}

// 🔹 Приклади викликів:
findUser({
  Max: { age: 23, city: "London" },
  Mike: { age: 20, city: "NY" },
  Anna: { age: 17, city: "London" },
  Tom: { age: 30, city: "London" },
}); // => ["Max", "Tom"] (Додав Тома для перевірки)


/*
 * ✅ Завдання 5: Видалення об'єктів з масиву
 */
console.log("\n--- Завдання 5 ---");

function removeObj(arrayOfObj, keyName, value) {
  // Фільтруємо масив, *залишаючи* (return true)
  // лише ті об'єкти, в яких значення obj[keyName]
  // НЕ дорівнює ( !== ) переданому 'value'.
  const newArray = arrayOfObj.filter(obj => obj[keyName] !== value);
  
  console.log(newArray);
}

// 🔹 Приклади викликів:
const arr = [{ age: 1 }, { age: 2 }, { age: 2 }, { year: 2 }];
removeObj(arr, "age", 2); // => [{ age: 1 }, { year: 2 }]
removeObj(arr, "year", 2); // => [{ age: 1 }, { age: 2 }, { age: 2 }]