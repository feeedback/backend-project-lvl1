import { getRandomIntegerInRange } from '../utils.js';
import createGame from '../createGame.js';

const PROGRESSION_LENGTH_MIN = 5;
const PROGRESSION_LENGTH_MAX = 15;
const STEP_MIN = -9;
const STEP_MAX = 9;

const getQuestionAndAnswer = (minNum = 0, maxNum = 20) => {
  const seriesLength = getRandomIntegerInRange(PROGRESSION_LENGTH_MIN, PROGRESSION_LENGTH_MAX)();
  const step = getRandomIntegerInRange(STEP_MIN, STEP_MAX)();
  const startNum = getRandomIntegerInRange(minNum, maxNum)();
  const hideNumIndex = getRandomIntegerInRange(0, seriesLength - 1)();

  const series = new Array(seriesLength).fill(0).map((_, i) => startNum + i * step);

  const hiddenNum = series[hideNumIndex];
  series[hideNumIndex] = '..';

  return {
    question: `${series.join(' ')}`,
    answer: String(hiddenNum),
  };
};

export default createGame('What number is missing in the progression?', getQuestionAndAnswer);
