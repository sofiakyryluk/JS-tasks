let userName = prompt("Введіть ваше імʼя:");
let userAge = prompt("Введіть ваш вік:");

let user = {
  name: userName,
  age: Number(userAge)
};

console.log("Імʼя: " + user.name + ", вік: " + user.age);

if (user.age < 18) {
  console.log("Доступ заборонено");
} else {
  console.log("Доступ дозволено");
}

