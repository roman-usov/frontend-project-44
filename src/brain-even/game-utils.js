export function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function isEven(num) {
  return !(num % 2);
}
