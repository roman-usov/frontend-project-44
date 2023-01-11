import {
  greet,
  showQuestionAndGetAnswer,
  showWinResponse,
  showLoseResponse,
  congratulate,
} from './user-interactions.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const MAX_QUESTIONS = 3;

export default function playBrainGame(gameToPlay) {
  const playerName = greet();

  let round = 1;

  while (round <= MAX_QUESTIONS) {
    const { task, question, correctAnswer } = gameToPlay(
      MIN_NUMBER,
      MAX_NUMBER,
    );
    const userAnswer = showQuestionAndGetAnswer(question, task).toLowerCase();

    if (userAnswer !== correctAnswer) {
      showLoseResponse(correctAnswer, userAnswer, playerName);

      return;
    }

    showWinResponse();

    round += 1;
  }

  congratulate(playerName);
}
