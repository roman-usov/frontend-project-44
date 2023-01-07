import {
  greet,
  showQuestionAndGetAnswer,
  showWinResponse,
  showLoseResponse,
  congratulate,
} from './user-interactions.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
const MAX_QUESTIONS = 3;

export default function playBrainGame(gameToPlay) {
  const playerName = greet();

  const game = new gameToPlay(
    MIN_NUMBER,
    MAX_NUMBER,
    MAX_QUESTIONS,
    playerName,
  );

  while (!game.isWon()) {
    game.latestAnswer = showQuestionAndGetAnswer(game.generateQuestion());

    if (!game.isCorrect()) {
      showLoseResponse(game.isQuestionEven, game.latestAnswer, game.playerName);

      return;
    }

    showWinResponse();
  }

  congratulate(game.playerName);
}
