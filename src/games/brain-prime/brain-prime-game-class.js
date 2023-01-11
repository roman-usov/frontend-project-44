import BrainGameClass from '../../brain-game-class.js';
import { generateRandomNumber, isPrime } from '../../game-utils.js';

export default class BrainPrimeGameClass extends BrainGameClass {
  taskName = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  generateQuestion() {
    const number = generateRandomNumber(this.min, this.max);

    this.latestQuestion = `${number}`;
    this.latestCorrectAnswer = isPrime(number) ? 'yes' : 'no';

    return this.latestQuestion;
  }
}
