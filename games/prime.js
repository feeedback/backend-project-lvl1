import { getRandomIntegerInRange, isPrime } from '../src/utils.js';
import createGame from '../src/createGame.js';

const getQuestionAndAnswer = (minNum = 0, maxNum = 100) => {
  const num = getRandomIntegerInRange(minNum, maxNum)();

  return {
    question: num,
    answer: isPrime(num) ? 'yes' : 'no',
  };
};

export default createGame(
  'Answer "yes" if given number is prime. Otherwise answer "no".',
  getQuestionAndAnswer
);
