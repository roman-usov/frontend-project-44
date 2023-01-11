export function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function isEven(num) {
  return !(num % 2);
}

export function generateRandomOperator() {
  const OPERATORS = ['+', '-', '*'];
  const MIN_INDEX = 0;
  const MAX_INDEX = 2;
  const index = generateRandomNumber(MIN_INDEX, MAX_INDEX);
  return OPERATORS[index];
}

export function doMath(expression) {
  const [firstArgument, operator, secondArgument] = expression.split(' ');

  switch (operator) {
    case '+':
      return +firstArgument + +secondArgument;
    case '-':
      return +firstArgument - +secondArgument;
    case '*':
      return +firstArgument * +secondArgument;
    default:
      return NaN;
  }
}

const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    const remainder = num % i;

    if (!remainder) return false;
  }

  return true;
};

function splitIntoSimpleMultipliers(number) {
  if (number === 1) return [1];

  const SIMPLE_DIVIDERS = [2, 3, 4, 5, 6, 7, 8, 9];
  const iterate = (num, acc = [1]) => {
    if (isPrime(num)) {
      acc.push(num);
      return acc;
    }

    for (let i = 0; i < SIMPLE_DIVIDERS.length; i += 1) {
      const currentDivider = SIMPLE_DIVIDERS[i];
      if (!(num % currentDivider)) {
        acc.push(currentDivider);
        return iterate(num / currentDivider, acc);
      }
    }

    return acc;
  };

  return iterate(number);
}

function findMatchingArrayElements(arr1, arr2) {
  const a1 = [...arr1];
  const a2 = [...arr2];
  const matchingArr = [];

  for (let i = 0; i < a1.length; i += 1) {
    const curEl = a1[i];

    if (a2.includes(curEl)) {
      matchingArr.push(curEl);
      const index = a2.indexOf(curEl);
      a2.splice(index, 1);
    }
  }

  return matchingArr;
}

function multiplyValues(...values) {
  return values.reduce((acc, val) => acc * val, 1);
}

export function doGcd(num1, num2) {
  const simpleMultipliers1 = splitIntoSimpleMultipliers(num1);
  const simpleMultipliers2 = splitIntoSimpleMultipliers(num2);
  const matchingMultipliers = findMatchingArrayElements(
    simpleMultipliers1,
    simpleMultipliers2,
  );

  return multiplyValues(...matchingMultipliers);
}

export function generateRandomProgression(
  min,
  max,
  minLength = 5,
  maxLength = 10,
  minStep = 2,
  maxStep = 10,
) {
  const progression = [];
  const length = generateRandomNumber(minLength, maxLength);
  const startingNumber = generateRandomNumber(min, max);
  const step = generateRandomNumber(minStep, maxStep);

  progression.push(startingNumber);

  for (let i = 1; i < length; i += 1) {
    progression.push(progression[i - 1] + step);
  }

  const indexToHide = generateRandomNumber(0, progression.length - 1);

  const [hiddenNumber] = progression.splice(indexToHide, 1, '..');

  return {
    progression,
    hiddenNumber,
  };
}
