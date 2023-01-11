import { generateRandomNumber, doGcd } from '../game-utils.js';

function generateQuestion(min, max) {
  return `${generateRandomNumber(min, max)} ${generateRandomNumber(min, max)}`;
}

function generateCorrectAnswer(question) {
  const [num1, num2] = question.split(' ');
  return `${doGcd(+num1, +num2)}`;
}

export default function gcdGame(min, max) {
  const question = generateQuestion(min, max);
  const correctAnswer = generateCorrectAnswer(question);

  return {
    task: 'Find the greatest common divisor of given numbers.',
    question,
    correctAnswer,
  };
}
