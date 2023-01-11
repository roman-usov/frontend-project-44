import {
  generateRandomNumber,
  generateRandomOperator,
  doMath,
} from '../game-utils.js';

export default function playCalcGame(min, max) {
  const question = `${generateRandomNumber(
    min,
    max,
  )} ${generateRandomOperator()} ${generateRandomNumber(min, max)}`;
  const correctAnswer = `${doMath(question)}`;

  return {
    task: 'What is the result of the expression?',
    question,
    correctAnswer,
  };
}
