export default class BrainGameClass {
  _task;

  latestQuestion;

  _latestUserAnswer;

  _latestCorrectAnswer;

  successfulAnswers = 0;

  constructor(minNumber, maxNumber, maxQuestions, playerName) {
    this.min = minNumber;
    this.max = maxNumber;
    this._name = playerName;
    this.maxQuestions = maxQuestions;
  }

  get task() {
    return this._task;
  }

  get playerName() {
    return this._name;
  }

  set latestUserAnswer(ans) {
    this._latestUserAnswer = ans.toLowerCase();
  }

  get latestUserAnswer() {
    return this._latestUserAnswer;
  }

  set latestCorrectAnswer(ans) {
    this._latestCorrectAnswer = ans;
  }

  get latestCorrectAnswer() {
    return this._latestCorrectAnswer;
  }

  isCorrect() {
    const isCorrect = this.latestCorrectAnswer === this.latestUserAnswer;

    if (isCorrect) this.successfulAnswers += 1;

    return isCorrect;
  }

  isWon() {
    return this.successfulAnswers === this.maxQuestions;
  }
}
