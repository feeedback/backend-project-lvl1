import { getRandomIntegerInRange, isEven } from '../utils.js';
import createGame from '../createGame.js';

const getQuestionAndAnswer = (minNum = 0, maxNum = 100) => {
  const num = getRandomIntegerInRange(minNum, maxNum)();

  return {
    question: num,
    answer: isEven(num) ? 'yes' : 'no',
  };
};

export default createGame('Answer "yes" if the number is even, otherwise answer "no".', getQuestionAndAnswer);
