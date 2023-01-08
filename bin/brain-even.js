#!/usr/bin/env node

import playBrainGame from '../src/index.js';
import BrainEvenGameClass from '../src/games/brain-even/brain-even-game-class.js';

console.log('Welcome to the Brain Games!');

playBrainGame(BrainEvenGameClass);
