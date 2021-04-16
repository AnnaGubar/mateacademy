// кодировка символов

const decimal = 123;
console.log(decimal.toString(16));

/* 
10 - a
11 - b
12 - c
13 - d
14 - e
15 - f
*/
const binary = 0b100101;
/* 
100101 = 1*32 + 0*16 + 0*8 + 1*4 + 0*2 + 1*1
100101 = 1*100000 + 0*10000 + 0*1000 + 1*100 + 0*10 + 1*1
100101 = 1*1048576 + 0*65536 + 0*4096 + 1*256 + 0*16 + 1*1
          16**5       16**4     16**3   16**2   16**1
*/
const hex = 0xff;

console.log(`decimal 111 = ${decimal}`);
console.log(`binary 111 = ${binary}`);
console.log(`hex 111 = ${hex}`);

console.log('----------------------------------');
// проверка на конечность цыфр

const x = Number.MAX_VALUE;
console.log(x);
console.log(x * 2);
console.log(isFinite(x)); // finite = конечный
console.log(isFinite(x * 2));
console.log(isFinite(Infinity));

console.log('----------------------------------');
// числа, строки, NaN

const y = 0 / 0;
console.log(y);
console.log(isNaN(y));

const w = 2;
console.log(w * '2d');
console.log(w + '');
console.log(w + '1');

const r = 1 + ' ';
console.log(r);

const g = 4 + '5';
console.log(g);

const b = 10 / '20';
console.log(b);

console.log('----------------------------------');
// ++i   i++

let n = 0;

n = n + 1;
console.log(n);
n += 1;
console.log(n);
n++;
console.log(n);

console.log(n++, 3);
console.log(n);
console.log((n += 1), 3);
console.log(n);
console.log(++n);

let i = 0;

++i;
const left = i;

const right = i;
i++;

console.log(left === right);
console.log(++i === i++);

console.log('----------------------------------');
// число в строке

const value = '100.5hj';
// const value = '100.5';

console.log(Number(value), 'Number');
console.log(+value, '+');
console.log(parseFloat(value), 'parseFloat');
console.log(parseInt(value), 'parseInt');

console.log('----------------------------------');
// задача: поиск числа в строке

function getGuestsCount(guestsInput) {
  // if (parseInt(guestsInput) >= 0) {
  //   return parseInt(guestsInput);
  // } else {
  //   return 'not a number';
  // }

  let match = guestsInput.match(/\d/); // = 0 - 9

  return match ? match[0] : 'not a number';
}

console.log(getGuestsCount('string'));
console.log(getGuestsCount('I"ll 1'));
console.log(getGuestsCount('maybe 11 guests'));
console.log(getGuestsCount('o we won"t visit you!!'));
console.log(getGuestsCount('3 people'));
console.log(getGuestsCount('1 person', '---1'));

console.log(parseInt(isNaN(true)));
console.log(parseInt('maybe 11 guests') === !!false);

console.log('----------------------------------');
// операторы округления

// let z = 12.123;
let z = -12.523;

console.log(z);

console.log('Math.floor(z)', Math.floor(z), 'целое <= z');
console.log('Math.ceil(z)', Math.ceil(z), 'целое >= z');
console.log('Math.round(z)', Math.round(z), 'ближайшее целое');
console.log('Math.trunc(z)', Math.trunc(z), 'без дробной части');
console.log('z.toFixed(0)', +z.toFixed(0));
