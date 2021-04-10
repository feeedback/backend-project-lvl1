import { ask } from './cli.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = ask('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};
