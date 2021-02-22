// import greeting from '../src/greeting.js';
import { getRandomIntegerInRange } from '../src/utils.js';
// import { ask } from '../src/cli.js';
import createGame from '../src/createGame.js';

const mapMathOperationsToFn = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
};
const mathOperations = Object.keys(mapMathOperationsToFn);

const getQuestionParam = (minNum = 0, maxNum = 20) => {
  const getNum = getRandomIntegerInRange(minNum, maxNum);
  const operation = mathOperations[getRandomIntegerInRange(0, mathOperations.length - 1)()];

  return `${getNum()} ${operation} ${getNum()}`;
};
const getCorrectAnswer = (mathExpression) => {
  const [x, operation, y] = mathExpression.split(' ');

  return mapMathOperationsToFn[operation](x, y);
};

export default createGame(
  'Answer "yes" if the number is even, otherwise answer "no".',
  getQuestionParam,
  (num) => getCorrectAnswer(num)
);
