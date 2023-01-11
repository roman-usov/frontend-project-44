import { generateRandomProgression } from '../game-utils.js';

export default function playProgressionGame(min, max) {
  const { progression, hiddenNumber } = generateRandomProgression(min, max);

  return {
    task: 'What number is missing in the progression?',
    question: progression.join(' '),
    correctAnswer: `${hiddenNumber}`,
  };
}
