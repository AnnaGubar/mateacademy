console.log('\xA9'); // 00 - FF
console.log('\u23F3'); // 0000 - FFFF (UTF-16)
console.log('\u{1F514}'); // 0 - 10FFFF (UTF-32)

console.log('\u00A9');
console.log('\u{A9}');

console.log('-------------------------------------');

const escapedString = `Hello, world! ${'\u{1F60E}'}`;
console.log(escapedString);

console.log('-------------------------------------');
// превращение в строку

const x = 123456;
console.log(typeof x);
console.log(String(x), x.toString(), '' + x, `${x}`);
console.log(typeof `${x}`); // любые кавычки превращают в строку

console.log('-------------------------------------');

let str = 'asdfg';
// str[2] = 'C';
// console.log(str);
console.log(str[0], str.charAt(0));
console.log(str[20], str.charAt(20));

console.log('-------------------------------------');
// обратный перебор

const word = 'Hello world';
for (let i = word.length - 1; i >= 0; i--) {
  console.log(word[i]);
}
//---
for (let letter of word) {
  console.log(letter);
}

console.log('-------------------------------------');
// подстрока в строке

const string = 'abcdefg abcdefg';
const part = 'efg';

console.log(
  // все методы - если не находит то -1
  string.includes(part, 3),
  string.indexOf(part, 5),
  string.lastIndexOf(part),
  string.startsWith(part),
  string.endsWith(part),
);

console.log('-------------------------------------');
// задача: подстрока в строке

const model = 'Apple iPhone 11';
const search = 'IPH';

const condition = model
  .toLocaleLowerCase()
  .includes(search.toLocaleLowerCase());
if (condition) {
  console.log('found');
}

console.log('-------------------------------------');
// символ в код, из кода в символ

const tyu = 'Does it work?';
console.log(tyu);
for (let i = 0; i < tyu.length; i++) {
  const code = tyu.charCodeAt(i);
  console.log(tyu[i], code, String.fromCharCode(code));
}

console.log('-------------------------------------');
// метод localeCompare сравнение кодов символов с учетом языка и регистра
// возвращает 1 - если 1-ое слово больше 2-го, 0 - если равноб -1 - если 1-ое меньше

const name1 = 'Misha';
const name2 = 'jonh';

console.log(
  name1,
  name2,
  name1.toLocaleLowerCase() > name2.toLocaleLowerCase(),
);

console.log(name1, name2, name1.localeCompare(name2) > 0);

console.log(name1[0], name1.charCodeAt(0), name2[0], name2.charCodeAt(0));

console.log('-------------------------------------');
//получение куска строки

const newString = '0123456789';

console.log(
  newString.substr(3, 5), // с третьего символа выводит 5 цыфр
  newString.substring(3, 5), // с третьего символа выводит до пятого
  newString.slice(3, 5), // с третьего символа выводит до пятого
);
console.log(newString.slice(-4, -2)); // начать с 4-ого символа с конца и закончить 2-ым с конца

console.log('-------------------------------------');
// символ * для безопастности

const cardNumber = '8563 1254 8512 3698';
const cardResult = cardNumber.slice(-4);
console.log(cardResult.padStart(19, '**** ')); // 16 цыфер + 3 пробела
console.log(cardResult.padEnd(16, '*'));

console.log('-------------------------------------');
// повторение символа

const divider = '-'.repeat(15);
console.log(divider);

const divider1 = '\n'.repeat(15); // \n - пустая строка
console.log(divider1);

console.log('-------------------------------------');
// замена символа

const phrase = 'what time is it ?';
const resultOfPhrase = phrase.replace('is', 'was');

console.log(resultOfPhrase);
console.log(phrase);

console.log(phrase.replace(' ', '-')); // метод replace делает только одну замену
console.log(phrase.replace(/ /g, '-')); // делает несколько замен

console.log('-------------------------------------');
// задача: нахождение цифры среди строки

function calculateGuests(guestsInput) {
  let result = '';
  for (const arr of guestsInput) {
    if ('1234567890'.includes(arr)) {
      result += arr;
    } else if (result.length > 0) {
      break;
    }
  }
  return +result || 'not a number';

  // if (parseFloat(guestsInput) === 0) {
  //   return 'not a number';
  // }

  // const match = guestsInput.match(/\d+/);

  // return match ? +match[0] : 'not a number';
}

console.log(calculateGuests('Big company of 15 dudes'));
console.log(calculateGuests('0'));
console.log(calculateGuests('11 people'));
console.log(calculateGuests('Hello, 9.75 people'));
console.log(calculateGuests('\n1 person'));
console.log(calculateGuests("I'll be 1"));
console.log(calculateGuests('we would like to book for 3 people'));
console.log(
  calculateGuests('there will be me, and others abcde12.34fghijk people'),
);

