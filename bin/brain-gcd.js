#!/usr/bin/env node

import playBrainGame from '../src/index.js';
import BrainGcdGameClass from '../src/games/brain-gcd/brain-gcd-game-class.js';

console.log('Welcome to the Brain Games!');

playBrainGame(BrainGcdGameClass);
