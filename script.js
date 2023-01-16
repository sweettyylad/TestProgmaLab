
// Изначальные данные
const opers = ["+", "-", ""];
const cyphs = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];
const result = 200;

// Переменные для работы
const start = Array(cyphs.length - 1).fill(0);
const end = Math.pow(opers.length, cyphs.length - 1);

/*
* @indxs - массив с индексами для
* вставки операций (+, -, _) в строку из цифр
* (можно добавить операции, работа кода не нарушится)
* Функция получает эти индексы и выдаёт строку с выражением
*/
function getString(indxs) {
  let str = `${ cyphs[0] }`;

  for (let i = 1; i < cyphs.length; i++) {
    str += `${ opers[indxs[i - 1]] }${ cyphs[i] }`;
  }

  return str;
}

/*
* функция-помощник для
* перебора всех возможных вариантов
*/
function incToOne(indxs) {

  indxs[indxs.length - 1] += 1;

  for (let i = indxs.length - 1; i > 0; i--) {
    if (indxs[i] === opers.length) {
      indxs[i] = 0;
      indxs[i - 1] = indxs[i - 1] + 1;
    }
  }

}

// Сюда запишем все возможные варианты
const variables = [];

/*
* Функция, перебирающая все комбинации
* и решающая, подходит ли текущая комбинация нам
* (соответствует ли результат выражения требуемому)
*/
function getAllCombs(indxs) {

  for (let i = 0; i <= end; i++) {
    if (eval(getString(indxs)) === result) {
      variables.push(`${getString(indxs)} = ${eval(getString(indxs))}`);
    }

    if (i > 0) {
      incToOne(indxs);
    }
  }
}

getAllCombs(start);
console.log(variables);

