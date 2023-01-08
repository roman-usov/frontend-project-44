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
  }
}
