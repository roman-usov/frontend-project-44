import readlineSync from 'readline-sync';

export function greet() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  return name;
}

export function showQuestionAndGetAnswer(question) {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
}

export function showWinResponse() {
  console.log('Correct!');
}

export function showLoseResponse(correctAnswer, userAnswer, name) {
  console.log(
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
  );
  console.log(`Let's try again, ${name}!`);
}

export function congratulate(name) {
  console.log(`Congratulations, ${name}!`);
}
