import BrainGameClass from '../../brain-game-class.js';
import { generateRandomNumber, doGcd } from '../../game-utils.js';

export default class BrainGcdGameClass extends BrainGameClass {
  taskName = 'Find the greatest common divisor of given numbers.';

  generateQuestion() {
    const expression = `${generateRandomNumber(
      this.min,
      this.max,
    )} ${generateRandomNumber(this.min, this.max)}`;
    this.latestQuestion = expression;
    const [num1, num2] = expression.split(' ');
    this.latestCorrectAnswer = `${doGcd(+num1, +num2)}`;
    return expression;
  }
}
