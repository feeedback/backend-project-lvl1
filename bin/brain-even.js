#!/usr/bin/env node
import greeting from '../src/greeting.js';
import { getRandomIntegerInRange, isEven } from '../src/utils.js';
import { ask } from '../src/cli.js';

const userName = greeting();

const correctAnswerToWin = 3;
const getRandom0to100 = getRandomIntegerInRange(0, 100);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let countCorrectAnswer = 0;
do {
  const num = getRandom0to100();
  const correctAnswer = isEven(num) ? 'yes' : 'no';

  console.log(`Question: ${num}`);
  const answer = ask('You answer: ');

  if (answer === correctAnswer) {
    console.log('Correct!');
    countCorrectAnswer += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
  }
} while (countCorrectAnswer !== correctAnswerToWin);

console.log(`Congratulations, ${userName}!`);
