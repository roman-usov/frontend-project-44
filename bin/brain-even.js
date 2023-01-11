#!/usr/bin/env node

import playBrainGame from '../src/index.js';
import evenBrainGame from '../src/games/brain-even-game.js';

console.log('Welcome to the Brain Games!');

playBrainGame(evenBrainGame);
