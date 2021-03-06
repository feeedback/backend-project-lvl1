import { getRandomIntegerInRange, gcd } from '../utils.js';
import createGame from '../createGame.js';

const getQuestionAndAnswer = (minNum = 0, maxNum = 100) => {
  const getNum = getRandomIntegerInRange(minNum, maxNum);
  const x = getNum();
  const y = getNum();

  return {
    question: `${x} ${y}`,
    answer: String(gcd(x, y)),
  };
};

export default createGame('Find the greatest common divisor of given numbers.', getQuestionAndAnswer);
