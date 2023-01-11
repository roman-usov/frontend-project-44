#!/usr/bin/env node

import playBrainGame from '../src/index.js';
import BrainPrimeGameClass from '../src/games/brain-prime/brain-prime-game-class.js';

console.log('Welcome to the Brain Games!');

playBrainGame(BrainPrimeGameClass);
