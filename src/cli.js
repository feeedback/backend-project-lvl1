/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

// export const greeting = () => {
//   const name = readlineSync.question('May I have your name? ');
//   console.log(`Hello, ${name}!`);
// };
export const ask = (question) => {
  const answer = readlineSync.question(question);
  return answer;
};
