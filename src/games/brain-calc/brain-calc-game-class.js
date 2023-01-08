import BrainGameClass from '../../brain-game-class.js';
import {
  generateRandomNumber,
  generateRandomOperator,
  doMath,
} from '../../game-utils.js';

export default class BrainCalcGameClass extends BrainGameClass {
  generateQuestion() {
    const expression = `${generateRandomNumber(
      this.min,
      this.max,
    )} ${generateRandomOperator()} ${generateRandomNumber(this.min, this.max)}`;
    this.latestQuestion = expression;
    this.latestCorrectAnswer = doMath(this.latestQuestion) + '';
    return expression;
  }
}