import greeting from './greeting.js';
// import { getRandomIntegerInRange, isEven } from './utils.js';
import { ask } from './cli.js';

const correctAnswerToWin = 3;

export default (titleRulesOfTheGame, getQuestionParam, getCorrectAnswer) => () => {
  const userName = greeting();

  console.log(titleRulesOfTheGame);
  let countCorrectAnswer = 0;
  do {
    const question = getQuestionParam();

    console.log(`Question: ${question}`);
    const correctAnswer = getCorrectAnswer(question);
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
};
