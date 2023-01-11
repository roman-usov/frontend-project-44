import { generateRandomNumber, isPrime } from '../game-utils.js';

export default function playPrimeGame(min, max) {
  const question = `${generateRandomNumber(min, max)}`;
  const correctAnswer = isPrime(+question) ? 'yes' : 'no';

  return {
    task: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    question,
    correctAnswer,
  };
}
