import readlineSync from 'readline-sync';

export function greet() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

export function showQuestionAndGetAnswer(question, task) {
  console.log(`${task}`);
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
