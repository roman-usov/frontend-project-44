import { generateRandomNumber, isEven } from '../game-utils.js';

export default function playEvenGame(min, max) {
  const question = `${generateRandomNumber(min, max)}`;
  const correctAnswer = isEven(+question) ? 'yes' : 'no';

  return {
    task: 'Answer "yes" if the number is even, otherwise answer "no".',
    question,
    correctAnswer,
  };
}
