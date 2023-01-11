export default class BrainGameClass {
  taskName;

  question;

  userAnswer;

  correctAnswer;

  successfulAnswers = 0;

  constructor(minNumber, maxNumber, maxQuestions, playerName) {
    this.min = minNumber;
    this.max = maxNumber;
    this.name = playerName;
    this.maxQuestions = maxQuestions;
  }

  get task() {
    return this.taskName;
  }

  get playerName() {
    return this.name;
  }

  set latestUserAnswer(ans) {
    this.userAnswer = ans.toLowerCase();
  }

  get latestUserAnswer() {
    return this.userAnswer;
  }

  set latestCorrectAnswer(ans) {
    this.correctAnswer = ans;
  }

  get latestCorrectAnswer() {
    return this.correctAnswer;
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
