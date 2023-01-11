#!/usr/bin/env node

import playBrainGame from '../src/index.js';
import gcdBrainGame from '../src/games/brain-gcd-game.js';

console.log('Welcome to the Brain Games!');

playBrainGame(gcdBrainGame);
