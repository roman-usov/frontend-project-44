#!/usr/bin/env node

import {
  greet,
  showQuestionAndGetAnswer,
  showResponse,
  congratulate,
} from '../src/brain-even/user-interactions.js';
import BrainEvenGame from '../src/brain-even/brain-even-game.js';

console.log('Welcome to the Brain Games!');

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
const MAX_QUESTIONS = 3;

const playerName = greet();

const game = new BrainEvenGame(MIN_NUMBER, MAX_NUMBER, playerName);

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
