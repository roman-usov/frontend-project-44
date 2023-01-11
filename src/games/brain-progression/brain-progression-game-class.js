import BrainGameClass from '../../brain-game-class.js';
import { generateRandomProgression } from '../../game-utils.js';

export default class BrainProgressionGameClass extends BrainGameClass {
  _task = 'What number is missing in the progression?';

  generateQuestion() {
    const { progression, hiddenNumber } = generateRandomProgression(
      this.min,
      this.max,
    );

    this.latestQuestion = progression.join(' ');
    this.latestCorrectAnswer = `${hiddenNumber}`;

    return this.latestQuestion;
  }
}
