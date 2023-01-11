import { generateRandomNumber, isPrime } from '../game-utils.js';

function generateQuestion(min, max) {
  return `${generateRandomNumber(min, max)}`;
}

function generateCorrectAnswer(question) {
  return isPrime(+question) ? 'yes' : 'no';
}

export default function primeGame(min, max) {
  const question = generateQuestion(min, max);
  const correctAnswer = generateCorrectAnswer(+question);

  return {
    task: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    question,
    correctAnswer,
  };
}
