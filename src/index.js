// import readlineSync from 'readline-sync';
import { ask } from './cli.js';
import greeting from './greeting.js';

import startGameCalc from './games/calc.js';
import startGameEven from './games/even.js';
import startGameGcd from './games/gcd.js';
import startGamePrime from './games/prime.js';
import startGameProgression from './games/progression.js';

const games = [startGameCalc, startGameEven, startGameGcd, startGamePrime, startGameProgression];
const gameDescription = [
  'Calc the expression',
  'Is number even',
  'Find the greatest common divisor',
  'Is number prime',
  'Missing in the progression',
];
const descChooseGame = Object.values(gameDescription)
  .map((desc, i) => `${i + 1}: ${desc}`)
  .join('\n');

const userName = greeting();
const key = ask(`Choose the game you want to play: \n${descChooseGame}\n`);

if (Number.isInteger(Number(key)) && games[key - 1]) {
  console.log('');
  games[key - 1](userName);
} else {
  console.log('See you later!');
}
