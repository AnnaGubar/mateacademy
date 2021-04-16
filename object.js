const user = {
  firstName: 'Misha',
  lastName: 'Hrynko',
  age: 36,
};

user.lastName = 'Smith'; // замена
user['isMarried'] = true; // добавление

console.log(user['firstName'], user.lastName);
console.log(user);

// delete user.age; // удаление
delete user['age'];
console.log(user);

console.log('age' in user, 'lastName' in user); // ищет и в прототипе
console.log(user.hasOwnProperty('age'), user.hasOwnProperty('lastName')); // только собственные

console.log('----------------------------------');
// не дает записать
// ключ -3- записывается одинаково хоть и с разными кавычками и уравнением

const data = {
  3: 100, // '3'
  3: 200, // "3"
  3: 300, // `3`
  [1 + 2]: 400,
};
console.log(data);
console.log(data['3'], data['3'], data[3], data[`3`], data[1 + 2]);

const a = {
  ghj: 2,
  ghj: 2,
};
console.log(a);

console.log('----------------------------------');
// целые не отрицательные числа перебираются первыми

const point = {
  x: 1,
  y: 2,
  z: 3,
  0: 123,
  3: 456,
};

point.qwe = 123;

for (let key in point) {
  console.log(key, point[key]);
}

console.log('----------------------------------');
// задача: средняя длительность жизни

function getAverageAge(people) {
  const x = people.reduce((prev, user) => prev + (user.died - user.born), 0);

  return x / people.length;
}

console.log(
  getAverageAge([
    { name: 'Carolus Haverbeke', born: 1832, died: 1905 },
    { name: 'Emma de Milliano', born: 1876, died: 1956 },
    { name: 'Maria de Rycke', born: 1683, died: 1724 },
    { name: 'Jan van Brussel', born: 1714, died: 1748 },
  ]),
);

console.log('----------------------------------');
// задача: добавляет ключ со значением

function addFullName(user) {
  // user.fullName = user.firstName + ' ' + user.lastName;
  user.fullName = `${user.firstName} ${user.lastName}`;
  return user;
}

const user2 = {
  firstName: 'Ivan',
  lastName: 'Vasylchenko',
};

addFullName(user);

console.log(user);

console.log('----------------------------------');
// задача: восстановить ключ с инфы другого ключа

function restoreNames(users) {
  // users.forEach(user => {
  //   if (!user.firstName) {
  //     user.firstName = user.fullName.split(' ')[0];
  //   }
  // });

  for (const usert of users) {
    if (usert.firstName) {
      continue;
    }
    const nameParts = usert.fullName.split(' ');
    usert.firstName = nameParts[0];
    return usert;
  }
  return users;
}

const users = [
  {
    firstName: undefined,
    lastName: 'Holy',
    fullName: 'Jack Holy',
  },
  {
    firstName: undefined,
    lastName: 'Adams',
    fullName: 'Mike Adams',
  },
];

const users3 = [
  {
    firstName: 'Kenneth',
    lastName: 'S.Oliva',
    fullName: 'Loly S.Oliva',
  },
];

console.log(restoreNames(users));
console.log(restoreNames(users3));

console.log('----------------------------------');
// задача: удаление ключа по значению

function removeFemaleAges(people) {
  for (const person of people) {
    if (person.gender === 'female') {
      delete person.age;
    }
  }
}
const people = [
  {
    name: 'Emma',
    gender: 'female',
  },
  {
    name: 'Sophia',
    gender: 'female',
  },
];
const people1 = [
  {
    name: 'Lilia',
    gender: 'female',
  },
  {
    name: 'Robert',
    gender: 'male',
    age: 51,
  },
  {
    name: 'Michael',
    gender: 'male',
    age: 31,
  },
];

console.log(removeFemaleAges(people));
console.log(removeFemaleAges(people1));

console.log('----------------------------------');

function getOutdated(robots, newVersion) {
  let x = [];

  for (let i = 0; i < robots.length; i++) {
    if (robots[i].coreVersion < newVersion) {
      x.push(i);
    }
  }
  return x;
}

const robots = [
  { coreVersion: 9 },
  { coreVersion: 13 },
  { coreVersion: 16 },
  { coreVersion: 9 },
  { coreVersion: 14 },
];

console.log(getOutdated(robots, 10)); // [0, 3];
console.log(getOutdated(robots, 14)); // [0, 1, 3];
console.log(getOutdated(robots, 8)); // [];
console.log(getOutdated(robots, 18)); // [0, 1, 2, 3, 4];

console.log('----------------------------------');
// задача: подсчитать символы в троке и создать обьект

function countBoxes(boxes) {
  const obj = {};

  // for (let i = 0; i < boxes.length; i++) {
  //   if (obj[boxes[i]] !== undefined) {
  //     obj[boxes[i]] = obj[boxes[i]] + 1;
  //   } else {
  //     obj[boxes[i]] = 1;
  //   }
  // }

  for (const type of boxes) {
    if (!obj[type]) {
      obj[type] = 0;
    }
    obj[type]++;
  }

  return obj;
}

console.log(countBoxes('aabca')); // { a: 3, b: 1, c: 1 }
console.log(countBoxes('aaaaca31')); // { a: 5, c: 1, 3: 1, 1: 1 }
console.log(countBoxes('')); // {}

console.log('----------------------------------');
