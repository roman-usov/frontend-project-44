import { generateRandomProgressionWithHiddenElement } from '../game-utils.js';

export default function playProgressionGame(min, max) {
  const { progression, hiddenNumber } = generateRandomProgressionWithHiddenElement(min, max);

  return {
    task: 'What number is missing in the progression?',
    question: progression.join(' '),
    correctAnswer: `${hiddenNumber}`,
  };
}
