import { generateRandomProgression } from '../game-utils.js';

function generateQuestion(min, max) {
  return generateRandomProgression(min, max);
}

export default function progressionGame(min, max) {
  const { progression, hiddenNumber } = generateQuestion(min, max);

  return {
    task: 'What number is missing in the progression?',
    question: progression.join(' '),
    correctAnswer: `${hiddenNumber}`,
  };
}
