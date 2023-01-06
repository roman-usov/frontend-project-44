import generateRandomNumber from './generate-random-number.js';
import isEven from './is-even.js';

export default class BrainEvenGameClass {
  questions = [];

  answers = [];

  constructor(minNumber, maxNumber, playerName) {
    this.min = minNumber;
    this.max = maxNumber;
    this.name = playerName;
  }

  get playerName() {
    return this.name;
  }

  set question(question) {
    this.questions.push(question);
  }

  set answer(ans) {
    this.answers.push(ans.toLowerCase());
  }

  get latestQuestion() {
    return this.questions[this.questions.length - 1];
  }

  get latestAnswer() {
    return this.answers[this.answers.length - 1];
  }

  get isQuestionEven() {
    return isEven(this.latestQuestion);
  }

  generateQuestion() {
    const random = generateRandomNumber(this.min, this.max);
    this.question = random;
    return random;
  }

  isCorrect() {
    const isCorrect = !!(
      (isEven(this.latestQuestion) && this.latestAnswer === 'yes')
      || (!isEven(this.latestQuestion) && this.latestAnswer === 'no')
    );

    if (isCorrect) this.successfulAnswers += 1;

    return isCorrect;
  }
}
