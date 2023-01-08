#!/usr/bin/env node
import playBrainGame from '../src/index.js';
import BrainCalcGameClass from '../src/games/brain-calc/brain-calc-game-class.js';

console.log('Welcome to the Brain Games!');

playBrainGame(BrainCalcGameClass);
