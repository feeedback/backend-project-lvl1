/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

export const ask = (question) => {
  const answer = readlineSync.question(question);
  return answer;
};
