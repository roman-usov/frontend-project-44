#!/usr/bin/env node

import playBrainGame from '../src/play-brain-game.js';
import BrainEvenGameClass from '../src/games/brain-even/brain-even-game-class.js';

console.log('Welcome to the Brain Games!');

playBrainGame(BrainEvenGameClass);
