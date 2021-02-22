// import greeting from '../src/greeting.js';
import { getRandomIntegerInRange, isEven } from '../src/utils.js';
// import { ask } from '../src/cli.js';
import createGame from '../src/createGame.js';

export default createGame(
  'Answer "yes" if the number is even, otherwise answer "no".',
  getRandomIntegerInRange(0, 100),
  (num) => (isEven(num) ? 'yes' : 'no')
);
