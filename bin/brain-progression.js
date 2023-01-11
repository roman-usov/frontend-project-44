#!/usr/bin/env node

import playBrainGame from '../src/index.js';
import progressionBrainGame from '../src/games/brain-progression-game.js';

console.log('Welcome to the Brain Games!');

playBrainGame(progressionBrainGame);
