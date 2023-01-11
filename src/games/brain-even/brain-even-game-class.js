import BrainGameClass from '../../brain-game-class.js';
import { generateRandomNumber, isEven } from '../../game-utils.js';

export default class BrainEvenGameClass extends BrainGameClass {
  taskName = 'Answer "yes" if the number is even, otherwise answer "no".';

  generateQuestion() {
    const random = generateRandomNumber(this.min, this.max);
    this.latestQuestion = random;
    this.latestCorrectAnswer = isEven(this.latestQuestion) ? 'yes' : 'no';
    return random;
  }
}
