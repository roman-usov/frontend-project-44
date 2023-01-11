import {
  generateRandomNumber,
  generateRandomOperator,
  doMath,
} from '../game-utils.js';

function generateQuestion(min, max) {
  return `${generateRandomNumber(
    min,
    max,
  )} ${generateRandomOperator()} ${generateRandomNumber(min, max)}`;
}

function generateCorrectAnswer(question) {
  return `${doMath(question)}`;
}

export default function calcGame(min, max) {
  const question = generateQuestion(min, max);
  const correctAnswer = generateCorrectAnswer(question);

  return {
    task: 'What is the result of the expression?',
    question,
    correctAnswer,
  };
}
