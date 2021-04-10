import { getRandomIntegerInRange, isPrime } from '../utils.js';
import createGame from '../createGame.js';

const getQuestionAndAnswer = (minNum = 0, maxNum = 100) => {
  const num = getRandomIntegerInRange(minNum, maxNum)();

  return {
    question: num,
    answer: isPrime(num) ? 'yes' : 'no',
  };
};

export default createGame(
  'Answer "yes" if given number is prime. Otherwise answer "no".',
  getQuestionAndAnswer,
);
