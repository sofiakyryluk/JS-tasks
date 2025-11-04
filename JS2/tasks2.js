/*
 * Завдання 1: Виведення степенів двійки
 */
function printPowsOf2(number) {
    // Перевіряємо, що тип 'number' - це число
    // typeof null повертає 'object', тому null теж не пройде
    if (typeof number !== 'number') {
      // Використовуємо JSON.stringify, щоб коректно відобразити null або "302"
      console.log(`Input: ${JSON.stringify(number)} → "incorrect type"`);
      return;
    }
  
    let pow = 1;
    const result = [];
    while (pow <= number) {
      result.push(pow);
      pow *= 2; // Множимо на 2 для отримання наступного степеня
    }
  
    // Виводимо результат в одному рядку, як у прикладі
    console.log(`Input: ${number} → ${result.join(', ')}`);
  }
  
  console.log("--- Завдання 1 ---");
  printPowsOf2("302");
  printPowsOf2(null);
  printPowsOf2(128);
  printPowsOf2(60);
  printPowsOf2(64); // Додатковий тест з прикладу
  
  
  /*
   * Завдання 2: Сума чисел у масиві
   */
  function calculateSumOfArray() {
    const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];
    let sum = 0;
  
    // Проходимо по кожному елементу масиву
    for (const item of initialArray) {
      // Перевіряємо, що тип елемента - 'number'
      if (typeof item === 'number') {
        sum += item; // Додаємо до суми
      }
    }
  
    console.log(`Масив: [${initialArray.join(', ')}]`);
    console.log(`Сума чисел у масиві: ${sum}`); // 3 + 2 + 1.5 + 9.5 = 16
  }
  
  console.log("\n--- Завдання 2 ---");
  calculateSumOfArray();
  
  
  /*
   * Завдання 3: Визначення пори року за місяцем
   */
  function printSeasonByMonth(month) {
    let season;
  
    // Використовуємо switch для перевірки.
    // toUpperCase() робить перевірку нечутливою до регістру.
    switch (month.toUpperCase()) {
      case "DECEMBER":
      case "JANUARY":
      case "FEBRUARY":
        season = "winter";
        break;
      case "MARCH":
      case "APRIL":
      case "MAY":
        season = "spring";
        break;
      case "JUNE":
      case "JULY":
      case "AUGUST":
        season = "summer";
        break;
      case "SEPTEMBER":
      case "OCTOBER":
      case "NOVEMBER":
        season = "autumn";
        break;
      default:
        // Обробка, якщо назва місяця введена неправильно
        console.log(`Помилка: Некоректна назва місяця "${month}"`);
        return;
    }
  
    console.log(`${month} → ${season}`);
  }
  
  console.log("\n--- Завдання 3 ---");
  printSeasonByMonth("SEPTEMBER");
  printSeasonByMonth("NOVEMBER");
  printSeasonByMonth("JULY");
  printSeasonByMonth("APRIL");
  printSeasonByMonth("FEBRUARY"); // Додатковий тест
  
  
  /*
   * Завдання 4: Підрахунок слів у стрічці
   */
  function calculateWordsInString(string) {
    // 1. .trim() - видаляє пробіли на початку та в кінці (хоча за умовою їх немає, це гарна практика)
    // 2. .split(/\s+/) - розділяє стрічку по одному АБО БІЛЬШЕ пробілам
    //    \s - будь-який пробільний символ
    //    +  - один або більше
    const words = string.trim().split(/\s+/);
    
    // Кількість слів - це просто довжина отриманого масиву
    console.log(`"${string}" → ${words.length} слів`);
  }
  
  console.log("\n--- Завдання 4 ---");
  calculateWordsInString("Easy string for count");
  calculateWordsInString("Easy");
  calculateWordsInString("Some string with a triple   space");
  calculateWordsInString("Some?  string, with a triple   space");
  