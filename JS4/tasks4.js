/*
 * ✅ Завдання 1: Унікальні значення
 */
console.log("--- Завдання 1 ---");

function unicFn(initialArray) {
  const uniqueSet = new Set(initialArray);
  
  const uniqueArray = Array.from(uniqueSet); 
  
  console.log(uniqueArray);
}

unicFn([2, 3, 1, 3, 3, 7]); 
unicFn(["a", "b", "a", "c"]); 

/*
 * ✅ Завдання 2: Перевірка на парні числа
 */
console.log("\n--- Завдання 2 ---");

function isEvenArray(initialArray) {
  const allEven = initialArray.every(number => number % 2 === 0);
  
  console.log(allEven ? "YES" : "NO");
}

isEvenArray([1, 2, 3, 9]); 
isEvenArray([2, 4, 6]); 

/*
 * ✅ Завдання 3: Фільтрація стрічок
 */
console.log("\n--- Завдання 3 ---");

function filterArray(initialArray) {
  const stringsArray = initialArray.filter(item => typeof item === 'string' && item);
  console.log(stringsArray);
}

filterArray([2, "string", 3, "", "test"]); 
filterArray(["hi", null, 5, "bye"]); 

/*
 * ✅ Завдання 4: Пошук по об'єкту
 */
console.log("\n--- Завдання 4 ---");

function findUser(initialObject) {
  const resultNames = [];
  
  for (const [name, userData] of Object.entries(initialObject)) {
    if (userData.city === "London" && userData.age > 18) {
      resultNames.push(name);
    }
  }
  
  console.log(resultNames);
}

findUser({
  Max: { age: 23, city: "London" },
  Mike: { age: 20, city: "NY" },
  Anna: { age: 17, city: "London" },
  Tom: { age: 30, city: "London" },
}); 

/*
 * ✅ Завдання 5: Видалення об'єктів з масиву
 */
console.log("\n--- Завдання 5 ---");

function removeObj(arrayOfObj, keyName, value) {
  const newArray = arrayOfObj.filter(obj => obj[keyName] !== value);
  
  console.log(newArray);
}

const arr = [{ age: 1 }, { age: 2 }, { age: 2 }, { year: 2 }];
removeObj(arr, "age", 2); 
removeObj(arr, "year", 2); 