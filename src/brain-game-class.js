export default class BrainGameClass {
  task;

  latestQuestion;

  latestUserAnswer;

  latestCorrectAnswer;

  successfulAnswers = 0;

  constructor(minNumber, maxNumber, maxQuestions, playerName) {
    this.min = minNumber;
    this.max = maxNumber;
    this.name = playerName;
    this.maxQuestions = maxQuestions;
  }

  get task() {
    return this.task;
  }

  get playerName() {
    return this.name;
  }

  set latestUserAnswer(ans) {
    this.latestUserAnswer = ans.toLowerCase();
  }

  get latestUserAnswer() {
    return this.latestUserAnswer;
  }

  set latestCorrectAnswer(ans) {
    this.latestCorrectAnswer = ans;
  }

  get latestCorrectAnswer() {
    return this.latestCorrectAnswer;
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
