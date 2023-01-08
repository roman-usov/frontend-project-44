import BrainGameClass from '../../brain-game-class.js';
import { generateRandomNumber, isEven } from '../../game-utils.js';

export default class BrainEvenGameClass extends BrainGameClass {
  generateQuestion() {
    const random = generateRandomNumber(this.min, this.max);
    this.latestQuestion = random;
    this.latestCorrectAnswer = isEven(this.latestQuestion) ? 'yes' : 'no';
    return random;
  }
}
