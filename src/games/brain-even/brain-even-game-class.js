import { generateRandomNumber, isEven } from '../../game-utils.js';

export default class BrainEvenGameClass {
  #latestQuestion;

  #latestAnswer;

  #successfulAnswers = 0;

  constructor(minNumber, maxNumber, maxQuestions, playerName) {
    this.min = minNumber;
    this.max = maxNumber;
    this.name = playerName;
    this.maxQuestions = maxQuestions;
  }

  generateQuestion() {
    const random = generateRandomNumber(this.min, this.max);
    this.#latestQuestion = random;
    return random;
  }

  get playerName() {
    return this.name;
  }

  set latestAnswer(ans) {
    this.#latestAnswer = ans.toLowerCase();
  }

  get latestAnswer() {
    return this.#latestAnswer;
  }

  get isQuestionEven() {
    return isEven(this.#latestQuestion);
  }

  isCorrect() {
    const isCorrect =
      (this.isQuestionEven && this.#latestAnswer === 'yes') ||
      (!this.isQuestionEven && this.#latestAnswer === 'no');

    if (isCorrect) this.#successfulAnswers += 1;

    return isCorrect;
  }

  isWon() {
    return this.#successfulAnswers === this.maxQuestions;
  }
}
