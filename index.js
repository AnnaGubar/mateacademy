// document.write('hi', '<br>'); // ошибка из-за модуля на файле .js
// document.write(123, '<br>');
// document.write('', '<br>');

console.log('hi');
console.log(123);

let cash = 20;
const applePrice = 6;
const bananaPrice = 8;

let goodsAmount = applePrice + bananaPrice;
let restAmount = cash - goodsAmount;

console.log(restAmount);
// document.write(restAmount, '<br>');
// document.write('', '<br>');

if (goodsAmount <= cash) {
  // document.write('I am able to buy an apple and a banana');
  console.log('I am able to buy an apple and a banana');
} else {
  // document.write('I have money only for an apple or a banana');
  console.log('I have money only for an apple or a banana');
}

// let result1 =
//   goodsAmount <= cash
//     ? document.write('I am able to buy an apple and a banana')
//     : document.write('I have money only for an apple or a banana');

let result2 =
  goodsAmount <= cash
    ? console.log('I am able to buy an apple and a banana')
    : console.log('I have money only for an apple or a banana');

console.log('----------------------------------');

let amount = 12;
const cookie = 12;
const candy = 9;

amount = amount - cookie;

if (amount >= candy) {
  console.log('I can buy bouth');
} else {
  console.log('I manage to buy only cookie');
}

console.log('----------------------------------');
// оператор typeof

const x = 5;
console.log(x);
const type = typeof (x + 1);
console.log(type);

console.log('----------------------------------');
// преобразование в числовое значение и проверка
// isFinite проверяет конечно ли число

console.log(isFinite(5)); // true
console.log(isFinite(Infinity)); // false

// const input = '';
// const input = '   ';
// const input = 'hgjk';
// const input = 'Infinity';
const input = '\t \n \r';
// const input = '12';
// const input = '  56  ';
if (input.trim() && isFinite(input)) {
  // if (!isNaN(input)) {
  console.log(`input = '${input.trim()}' - 'OK'`);
} else {
  console.log(`input = '${input}' - 'ERROR'`);
}

console.log(typeof Infinity);

console.log('----------------------------------');
// задача: год = век

function getCentury(year) {
  if (year === 0 || year === 1) {
    return 1;
  }

  const yearToString = year.toString();
  const yearToArray = yearToString.split('');
  const firstTwoNumbers = `${yearToArray[0]}${yearToArray[1]}`;
  const toNumber = Number(firstTwoNumbers);

  if (year >= 1000 && year < 9999) {
    if (yearToArray[3] > 0) {
      return toNumber + 1;
    }

    return toNumber;
  }

  if (year >= 10000) {
    const firstThreeNumbers = `${yearToArray[0]}${yearToArray[1]}${yearToArray[2]}`;

    return Number(firstThreeNumbers);
  }
}

// function getCentury(year) {
//   return Math.ceil(year / 100);
// }

console.log(getCentury(2000)); //20
console.log(getCentury(40000)); //400
console.log(getCentury(0)); //1
console.log(getCentury(1)); //1
console.log(getCentury(2001)); //21

console.log('----------------------------------');
// задача: конвертер валют

function convertCurrency(amount, exchangeRate, currencyName) {
  if (amount <= 0 || exchangeRate <= 0) {
    return 'Enter valid data';
  }

  const convertAmount = amount * exchangeRate;

  // if (convertAmount !== parseInt(convertAmount)) {
  //   return `Give them ${convertAmount.toFixed(2)} ${currencyName}('s)`;
  // }

  return `Give them ${+convertAmount.toFixed(2)} ${currencyName}('s)`;
}

console.log(convertCurrency(-145, -0.55, 'ruble'));
console.log(convertCurrency(230, 0.14, 'peso'));
console.log(convertCurrency(150, 0, 'bolivar'));
console.log(convertCurrency(313, 0.228, 'euro'));
console.log(convertCurrency(1000, 0.037, 'dollar'));

console.log(3 ** 2);

console.log('----------------------------------');
// задача: площадь треугольника

function getRectangleArea(side, diagonal) {
  if (diagonal === 0 || side === 0 || side >= diagonal) {
    return 'not a rectangle';
  }

  // const square = +(side * Math.sqrt(diagonal ** 2 - side ** 2)).toFixed(2);
  // return square;

  const sideTwo = Math.sqrt(diagonal ** 2 - side ** 2);
  return Math.round(side * sideTwo * 100) / 100;
}

console.log(getRectangleArea(100, 100));
console.log(getRectangleArea(10.5, 20.1));
console.log(getRectangleArea(20, 0));
console.log(getRectangleArea(0, 20));
console.log(getRectangleArea(5, 11));

console.log('----------------------------------');
// задача: проверка на четность

function isEven(number) {
  if (parseInt(number) !== parseFloat(number)) {
    return false;
  }

  return number % 2 === 0;
}

console.log(isEven(16));
console.log(isEven(0));
console.log(isEven(2, 22));
console.log(isEven(100));
console.log(isEven(31));

console.log(221 / 100);

console.log('----------------------------------');
// задача: карантин + встречи

function countNetworking(quarantineLength, frequency) {
  if (quarantineLength === 0) {
    return 12 / frequency;
  }

  for (let i = 0; (i = quarantineLength); i++) {
    const x = Math.ceil((12 - i) / frequency);

    return x;
  }
}

console.log(countNetworking(11, 1));
console.log(countNetworking(0, 1));
console.log(countNetworking(12, 1));
console.log(countNetworking(3, 4));
