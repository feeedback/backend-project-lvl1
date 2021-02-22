import { getRandomIntegerInRange, gcd } from '../src/utils.js';
import createGame from '../src/createGame.js';

const getQuestionParam = (minNum = 0, maxNum = 100) => {
  const getNum = getRandomIntegerInRange(minNum, maxNum);
  return `${getNum()} ${getNum()}`;
};
const getCorrectAnswer = (mathExpression) => {
  const [x, y] = mathExpression.split(' ');

  return String(gcd(Number(x), Number(y)));
};

export default createGame(
  'Find the greatest common divisor of given numbers.',
  getQuestionParam,
  getCorrectAnswer
);
