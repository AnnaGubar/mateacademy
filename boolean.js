// задача: возможность покупки от возраста и налички

let cashInWallet = 30;
let age = 19;

const price = 40;
const ageLimit = 18;

const isAllowed = age >= ageLimit;
const hasEnoughMoney = cashInWallet >= price;

const canBuy = isAllowed && hasEnoughMoney;

console.log(canBuy);

console.log('----------------------------------');

let myCash = 20;
let myCard = 50;
const thePrice = 40;

const canPayByCard = myCard >= thePrice;
const canPayCash = myCash >= thePrice;

const shopping = canPayByCard || canPayCash;

console.log(shopping);

console.log('----------------------------------');
// приведение типов

function decodeSignal(input) {
  if (!!input === true) {
    return 1;
  }

  return 0;
}

console.log(decodeSignal({}));
console.log(decodeSignal(0n));
console.log(decodeSignal('Mate academy rules!'));
console.log(decodeSignal(NaN));
console.log(decodeSignal(true));

console.log(0 || (1 && 2) || 3); // && преоритетнее чем ||

console.log('----------------------------------');
// задача: 8-местный номер - вместимость взрослых и детей

// function canTheyBook(adultsCount, childrenCount) {
//   if (adultsCount === undefined || adultsCount === 0) {
//     return false;
//   }

//   if (childrenCount === undefined) {
//     childrenCount = 0;
//   }

//   if (adultsCount + childrenCount >= 8) {
//     return false;
//   } else if (
//     (adultsCount === 0 && childrenCount > 0) ||
//     childrenCount > adultsCount * 2
//   ) {
//     return false;
//   } else if (adultsCount >= 1) {
//     return true;
//   }
// }

function canTheyBook(adultsCount = 0, childrenCount = 0) {
  const hasEnoughSpace = adultsCount + childrenCount <= 0;
  const hasAdult = adultsCount > 0;
  const hasEnoughAdults = childrenCount <= 2 * adultsCount;

  if (!hasEnoughSpace && hasAdult && hasEnoughAdults) {
    return true;
  }
  return false;
}

console.log(canTheyBook(2, 3));
console.log(canTheyBook(0, undefined));
console.log(canTheyBook(1, 7));
console.log(canTheyBook(2, 0));
console.log(canTheyBook(0, 3));

console.log('----------------------------------');
// задача: 8-местный номер - вместимость взрослых, детей и малышей

// function canTheyBook(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
//   if (adultsCount === undefined || adultsCount === 0) {
//     return false;
//   }

//   const x = adultsCount + babiesCount + childrenCount;
//   const y = childrenCount + babiesCount;

//   if (adultsCount >= 9 || adultsCount + childrenCount >= 9 || x > 9) {
//     return false;
//   } else if ((adultsCount === 0 && childrenCount > 0) || y > adultsCount * 2) {
//     return false;
//   } else if (adultsCount >= 1) {
//     return true;
//   }
// }

function canTheyBook1(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
  const hasAdult = adultsCount > 0;
  const hasEnoughAdults = childrenCount + babiesCount <= 2 * adultsCount;
  const totalCount = adultsCount + childrenCount + babiesCount;
  const hasEnoughSpace =
    totalCount <= 8 || (totalCount === 9 && babiesCount > 0);

  return hasAdult && hasEnoughAdults && hasEnoughSpace;
}

console.log(canTheyBook1(2, 3, 1));
console.log(canTheyBook1(0, undefined, 1));
console.log(canTheyBook1(1, 7, 0));
console.log(canTheyBook1(2, 0, 1));
console.log(canTheyBook1(1, 2, 1));
console.log(canTheyBook1(0, 3));

console.log('----------------------------------');
//задача: взрослые, дети, малыши - какой номер?

// function recommendRoom(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
//   if (adultsCount + childrenCount + babiesCount <= 4) {
//     return 'small room';
//   }

//   if (adultsCount + childrenCount <= 4 && babiesCount === 1) {
//     return 'small room + extra bed';
//   }

//   if (adultsCount <= 4 && babiesCount === 2) {
//     return 'small room + extra bed';
//   }

//   if (adultsCount + childrenCount <= 8 && babiesCount === 0) {
//     return 'big room';
//   }

//   if (adultsCount < 8 && babiesCount === 2) {
//     return 'big room + extra bed';
//   }
// }

function recommendRoom(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
  const totalCount = adultsCount + babiesCount + childrenCount;

  if (totalCount <= 4) {
    return 'small room';
  }

  if (totalCount === 5 && babiesCount > 0) {
    return 'small room + extra bed';
  }

  if (totalCount <= 8) {
    return 'big room';
  }
  if (totalCount === 9 && babiesCount > 0) {
    return 'big room + extra bed';
  }
}

console.log(recommendRoom(8));
console.log(recommendRoom(7, 0, 2));
console.log(recommendRoom(2, 1, 1));
console.log(recommendRoom(2, 2, 1));
console.log(recommendRoom(3, 2));
console.log(recommendRoom(3, 0, 2));
