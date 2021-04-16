// создание массива

const numbers = [10, 11, 'rfg', 13];
const numbers2 = new Array(10, 11, 12, 13);
console.log(numbers, numbers2);

console.log('----------------------------------');
// запись значения в массив

const numbers3 = [4];
const numbers4 = new Array(4);
console.log(numbers3, numbers4);

console.log('----------------------------------');

// numbers.push(100); // добавление
// numbers[4] = 0; // добавление-изменение
// numbers[numbers.length] = 0; // добавление
numbers[1] = 'fff';
console.log(numbers);

console.log('----------------------------------');
//разделение строки на массив

const string = 'gfhjk';

console.log(string.split(''));
console.log(Array.from(string));
console.log([...string]);

console.log('----------------------------------');
//добавление и удаление эл.

let numbers5 = [1, 2, 3, 4, 5];
console.log(numbers5);

numbers5.push(6, 7, 8, 9);
console.log(numbers5);

const x = numbers5.pop();
console.log(x);
console.log(numbers5);

console.log('----------------------------------');
// задача: определенный массив деталей

// здесь ошибка почему-то

// const makeStickers = (detailsCount, robotPart) => {
//   let result = [];
//   for (let i = 1; i <= detailsCount; i++) {
//     result.push(`${robotPart} detail #${i}`);
//   }
//   return result;
// };

// console.log(makeStikers(3, 'Body'));
// console.log(makeStikers(4, 'Head'));

console.log('----------------------------------');
// задача: удвоение входящих данных

function doublePower(currentPowers) {
  if (currentPowers === []) {
    return [];
  }

  let y = [];

  for (const x of currentPowers) {
    y.push(x * 2);
  }

  return y;
}

console.log(doublePower([100, 150, 200, 220]));
console.log(doublePower([0, 1, 2, 3, 4, 5]));
console.log(doublePower([0]));
console.log(doublePower([]));
console.log(doublePower([1]));

console.log('----------------------------------');
// задача: поиск min, max, среднего значений

function getSpeedStatistic(testResults) {
  if (testResults.length === 0) {
    return [0, 0, 0];
  }

  let min = testResults[0];
  let max = testResults[0];
  let sum = 0;

  for (const speed of testResults) {
    sum += speed;

    if (speed < min) {
      min = speed;
    }

    if (speed > max) {
      max = speed;
    }
  }

  const average = Math.floor(sum / testResults.length);

  return [min, max, average];

  // if (!testResults.length) {
  //   testResults = [0];
  // }

  // return [
  //   Math.min(...testResults),
  //   Math.max(...testResults),
  //   Math.floor(testResults.reduce((a, b) => a + b) / testResults.length),
  // ];
}

console.log(getSpeedStatistic([10, 10, 11, 9, 12, 8]));
console.log(getSpeedStatistic([4.5, 6.7, 9.2, 1]));
console.log(getSpeedStatistic([8, 9, 9, 9]));
console.log(getSpeedStatistic([]));

console.log('----------------------------------');
// задача: производительность робота

function compareRobots(firstRobotResults, secondRobotResults) {
  let firstMachine = 0;
  let secondMachine = 0;

  for (const x of firstRobotResults) {
    firstMachine += x;
  }

  for (const x of secondRobotResults) {
    secondMachine += x;
  }

  if (firstMachine === secondMachine) {
    return 'Both robots for sale!';
  } else if (firstMachine > secondMachine) {
    return 'First robot for sale!';
  } else if (firstMachine < secondMachine) {
    return 'Second robot for sale!';
  }
}

console.log(compareRobots([12, 4, 13], [1, 1, 4, 5, 12])); //'First robot for sale!' - 29 > 23;
console.log(compareRobots([9, 7, 9], [1, 3, 4, 5, 12])); //'Both robots for sale!' - 25 = 25;
console.log(compareRobots([1, 3, 4], [1, 1, 4, 5])); //'Second robot for sale!' - 8 < 11;

console.log('----------------------------------');
// задача: последовательность чисел

function isSorted(boxNumbers) {
  // const isSorted = arr => arr.every((v, i, a) => !i || a[i - 1] <= v);
  // return isSorted(boxNumbers);

  for (let i = 1; i < boxNumbers.length; i++) {
    if (boxNumbers[i - 1] > boxNumbers[i]) {
      return false;
    }
  }
  return true;
}

console.log(isSorted([1, 5, 7])); // true
console.log(isSorted([0, 1, 1, 1, 2])); // true
console.log(isSorted([1, 2, 11])); // false
console.log(isSorted([5])); // true
console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([])); // true
console.log(isSorted([0, 3, 1, 2, 2, 2])); // false
console.log(isSorted([1, 11, 2])); // false
console.log(isSorted([5, 3])); // false

console.log('----------------------------------');
// задача: позиция робота после массива команд

function getLocation(coordinates, commands) {
  const arr = [...coordinates];

  for (let i = 0; i < commands.length; i++) {
    switch (commands[i]) {
      case 'forward':
        arr[1]++;
        break;

      case 'back':
        arr[1]--;
        break;

      case 'right':
        arr[0]++;
        break;

      case 'left':
        arr[0]--;
        break;
    }
  }
  return arr;
}

console.log(getLocation([0, 0], ['forward', 'right']));
console.log(getLocation([2, 3], ['back', 'back', 'back', 'right']));
console.log(
  getLocation([0, 5], ['back', 'back', 'back', 'right', 'left', 'forward']),
);

console.log('----------------------------------');
// задача: сумма += процент за период

function getPlan(currentProduction, months, percent) {
  const targets = [];
  let target = currentProduction;

  for (let i = 1; i <= months; i++) {
    target += Math.floor((target * percent) / 100);
    targets.push(target);
  }

  return targets;
}

console.log(getPlan(1000, 6, 30)); // [1300, 1690, 2197, 2856, 3712, 4825]
console.log(getPlan(500, 3, 50)); // [750, 1125, 1687]

console.log('-----------------------------------');
// задача: создать массив отличий

function getDifferences(a, b) {
  const aDiff = a.filter(i => !b.includes(i));
  const bDiff = b.filter(i => !a.includes(i));

  return aDiff.concat(bDiff);
}

console.log(getDifferences([1, 2, 3, 4], [2, 3, 5, 6])); // [1, 4, 5, 6];
console.log(getDifferences([1, 2, 3, 4], [1, 2, 3, 4])); // [];
console.log(getDifferences([1, 2, 3], [5, 6, 7, 8])); // [1, 2, 3, 4, 5, 6, 7, 8];
console.log(getDifferences([1, 2], [3, 2, 6, 7])); // [1, 3, 6, 7];
