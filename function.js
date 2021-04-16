// --- FUNCTION DECLARATION
// можно вызывать перед созданием

console.log(buildHouse(2, 'red'));
console.log(buildHouse(9, 'white'));

function buildHouse(number, color) {
  const house = `${color} ${number}-floors house`;

  return house;
}

console.log('----------------------------------');
// --- FUNCTION EXPRESSION

const buildHouse1 = function (number, color) {
  const house = `${color} ${number}-floors house`;

  return house;
};

const smallHouse = buildHouse1(2, 'red');
const bigHouse = buildHouse1(9, 'white');

console.log(smallHouse);
console.log(bigHouse);

console.log('----------------------------------');
// задача: стоимость номера в зависимости от дней пребывания

const shortTermCost = 50; // days 1-3
const weekCost = 40; // days 4-7
const longtermCost = 30; //days 8-...

console.log(
  getrentalPrice(2), // 2 * 50 = 100
  getrentalPrice(5), // 3 * 50 + 2 * 40 = 230
  getrentalPrice(10), // 3* 50 + 4 * 40 + 3 * 30 = 400
);

function getrentalPrice(numberOfDays) {
  if (numberOfDays <= 3) {
    return numberOfDays * 50;
  }

  let daysLeft = numberOfDays - 3;

  if (daysLeft <= 4) {
    return 3 * 50 + daysLeft * 40;
  }

  daysLeft = numberOfDays - 7;

  return 3 * 50 + 4 * 40 + daysLeft * 30;
}

console.log('----------------------------------');
// задача: чаевые

function getTipsRating(amount) {
  if (amount === 0) {
    return 'terrible';
  }

  if (amount <= 10) {
    return 'poor';
  }

  if (amount <= 20) {
    return 'good';
  }

  if (amount <= 50) {
    return 'great';
  }

  return 'excellent';
}

console.log(getTipsRating(0));
console.log(getTipsRating(5));
console.log(getTipsRating(15));
console.log(getTipsRating(51));

console.log('----------------------------------');
// задача: расчет налогов

const calculateTaxes = income => {
  const rate1 = 0.02;
  const step1 = 1000;

  const rate2 = 0.03;
  const step2 = 10000;

  const rate3 = 0.05;

  if (income <= step1) {
    return income * rate1;
  }

  let result;

  if (income > step1 && income < step2) {
    result = (income - step1) * rate2 + step1 * rate1;

    return result;
  }

  result = (income - step2) * rate3 + step1 * rate1 + (step2 - step1) * rate2;

  return result;
};

console.log(calculateTaxes(999));
console.log(calculateTaxes(1000));
console.log(calculateTaxes(1001));
console.log(calculateTaxes(5000));
console.log(calculateTaxes(9999));
console.log(calculateTaxes(10000));
console.log(calculateTaxes(20000));

console.log('----------------------------------');
// задача: вернуть большее значение

const getLargestExpressionResult = (a, b) => {
  const sum1 = a + b;
  const sum2 = a - b;
  const sum3 = a * b;
  const sum4 = a / b;

  if (sum1 > sum2 && sum1 > sum3 && sum1 > sum4) {
    return sum1;
  }

  if (sum2 > sum1 && sum2 > sum3 && sum2 > sum4) {
    return sum2;
  }

  if (sum3 > sum1 && sum3 > sum2 && sum3 > sum4) {
    return sum3;
  }

  return sum4;
};

console.log(getLargestExpressionResult(1, 1));
console.log(getLargestExpressionResult(5, 10));
console.log(getLargestExpressionResult(2, -2));
console.log(getLargestExpressionResult(-2, 3));
console.log(getLargestExpressionResult(-5, -0.5));

console.log('----------------------------------');
// задача: движение робота по команде

const getDirection = direction => {
  switch (direction) {
    case 'left':
      return format(-1, 0);

    case 'right':
      return format(1, 0);

    case 'forward':
      return format(0, 1);

    case 'back':
      return format(0, -1);

    default:
      return format(0, 0);
  }
};

function format(x, y) {
  return `hor=${x} ver=${y}`;
}

console.log(getDirection('back'));

console.log('----------------------------------');
// вызов функции в цикле

const count = getCount();
const secondsInDay = 60 * 60 * 24;

for (let i = 0; i < count; i++) {
  let seconds = i * secondsInDay;
  console.log(i, seconds);
}

function getCount() {
  console.log('Counting');

  return 10;
}

console.log('----------------------------------');
// цикл с условием, где сперва условие

let n = 1240;
n = 123;
let count2 = 0;

while (n % 2 === 0) {
  n = n / 2;
  console.log(n);

  count2++;
}

console.log(count2);

// если нужно что бы условие выполнилось хотя бы раз

do {
  n = n / 2;
  console.log(n);

  count2++;
} while (n % 2 === 0);

console.log(count2);

console.log('----------------------------------');

function getValue() {
  const value = Math.random();

  if (value < 0.2) {
    return 0;
  }
  return value;
}

let x = getValue();

while (x > 0) {
  console.log(x);
  x = getValue();
}

while (true) {
  let x = getValue();

  if (x === 0) {
    break;
  }
  console.log(x);
}

console.log('----------------------------------');
// задача: ...

function getDrinks(numberOfGuests, step) {
  let count = 0;

  for (let i = 1; i <= numberOfGuests; i += step) {
    count += i;
    console.log(count);
  }
  return count;
}

console.log(getDrinks(10, 2));

console.log('----------------------------------');
// задача: подсчет суммы за указанный период

// console.log(1000 * (5 * 0.01) + 100);
function calculateProfit(startAmount, percent, period) {
  let currentAmount = startAmount;

  if (period === 0) {
    return 0;
  }

  for (let i = 1; i <= period; i++) {
    currentAmount += currentAmount * (percent * 0.01);
  }

  return Math.round(currentAmount - startAmount);
}

console.log(calculateProfit(1000, 5, 7));

console.log('----------------------------------');
// задача: подсчет возможного кредита на лимитную сумму

// function getYears(amount, percent, limit) {
//   let clearAmount = amount;
//   let years = 0;

//   while (clearAmount <= limit) {
//     years++;
//     clearAmount += clearAmount * (percent * 0.01);
//     console.log(years, clearAmount);
//   }
//   return years - 1;
// }

function getYears(amount, percent, limit) {
  let clearAmount = amount;
  let i;

  for (i = 0; i <= limit; i++) {
    clearAmount += clearAmount * (percent * 0.01);
    if (clearAmount > limit) {
      break;
    }
  }
  return i;
}

console.log(getYears(1600, 10, 2000));
console.log(getYears(500, 3, 550));

console.log('----------------------------------');
// задача: странные проценты

function getPlan(currentProduction, months, percent) {
  let result = [];
  let fixed_percentage = (100 + percent) / 100;
  for (let i = 1; i <= months; i++) {
    result.push(
      (currentProduction = Math.floor(currentProduction * fixed_percentage)),
    );
  }
  return result;
}

console.log(getPlan(1000, 6, 30));
console.log(getPlan(500, 3, 50));