console.log('-------------------------------------');
// задача: процент единичек в строке

function getSuccessRate(statistic) {
  if (!statistic) {
    return 0;
  }

  let count = 0;

  for (const char of statistic) {
    if (char === '1') {
      count++;
    }
  }

  return Math.round((count / statistic.length) * 100);
}

console.log(getSuccessRate('1011110111101110111011101111011111101111111'));
console.log(getSuccessRate('1010101010101010101001010010101111000010101'));
console.log(getSuccessRate('1'));
console.log(getSuccessRate('000000'));
console.log(getSuccessRate(''));

console.log('-------------------------------------');
// задача: правильный порядок букв в строке

function isAlphabet(letters) {
  if (!letters) {
    return false;
  }
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return alphabet.toLowerCase().includes(letters.toLocaleLowerCase());
}

console.log(isAlphabet('abcdefghijklmnopqrstuvwxyZ'));
console.log(isAlphabet(''));
console.log(isAlphabet('Abdefgjklop'));
console.log(isAlphabet('xYz'));

console.log('-------------------------------------');
// задача: убрать гласные буквы со строки

function removeVowels(doc) {
  // const x = 'aeiouyAEIOUY';
  let y = '';

  for (const arr of doc) {
    //   if (x.includes(arr)) {
    //     continue;
    //   } else {
    //     y += arr;
    //   }
    // }

    if (!'aeiouy'.includes(arr.toLowerCase())) {
      y += arr;
    }
  }

  return y;
}

console.log(removeVowels('1e2u3o'));
console.log(removeVowels(''));
console.log(removeVowels('Mate academy!!!'));
console.log(removeVowels('EverybOdy hAtEs chrIs'));

console.log('-------------------------------------');
// задача: образование аббревиатуры

function makeAbbr(words) {
  //  const split = words.split(' ');
  let result = '';

  //  for (const letter of split) {
  //    result += letter[0].toUpperCase();
  //  }
  // return result;

  const name = ` ${words.trim()}`;
  for (let i = 0; i < name.length; i++) {
    if (name[i] === ' ') {
      result += name[i + 1];
    }
  }
  return result.toUpperCase();
}

console.log(makeAbbr('national aeronautics space administration'));
console.log(makeAbbr('central processing unit'));
console.log(makeAbbr('simplified molecular input line entry specification'));

console.log('-------------------------------------');
// задача: перевернуть строку

function decryptMessage(message) {
  let result = '';

  // for (let i = message.length - 1; i >= 0; i--) {
  //   result += message[i];
  // }

  for (const char of message) {
    result = char + result;
  }

  return result;
}

console.log(decryptMessage('!!!reeb gniknird ekil eW'));
console.log(decryptMessage('0202 ni eb lliw cimednap surivanoroc A'));

console.log('-------------------------------------');
// задача: читается ли строка в обе строны одинаково

function isWerewolf(target) {
  // let result = '';

  // for (const char of target) {
  //   result = char + result;
  // }

  // return (
  //   result.toLowerCase().replace(/ /g, '') ===
  //   target.toLowerCase().replace(/ /g, '')
  // );

  const lowerTarget = target.toLocaleLowerCase();
  const abc = 'abcdefghijkjmnopqrstuvwxyz';
  let normal = '';
  let reversed = '';

  for (const char of lowerTarget) {
    if (abc.includes(char)) {
      normal += char;
      reversed = char + reversed;
    }
  }
  return normal === reversed;
}

console.log(isWerewolf('rotator')); //=== true rotator --> rotator
console.log(isWerewolf('hOme')); //=== false - home --> emoh
console.log(isWerewolf('racecar')); //=== true
console.log(isWerewolf('red rum sir iS murder')); //=== true
console.log(isWerewolf('eva can i see bees in a cave')); //=== true

console.log('-------------------------------------');
// задача: найти самое длинное слово

function getLongestString(strings) {
  let x = '';
  let longest;

  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > x) {
      x = strings[i].length;
      longest = strings[i];
    }
  }

  return longest;
}

// console.log(getLongest(['One', 'two', 'three', 'four']));
// console.log(getLongest(['One', 'two', 'six']));

console.log('-------------------------------------');
// задача: валидность пароля

function validatePassword(password) {
  let uppers = /[A-Z]/.test(password);
  let lowers = /[a-z]/.test(password);
  let numbers = /\d/.test(password);
  let onlylatin = /^[A-Za-z\d]{8,}$/.test(password);
  return uppers && lowers && numbers && onlylatin;
}

console.log(validatePassword('password')); // false;
console.log(validatePassword('Admin12')); // false;
console.log(validatePassword('Admin123')); // true;
console.log(validatePassword('@dmiN122')); // false;


