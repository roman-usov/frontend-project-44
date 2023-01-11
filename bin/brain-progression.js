#!/usr/bin/env node

import playBrainGame from '../src/index.js';
import BrainProgressionGameClass from '../src/games/brain-progression/brain-progression-game-class.js';

console.log('Welcome to the Brain Games!');

playBrainGame(BrainProgressionGameClass);
