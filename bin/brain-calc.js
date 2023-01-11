#!/usr/bin/env node

import playBrainGame from '../src/index.js';
import calcBrainGame from '../src/games/brain-calc-game.js';

console.log('Welcome to the Brain Games!');

playBrainGame(calcBrainGame);
