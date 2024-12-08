// Розкласти за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл. Приклад роботи програми:

// 10369

// 1 0 3 6 9

const someNumber = 10369;
const strNumber = someNumber.toString();
console.log(strNumber);
const arrFromsStr = strNumber.split("");
console.log(arrFromsStr);
const strFromArr = arrFromsStr.join(" ");
console.log(strFromArr);

