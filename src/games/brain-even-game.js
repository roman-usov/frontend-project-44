import { generateRandomNumber, isEven } from '../game-utils.js';

function generateQuestion(min, max) {
  return `${generateRandomNumber(min, max)}`;
}

function generateCorrectAnswer(question) {
  return isEven(+question) ? 'yes' : 'no';
}

export default function evenGame(min, max) {
  const question = generateQuestion(min, max);
  const correctAnswer = generateCorrectAnswer(+question);

  return {
    task: 'Answer "yes" if the number is even, otherwise answer "no".',
    question,
    correctAnswer,
  };
}
