import {
  greet,
  showQuestionAndGetAnswer,
  showResponse,
  congratulate,
} from './user-interactions.js';
import BrainEvenGameClass from './brain-even-game-class.js';

export default function playBrainEvenGame() {
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 100;
  const MAX_QUESTIONS = 3;

  const playerName = greet();

  const game = new BrainEvenGameClass(MIN_NUMBER, MAX_NUMBER, playerName);

  for (let i = 1; i <= MAX_QUESTIONS; i += 1) {
    game.answer = showQuestionAndGetAnswer(game.generateQuestion());

    showResponse(
      game.isCorrect(),
      game.isQuestionEven,
      game.latestAnswer,
      game.playerName,
    );

    if (!game.isCorrect()) break;

    if (i === MAX_QUESTIONS) congratulate(game.playerName);
  }
}
