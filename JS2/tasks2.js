/*
 * Завдання 1: Виведення степенів двійки
 */
function printPowsOf2(number) {
    if (typeof number !== 'number') {
      console.log(`Input: ${JSON.stringify(number)} → "incorrect type"`);
      return;
    }
  
    let pow = 1;
    const result = [];
    while (pow <= number) {
      result.push(pow);
      pow *= 2; 
    }
  
    console.log(`Input: ${number} → ${result.join(', ')}`);
  }
  
  console.log("--- Завдання 1 ---");
  printPowsOf2("302");
  printPowsOf2(null);
  printPowsOf2(128);
  printPowsOf2(60);
  printPowsOf2(64); 
  
  /*
   * Завдання 2: Сума чисел у масиві
   */
  function calculateSumOfArray() {
    const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];
    let sum = 0;
  
    for (const item of initialArray) {
      if (typeof item === 'number') {
        sum += item;
      }
    }
  
    console.log(`Масив: [${initialArray.join(', ')}]`);
    console.log(`Сума чисел у масиві: ${sum}`); 
  }
  
  console.log("\n--- Завдання 2 ---");
  calculateSumOfArray();
  
  /*
   * Завдання 3: Визначення пори року за місяцем
   */
  function printSeasonByMonth(month) {
    let season;
  
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
  printSeasonByMonth("FEBRUARY"); 
  
  
  /*
   * Завдання 4: Підрахунок слів у стрічці
   */
  function calculateWordsInString(string) {
    const words = string.trim().split(/\s+/);
    
    console.log(`"${string}" → ${words.length} слів`);
  }
  
  console.log("\n--- Завдання 4 ---");
  calculateWordsInString("Easy string for count");
  calculateWordsInString("Easy");
  calculateWordsInString("Some string with a triple   space");
  calculateWordsInString("Some?  string, with a triple   space");
  