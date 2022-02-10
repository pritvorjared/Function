"use strict";

function showFirstMessage(text) {
  console.log(text);
  let num = 20;
}

showFirstMessage("Hello");

// В скобках аргумент
// Имя должно быть глаголом с припиской того над
// чем выполняется действие
// Есть анонимные ф-ции, они без имени и используются только один раз

// если мы объявляем переменную внутри ф-ции, то снаружи она недоступна
// Это локальная переменная (внутри функции)

// замыкание - это сама ф-ция вместе со всеми внешними переменными которые ей доступны

function calc(a, b) {
  return a + b;
  console.log("wedjweh"); //код который после слова return не будет выполнятся unrichebl code
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret() {
  let num = 50;
  return num;
}

const anotherNum = ret();
console.log(anotherNum);

// Function declaration - существует до того как наш код запустится. все ф-цции выше

// function expression - нужно создать переменную и в неё поместить ф-цию
const logger = function () {
  console.log("hellllllo");
};

logger();

// strelochnaya f-cia  не имеет контекста вызова

const calc = (a, b) => a + b;
