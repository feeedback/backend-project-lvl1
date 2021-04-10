import greeting from './greeting.js';
import { ask } from './cli.js';

const COUNT_CORRECT_ANSWER_TO_WIN = 3;

export default (titleRulesOfTheGame, getQuestionAndAnswer) => (userNameFromParams) => {
  const userName = userNameFromParams ?? greeting();

  console.log(titleRulesOfTheGame);
  let countCorrectAnswer = 0;
  do {
    const { question, answer } = getQuestionAndAnswer();

    console.log(`Question: ${question}`);
    const userAnswer = ask('You answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
      countCorrectAnswer += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  } while (countCorrectAnswer !== COUNT_CORRECT_ANSWER_TO_WIN);

  console.log(`Congratulations, ${userName}!`);
};
