import { generateRandomNumber, doGcd } from '../game-utils.js';

export default function playGcdGame(min, max) {
  const question = `${generateRandomNumber(min, max)} ${generateRandomNumber(
    min,
    max,
  )}`;
  const [num1, num2] = question.split(' ');
  const correctAnswer = `${doGcd(+num1, +num2)}`;

  return {
    task: 'Find the greatest common divisor of given numbers.',
    question,
    correctAnswer,
  };
}
