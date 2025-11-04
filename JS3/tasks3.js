/*
 * ✅ Завдання 1. Власна імплементація Array.includes()
 */
console.log("--- Завдання 1 ---");

function myIncludes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

console.log(`myIncludes([1, 2, 3], 2): ${myIncludes([1, 2, 3], 2)}`); // Очікується: true
console.log(`myIncludes([1, 2, 3], 5): ${myIncludes([1, 2, 3], 5)}`); // Очікується: false


/*
 * ✅ Завдання 2. Робота з об’єктом
 */
console.log("\n--- Завдання 2 ---");

const user = {};
user.name = "Іван";
user.surname = "Сміт";
console.log("Додали name та surname:", user);

user.name = "Петро";
console.log("Змінили name на Петро:", user);

delete user.name;
console.log("Видалили name:", user);


/*
 * ✅ Завдання 3. Переписування if → switch
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
// (Закоментовано, щоб не блокувати виконання іншого коду в консолі)
console.log("Рішення для Завдання 3 знаходиться у коментарях вище.");


/*
 * ✅ Завдання 4. Функція isEmpty(obj)
 */
console.log("\n--- Завдання 4 ---");

function isEmpty(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false; 
    }
  }
  return true;
}

let schedule = {};
console.log(`schedule порожній? ${isEmpty(schedule)}`); 

schedule["8:30"] = "Вставай";
console.log(`schedule порожній? ${isEmpty(schedule)}`); 

/*
 * ✅ Завдання 5. Об’єднання двох масивів
 */
console.log("\n--- Завдання 5 ---");

function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

console.log(mergeArrays([1, 2], [3, 4])); 
console.log(mergeArrays(['a', 'b'], ['c'])); 

/*
 * ✅ Завдання 6. Власна імплементація Array.join()
 */
console.log("\n--- Завдання 6 ---");

function myJoin(arr, separator = ",") {

  let resultString = "";
  for (let i = 0; i < arr.length; i++) {
    resultString += arr[i];
    
    if (i < arr.length - 1) {
      resultString += separator;
    }
  }
  return resultString;
}

console.log(`myJoin([1, 2, 3], "-"): "${myJoin([1, 2, 3], "-")}"`);
console.log(`myJoin(["Hello", "world"], " "): "${myJoin(["Hello", "world"], " ")}"`);
console.log(`myJoin(["a", "b", "c"]): "${myJoin(["a", "b", "c"])}"`);