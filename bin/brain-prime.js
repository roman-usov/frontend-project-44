#!/usr/bin/env node

import playBrainGame from '../src/index.js';
import primeBrainGame from '../src/games/brain-prime-game.js';

console.log('Welcome to the Brain Games!');

playBrainGame(primeBrainGame);
