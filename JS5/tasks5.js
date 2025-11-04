/*
 * 🧩 Завдання 1: Лічильник кроків (Замикання)
 */
console.log("--- Завдання 1 ---");

function createStepCounter() {
  let steps = 0;

  return {
    step: function() {
      steps++;
      console.log(`Крок! Поточна кількість: ${steps}`);
    },
    getSteps: function() {
      return steps;
    }
  };
}

const counter = createStepCounter();
counter.step(); 
counter.step(); 
console.log(`Загалом кроків: ${counter.getSteps()}`);

/*
 * 🧩 Завдання 2: Банківський рахунок (Замикання)
 */
console.log("\n--- Завдання 2 ---");

function createBankAccount(initialBalance = 0) {
  let balance = initialBalance;

  return {
    deposit: function(amount) {
      if (amount > 0) {
        balance += amount;
        console.log(`Депозит: +${amount}. Новий баланс: ${balance}`);
      }
    },
    withdraw: function(amount) {
      if (amount > balance) {
        console.log(`Відмова: Недостатньо коштів. Баланс: ${balance}`);
      } else if (amount > 0) {
        balance -= amount;
        console.log(`Зняття: -${amount}. Новий баланс: ${balance}`);
      }
    },
    getBalance: function() {
      return balance;
    }
  };
}

const account = createBankAccount(100);
console.log(`Поточний баланс: ${account.getBalance()}`);
account.deposit(50);
account.withdraw(70);
account.withdraw(100); 
console.log(`Фінальний баланс: ${account.getBalance()}`);

/*
 * 🧩 Завдання 3: Функція зберігає ім’я користувача (Замикання)
 */
console.log("\n--- Завдання 3 ---");

function createGreeter(name) {

  return function() {
    console.log(`Привіт, ${name}!`);
  };
}

const greetOlya = createGreeter("Оля");
greetOlya(); 

const greetMax = createGreeter("Максим");
greetMax(); 

/*
 * 🧩 Завдання 4: Затриманий лічильник (Scope + setTimeout)
 */
console.log("\n--- Завдання 4 ---");

for (let i = 1; i <= 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, i * 1000); 
}

console.log("Запуск лічильника... (числа 1-5 з'являться нижче):");